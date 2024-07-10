import { Inter } from "next/font/google";
import Image from "next/image";
import { Conditional } from "./conditional";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectGalleryTile({ id, projectName, category, imageSrc }) {
  return (
    <>
      <Link className={`${inter.className} lg:flex`} href={`/projects/` + id}>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="-mb-1 text-lg font-bold font-main-black">
              {projectName.toUpperCase()}
            </h3>
            <p className="mb-1.5 text-small font-light leading-6 font-main-gray">
              {category}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              width={300}
              height={100}
              src={imageSrc}
              alt={projectName}
              className="object-fill w-full h-56 rounded-lg md:h-56 xl:h-64"
            ></Image>
          </div>
        </div>
      </Link>
    </>
  );
}
