import { attributes } from "../../content/components/top_nav.md";
import NavbarClient from "./navbarClient";

export default function Navbar() {
  const { links } = attributes;
  return <NavbarClient links={links} />;
}
