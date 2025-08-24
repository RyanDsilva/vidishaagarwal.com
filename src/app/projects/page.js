import { DM_Sans } from "next/font/google";
import { getAllItems } from "@/util";
import ProjectGalleryTile from "@/components/projectGalleryTile";

const dmsans = DM_Sans({ subsets: ["latin"] });

const categories = ["All", "Design", "Branding", "Strategy", "Passion Projects"];

async function fetchAllProjects() {
  const projects = getAllItems("projects");
  projects.sort((a, b) => a.data.index - b.data.index);
  return projects;
}

export default async function Projects() {
  // let selectedCategory = "All";
  const projects = await fetchAllProjects();
  return (
    <div className={`${dmsans.className} py-4 md:py-8`}>
      {/* <section className="mb-12">
        <div class="flex flex-col md:flex-row md:space-x-8" role="group">
          {categories.map((category, index) => (
            <button
              key={index}
              type="button"
              className="text-base font-medium bg-transparent hover:border-b border-[#181717]"
              onClick={() => selectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section> */}
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
