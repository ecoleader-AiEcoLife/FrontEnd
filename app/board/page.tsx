'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface boardProps {
  id: string;
  writer: string;
  title: string;
  body: string;
  date: string;
}

export default function BoardPage() {
  const [board, setBoard] = useState<boardProps[]>([]);
  const router = useRouter();

  const getBoard = async () => {
    try {
      const res = await axios.get<boardProps[]>('/api/board');
      setBoard(res.data);
    } catch (error) {
      console.log('데이터 get 실패', error);
    }
  };

  const handleClick = async (id: string) => {
    router.push(`/board/${id}`);
  };

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6 text-center text-gray-800'>정보 게시판</h1>
      <div className='bg-white shadow-md rounded-lg overflow-hidden'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-green-300'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>번호</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>제목</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>작성자</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>작성일</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {board.map((item) => (
              <tr key={item.id} className='hover:bg-gray-50'>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{item.id}</td>
                <td
                  className='px-6 py-4 text-sm text-blue-600 hover:underline cursor-pointer truncate max-w-[200px] lg:max-w-[500px]'
                  onClick={() => handleClick(item.id)}
                >
                  {item.title}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{item.writer}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='mt-6 flex justify-end'>
        <Link href={'/board/newboard'} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
          글쓰기
        </Link>
      </div>
    </div>
  );
}
