'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface boardProps {
  id: string;
  writer: string;
  title: string;
  body: string;
  date: string;
}

export default function Boards() {
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
    <>
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
    </>
  );
}
