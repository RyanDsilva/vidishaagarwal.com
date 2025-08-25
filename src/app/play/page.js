import MoodboardCard from "@/components/moodboardCard";
import { dmsans } from "@/app/fonts";
import { getAllItems } from "@/util";


const sizeToWidth = {
  xs: "w-40 md:w-44",
  sm: "w-56 md:w-60",
  md: "w-64 md:w-80",
  lg: "w-80 md:w-96",
  xl: "w-96 md:w-[28rem]",
};

const ratioToHeight = {
  portrait: {
    xs: "h-56 md:h-64",
    sm: "h-64 md:h-72",
    md: "h-80 md:h-[24rem]",
    lg: "h-96 md:h-[28rem]",
    xl: "h-[28rem] md:h-[34rem]",
  },
  landscape: {
    xs: "h-36 md:h-44",
    sm: "h-44 md:h-56",
    md: "h-56 md:h-72",
    lg: "h-64 md:h-80",
    xl: "h-72 md:h-96",
  },
  square: {
    xs: "h-40 md:h-44",
    sm: "h-56 md:h-60",
    md: "h-64 md:h-80",
    lg: "h-80 md:h-96",
    xl: "h-96 md:h-[28rem]",
  },
};

function placeStyle(x, y) {
  return { left: `${x}px`, top: `${y}px` };
}

export default function Play() {
  let items = [];
  try {
    const playItems = getAllItems("play");
    items = playItems
      .sort((a, b) => (a.data.index ?? 0) - (b.data.index ?? 0))
      .map(({ id, data }) => {
        const size = data.size || "md";
        const ratio = data.ratio || "portrait";
        return {
          id,
          src: data.image,
          alt: data.alt || data.title || "",
          href: data.href || "#",
          caption: data.caption || "",
          showTape: data.show_tape || false,
          tapeEdge: data.tape_edge || "top",
          tapeRotate: data.tape_rotate || 0,
          rotate: data.rotate || 0,
          x: data.x || 0,
          y: data.y || 0,
          zIndex: data.z || 1,
          widthClass: sizeToWidth[size],
          heightClass: ratioToHeight[ratio][size],
          note: data.note || "",
        };
      });
  } catch (e) {
    items = [];
  }
  return (
    <div className={`${dmsans.className} relative min-h-[92.5vh]`}>
      {/* Message for widths below 1200px */}
      <div className="min-[1200px]:hidden flex items-center justify-center px-6 py-24 text-center">
        <p className="text-base">Building the play page, come back a little later &hellip;</p>
      </div>

      {/* Layout for widths 1200px and above */}
      <div className="hidden min-[1200px]:block relative moodboard-grid min-h-[92.5vh]">
        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-10 py-8">
          {items.map((item, idx) => (
            <div
              key={item.id ?? idx}
              className="absolute"
              style={placeStyle(item.x, item.y)}
            >
              <MoodboardCard {...item} zIndex={item.zIndex || idx + 1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
