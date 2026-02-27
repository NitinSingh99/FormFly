import { getExtractor } from "./flan.js";

export async function extractFields(text: string, fields: string[]) {
  const extractor = await getExtractor();

  const prompt = `
    You are an AI that extracts structured data.

Extract these fields:
${fields.join(", ")}

From this text:
${text}

Return ONLY valid JSON.
If a value is missing, use null.
`;
  console.log("propmpttt", prompt);
  const result = await extractor(prompt, {
    max_new_tokens: 256,
    temperature: 0,
  });

  return result[0].generated_text;
}
