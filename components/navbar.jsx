import React from "react";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  return (
    <nav className="flex  items-center px-8 py-5 border-b border-gray-300">
      <h1 className={`${bodoni.className} tracking-widest text-xl text-black`}>
        GETNOMIK
      </h1>
      <ul className="flex space-x-16 text-lg px-[35px]  text-black">
        <li>
          <Link href="/" className="group relative inline-block">
            <span className="hover:text-green-700 transition-colors duration-300">
              home
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
        </li>
        <li>
          <Link href="/items" className="group relative inline-block">
            <span className="hover:text-green-700 transition-colors duration-300">
              items
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
        </li>
        <li>
          <Link href="/about" className="group relative inline-block">
            <span className="hover:text-green-700 transition-colors duration-300">
              about
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
        </li>
        <li>
          <Link href="/contact" className="group relative inline-block">
            <span className="hover:text-green-700 transition-colors duration-300">
              contact
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
