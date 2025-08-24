import { dmsans } from "./fonts";
import { attributes } from "../../content/home.md";
import { LucideArrowDown } from "lucide-react";
import ProjectTile from "../components/projectTile";
import { getAllItems } from "@/util";
import Link from "next/link";
import Animated from "@/components/animated";


async function fetchFeaturedProjects() {
  const featured = getAllItems("featured");
  featured.sort((a, b) => a.data.index - b.data.index);
  return featured;
}

export default async function Home() {
  const featured_projects = await fetchFeaturedProjects();
  const { headline, information } = attributes;
  return (
    <div className={`${dmsans.className} pt-32 pb-20 lg:py-36`}>
      <section className="flex flex-col lg:flex-row lg:justify-between">
        <h1 className="mb-8 text-5xl font-medium md:text-6xl font-main-black lg:mb-0">
          {headline}
        </h1>
        <h2 className="text-xl font-light md:text-2xl font-main-gray lg:self-end lg:w-1/2">
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
            className="mt-12 -mx-2 lg:mt-32"
            color="black"
            size={48}
            strokeWidth={2}
          />
        </Link>
      </Animated>
      <section id="highlight-projects" className="py-4 mt-32 md:mt-36 lg:mt-40">
        {featured_projects.map((project, index) => (
          <ProjectTile
            key={index}
            projectName={project.data.name}
            challenge={project.data.challenge}
            solution={project.data.solution}
            imageSrc={project.data.image}
            link={project.data.link}
            imageAltText={project.data.image_text}
            inProgress={project.data.in_progress}
            index={index}
            length={featured_projects.length}
          ></ProjectTile>
        ))}
      </section>
    </div>
  );
}
