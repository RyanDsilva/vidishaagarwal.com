import { Conditional } from "@/components/conditional";
import { Project404 } from "@/components/project404";
import { getAllItems } from "@/util";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { DM_Sans, Inter } from "next/font/google";
import ImageGallery from "@/components/gallery";
import ReactMarkdown from "react-markdown";
import { YouTubeEmbed } from "@next/third-parties/google";

const dmsans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

async function fetchProject(id) {
  const projects = getAllItems("projects");
  return projects.find((project) => project.id === id);
}

export async function generateStaticParams() {
  const projects = getAllItems("projects");
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function Project({ params }) {
  const { id } = params;
  const project = await fetchProject(id);

  if (!project) {
    return <Project404 />;
  }
  const projectData = project.data;

  return (
    <div className={`${dmsans.className} font-main-black`}>
      <section className="flex justify-center mb-4 md:mb-12">
        <Image
          className="w-full rounded-lg"
          alt={`${projectData.title}`}
          width={1200}
          height={400}
          priority={true}
          src={`${projectData.cover_image}`}
        ></Image>
      </section>
      <section className="flex flex-col justify-between mb-6 md:md-12 md:flex-row">
        <div className="w-full pr-4 md:w-1/2">
          <h1 className="text-4xl font-semibold md:text-6xl">{projectData.title}</h1>
          <p className="mt-1 mb-6 text-sm md:text-xl font-main-gray">
            {projectData.date}
          </p>
        </div>
        <div className="w-full md:w-1/2">
          {projectData.accordion_sections &&
            projectData.accordion_sections.map((section, index) => (
              <details key={index} className="group" open={index == 0}>
                <summary className="flex items-center justify-between mb-2 cursor-pointer md:mb-3 group-active">
                  <h3 className="text-xl font-medium md:text-3xl">
                    {section.header}
                  </h3>
                  <Plus
                    className="group-open:hidden font-main-black"
                    size={24}
                  ></Plus>
                  <Minus
                    className="hidden group-open:block font-main-black"
                    size={24}
                  ></Minus>
                </summary>
                <p className="mb-4 -mt-2 text-xl font-light leading-5 md:mr-12 md:leading-6 md:-mt-3 md:text-xl">
                  {section.content}
                </p>
              </details>
            ))}
        </div>
      </section>
      <hr className="my-8 md:my-16 bg-main-black h-0.5"></hr>
      <section className="mb-8">
        {projectData.body_sections &&
          projectData.body_sections.map((section, index) => (
            <div className="mt-10" key={index}>
              <h3 className="mb-2 text-3xl font-medium">{section.header}</h3>
              <ReactMarkdown
                className="w-full text-base font-light leading-5 md:leading-6 md:text-xl"
                components={{
                  img: (props) => (
                    <Image
                      className="w-full rounded-lg"
                      src={props.src}
                      alt={props.alt}
                      width={1200}
                      height={400}
                    />
                  ),
                }}
              >
                {section.content}
              </ReactMarkdown>
              <Conditional showWhen={section.image}>
                <Image
                  className="w-full mt-4 mb-8"
                  alt={`${section.header}`}
                  width={1000}
                  height={400}
                  quality={100}
                  src={`${section.image}`}
                ></Image>
              </Conditional>
              <Conditional className="justify-center" showWhen={section.video}>
                <br></br>
                <div className="flex justify-center">
                  <YouTubeEmbed
                    videoid={section.video}
                    height={300}
                    width={720}
                  ></YouTubeEmbed>
                </div>
              </Conditional>
            </div>
          ))}
      </section>
      <Conditional
        showWhen={`${projectData.gallery && projectData.gallery.length} > 1`}
      >
        <section className="mb-12">
          <ImageGallery galleryImages={projectData.gallery}></ImageGallery>
        </section>
      </Conditional>
    </div>
  );
}
