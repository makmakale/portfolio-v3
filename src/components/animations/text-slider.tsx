"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";

type TextSliderProps = {
  text: string;
  repeat: number;
  duration: number;
};

const TextSlider = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const parentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={parentRef}
      className={cn(
        "absolute inset-0 overflow-hidden select-none z-0",
        className,
      )}
      role="region"
      aria-roledescription="carousel"
      {...props}
    >
      {children}
    </div>
  );
};

const TextSliderItem = ({
  text,
  duration,
  repeat,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & TextSliderProps & MotionProps) => {
  const words = Array.from({ length: repeat }).fill(text);

  return (
    <motion.div
      className="flex flex-nowrap gap-[1rem] h-full w-fit"
      animate={{
        translate: `calc(-50% - 0.5rem)`,
      }}
      transition={{
        ease: "linear",
        duration,
        repeat: Infinity,
      }}
      {...props}
    >
      {words.map((word, i) => (
        <div
          key={i}
          className={cn(
            "uppercase italic text-white/5 -mt-[0.3rem]",
            className,
          )}
        >
          {word as string}
        </div>
      ))}
    </motion.div>
  );
};

export { TextSlider, TextSliderItem };
