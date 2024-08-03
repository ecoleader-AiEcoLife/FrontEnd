import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="bg-slate-100 flex justify-center items-center h-screen ">
      <form className="bg-white shadow-lg rounded-md p-6">
        <h1 className="text-green-500 text-4xl font-serif text-center font-bold mb-4">
          EDDY
        </h1>
        <div className="flex flex-col p-6 gap-6 ">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-blue-300 pl-2 p-1 rounded-md px-10"
          />
          <input
            type="email"
            placeholder="email"
            className="border border-blue-300 pl-2 p-1 rounded-md px-10"
          />
          <input
            type="password"
            placeholder="password"
            className="border border-blue-300 pl-2 p-1 rounded-md px-10"
          />
          <button className="bg-green-400 rounded-md mt-4 p-1">로그인</button>
          <div className="flex justify-between">
            <p className="text-blue-500 text-[13px]">계정이 없으신가요?</p>
            <Link
              href={"/register"}
              className="text-blue-600 text-[13px] font-semibold"
            >
              가입하기
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
