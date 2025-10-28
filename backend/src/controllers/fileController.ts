import { type Request, type Response } from "express"
import { extractTextFromPdf } from "../services/pdfService.js";

export const uploadFile = async (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "No file found." });
    }

    const fileBuffer = req.file.buffer;
    const text = await extractTextFromPdf(fileBuffer);
    
    return res.status(200).json({ status: true, message: "File uploaded successfully." });
};