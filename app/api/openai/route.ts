import { openai } from '@ai-sdk/openai';
import { streamText, convertToCoreMessages, StreamData, Message } from 'ai';

const SYSTEM_PROMPT = {
  role: "system",
  content: `당신은 재활용 전문가입니다. 다음 규칙을 따르세요:
1. 재활용품에 대해 다음 항목들을 분석하세요:
   - 올바른 분리배출 방법
   - 재활용 가능 여부
   - 세척 필요성
   - 분리해야 할 부분(라벨, 뚜껑 등)
2. 발견된 사항에 대해 다음 형식으로 답변하세요:
   ♻️ 재활용 방법:
   🧹 세척 방법:
   ⚠️ 주의사항:`
} as const;

export const runtime = 'edge';
export const maxDuration = 30;

export async function POST(req: Request) {
  const data = new StreamData();
  
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OpenAI API key is not configured');
    }

    const { messages } = await req.json() as { messages:Message[] };

    const enhancedMessages = [
      SYSTEM_PROMPT,
      ...convertToCoreMessages(messages)
    ];
    
    const result = await streamText({
      model: openai('gpt-3.5-turbo'),
      messages: enhancedMessages,
      temperature: 0.1,
      onFinish() {
        data.close();
      },
    });
    
    return result.toDataStreamResponse({ 
      data,
      headers: {
        'Cache-Control': 'no-store'
      }
    });

  } catch (error) {
    console.error('Error in OpenAI route:', error);
    data.close();
    
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'An error occurred',
        helpMessage: "처리 중 오류가 발생했습니다. 다시 시도해 주세요." 
      }), 
      { 
        status: 500, 
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        }
      }
    );
  }
}