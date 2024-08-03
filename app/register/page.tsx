"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-100 flex justify-center items-center h-screen ">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-md p-6"
      >
        <h1 className="text-green-500 text-4xl font-serif text-center font-bold mb-4">
          EDDY
        </h1>
        <div className="flex flex-col p-6 gap-6 ">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-blue-300 pl-2 p-1 rounded-md px-10"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            className="border border-blue-300 pl-2 p-1 rounded-md px-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="border border-blue-300 pl-2 p-1 rounded-md px-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-green-400 rounded-md mt-4 p-1 font-semibold text-white">
            가입하기
          </button>
          {error && <div>{error}</div>}
        </div>
      </form>
    </div>
  );
}
