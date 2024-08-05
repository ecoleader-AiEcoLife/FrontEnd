import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";

export default function LinksNav() {
  const [copy, setCopy] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, status } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter();

  const handleCopy = () => {
    navigator.clipboard.writeText("euAuthnwoo1341@gmail.com");
    setCopy("이메일이 복사되었습니다.");
    setTimeout(() => setCopy(""), 2000);
  };

  const handleAuthAction = () => {
    if (status === "loading") {
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white">
          로딩중...
        </div>
      </div>;
    }

    if (session) {
      signOut({ callbackUrl: "/" });
    }
  };

  const handleSessionCheck = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isAuthenticated) {
      e.preventDefault();
      alert("로그인 이후 이용해주세요.");
      router.push("/login");
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      setIsAuthenticated(status === "authenticated");
    }
  }, [status]);

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
            <span
              className="text-white font-semibold hover:text-emerald-200"
              onClick={handleSessionCheck}
            >
              재활용 챗봇
            </span>
          </Link>
          <Link href="/map">
            <span
              className="text-white font-semibold hover:text-emerald-200"
              onClick={handleSessionCheck}
            >
              재활용 지도
            </span>
          </Link>
        </div>
        {session ? (
          <button
            onClick={handleAuthAction}
            className="bg-red-400 p-1 rounded-lg font-semibold text-white"
          >
            Sign Out
          </button>
        ) : (
          <Link
            href="/login"
            className="bg-green-400 p-1 rounded-lg font-semibold text-white"
          >
            Sign In
          </Link>
        )}
        <Image
          className="bg-green-850 block lg:hidden cursor-pointer ml-4 hover:bg-emerald-500 rounded-md"
          src="/toggle.svg"
          width={32}
          height={32}
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
            onClick={handleSessionCheck}
          >
            재활용 챗봇
          </Link>
          <Link
            href="/map"
            className="block py-2 text-white hover:text-emerald-200"
            onClick={handleSessionCheck}
          >
            재활용 지도
          </Link>
        </div>
      )}
    </div>
  );
}
