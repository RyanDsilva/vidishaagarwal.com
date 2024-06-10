import { Conditional } from "@/util";
import { Inter } from "next/font/google";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const imageStyle = {
  borderRadius: "10%",
};

export default function ProjectTile({
  projectName,
  subtitle,
  body,
  imageSrc,
  imageAltText,
  link,
  inProgress,
}) {
  return (
    <>
      <div className={`${inter.className} flex`}>
        <div className="flex-1 flex-grow flex flex-col justify-between mr-20">
          <div>
            <h3 className="text-lg font-bold font-main-black mb-6">
              {projectName.toUpperCase()}
            </h3>
            <p className="font-main-black text-lg font-normal mb-6">{body}</p>
            <p className="font-main-gray text-sm">{subtitle}</p>
          </div>
          <Conditional showWhen={!inProgress}>
            <div className="relative inline-flex underline underline-offset-4">
              <a href={link.link}>{link.link_text}</a>
              <ArrowUpRight className="ml-0.5" size={20}></ArrowUpRight>
            </div>
          </Conditional>
          <Conditional showWhen={inProgress}>
            <div className="font-main-gray relative inline-flex underline underline-offset-4">
              Project WIP
            </div>
          </Conditional>
        </div>
        <div className="flex-2 flex-grow-0 flex-shrink-0 w-3/5 pl-12 flex justify-center items-center">
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
            <div className="w-full h-96 bg-main-gray rounded-lg"></div>
          </Conditional>
        </div>
      </div>
      <hr className="my-28 bg-main-black h-0.5"></hr>
    </>
  );
}
