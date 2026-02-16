import { type Request, type Response } from "express";
import {
  extractTextFromPdf,
  detectPdfType,
  convertPdfToImg,
  extractTextFromImage,
} from "../services/pdfService.js";
import { extractFields } from "../ai/extractFields.js";

export const uploadFile = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file found." });
  }

  const fileBuffer = req.file.buffer;
  const pdfType = await detectPdfType(fileBuffer);
  console.log(pdfType);
  let text = "";
  if (pdfType == "TEXT_BASED") {
    text = await extractTextFromPdf(fileBuffer);
    console.log(text);
  } else if (pdfType == "IMAGE_BASED") {
    const imgPath = await convertPdfToImg(fileBuffer);
    console.log(imgPath);
    text = await extractTextFromImage(imgPath);
    console.log(text);
  }
  const fieldsArr = ["Name", "Pan No"];

  const fields = await extractFields(text, fieldsArr);
  console.log("XXXXXXXXXXXXXXXXXX");
  console.log(fields);
  console.log("XXXXXXXXXXXXXXXXXX");
  return res
    .status(200)
    .json({ success: true, message: "File uploaded successfully." });
};
