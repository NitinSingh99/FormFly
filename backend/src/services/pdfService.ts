import fs from "fs/promises";
import path from "path";
import { PDFParse } from "pdf-parse";
import pdfPoppler from "pdf-poppler";
import type { PdfType } from "../types/PdfType.js";
import { createWorker } from "tesseract.js";

const looksLikeRealText = (text: string): boolean => {
  const cleaned = text.replace(/--\s*\d+\s*of\s*\d+\s*--/gi, "").trim();

  if (!cleaned) return false;

  const words = cleaned.split(/\s+/);
  if (words.length < 3) return false;

  const letters = cleaned.match(/[a-zA-Z]/g)?.length || 0;
  const ratio = letters / cleaned.length;

  return ratio > 0.4;
};

export const detectPdfType = async (fileBuffer: Buffer): Promise<PdfType> => {
  const parser = new PDFParse(new Uint8Array(fileBuffer));
  const result = await parser.getText();

  const text = result.text || "";
  if (looksLikeRealText(text)) {
    return "TEXT_BASED";
  }

  return "IMAGE_BASED";
};

export const extractTextFromPdf = async (fileBuffer: Buffer) => {
  const parser = new PDFParse(new Uint8Array(fileBuffer));
  const result = await parser.getText();
  if (result.text.length > 10) {
    return result.text;
  } else {
    return "Image";
  }
};

export const convertPdfToImg = async (fileBuffer: Buffer): Promise<string> => {
  const tempDir = path.join(process.cwd(), "temp");
  const prefix = `page-${Date.now()}`;
  const pdfPath = path.join(tempDir, `input-${Date.now()}.pdf`);

  await fs.writeFile(pdfPath, fileBuffer);

  const options = {
    format: "png",
    out_dir: tempDir,
    out_prefix: prefix,
    page: null,
  };

  await pdfPoppler.convert(pdfPath, options);

  const files = await fs.readdir(tempDir);

  const image = files.find((f) => f.startsWith(prefix));

  if (!image) {
    throw new Error("PDF to image conversion failed");
  }

  return path.join(tempDir, image);
};

export const extractTextFromImage = async (
  imagePath: string,
): Promise<string> => {
  const worker = await createWorker("eng", undefined);

  const { data } = await worker.recognize(imagePath);
  await worker.terminate();

  return data.text?.trim() ?? "";
};
