import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

console.log("Gemini Loaded:", !!process.env.GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

export const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function askGemini(prompt) {
  const result = await model.generateContent(prompt);

  let text = result.response.text();

  text = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return text;
}