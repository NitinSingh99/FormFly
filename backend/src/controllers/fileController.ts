import { type Request, type Response } from "express";
import {
  extractTextFromPdf,
  detectPdfType,
  extractTextFromOCR,
} from "../services/pdfService.js";
import { extractStructuredData, extractStructuredDataFromFile } from "../services/geminiService.js";

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
    text = await extractTextFromOCR(fileBuffer);
    console.log("TEXTTTT", text);
  }
  const fields = ["full_name", "father_name", "dob"];
  const data = await extractStructuredData(text, fields);
  return res
    .status(200)
    .json({ success: true, message: "File uploaded successfully.", data: data});
};

export const uploadFileDirectToGemini = async (
  req: Request,
  res: Response
) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file found." });
  }

  const fileBuffer = req.file.buffer;
  const mimeType = req.file.mimetype;

  const fields = ["full_name", "father_name", "dob"];

  try {
    const data = await extractStructuredDataFromFile(
      fileBuffer,
      mimeType,
      fields
    );

    return res.status(200).json({
      success: true,
      message: "File processed via direct Gemini.",
      data,
    });
  } catch (error) {
    console.error("Direct Gemini error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to process file.",
    });
  }
};
