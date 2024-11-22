'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRecycleStore } from '@/store/recycleStore';
import { useParams } from 'next/navigation';
import Image from 'next/image';

interface DetailProps {
  _id: string;
  title: string;
  type: string;
  imgUrl: string;
  context: string;
  subcontext: string;
}

export default function DetailLink() {
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
    <>
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
    </>
  );
}
