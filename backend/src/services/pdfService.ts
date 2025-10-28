import { PDFParse } from "pdf-parse";

export const extractTextFromPdf = async (fileBuffer: Buffer) => {
    const parser = new PDFParse(new Uint8Array(fileBuffer));
    const result = await parser.getText();
    return result.text;
}