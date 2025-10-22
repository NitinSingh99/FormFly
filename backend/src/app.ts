import express from "express";
import cors from "cors"; 
import dotenv from "dotenv";
import fileRoutes from "./routes/fileRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use("/api/upload", fileRoutes);

app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));