// import fs from "fs";
// import * as pdf from "pdf-parse";
// import type { Request } from "express";
// import type { Response } from "express";

// export const extractTextFromPdf = async (req: Request, res: Response): Promise<void> => {
//     try {
//         if (!req.file) {
//             res.status(400).json({ error: "No file uploaded" });
//             return;
//         }

//         const dataBuffer = fs.readFileSync(req.file.path);
//         const pdfData = await pdf(dataBuffer);

//         res.json({ text: pdfData.text });
//         fs.unlinkSync(req.file.path);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed to extract text" });
//     }
// };
