'use client';

import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface boardProps {
  id: string;
  title: string;
  body: string;
  date: string;
}

export default function Newboard() {
  const [board, setBoard] = useState<boardProps[]>([]);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newBody, setNewBody] = useState<string>('');
  const { data: session } = useSession();

  const today = new Date();

  const router = useRouter();

  const getBoard = async () => {
    try {
      const res = await axios.get<boardProps[]>('/api/board');
      setBoard(res.data);
    } catch (error) {
      console.log('데이터 get 실패', error);
    }
  };

  useEffect(() => {
    getBoard();
  }, []);

  const handlePost = async () => {
    try {
      const newId = board.length + 1;
      const res = await axios.post('/api/board', {
        id: newId,
        writer: session?.user?.name,
        title: newTitle,
        body: newBody,
        date: `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`,
      });

      if (res.status === 201) {
        alert('게시글이 성공적으로 추가되었습니다.');
        setNewTitle('');
        setNewBody('');
        router.push('/board');
      } else {
        console.log('Posting failed');
      }
    } catch (error) {
      console.error('데이터 Post 실패:', error);
      alert('게시판 추가 실패 (Post)');
    }
  };

  return (
    <div className='relative flex justify-center items-center min-h-screen mx-auto'>
      <Image src='/nature.webp' fill priority alt='nature background' className='object-cover' />
      <div className='z-10 bg-emerald-200/40 p-8 rounded-lg shadow-lg w-full max-w-2xl'>
        <h1 className='text-center bg-green-400 rounded-md my-4 py-2 text-xl font-bold'>새 게시글 작성</h1>
        <form className='flex flex-col gap-6' onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            placeholder='제목을 입력해주세요.'
            className='pl-4 py-2 rounded-md text-lg'
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            placeholder='내용을 입력해주세요.'
            className='pl-4 py-2 rounded-md text-lg h-48 resize-none'
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
          />
        </form>
        <div className='flex justify-end mt-6'>
          <button
            onClick={handlePost}
            className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300'
          >
            글쓰기
          </button>
        </div>
      </div>
    </div>
  );
}
