import { getAllItems } from "@/util";

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
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.data.name}</h1>
    </div>
  );
}
