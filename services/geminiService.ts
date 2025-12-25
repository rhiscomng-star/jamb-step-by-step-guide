
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getJambAdvice = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User asks: ${userQuery}. Provide a helpful, encouraging, and accurate answer regarding JAMB 2026 registration procedures in Nigeria. Keep the tone professional and supportive.`,
      config: {
        systemInstruction: "You are an expert JAMB (Joint Admissions and Matriculation Board) consultant for Nigerian students. You provide detailed steps, deadline warnings, and clarify requirements for NIN, profile codes, and CBT centers."
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the guide database. Please check your internet connection.";
  }
};

export const getAccreditedCenters = async (state: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a list of 5-10 accredited JAMB CBT centers in ${state} for 2026 in JSON format.`,
      config: {
        responseMimeType: "application/json",
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    return [];
  }
};
