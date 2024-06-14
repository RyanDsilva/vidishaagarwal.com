import { DM_Sans, Inter } from "next/font/google";
import { attributes } from "../../../content/about.md";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const dmsans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const { title, headline, information, clients, image, cta, resume } = attributes;
  return (
    <div className={`${dmsans.className} flex flex-col py-20 md:py-32`}>
      <section className="flex flex-col md:flex-row justify-between">
        <div className="flex-1 flex-grow flex-wrap">
          <h1 className="font-medium text-5xl md:text-6xl font-main-black mb-8">
            {headline}
          </h1>
          <p className="mb-8 font-main-gray text-xl md:text-2xl font-normal md:pr-12">
            {information}
          </p>
        </div>
        <div className="flex-2 flex-grow-0 flex-shrink-0 md:pl-12 md:justify-items-end">
          <Image src={image} width={350} height={500} alt="Profile Picture"></Image>
        </div>
      </section>
      <section className={`${inter.className} flex flex-col mt-12 font-main-black`}>
        <div className="flex flex-row">
          <h3 className="underline underline-offset-4 font-medium">Clients</h3>
          <p className="ml-24 w-full md:w-2/5 font-normal">{clients}</p>
        </div>
        <div className="mt-24 underline underline-offset-4 font-medium">
          <a href={resume.link} target="_blank">
            {resume.resume_text}
          </a>
        </div>
      </section>
      <hr className="mt-36 md:mt-72 bg-main-black h-0.5"></hr>
      <section className="flex flex-col md:flex-row mt-16 justify-between font-main-black">
        <h3 className={`${dmsans.className} text-xl md:text-2xl`}>
          {cta.display_text} <ArrowRight className="inline" size={24} />
        </h3>
        <div className="">
          <a
            href={cta.contact_link}
            className={`${dmsans.className} block text-xl md:text-2xl`}
          >
            {cta.contact_text}
          </a>
          <a
            href={cta.resume_link}
            className={`${inter.className} block mt-7 text-base`}
          >
            {cta.resume_text}
          </a>
        </div>
      </section>
    </div>
  );
}
