import { DM_Sans } from "next/font/google";
import { attributes } from "../../content/home.md";
import { LucideArrowDown } from "lucide-react";
import ProjectTile from "../components/projectTile";
import { getAllItems } from "@/util";
import Link from "next/link";
import Animated from "@/components/animated";

const dmsans = DM_Sans({ subsets: ["latin"] });

async function fetchFeaturedProjects() {
  return getAllItems("featured");
}

export default async function Home() {
  const featured_projects = await fetchFeaturedProjects();
  const { headline, information } = attributes;
  return (
    <div className={`${dmsans.className} pt-32 pb-20 lg:py-36`}>
      <section className="flex flex-col lg:flex-row lg:justify-between">
        <h1 className="text-5xl md:text-6xl font-main-black font-medium mb-8 lg:mb-0">
          {headline}
        </h1>
        <h2 className="text-xl md:text-2xl font-main-gray font-light lg:self-end lg:w-1/2">
          {information}
        </h2>
      </section>
      <Animated
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{
          type: "ease",
          yoyo: Infinity,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <Link href="/#highlight-projects" legacyBehavior>
          <LucideArrowDown
            className="mt-12 lg:mt-32 -mx-2"
            color="black"
            size={48}
            strokeWidth={2}
          />
        </Link>
      </Animated>
      <section id="highlight-projects" className="mt-32 md:mt-36 lg:mt-40 py-4">
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
      </section>
    </div>
  );
}
