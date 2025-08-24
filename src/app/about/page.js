"use client";
import { DM_Sans, Inter } from "next/font/google";
import { attributes } from "../../../content/about.md";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { sendGAEvent } from "@next/third-parties/google";

const dmsans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const { headline, information, clients, image, resume, testimonials = [] } = attributes;
  return (
    <div className={`${dmsans.className} flex flex-col py-16 md:py-16 min-h-full`}>
      <section className="flex flex-col justify-between md:flex-row">
        <div className="flex-wrap flex-1 flex-grow">
          <h1 className="mb-8 text-5xl font-medium leading-[3.5rem] md:text-6xl font-main-black">
            {headline}
          </h1>
          <p className="mb-8 text-xl font-light font-main-gray md:text-xl md:pr-12">
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
      <hr className="my-16 md:my-20 bg-main-black h-0.5"></hr>
      <section className="-mb-12">
        <h2 className="mb-10 text-5xl font-medium leading-[3.5rem] md:text-6xl font-main-black">
          Don&apos;t take my word for it.
        </h2>
        <div className="space-y-12">
          {testimonials.map((t) => (
            <article key={`${t.name}-${t.date}`} className="flex flex-col md:grid md:grid-cols-[56px_1fr_auto] md:gap-x-4">
              <div className="flex items-start md:contents">
                <Image
                  src={t.avatar}
                  alt={`${t.name} avatar`}
                  width={56}
                  height={56}
                  className="rounded-full mr-4 md:mr-0 md:col-start-1 md:row-start-1"
                />
                <div className="md:col-start-2 md:row-start-1 md:pr-24">
                  <h3 className="text-2xl md:text-3xl font-medium leading-tight font-main-black">{t.name}</h3>
                  <p className="italic font-main-gray">{t.title}</p>
                  <div className="mt-1 md:mt-1">
                    <ReactMarkdown 
                      className="text-lg md:text-xl font-main-black">
                      {t.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
              <div className="mt-2 md:mt-0 md:col-start-3 md:row-start-1">
                <p className="font-main-gray">{t.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
