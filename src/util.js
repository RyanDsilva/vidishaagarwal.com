import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export function getAllItems(directory) {
  const fullPath = path.join(contentDir, directory);
  const fileNames = fs.readdirSync(fullPath);
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const filePath = path.join(fullPath, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      id,
      data,
      content,
    };
  });
}
