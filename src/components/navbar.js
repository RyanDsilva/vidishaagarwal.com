"use client";
import { DM_Sans, Inter } from "next/font/google";
const dmsans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";

import { attributes } from "../../content/components/top_nav.md";
import { Menu } from "lucide-react";

export default function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, links } = attributes;
  return (
    <nav className={dmsans.className}>
      <div className="flex justify-between items-top lg:items-center text-center">
        <a
          className={`${inter.className} text-2xl lg:text-3xl font-main-black font-extrabold`}
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
            className="font-main-black"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <Menu size={28} strokeWidth={1}></Menu>
          </button>
        </div>
      </div>
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="flex flex-col px-2 py-2 space-y-1">
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
      </div>
    </nav>
  );
}
