import { inter } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";


export default function ProjectGalleryTile({ id, projectName, category, imageSrc }) {
  return (
    <>
      <Link className={`${inter.className}`} href={`/projects/` + id}>
        <div className="flex flex-col justify-between">
          <h3 className="-mb-1 text-lg font-bold font-main-black line-clamp-2">
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
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-cover object-center w-full rounded-lg h-54 md:h-64 xl:h-64"
          ></Image>
        </div>
      </Link>
    </>
  );
}
