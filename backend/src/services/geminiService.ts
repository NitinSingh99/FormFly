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

export const extractStructuredData = async (text: string, fields: string[]) => {
  if (!text || text.trim().length === 0) {
    return {};
  }

  const prompt = `
You are a high-precision information extraction engine.

Your task is to extract structured data from the provided document text.

---------------------------------------
REQUIRED OUTPUT STRUCTURE
---------------------------------------
You MUST return a SINGLE valid JSON object.

Use ONLY the following keys:
${fields.map((f) => `- ${f}`).join("\n")}

Return ALL specified keys, even if value is null.
Do NOT add additional keys.

---------------------------------------
CRITICAL MAPPING RULES (VERY IMPORTANT)
---------------------------------------
1. Map each key ONLY to the value that clearly and explicitly belongs to that field.
2. Do NOT guess or assume relationships.
3. Do NOT map a value to a key just because it looks similar.
4. Do NOT infer missing labels.
5. If multiple similar values exist, choose ONLY the one explicitly tied to that key.
6. If there is ambiguity, set the value to null.
7. NEVER swap values between keys.
8. If the document contains multiple people, extract data ONLY for the primary subject unless clearly specified.

---------------------------------------
OUTPUT RULES (MANDATORY)
---------------------------------------
1. Return ONLY raw JSON.
2. Do NOT include explanations, comments, markdown, or code fences.
3. Do NOT include trailing commas.
4. Do NOT invent or guess values.
5. Preserve original wording exactly as it appears.

---------------------------------------
DATA TYPES
---------------------------------------
- Strings must be plain text.
- Numbers must be numeric.
- Dates must be in ISO format: YYYY-MM-DD when possible, else null.
- Phone numbers: digits only.
- Emails: lowercase.

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

  const cleanedOutput = rawOutput
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  try {
    console.log("cleanedDataxxxxx", cleanedOutput);
    return JSON.parse(cleanedOutput);
  } catch (err) {
    console.error("Invalid JSON from AI:", cleanedOutput);
    return {};
  }
};

export const extractStructuredDataFromFile = async (
  fileBuffer: Buffer,
  mimeType: string,
  fields: string[]
) => {
  const prompt = `
You are a high-precision information extraction engine.

Extract structured data from the provided document file.

---------------------------------------
REQUIRED OUTPUT STRUCTURE
---------------------------------------
Return a SINGLE valid JSON object.

Use ONLY the following keys:
${fields.map((f) => `- ${f}`).join("\n")}

Return ALL specified keys, even if value is null.
Do NOT add additional keys.

---------------------------------------
CRITICAL RULES
---------------------------------------
1. Do NOT guess.
2. Do NOT swap values.
3. If unclear → null.
4. Extract only primary subject.
5. Return raw JSON only.
`;

  const aiInstance = getAI();

  const response = await aiInstance.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: [
      {
        role: "user",
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType,
              data: fileBuffer.toString("base64"),
            },
          },
        ],
      },
    ],
  });

  const rawOutput =
    response.candidates?.[0]?.content?.parts?.[0]?.text || "{}";

  const cleanedOutput = rawOutput
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  try {
    console.log("Direct Gemini Output:", cleanedOutput);
    return JSON.parse(cleanedOutput);
  } catch (err) {
    console.error("Invalid JSON from AI:", cleanedOutput);
    return {};
  }
};