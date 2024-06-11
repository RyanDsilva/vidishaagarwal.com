import { DM_Sans } from "next/font/google";
const dmsans = DM_Sans({ subsets: ["latin"] });

import { attributes } from "../../content/components/footer.md";

export default function Footer({}) {
  const { title, links } = attributes;
  return (
    <nav className={dmsans.className}>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className={`font-secondary-blue font-medium text-base mb-4 md:mb-0`}>{title}</div>
        <div className="flex flex-col md:flex-row md:space-x-12 text-center">
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
