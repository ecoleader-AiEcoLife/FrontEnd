"use client";

import { signOut, useSession } from "next-auth/react";

export default function Userinfo() {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-green-500 text-4xl mb-10">EDDY</h1>
          <h3 className="text-2xl">
            안녕하세요!{" "}
            <span className="font-bold text-green-500">
              {session?.user?.name}
            </span>
            <span> 님</span>
          </h3>
        </div>
        <div>
          이메일: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
