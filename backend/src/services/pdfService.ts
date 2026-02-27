import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { PDFParse } from "pdf-parse";
import pdfPoppler from "pdf-poppler";
import type { PdfType } from "../types/PdfType.js";
import { createWorker, PSM } from "tesseract.js";

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

/**
 * Extracts selectable text from a text-based PDF.
 *
 * This function parses the provided PDF buffer and returns the
 * embedded textual content without performing OCR.
 *
 * Intended for PDFs that are digitally generated and contain
 * machine-readable text.
 *
 * @param fileBuffer - The raw PDF file as a Buffer.
 * @returns A Promise resolving to extracted plain text.
 *
 * @throws Error if parsing fails or no text is found.
 */
export const extractTextFromPdf = async (
  fileBuffer: Buffer,
): Promise<string> => {
  try {
    const parser = new PDFParse(new Uint8Array(fileBuffer));
    const result = await parser.getText();

    if (!result?.text || result.text.trim().length === 0) {
      throw new Error("No selectable text found in PDF");
    }

    return result.text.trim();
  } catch (error) {
    throw new Error(
      `Failed to extract text from text-based PDF: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    );
  }
};

/**
 * Converts a single-page PDF buffer into a PNG image buffer.
 *
 * The function temporarily writes the PDF to disk, converts the first page
 * to a PNG image using Poppler, reads the generated image into memory,
 * and removes temporary files.
 *
 * @param fileBuffer - The raw PDF file as a Buffer.
 * @returns A Promise resolving to the generated PNG image as a Buffer.
 *
 * @throws Error if the PDF-to-image conversion fails.
 */
export const convertPdfToImageBuffer = async (
  fileBuffer: Buffer,
): Promise<Buffer> => {
  const tempDir = path.join(process.cwd(), "temp");
  await fs.mkdir(tempDir, { recursive: true });

  const timestamp = Date.now();
  const pdfPath = path.join(tempDir, `input-${timestamp}.pdf`);
  const prefix = `page-${timestamp}`;

  await fs.writeFile(pdfPath, fileBuffer);

  await pdfPoppler.convert(pdfPath, {
    format: "png",
    out_dir: tempDir,
    out_prefix: prefix,
    page: 1,
  });

  const imagePath = path.join(tempDir, `${prefix}-1.png`);

  try {
    await fs.access(imagePath);
  } catch {
    throw new Error("PDF to image conversion failed");
  }

  const imageBuffer = await fs.readFile(imagePath);

  await fs.unlink(pdfPath);
  await fs.unlink(imagePath);

  return imageBuffer;
};

/**
 * OCR from image buffer (with preprocessing with sharp)
 */
export const extractTextFromImageBuffer = async (
  imageBuffer: Buffer,
): Promise<string> => {
  const processedBuffer = await sharp(imageBuffer)
    .grayscale()
    .normalize()
    .sharpen()
    .resize({ width: 1500 })
    .toBuffer();

  const worker = await createWorker("eng");

  await worker.setParameters({
    tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:/- ",
    preserve_interword_spaces: "1",
    tessedit_pageseg_mode: PSM.SINGLE_BLOCK,
  });

  const { data } = await worker.recognize(processedBuffer);

  await worker.terminate();

  return data.text?.trim() ?? "";
};

export const extractTextFromOCR = async (
  fileBuffer: Buffer,
): Promise<string> => {
  const imageBuffer = await convertPdfToImageBuffer(fileBuffer);
  return await extractTextFromImageBuffer(imageBuffer);
};
