import Image from 'next/image';
import { useCategoryStore } from '@/store/categoryStore';
import DetailLink from '../_components/DetailLink';

export default function RecyclePages() {
  const { title, imgUrl } = useCategoryStore();

  return (
    <div className='bg-green-50 min-h-screen w-full p-8'>
      <div className='max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8'>
        <div className=' flex justify-between items-center mb-6'>
          <h1 className='text-3xl font-bold text-green-800'>{title}</h1>
          <Image src={imgUrl} alt={title} width={160} height={160} />
        </div>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
          <DetailLink />
        </div>
      </div>
    </div>
  );
}
