import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="bg-green-300 rounded-lg size-14 flex items-center justify-center"
    >
      <div className="bg-green-200 rounded-full size-12 font-bold text-green-800 flex items-center justify-center">
        Eddy
      </div>
    </Link>
  );
};

export default Logo;
