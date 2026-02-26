import { type Request, type Response } from "express";
import {
  extractTextFromPdf,
  detectPdfType,
  convertPdfToImg,
  extractTextFromImage,
} from "../services/pdfService.js";
import { extractStructuredData } from "../services/geminiService.js";

export const uploadFile = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file found." });
  }

  const fileBuffer = req.file.buffer;
  const pdfType = await detectPdfType(fileBuffer);
  let text = "";
  if (pdfType == "TEXT_BASED") {
    text = await extractTextFromPdf(fileBuffer);
  } else if (pdfType == "IMAGE_BASED") {
    const imgPath = await convertPdfToImg(fileBuffer);
    console.log(imgPath);
    text = await extractTextFromImage(imgPath);
  }
  const resss = await extractStructuredData(text);
  return res
    .status(200)
    .json({ success: true, message: "File uploaded successfully." });
};
