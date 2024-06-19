import { Conditional } from "@/components/conditional";
import { Project404 } from "@/components/project404";
import { getAllItems } from "@/util";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { DM_Sans, Inter } from "next/font/google";
import ImageGallery from "@/components/gallery";

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
      <section className="flex justify-center mb-12">
        <Image
          className="w-full rounded-lg"
          alt={`${projectData.title}`}
          width={1200}
          height={400}
          priority={true}
          src={`${projectData.cover_image}`}
        ></Image>
      </section>
      <section className="flex justify-between mb-12">
        <h1 className="w-1/2 pr-4 text-6xl font-semibold">{projectData.title}</h1>
        <div className="w-1/2">
          {projectData.accordion_sections.map((section, index) => (
            <details key={index} className="group" open={index == 0}>
              <summary className="flex items-center justify-between mb-3 cursor-pointer group-active">
                <h3 className="text-2xl font-medium">{section.header}</h3>
                <Plus className="group-open:hidden font-main-black" size={20}></Plus>
                <Minus
                  className="hidden group-open:block font-main-black"
                  size={20}
                ></Minus>
              </summary>
              <p className="pb-3 text-lg font-light">{section.content}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="mb-8">
        {projectData.body_sections.map((section, index) => (
          <div className="mt-4" key={index}>
            <h3 className="mb-2 text-2xl font-medium">{section.header}</h3>
            <p className="mb-4 text-lg font-light">{section.content}</p>
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
          </div>
        ))}
      </section>
      <Conditional showWhen={`${projectData.gallery.length} > 1`}>
        <section className="mb-12">
          <ImageGallery galleryImages={projectData.gallery}></ImageGallery>
        </section>
      </Conditional>
    </div>
  );
}
