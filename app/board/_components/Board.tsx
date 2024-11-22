'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

interface BoardProps {
  id: string;
  writer: string;
  title: string;
  body: string;
  date: string;
}

export default function Board() {
  const [board, setBoard] = useState<BoardProps | null>(null);
  const router = useRouter();
  const { id } = useParams();

  const getBoard = async () => {
    try {
      const res = await axios.get(`/api/board?id=${id}`);
      setBoard(res.data[0]);
    } catch (error) {
      console.log('Info Page get 에러', error);
    }
  };

  useEffect(() => {
    getBoard();
  }, [id]);

  if (!board) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500'></div>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <button
        onClick={() => router.back()}
        className='mb-6 flex items-center justify-end w-full font-bold text-green-600 hover:text-green-800 transition-colors duration-200 '
      >
        뒤로 가기
      </button>
      <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
        <div className='bg-green-400 p-4'>
          <h1 className='text-2xl font-bold text-white'>{board.title}</h1>
        </div>
        <div className='p-6'>
          <div className='text-gray-600 mb-4 text-[14px] flex justify-between'>
            <h1>작성자: {board.writer}</h1>
            <h1>게시일: {board.date}</h1>
          </div>
          <div className='text-gray-800 whitespace-pre-wrap'>{board.body}</div>
        </div>
      </div>
    </div>
  );
}
