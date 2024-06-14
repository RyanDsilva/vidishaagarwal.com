import { DM_Sans } from "next/font/google";
import { getAllItems } from "@/util";

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
    <div className={`${dmsans.className} py-8 lg:py-16`}>
      <section>
        <div class="flex flex-col md:flex-row md:space-x-8" role="group">
          {categories.map((category, index) => (
            <button
              key={index}
              type="button"
              className="text-base font-medium bg-transparent hover:border-b border-[#181717]"
            >
              {category}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
