import Router, { type Request, type Response } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "../uploads");
        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Save file with original name + timestamp
        const ext = path.extname(file.originalname);
        const baseName = path.basename(file.originalname, ext);
        cb(null, `${baseName}-${Date.now()}${ext}`);
    },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), (req: Request, res: Response) => {
    // console.log('rxx'); return;
    if (!req.file) {
        return res.status(400).json({ success: false, message: "No file found" });
    }

    return res.status(200).json({
        success: true,
        message: "File uploaded successfully!"
    });
});

export default router;

