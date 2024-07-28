import Link from "next/link";
import Button from "../ui/Button";
import { useState } from "react";

export default function LinksNav() {
  const [Copy, setCopy] = useState<string>("");

  const handleCopy = () => {
    navigator.clipboard.writeText("eunwoo1341@gmail.com");
    setCopy("이메일이 복사되었습니다.");
    setTimeout(() => setCopy(""), 2000);
  };
  return (
    <div>
      <ul className="absolute left-1/2 transform -translate-x-1/2 flex gap-x-6 text-white">
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li className="hover:text-emerald-200">
          <Link href="/about">
            <p>About Us</p>
          </Link>
        </li>
        <li className="hover:text-emerald-200">
          <button onClick={handleCopy}>
            <p>Contacts</p>
          </button>
          {Copy && (
            <span className="absolute -translate-x-1/2 top-full mt-2 px-2 py-1 bg-white text-emerald-800 text-sm rounded shadow whitespace-nowrap">
              {Copy}
            </span>
          )}
        </li>
      </ul>

      <div className="flex items-center">
        <div className="flex gap-8 mr-12">
          <Link href="/board">
            <span className="text-white font-semibold hover:text-emerald-200">
              정보게시판
            </span>
          </Link>
          <Link href="/chatbot">
            <span className="text-white font-semibold hover:text-emerald-200">
              재활용 챗봇
            </span>
          </Link>
          <Link href="/map">
            <span className="text-white font-semibold hover:text-emerald-200">
              재활용 지도
            </span>
          </Link>
        </div>
        <Button value="Sign in" />
      </div>
    </div>
  );
}
