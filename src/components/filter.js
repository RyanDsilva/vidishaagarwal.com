"use client";

export default function Filter({ index, category, filterProjects }) {
  return (
    <button
      key={index}
      type="button"
      className="text-base font-medium bg-transparent hover:border-b border-[#181717]"
      onClick={() => filterProjects(category)}
    >
      {category}
    </button>
  );
}
