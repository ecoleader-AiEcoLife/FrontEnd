"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

interface ItemProps {
  id: number;
  title: string;
  body: string;
}

export default function Board() {
  const [board, setBoard] = useState<ItemProps[]>([]);
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const getBoardList = async () => {
    try {
      const res = await axios.get<ItemProps[]>("http://localhost:3001/board");
      setBoard(res.data);
    } catch (error) {
      console.error("데이터 실패:", error);
    }
  };

  useEffect(() => {
    getBoardList();
  }, []);

  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const handlePost = async () => {
    try {
      const newId = (board.length + 1).toString();
      const newTitle = "새로운 TItle";
      const newBody = "새로운 Body";

      await axios.post("http://localhost:3001/memo", {
        id: newId,
        title: newTitle,
        body: newBody,
      });
    } catch (error) {
      console.log("데이터 Post 실패:", error);
      alert("게시판 추가 실패 Post)");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        재활용 정보 게시판
      </h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {board.map((item: ItemProps) => (
          <div key={item.id} className="border-b border-gray-200">
            <button
              onClick={() => toggleItem(item.id)}
              className="flex justify-between items-center w-full p-4 text-left hover:bg-gray-50"
            >
              <span className="font-medium">
                {item.id}. {item.title}
              </span>
              {openItemId === item.id ? (
                <ChevronUpIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openItemId === item.id && (
              <div className="px-4 py-3 bg-gray-50">
                <p className="text-gray-700">{item.body}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <button
          onClick={handlePost}
          className="bg-green-500 text-white rounded-md mt-4 p-1"
        >
          글쓰기
        </button>
      </div>
    </div>
  );
}
