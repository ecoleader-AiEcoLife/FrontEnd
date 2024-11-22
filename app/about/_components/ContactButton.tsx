'use client';
import { useState } from 'react';

export default function ContactButton() {
  const [copy, setCopy] = useState<string>('');

  const handleCopy = () => {
    navigator.clipboard.writeText('eunwoo1341@gmail.com');
    setCopy('이메일이 복사되었습니다.');
    setTimeout(() => setCopy(''), 2000);
  };

  return (
    <div>
      <button
        onClick={handleCopy}
        className='bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-200'
      >
        Contacts
      </button>
      {copy && (
        <span className='absolute -translate-x-1/2 top-full mt-2 px-3 py-1 bg-white text-red-600 text-sm font-medium rounded shadow whitespace-nowrap'>
          {copy}
        </span>
      )}
    </div>
  );
}
