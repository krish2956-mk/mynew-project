import React from "react";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({
  weight: ["600"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center p-2 px-5 py-6 mb-5 border-b-2 border-gray-400 border-opacity-50">
      <h1 className={`${bodoni.className} text-left px-6 tracking-widest text-xl text-black`}>
        GETNOMIK
      </h1>
      <ul className="flex space-x-[70px] text-lg px-4 md:px-10 py-2 text-black">
        <li>
          <Link
            href="/"
            className="hover:text-gray-600 transition-transform transform hover:translate-y-[-3px]"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href="/items"
            className="hover:text-gray-600 transition-transform transform hover:translate-y-[-3px]"
          >
            items
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-gray-600 transition-transform transform hover:translate-y-[-3px]"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-gray-600 transition-transform transform hover:translate-y-[-3px]"
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
