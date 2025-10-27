import {Router} from "express";
import fileRoutes from "./fileRoutes.js";

const router = Router();

router.use("/upload", fileRoutes);

export default router;