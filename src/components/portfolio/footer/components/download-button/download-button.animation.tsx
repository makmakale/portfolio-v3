"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function DownloadButtonAnimation({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      animate={{
        scale: [0.95, 1, 0.95],
        transition: {
          repeat: Infinity,
          duration: 1.5,
        },
      }}
      className={cn(
        "absolute inset-[.1rem] uppercase pt-1",
        "rounded-tl-[.14rem] rounded-br-[.14rem]",
        "text-[.6rem] leading-[3] text-primary group-hover:text-background font-semibold tracking-wider",
        "flex justify-center items-center",
        "shadow-[0_0_0_1rem_hsl(var(--background))]",
        "bg-background group-hover:bg-transparent duration-200",
      )}
    >
      {children}
    </motion.div>
  );
}
