"use client";
import { DM_Sans, Inter } from "next/font/google";
const dmsans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";

import { attributes } from "../../content/components/top_nav.md";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Conditional } from "./conditional";

export default function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, links } = attributes;
  return (
    <header className="sticky z-10 top-0 py-3 md:py-5 bg-[#f3f3f3] bg-opacity-65 backdrop-filter-blur bg-clip-padding px-12 mb-8 md:px-20 md:mb-12 lg:px-40 lg:mb-12 xl:px-96 xl:mb-24">
      <nav className={`${dmsans.className}`}>
        <div className="flex justify-between text-center items-top lg:items-center">
          <Link
            className={`${inter.className} text-2xl lg:text-3xl font-main-black font-extrabold`}
            href="/"
          >
            {title}
          </Link>
          <div className="hidden space-x-12 lg:block">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="text-base font-medium font-main-black"
              >
                {link.display_text}
              </Link>
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
              <Conditional showWhen={!isOpen}>
                <Menu color={"#181717"} size={28} strokeWidth={1}></Menu>
              </Conditional>
              <Conditional showWhen={isOpen}>
                <X size={28} color={"#181717"} strokeWidth={1}></X>
              </Conditional>
            </button>
          </div>
        </div>
        <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
          <div className="flex flex-col px-2 py-8 space-y-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                onClick={() => setIsOpen(!isOpen)}
                className="text-lg font-medium font-main-black"
              >
                {link.display_text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
