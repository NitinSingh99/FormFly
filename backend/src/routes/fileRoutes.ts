import Router from "express";
import { upload } from "../config/multer.js";
import { uploadFile, uploadFileDirectToGemini } from "../controllers/fileController.js";

const router = Router();

router.post("/", upload.single("file"), uploadFile);
router.post(
  "/direct",
  upload.single("file"),
  uploadFileDirectToGemini
);
export default router;

