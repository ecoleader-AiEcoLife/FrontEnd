"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Params {
  params: {
    id: string;
  };
  searchParams: {
    title: string;
    imgUrl: string;
  };
}

interface DetailProps {
  id: number;
  title: string;
  type: { id: number; name: string };
  imgUrl: string;
  context: string;
  subcontext: string;
}

interface DecodeData {
  title: string;
  imgUrl: string;
}

const URL = "http://localhost:3001";

export default function RecyclePages({ params, searchParams }: Params) {
  const [detail, setDetail] = useState<DetailProps[]>([]);
  const [decodeData, setDecodeData] = useState<DecodeData>({
    title: "",
    imgUrl: "",
  });

  const getDetailRecycle = async () => {
    try {
      const res = await axios.get(`${URL}/disboard`);
      setDetail(res.data.list[params.id]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetailRecycle();
    setDecodeData({
      title: decodeURIComponent(searchParams.title),
      imgUrl: decodeURIComponent(searchParams.imgUrl),
    });
  }, [params.id, searchParams.title, searchParams.imgUrl]);

  return (
    <div className="bg-green-50 min-h-screen w-full p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-800">
            {decodeData.title}
          </h1>
          <img
            className="w-40 h-40 object-cover rounded-lg"
            src={decodeData.imgUrl}
            alt={decodeData.title}
          />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {detail.map((item) => (
            <Link
              key={item.id}
              href={{
                pathname: `/recycle/detail/${item.id}`,
                query: {
                  context: encodeURIComponent(item.context),
                  subcontext: encodeURIComponent(item.subcontext),
                  title: encodeURIComponent(item.title),
                  imgUrl: encodeURIComponent(item.imgUrl),
                },
              }}
            >
              <div className="border rounded-lg p-4 hover:shadow-md transition duration-300 cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 hover:text-green-600">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                      재활용 분류: {item.type.name}
                    </p>
                  </div>
                  <img
                    className="w-20 h-20 object-cover rounded"
                    src={item.imgUrl}
                    alt={item.title}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
