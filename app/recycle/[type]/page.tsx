'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRecycleStore } from '@/store/recycleStore';
import { useParams } from 'next/navigation';
import { useCategoryStore } from '@/store/categoryStore';

interface DetailProps {
  _id: string;
  title: string;
  type: string;
  imgUrl: string;
  context: string;
  subcontext: string;
}

export default function RecyclePages() {
  const { title, imgUrl } = useCategoryStore();
  const [detail, setDetail] = useState<DetailProps[]>([]);

  const params = useParams(); // useparams하면 encode된 URL이 나옴
  const type = decodeURIComponent(params.type as string);

  const { setTitle, setType, setImgUrl, setContext, setSubContext } = useRecycleStore();

  const onClick = (item: DetailProps) => {
    setTitle(item.title),
      setType(item.type),
      setImgUrl(item.imgUrl),
      setContext(item.context),
      setSubContext(item.subcontext);
  };

  const getDetailRecycle = async () => {
    try {
      const res = await axios.get(`/api/recycledetail?type=${type}`);
      if (res.data) {
        setDetail(res.data);
      } else {
        console.error('Recycle detail data not found');
        setDetail([]);
      }
    } catch (error) {
      console.error('Error fetching detail data:', error);
      setDetail([]);
    }
  };

  useEffect(() => {
    getDetailRecycle();
  }, [type]);

  return (
    <div className='bg-green-50 min-h-screen w-full p-8'>
      <div className='max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8'>
        <div className=' flex justify-between items-center mb-6'>
          <h1 className='text-3xl font-bold text-green-800'>{title}</h1>
          <Image src={imgUrl} alt={title} width={160} height={160} />
        </div>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {detail.map((item) => (
            <Link onClick={() => onClick(item)} key={item._id} href={`/recycle/${params.type}/${item.title}`}>
              <div className='border rounded-lg p-4 hover:shadow-md transition duration-300 cursor-pointer'>
                <div className='flex justify-between items-start'>
                  <div>
                    <h2 className='text-xl font-semibold text-gray-900 hover:text-green-600'>{item.title}</h2>
                    <p className='mt-2 text-sm text-gray-600'>재활용 분류: {item.type}</p>
                  </div>
                  <Image className='object-cover rounded' src={item.imgUrl} alt={item.title} width={80} height={80} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
