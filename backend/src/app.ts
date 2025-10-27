import express from "express";
import cors from "cors"; 
import dotenv from "dotenv";
import fileRoutes from "./routes/fileRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use("/api/upload", fileRoutes);

export default app;
