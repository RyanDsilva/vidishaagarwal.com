import { DM_Sans, Inter } from "next/font/google";
const dmsans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

import { attributes } from "../../content/components/top_nav.md";

export default function Navbar({}) {
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
        <div className="space-x-12">
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
