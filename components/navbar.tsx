"use client";

import React from "react";
import Logo from "./ui/Logo";
import LinksNav from "./navbar/LinksNav";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 ">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full ">
            <Logo />
            <LinksNav />
          </div>
        </div>
      </div>
    </>
  );
}
