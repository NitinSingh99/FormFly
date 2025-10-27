import { type Request, type Response } from "express"

export const uploadFile = (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "No file found." });
    }

    return res.status(200).json({ status: true, message: "File uploaded successfully." });
};