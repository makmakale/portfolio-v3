"use client";

import * as React from "react";
import { motion } from "motion/react";
import { animate, cn } from "@/lib/utils";

interface ISlideFromBottomProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  scale?: boolean;
}

const SlideFromBottom = React.forwardRef<HTMLDivElement, ISlideFromBottomProps>(
  ({ className, delay = 0.5, scale = true, children }, ref) => {
    const slideFromBottom = {
      initial: { opacity: 0, y: "100%" },
      animate: {
        opacity: [0, 1],
        y: ["100%", 0],
        scaleY: scale ? [1, 0.85, 1, 0.9, 1] : undefined,
        transition: {
          delay: delay,
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
        ref={ref}
        {...animate(slideFromBottom)}
        className={cn("origin-top", className)}
      >
        {children}
      </motion.div>
    );
  },
);

SlideFromBottom.displayName = "SlideFromBottom";

export default SlideFromBottom;
