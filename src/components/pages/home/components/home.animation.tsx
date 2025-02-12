"use client";

import { motion } from "motion/react";
import { animate, cn } from "@/lib/utils";

interface IHomeAnimationProps extends React.PropsWithChildren {
  className?: string;
  delay?: number;
  scale?: boolean;
}

export default function HomeAnimation({
  className,
  delay = 0.5,
  children,
}: IHomeAnimationProps) {
  const slideFromBottom = {
    initial: { opacity: 0, y: "100%" },
    animate: {
      opacity: [0, 1],
      y: ["100%", 0],
      scaleY: [1, 0.85, 1, 0.9, 1],
      transition: {
        delay,
      },
    },
    exit: { opacity: 0, y: "100%" },
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      {...animate(slideFromBottom)}
      className={cn("origin-top", className)}
    >
      {children}
    </motion.div>
  );
}
