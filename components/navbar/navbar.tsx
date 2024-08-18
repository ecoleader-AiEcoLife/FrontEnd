"use client";

import React from "react";
import Logo from "../ui/Logo";
import LinksNav from "./LinksNav";

export default function Navbar() {
  return (
    <nav>
      <div className="relative w-[100vw] h-[80px] bg-emerald-800 flex justify-center items-center ">
        <div className="absolute">
          <Logo />
        </div>
        <div className="w-full flex justify-end pr-[20px]">
          <LinksNav />
        </div>
      </div>
    </nav>
  );
}
