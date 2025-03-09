"use client";

import { motion } from "motion/react";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface PageTitleProps extends PropsWithChildren {
  delay?: number;
  className?: string;
  textClassName?: string;
}

export default function PageTitle({
  children,
  delay = 0.7,
  className,
  textClassName,
}: PageTitleProps) {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        y: [100, 0],
        rotate: [0, 1.5],
        transition: {
          delay: delay,
          rotate: {
            delay: delay + 1,
          },
        },
      }}
      className={cn(
        "absolute px-1 pt-0 pb-2 select-none z-[-1]",
        "bg-accent rounded-[0.06rem] left-1 -top-[0.57rem]",
        "origin-top-left",
        className,
      )}
    >
      <span
        className={cn(
          "font-dela font-semibold text-[0.56rem] uppercase leading-none text-foreground/70 tracking-wider",
          textClassName,
        )}
      >
        {children}
      </span>
    </motion.div>
  );
}
