import Link from "next/link";
import Button from "../ui/Button";
import { useState } from "react";

export default function LinksNav() {
  const [copy, setCopy] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("eunwoo1341@gmail.com");
    setCopy("이메일이 복사되었습니다.");
    setTimeout(() => setCopy(""), 2000);
  };

  return (
    <div className="relative flex justify-between items-center p-4">
      <ul className="flex gap-8 mr-10 text-white">
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
          {copy && (
            <span className="absolute -translate-x-1/2 top-full mt-2 px-2 py-1 bg-white text-emerald-800 text-sm rounded shadow whitespace-nowrap">
              {copy}
            </span>
          )}
        </li>
      </ul>

      <div className="flex items-center ml-8">
        <div className="hidden lg:flex gap-8 mr-12">
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
        <Link
          href="/login"
          className="bg-green-400 p-1 rounded-lg font-semibold text-white"
        >
          Sign In
        </Link>
        <img
          className="bg-green-850 size-8 block lg:hidden cursor-pointer ml-4 hover:bg-emerald-500 rounded-md"
          src="/toggle.svg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          alt="Toggle menu"
        />
      </div>

      {isMenuOpen && (
        <div className="z-50 absolute top-full right-4 bg-green-800 p-4 lg:hidden">
          <Link
            href="/board"
            className="block py-2 text-white hover:text-emerald-200"
          >
            정보게시판
          </Link>
          <Link
            href="/chatbot"
            className="block py-2 text-white hover:text-emerald-200"
          >
            재활용 챗봇
          </Link>
          <Link
            href="/map"
            className="block py-2 text-white hover:text-emerald-200"
          >
            재활용 지도
          </Link>
        </div>
      )}
    </div>
  );
}
