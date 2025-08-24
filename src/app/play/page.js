import { DM_Sans } from "next/font/google";
import dynamic from "next/dynamic";

const dmsans = DM_Sans({ subsets: ["latin"] });

export default function Play() {
  return <div className={`${dmsans.className}`}></div>;
}
