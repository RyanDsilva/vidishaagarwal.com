import { dmsans } from "@/app/fonts";

import { attributes } from "../../content/components/footer.md";
import Link from "next/link";

export default function Footer({}) {
  const { title, links } = attributes;
  return (
    <footer className={dmsans.className}>
      <hr className="my-16 md:my-24 bg-main-black h-0.5"></hr>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className={`font-main-black font-medium text-base mb-4 md:mb-0`}>
          {title} - {new Date().toISOString().substring(0, 4)}
        </div>
        <div className="flex flex-col text-center md:flex-row md:space-x-12">
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
      </div>
    </footer>
  );
}
