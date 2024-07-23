"use client";

import { useEffect, useState } from "react";

interface SearchParams {
  context: string;
  subcontext: string;
  title: string;
  imgUrl: string;
}

interface DecodeData {
  context: string;
  subcontext: string;
  title: string;
  imgUrl: string;
}

export default function DetailPages({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const [decodeData, setDecodeData] = useState<DecodeData>({
    context: "",
    subcontext: "",
    title: "",
    imgUrl: "",
  });

  useEffect(() => {
    setDecodeData({
      context: decodeURIComponent(searchParams.context || ""),
      subcontext: decodeURIComponent(searchParams.subcontext || ""),
      title: decodeURIComponent(searchParams.title || ""),
      imgUrl: decodeURIComponent(searchParams.imgUrl || ""),
    });
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full">
        <div className="relative h-64">
          <img
            src={decodeData.imgUrl}
            alt={decodeData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">
              {decodeData.title}
            </h1>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            재활용 정보
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-green-600 font-medium w-24">분류:</span>
              <span className="text-gray-700">{decodeData.context}</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 font-medium w-24">
                세부 분류:
              </span>
              <span className="text-gray-700">{decodeData.subcontext}</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              재활용 팁
            </h3>
            <p className="text-gray-600">
              이 제품을 올바르게 재활용하려면 깨끗이 씻어서 분리수거 해주세요.
              재활용은 우리 모두의 미래를 위한 작은 실천입니다!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
