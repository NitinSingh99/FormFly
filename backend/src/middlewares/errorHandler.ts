import type { Request, Response, NextFunction } from "express";


export default function errorHandler(err: Error,
    _: Request,
    res: Response,
    __: NextFunction) {
    console.error("💥 Error:", err);
    res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
}