import { DM_Sans } from "next/font/google";
import { getAllItems } from "@/util";
import Filter from "@/components/filter";
import ProjectGalleryTile from "@/components/projectGalleryTile";

const dmsans = DM_Sans({ subsets: ["latin"] });

const categories = ["All", "Design", "Branding", "Strategy", "Passion Projects"];

async function fetchAllProjects() {
  return getAllItems("projects");
}

function filterProjects(category) {
  console.log(category);
}

export default async function Projects() {
  const projects = await fetchAllProjects();
  return (
    <div className={`${dmsans.className} py-4 md:py-8`}>
      {/* <section>
        <div class="flex flex-col md:flex-row md:space-x-8" role="group">
          {categories.map((category, index) => (
            <Filter
              key={index}
              category={category}
              filterProjects={filterProjects}
            ></Filter>
          ))}
        </div>
      </section> */}
      <section className="mb-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
