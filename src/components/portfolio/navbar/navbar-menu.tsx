"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const NavbarMenu = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn("absolute top-1/2 -translate-y-1/2 z-[90]", className)}
    {...props}
  />
));
NavbarMenu.displayName = "NavbarMenu";

const NavbarItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group",
      "h-[.74rem] flex justify-end items-center",
      "cursor-pointer pointer-events-auto",
      className,
    )}
    {...props}
  />
));
NavbarItem.displayName = "NavbarItem";

const NavbarItemTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mr-[.05rem] overflow-hidden",
      "!text-[0.16rem] text-right text-secondary-foreground font-bold",
      "text-stroke",
      className,
    )}
    {...props}
  />
));
NavbarItemTitle.displayName = "NavbarItemTitle";

const NavbarItemMainTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "translate-x-full duration-200",
      "group-hover:translate-x-0",
      className,
    )}
    {...props}
  />
));
NavbarItemMainTitle.displayName = "NavbarItemMainTitle";

const NavbarItemBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "size-[.12rem] rounded-[0.02rem] duration-200",
      "bg-secondary-foreground",
      "group-hover:h-[.36rem]",
      className,
    )}
    {...props}
  />
));
NavbarItemBar.displayName = "NavbarItemBar";

export {
  NavbarMenu,
  NavbarItem,
  NavbarItemTitle,
  NavbarItemMainTitle,
  NavbarItemBar,
};
