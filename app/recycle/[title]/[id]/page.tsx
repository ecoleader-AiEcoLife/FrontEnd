"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

interface DetailProps {
  params: {
    title: string;
    id: string;
  };
}

export default function DetailPages({ params }: DetailProps) {
  const searchParams = useSearchParams();

  const detail = {
    title: decodeURIComponent(searchParams.get("title") || ""),
    type: decodeURIComponent(searchParams.get("type") || ""),
    imgUrl: decodeURIComponent(searchParams.get("imgUrl") || ""),
    context: decodeURIComponent(searchParams.get("context") || ""),
    subcontext: decodeURIComponent(searchParams.get("subcontext") || ""),
  };

  console.log("데이터: ", detail);

  if (!detail.title) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full">
        <div className="relative h-64">
          <Image
            src={detail.imgUrl}
            alt={detail.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">
              {detail.title}
            </h1>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            재활용 정보
          </h2>
          <div>{detail.context}</div>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-green-600 font-medium w-24">분류:</span>
              <span className="text-gray-700">{detail.type}</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              재활용 팁
            </h3>
            <p className="text-gray-600">{detail.subcontext}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
