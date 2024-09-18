import { Inter } from "next/font/google";
import Image from "next/image";
import { Conditional } from "./conditional";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectGalleryTile({ id, projectName, category, imageSrc }) {
  return (
    <>
      <Link className={`${inter.className}`} href={`/projects/` + id}>
        <div>
          <h3 className="-mb-1 text-lg font-bold font-main-black text-nowrap">
            {projectName.toUpperCase()}
          </h3>
          <p className="mb-1.5 text-small font-light leading-6 font-main-gray">
            {category}
          </p>
          <Image
            width={300}
            height={100}
            src={imageSrc}
            alt={projectName}
            className="object-center w-full h-64 rounded-lg md:h-64 xl:h-64"
          ></Image>
        </div>
      </Link>
    </>
  );
}
