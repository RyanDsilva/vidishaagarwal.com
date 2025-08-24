import { dmsans } from "@/app/fonts";
import { getAllItems } from "@/util";
import ProjectGalleryTile from "@/components/projectGalleryTile";


async function fetchAllProjects() {
  const projects = getAllItems("projects");
  projects.sort((a, b) => a.data.index - b.data.index);
  return projects;
}

export default async function Projects() {
  const projects = await fetchAllProjects();
  return (
    <div className={`${dmsans.className} py-4 md:py-8`}>
      <section className="mb-12">
        <div className="grid grid-cols-1 gap-8 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectGalleryTile
                id={project.id}
                projectName={project.data.title}
                category={project.data.category}
                imageSrc={project.data.cover_image}
              ></ProjectGalleryTile>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
