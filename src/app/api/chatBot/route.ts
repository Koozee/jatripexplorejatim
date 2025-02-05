import { groq } from '@ai-sdk/groq';
import { generateText, streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: groq('llama-3.3-70b-versatile'),
    messages: [
      { role: "system", content: "Kamu adalah asisten AI untuk web wisata di Jawa Timur. Berikan rekomendasi tempat wisata, kuliner, dan budaya di wilayah tersebut. Jika ada yang bertanya selain diluar konteks Jawa Timur jangan dijawab kamu tidak tahu itu." },
      ...messages
    ],
  });
  

  return result.toDataStreamResponse();
}
