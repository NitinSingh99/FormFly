// src/services/geminiService.ts
import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

const getAI = () => {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set in environment variables");
    }

    ai = new GoogleGenAI({
      apiKey: apiKey,
    });
  }
  return ai;
};

export const extractStructuredData = async (text: string) => {
  const prompt = `
You are a document data extraction engine. Extract structured JSON data from the following text. Return only valid JSON. Do not add explanation.

Text: ${text}
`;
  console.log("prompt: ", prompt);

  const aiInstance = getAI();

  const response = await aiInstance.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: prompt,
  });

  //   console.log("Gemini res:", response);
  const textContent = response.candidates?.[0]?.content?.parts?.[0]?.text;

  console.log("Extracted text:", textContent);

  return textContent;

  return response;
};
