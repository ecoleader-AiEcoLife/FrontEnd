import { NextResponse } from 'next/server';
import axios from 'axios';

const url = "https://openapi.naver.com/v1/search/news.json"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const display = searchParams.get('display');
  const start = searchParams.get('start');
  const sort = searchParams.get('sort');

  try {
    const response = await axios.get(url, {
      params: { query, display, start, sort },
      headers: {
        'X-Naver-Client-Id': process.env.NAVER_NEWS_CLIENT_ID,
        'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}