import React from "react";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full ">
            <Logo />
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
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li className="hover:text-emerald-200">
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            <div className="flex items-center">
              <div className="flex gap-8 mr-12">
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
