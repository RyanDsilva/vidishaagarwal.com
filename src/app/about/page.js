"use client";
import { DM_Sans, Inter } from "next/font/google";
import { attributes } from "../../../content/about.md";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

const dmsans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const { headline, information, clients, image, cta, resume } = attributes;
  return (
    <div className={`${dmsans.className} flex flex-col py-16 md:py-16 min-h-full`}>
      <section className="flex flex-col justify-between md:flex-row">
        <div className="flex-wrap flex-1 flex-grow">
          <h1 className="mb-8 text-5xl font-medium leading-[3.5rem] md:text-6xl font-main-black">
            {headline}
          </h1>
          <p className="mb-8 text-xl font-light font-main-gray md:text-2xl md:pr-12">
            {information}
          </p>
          <section
            className={`${inter.className} flex flex-col my-12 font-main-black`}
          >
            <div className="flex flex-row">
              <h3 className="font-medium underline underline-offset-4">Clients</h3>
              <p className="ml-24 w-full font-normal md:w-2/5">{clients}</p>
            </div>
            <div className="mt-6 font-medium underline underline-offset-4">
              <a
                href="/VidishaAgarwal.pdf"
                target="_blank"
                type="application/octet-stream"
                onClick={() =>
                  sendGAEvent("event", "buttonClicked", { value: "resume" })
                }
                download
              >
                {resume.resume_text}
              </a>
            </div>
          </section>
        </div>
        <div className="flex-grow-0 flex-shrink-0 flex-2 md:pl-12 md:justify-items-end">
          <Image
            className="rounded-lg"
            src={image}
            width={350}
            height={500}
            alt="Profile Picture"
          ></Image>
        </div>
      </section>
      {/* <hr className="mt-36 h-0.5 md:mt-72 bg-main-black"></hr>
      <section className="flex flex-col justify-between mt-16 md:flex-row font-main-black">
        <h3 className={`${dmsans.className} text-xl md:text-2xl`}>
          {cta.display_text} <ArrowRight className="inline" size={24} />
        </h3>
        <div>
          <a
            href={cta.contact_link}
            className={`${dmsans.className} block text-xl md:text-2xl`}
          >
            {cta.contact_text}
          </a>
        </div>
      </section> */}
    </div>
  );
}
