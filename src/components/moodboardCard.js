import Image from "next/image";
import Link from "next/link";
import { inter, dmsans } from "@/app/fonts";


export default function MoodboardCard({
  src = "",
  alt = "",
  caption = "",
  note = "",
  rotate = 0,
  zIndex = 1,
  widthClass = "w-64",
  heightClass = "h-64",
  className = "",
  showTape = false,
  tapeEdge = "top", // 'top' | 'bottom' | 'left' | 'right'
  tapeRotate = 0,
  href = "#",
}) {
  const rotationStyle = { transform: `rotate(${rotate}deg)` };
  return (
    <Link href={href} className="block">
      <div
        className={`moodboard-card group relative ${widthClass} ${heightClass} ${className}`}
        style={{ zIndex }}
      >
        <div className="relative w-full h-full" style={rotationStyle}>
          {showTape && (
            <div
              className={`tape ${tapeEdge === "top" ? "tape-top" : ""} ${tapeEdge === "bottom" ? "tape-bottom" : ""} ${tapeEdge === "left" ? "tape-left" : ""} ${tapeEdge === "right" ? "tape-right" : ""}`}
              style={{ transform: `${tapeEdge === "top" || tapeEdge === "bottom" ? "translateX(-50%)" : "translateY(-50%)"} rotate(${tapeRotate}deg)` }}
              aria-hidden="true"
            ></div>
          )}
          {src !== "" && (
            <Image
              src={src}
              alt={alt}
              width={600}
              height={600}
              className="object-cover object-center w-full h-full relative z-10"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          )}
          {caption !== "" && (
            <div className={`${inter.className} caption-overlay opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100`}>
              <p className="text-sm leading-snug">{caption}</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}


