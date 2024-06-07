import { DM_Sans } from "next/font/google";
import { attributes } from "../../content/home.md";
import { LucideArrowDown } from "lucide-react";
import ProjectTile from "../components/projectTile";

const dmsans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  const projects = [1];
  const dummy = {
    link: "#",
    link_text: "View Case Study",
  };
  const { headline, information } = attributes;
  return (
    <div className={`${dmsans.className} py-36`}>
      <div className="flex justify-between">
        <h1 className="text-6xl font-main-black font-medium">{headline}</h1>
        <h2 className="text-2xl font-main-gray font-light self-end">
          {information}
        </h2>
      </div>
      <div className="cta-icon mt-24 -m-2">
        <LucideArrowDown color="black" size={48} strokeWidth={2} />
      </div>
      <div id="highlight-projects" className="my-24">
        {projects.map((project, index) => (
          <ProjectTile
            key={index}
            projectName={`PayPal`}
            body={`Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.`}
            subtitle={`Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.`}
            imageSrc={``}
            link={dummy}
            imageAltText={"PayPal case study image"}
            inProgress={false}
          ></ProjectTile>
        ))}
      </div>
    </div>
  );
}
