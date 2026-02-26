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
  if (!text || text.trim().length === 0) {
    return {};
  }

  const prompt = `
You are a high-precision information extraction engine.

Your task is to extract structured data from the provided document text and return it as a SINGLE valid JSON object.

---------------------------------------
OUTPUT RULES (MANDATORY)
---------------------------------------
1. Return ONLY raw JSON.
2. Do NOT include explanations, comments, markdown, or code fences.
3. Do NOT include trailing commas.
4. Do NOT invent or guess values.
5. If a value is not explicitly present, set it to null.
6. Preserve original wording exactly as it appears.
7. If multiple values exist for the same field, return an array.
8. If nothing meaningful can be extracted, return {}.

---------------------------------------
DATA TYPES
---------------------------------------
- Strings must be plain text.
- Numbers must be numeric (no symbols).
- Dates must be in ISO format: YYYY-MM-DD when possible, else null.
- Phone numbers: digits only.
- Emails: lowercase.

---------------------------------------
STRUCTURE
---------------------------------------
Return a flat JSON object.

---------------------------------------
DOCUMENT TEXT
---------------------------------------
${text}
`;

  const aiInstance = getAI();

  const response = await aiInstance.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: prompt,
  });

  const rawOutput = response.candidates?.[0]?.content?.parts?.[0]?.text || "{}";

  try {
    console.log(rawOutput);
    return JSON.parse(rawOutput);
  } catch (err) {
    console.error("Invalid JSON from AI:", rawOutput);
    return {};
  }
};
