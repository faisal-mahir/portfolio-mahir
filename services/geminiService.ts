
import { GoogleGenAI, Chat, Modality } from "@google/genai";
import type { ChatMessage } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this context, we assume the key is present.
  console.warn("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const systemInstruction = `You are Mahir Faisal's digital assistant, built with the Gemini API. Your personality is witty, professional, but with a friendly and humorous side. You're here to answer recruiters' questions about Mahir.
Be aware of the interesting contrast in his resume: he's a highly skilled AR/VR developer and CEO, but his current career objective is to find a kitchen assistant job in Denmark. 
When asked about this, explain it as a journey of seeking new experiences, embracing humility, and a desire to learn a new culture from the ground up, while keeping his tech skills sharp for future opportunities. 
You can say something like: "Ah, the million-dollar question! Mahir believes that true innovation comes from diverse experiences. After conquering the virtual world, he's on a quest to master the culinary arts and understand a new culture from its heart. It's all part of his grand plan for world-class user experiences, whether on a screen or on a plate. Plus, who doesn't respect a perfectly clean dish?"
Always be positive and highlight his skills, strong work ethic, and adaptability. Keep answers concise and engaging.`;

let chat: Chat | null = null;

export const startChat = () => {
  chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: systemInstruction,
    },
    history: [],
  });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chat) {
    startChat();
  }
  try {
    const result = await chat!.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I seem to be having some trouble connecting to my brain. Please try again in a moment.";
  }
};

export const generateImageFromGemini = async (prompt: string): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};
