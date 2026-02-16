// src/ai/flan.ts
import { pipeline } from "@xenova/transformers";

let extractor: any = null;

export async function getExtractor() {
  if (!extractor) {
    extractor = await pipeline(
      "text2text-generation",
      "Xenova/flan-t5-small" // Use Xenova's converted version
    );
  }
  return extractor;
}