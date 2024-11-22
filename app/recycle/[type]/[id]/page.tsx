'use client';
import { useRecycleStore } from '@/store/recycleDetailStore';
import Image from 'next/image';

export default function DetailPages() {
  const { title, type, imgUrl, context, subcontext } = useRecycleStore();

  return (
    <div className='flex items-center justify-center p-4 mt-[200px]'>
      <Image src='/nature.webp' fill priority alt='nature background' className='object-cover' />

      <div className='z-10 bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full'>
        <div className='relative h-64'>
          {imgUrl && <Image src={imgUrl} alt={title} fill className='object-cover' />}
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <h1 className='text-4xl font-bold text-white text-center'>{title}</h1>
          </div>
        </div>
        <div className='p-6'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>재활용 정보</h2>
          <div>{context}</div>
          <div className='space-y-4'>
            <div className='flex items-center'>
              <span className='text-green-600 font-medium w-24'>분류:</span>
              <span className='text-gray-700'>{type}</span>
            </div>
          </div>
          <div className='mt-6 pt-6 border-t border-gray-200'>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>재활용 팁</h3>
            <p className='text-gray-600'>{subcontext}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
