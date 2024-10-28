'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [copy, setCopy] = useState<string>('');

  const handleCopy = () => {
    navigator.clipboard.writeText('euAuthnwoo1341@gmail.com');
    setCopy('이메일이 복사되었습니다.');
    setTimeout(() => setCopy(''), 2000);
  };

  return (
    <div className='relative min-h-screen flex flex-col justify-center item-center'>
      <Image
        src='/nature.webp'
        fill
        priority
        alt='nature background'
        className='object-cover'
      />
      <div className='z-10 bg-green-200/30 text-[18px] font-semibold py-8 flex flex-col justify-center items-center'>
        <div className='pb-3'>
          <span>안녕하세요, 경북대학교 컴퓨터학부 </span>
          <span className='font-bold text-[25px] text-green-500'>Eddy </span>
          <span>입니다. </span>
        </div>
        <div className='w-full bg-slate-700/50 p-5 rounded-xl text-center font-bold'>
          <h1> 프론트엔드 (+풀스택) : 은우</h1> <h1> 백엔드 : 재민</h1>
          <h1> AI : 정주</h1>
          <h1> 카드뉴스 : 준호</h1>
        </div>
      </div>

      <div className='relative bg-red-500 hover:text-emerald-200 text-center text-white mx-auto rounded-md p-2 mt-8 font-bold text-[20px] hover:scale-105'>
        <button onClick={handleCopy}>
          <p>Contacts</p>
        </button>
        {copy && (
          <span className='absolute -translate-x-1/2 top-full mt-2 px-2 py-1 bg-white text-emerald-800 text-sm rounded shadow whitespace-nowrap'>
            {copy}
          </span>
        )}
      </div>
    </div>
  );
}
