import express from "express";
import multer from "multer";
import { extractTextFromPdf } from "../controllers/pdfController.js";

const router = express.Router();
const upload = multer({ dest: "src/uploads/" });

router.post("/upload", upload.single("file"), extractTextFromPdf);

export default router;
