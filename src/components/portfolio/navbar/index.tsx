"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { PAGES } from "@/lib/constants/pages";
import {
  NavbarItem,
  NavbarItemBar,
  NavbarItemMainTitle,
  NavbarItemTitle,
  NavbarMenu,
} from "@/components/portfolio/navbar/navbar-menu";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <NavbarMenu className="right-[3.51rem]">
      {PAGES.map((page) => (
        <Link
          key={`nav-item-${page.id}`}
          href={page.href}
          legacyBehavior
          passHref
        >
          <NavbarItem>
            <NavbarItemTitle>
              <NavbarItemMainTitle>{page.title}</NavbarItemMainTitle>
            </NavbarItemTitle>
            <NavbarItemBar
              className={cn(pathname === page.href && "h-[.36rem] !bg-primary")}
            />
          </NavbarItem>
        </Link>
      ))}
    </NavbarMenu>
  );
}
