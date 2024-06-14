import { Inter } from "next/font/google";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Conditional } from "./conditional";

const inter = Inter({ subsets: ["latin"] });

const imageStyle = {
  borderRadius: "10%",
};

export default function ProjectTile({
  projectName,
  challenge,
  solution,
  imageSrc,
  imageAltText,
  link,
  inProgress,
}) {
  return (
    <>
      <div className={`${inter.className} lg:flex`}>
        <div className="flex flex-col justify-between flex-1 flex-grow lg:mr-20">
          <div>
            <h3 className="mb-6 text-lg font-bold font-main-black">
              {projectName.toUpperCase()}
            </h3>
            <p className="mb-6 text-lg font-normal font-main-black">{challenge}</p>
            <p className="text-sm font-main-gray">{solution}</p>
          </div>
          <Conditional showWhen={!inProgress}>
            <div className="relative inline-flex mt-4 underline lg:mt-0 underline-offset-4">
              <a href={link.link}>{link.link_text}</a>
              <ArrowUpRight className="ml-0.5" size={20}></ArrowUpRight>
            </div>
          </Conditional>
          <Conditional showWhen={inProgress}>
            <div className="relative inline-flex mt-4 underline lg:mt-0 font-main-gray underline-offset-4">
              Project WIP
            </div>
          </Conditional>
        </div>
        <div className="flex items-center justify-center flex-grow-0 flex-shrink-0 w-full mt-8 lg:mt-0 flex-2 lg:w-3/5 lg:pl-12">
          <Conditional showWhen={imageSrc != ""}>
            <Image
              width={300}
              height={100}
              src={imageSrc}
              alt={imageAltText}
              fill={true}
              style={imageStyle}
            ></Image>
          </Conditional>
          <Conditional showWhen={imageSrc == ""}>
            <div className="w-full h-48 rounded-lg md:h-96 bg-main-gray"></div>
          </Conditional>
        </div>
      </div>
      <hr className="my-16 md:my-28 bg-main-black h-0.5"></hr>
    </>
  );
}
