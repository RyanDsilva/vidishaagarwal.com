"use client";
import { DM_Sans, Inter } from "next/font/google";
const dmsans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";

import { attributes } from "../../content/components/top_nav.md";

export default function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, links } = attributes;
  return (
    <nav className={dmsans.className}>
      <div className="flex justify-between items-center">
        <a
          className={`${inter.className} text-3xl font-main-black font-extrabold`}
          href="/"
        >
          {title}
        </a>
        <div className="space-x-12 hidden lg:block">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="font-main-black text-base font-medium"
            >
              {link.display_text}
            </a>
          ))}
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-900 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a className="block text-gray-900 hover:bg-gray-100 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a className="block text-gray-900 hover:bg-gray-100 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a className="block text-gray-900 hover:bg-gray-100 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium">
            Services
          </a>
          <a className="block text-gray-900 hover:bg-gray-100 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
