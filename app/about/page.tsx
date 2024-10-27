"use client";

import { useState } from "react";

export default function About() {
  const [copy, setCopy] = useState<string>("");

  const handleCopy = () => {
    navigator.clipboard.writeText("euAuthnwoo1341@gmail.com");
    setCopy("이메일이 복사되었습니다.");
    setTimeout(() => setCopy(""), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center item-center">
      <div className="bg-green-200 flex flex-col justify-center items-center">
        <div className="pb-3">
          <span>안녕하세요, 경북대학교 컴퓨터학부 </span>
          <span className="font-bold">Eddy </span>
          <span>입니다. </span>
        </div>
        <div className="font-bold"> 프론트엔드 (+풀스택) : 은우</div>{" "}
        <div className="font-bold"> 백엔드 : 재민</div>
        <div className="font-bold"> AI : 정주</div>
        <div className="font-bold"> 카드뉴스 : 준호</div>
      </div>

      <div className="relative bg-red-500 hover:text-emerald-200 text-center text-white mx-auto rounded-md p-1 mt-8">
        <button onClick={handleCopy}>
          <p>Contacts</p>
        </button>
        {copy && (
          <span className="absolute -translate-x-1/2 top-full mt-2 px-2 py-1 bg-white text-emerald-800 text-sm rounded shadow whitespace-nowrap">
            {copy}
          </span>
        )}
      </div>
    </div>
  );
}
