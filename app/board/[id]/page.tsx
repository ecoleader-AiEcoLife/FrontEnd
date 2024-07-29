"use client";

interface BoardProps {
  id: string;
  title: string;
  body: string;
  date: string;
}

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Params {
  params: {
    id: string;
  };
}

const URL = "http://localhost:3001";

export default function InfoPost({ params }: Params) {
  const [board, setBoard] = useState<BoardProps | null>(null);
  const router = useRouter();

  const getBoard = async () => {
    try {
      const Index = parseInt(params.id) - 1;
      const res = await axios.get(`${URL}/board`);
      setBoard(res.data[Index]);
    } catch (error) {
      console.log("Info Page get 에러", error);
    }
  };

  useEffect(() => {
    getBoard();
  }, []);

  if (!board) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}
        className="mb-6 flex items-center justify-end w-full font-bold text-green-600 hover:text-green-800 transition-colors duration-200 "
      >
        뒤로 가기
      </button>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-green-400 p-4">
          <h1 className="text-2xl font-bold text-white">{board.title}</h1>
        </div>
        <div className="p-6">
          <div className="text-gray-600 mb-4 text-[14px] flex justify-end">
            게시일: {board.date}
          </div>
          <div className="text-gray-800 whitespace-pre-wrap">{board.body}</div>
        </div>
      </div>
    </div>
  );
}
