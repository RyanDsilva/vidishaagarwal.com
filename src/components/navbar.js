"use client";
import { DM_Sans } from "next/font/google";
const dmsans = DM_Sans({ subsets: ["latin"] });
import { useState } from "react";
import { PopupButton } from "react-calendly";

import { attributes } from "../../content/components/top_nav.md";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Conditional } from "./conditional";
import Image from "next/image";

export default function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false);
  const { links } = attributes;

  return (
    <header className="sticky z-10 top-0 py-3 md:py-4 bg-[#f3f3f3] bg-clip-padding px-12 mb-8 md:px-20 md:mb-12 lg:px-40 lg:mb-12 xl:px-96 xl:mb-24">
      <nav className={`${dmsans.className}`}>
        <div className="flex justify-between text-center items-top lg:items-center">
          <Link className="" href="/">
            <Image
              src="/images/logo.png"
              width={215}
              height={35}
              alt="Navbar Logo"
            ></Image>
          </Link>
          <div className="hidden space-x-12 lg:block">
            {links.map((link, index) => (
              <span key={index}>
                <Conditional
                  key={index}
                  showWhen={link.display_text != "Book A Call"}
                >
                  <Link
                    key={index}
                    href={link.link}
                    className="text-base font-medium font-main-black"
                  >
                    {link.display_text}
                  </Link>
                </Conditional>
                <Conditional
                  key={index}
                  showWhen={link.display_text == "Book A Call"}
                >
                  {typeof window !== "undefined" && (
                    <PopupButton
                      key={"calendly"}
                      className="text-base font-medium font-main-black"
                      url="https://calendly.com/vidisha-agarwal212000/meet"
                      rootElement={document.getElementById("root")}
                      text="Book A Call"
                    />
                  )}
                </Conditional>
              </span>
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
