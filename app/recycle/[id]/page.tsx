"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface Params {
  params: {
    id: string;
  };
  searchParams: {
    title: string;
    imgUrl: string;
  };
}

interface detailProps {
  id: number;
  title: string;
  type: { id: number; name: string };
  context: string;
  subcontext: string;
  imgUrl: string;
}

const URL = "http://localhost:3001";

//  Next.js의 동적 라우팅에서 URL 쿼리 파라미터는 params(id), searchParams라는 이름으로 전달
export default function RecyclePages({ params, searchParams }: Params) {
  const [detail, setDetail] = useState<detailProps[]>([]);

  const getDetailRecycle = () => {
    axios
      .get(`${URL}/disboard`)
      .then((res) => {
        setDetail(res.data.list.type);
        console.log(res.data.list.type);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getDetailRecycle();
  }, []);

  return (
    <div className="bg-green-50 min-h-screen w-full flex justify-center items-center">
      <div className="bg-white w-5/6 p-8 rounded-lg shadow-md flex flex-col items-center">
        <div>
          <h1 className="font-semibold flex">{searchParams.title}</h1>
          <img
            className="w-[400px]"
            src={searchParams.imgUrl}
            alt="이미지 없음"
          />
        </div>
        <div>
          {detail.map((item) => (
            <ul>
              <li key={item.id}>
                <label>{item.title}</label>
                <p>재활용 분류 : {item.type.name}</p>
                <img src={item.imgUrl}></img>
                <p>{item.context}</p>
                <p>{item.subcontext}</p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
