import { DM_Sans } from "next/font/google";
import { attributes } from "../../content/home.md";
import { LucideArrowDown } from "lucide-react";
import ProjectTile from "../components/projectTile";
import { getAllItems } from "@/util";

const dmsans = DM_Sans({ subsets: ["latin"] });

async function fetchFeaturedProjects() {
  return getAllItems("featured");
}

export default async function Home() {
  const featured_projects = await fetchFeaturedProjects();
  const { headline, information } = attributes;
  return (
    <div className={`${dmsans.className} py-12 md:py-24 lg:py-36`}>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <h1 className="text-6xl font-main-black font-medium mb-8 lg:mb-0">{headline}</h1>
        <h2 className="text-2xl font-main-gray font-light lg:self-end lg:w-1/2">
          {information}
        </h2>
      </div>
      <div className="cta-icon mt-8 lg:mt-24 -m-2">
        <LucideArrowDown color="black" size={48} strokeWidth={2} />
      </div>
      <div id="highlight-projects" className="mt-32 md:mt-36 lg:mt-40">
        {featured_projects.map((project, index) => (
          <ProjectTile
            key={index}
            projectName={project.data.name}
            body={project.data.body}
            subtitle={project.data.subtitle}
            imageSrc={project.data.image}
            link={project.data.link}
            imageAltText={project.data.image_text}
            inProgress={project.data.in_progress}
          ></ProjectTile>
        ))}
      </div>
    </div>
  );
}
