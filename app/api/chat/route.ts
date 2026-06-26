import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

export async function POST(req: NextRequest) {
  try {
    const { messages, userIdea } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured in the environment." },
        { status: 500 }
      );
    }

    // Standard system prompt for the Zorae AI Domain Branding Advisor
    const systemInstruction = `
You are the "Zorae AI Branding & Acquisition Advisor" — a premium, sophisticated, and helpful AI expert designed to represent the premium domain name "zorae.ai".
Your goal is to convince the visitor that "zorae.ai" is the perfect name for their next startup, project, or brand, and to help them brainstorm ideas and evaluate the domain's value.

Here is the key context about the domain "zorae.ai":
1. Name Breakdown:
   - "Zora" means "dawn", "sunrise", or "aurora" in various languages (Slavic, Hebrew, etc.).
   - The trailing "e" makes it fluid, modern, and friendly, evoking terms like "e-intelligence", "electronic", or a personalized assistant name (like Siri or Alexa, but next-gen).
   - "Zorae" is a 6-letter, pronounceable, high-memorability name with dual-syllable harmony (Zo-rae). It has a premium, global appeal.
2. Extension Breakdown:
   - ".ai" is the absolute gold standard top-level domain (TLD) for artificial intelligence, machine learning, robotics, and advanced tech startups. It immediately signals cutting-edge innovation.
3. Market Valuation & Trust:
   - 6-letter brandable .ai domains are highly sought after and routinely trade for thousands to tens of thousands of dollars.
   - Zorae.ai has an estimated valuation of $8,500 - $15,000 based on length, pronounceability, and the surging AI market.
   - Transactions are handled securely through premier escrow platforms like Escrow.com, Dan.com, or Sedo to ensure 100% safety for the buyer.
4. Business Use Cases:
   - AI SaaS & Copilots: "Zorae AI" - a digital productivity sidekick.
   - Creative Studios: "Zorae Tech" - generative video, audio, or spatial computing platforms.
   - Enterprise Solutions: "Zorae Cloud" - secure, automated enterprise workflows.
   - Biotechnology & Healthcare: "Zorae Health" - dawn of intelligent medicine.

Behavioral Guidelines:
- Tone: Sophisticated, innovative, professional, highly creative, yet friendly and accommodating. You are like a elite brand consultant.
- When the visitor provides a business industry, idea, or startup concept, immediately brainstorm 2-3 brilliant and highly specific concepts of how they could use "zorae.ai" (e.g., "Zorae Robotics", "Zorae Insights"). Generate catchy taglines and describe the brand identity.
- Be supportive and encouraging.
- If asked about purchase details or making an offer, explain that they can submit an offer directly using the form on the page, or you can guide them on the valuation (reasonable premium offers are welcomed, secure transfer within 24 hours).
- Keep responses relatively concise, structured, and visually stunning (use bullet points and bold formatting, but don't output file paths or raw technical details).
`;

    // Reconstruct conversation history for Gemini chat
    // Note: `@google/genai` chats expect contents in a specific structure.
    // Or we can just build a single prompt containing the history and query.
    // Let's build a unified prompt to keep it robust and simple.
    let formattedPrompt = "Conversation history:\n";
    if (messages && messages.length > 0) {
      messages.forEach((msg: any) => {
        const roleName = msg.role === 'user' ? 'Visitor' : 'Advisor';
        formattedPrompt += `${roleName}: ${msg.content}\n`;
      });
    }

    if (userIdea) {
      formattedPrompt += `\nSystem Note: The visitor is interested in the following industry/idea: "${userIdea}". Please frame your response around this idea and pitch Zorae.ai specifically for it.\n`;
    }

    formattedPrompt += `\nPlease generate the next response from the Zorae AI Brand Advisor. Keep it engaging, professional, and tailored to the visitor's context.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.75,
      },
    });

    const text = response.text || "I am here to help you discover the potential of Zorae.ai.";

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Error in Gemini API Chat Route:", error);
    return NextResponse.json(
      { error: "An error occurred while communicating with the AI. " + error.message },
      { status: 500 }
    );
  }
}
