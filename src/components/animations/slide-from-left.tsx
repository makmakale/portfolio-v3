"use client";

import * as React from "react";
import { motion } from "motion/react";
import { animate, cn } from "@/lib/utils";

interface ISlideFromLeftProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  scale?: boolean;
}

const SlideFromLeft = React.forwardRef<HTMLDivElement, ISlideFromLeftProps>(
  ({ className, delay = 0.5, scale = true, children }, ref) => {
    const slideFromLeft = {
      initial: { opacity: 0, x: "-100%" },
      animate: {
        opacity: [0, 1],
        x: ["-100%", 0],
        scaleX: scale ? [1, 0.8, 1, 0.9, 1] : undefined,
        transition: {
          delay: delay,
        },
      },
      exit: { opacity: 0, x: "-100%" },
      transition: { duration: 1, ease: "easeInOut" },
    };

    return (
      <motion.div
        ref={ref}
        {...animate(slideFromLeft)}
        className={cn("origin-left", className)}
      >
        {children}
      </motion.div>
    );
  },
);

SlideFromLeft.displayName = "SlideFromLeft";

export default SlideFromLeft;
