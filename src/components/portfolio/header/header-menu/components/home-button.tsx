import Link from "next/link";
import { cn } from "@/lib/utils";
import css from "@/components/portfolio/header/header-menu/header-menu.module.scss";
import { FaHome } from "react-icons/fa";

export default function HomeButton() {
  return (
    <Link href={"/"} className={cn(css.headerButton, "aspect-square")}>
      <FaHome />
      <span className="sr-only">Home</span>
    </Link>
  );
}
