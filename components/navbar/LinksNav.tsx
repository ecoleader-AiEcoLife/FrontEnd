import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";

export default function LinksNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, status } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter();

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
    <div className="flex items-center justify-end w-full">
      <div className="hidden lg:flex items-center space-x-6">
        <Link href="/about">
          <span className="text-white font-semibold hover:text-emerald-200">
            About us
          </span>
        </Link>
        <Link href="/board">
          <span className="text-white font-semibold hover:text-emerald-200">
            정보게시판
          </span>
        </Link>
        <Link href="/chatbot" onClick={handleSessionCheck}>
          <span className="text-white font-semibold hover:text-emerald-200">
            재활용 챗봇
          </span>
        </Link>
        <Link href="/map" onClick={handleSessionCheck}>
          <span className="text-white font-semibold hover:text-emerald-200">
            재활용 지도
          </span>
        </Link>
      </div>

      <div className="flex items-center ml-6">
        {session ? (
          <button
            onClick={handleAuthAction}
            className="bg-red-400 px-3 py-1 rounded-lg font-semibold text-white hover:bg-red-500 transition-colors"
          >
            Sign Out
          </button>
        ) : (
          <Link
            href="/login"
            className="bg-green-400 px-3 py-1 rounded-lg font-semibold text-white hover:bg-green-500 transition-colors"
          >
            Sign In
          </Link>
        )}
      </div>

      <div className="lg:hidden ml-4">
        <Image
          className="bg-green-850 cursor-pointer hover:bg-emerald-500 rounded-md p-1"
          src="/toggle.svg"
          width={32}
          height={32}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          alt="Toggle menu"
        />
      </div>

      {isMenuOpen && (
        <div className="absolute top-full right-0 bg-green-800 p-4 lg:hidden mt-2 rounded-lg shadow-lg">
          <Link
            href="/about"
            className="block py-2 text-white hover:text-emerald-200"
          >
            About us
          </Link>
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
