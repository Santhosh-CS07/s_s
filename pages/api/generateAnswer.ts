import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

if (!apiKey) {
    throw new Error('API key is missing');
}

const genAI = new GoogleGenerativeAI(apiKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        res.status(200).json({ text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error generating content" });
    }
}
