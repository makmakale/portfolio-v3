"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type BouncyTextProps = {
  text: string;
  className?: string;
  shadowSize?: string;
  shadowColor?: string;
};

const DEFAULT_SHADOW_SIZE = "0.02rem";
const DEFAULT_SHADOW_COLOR = "hsl(var(--background))";

export default function BouncyText({
  text,
  className,
  shadowSize = DEFAULT_SHADOW_SIZE,
  shadowColor = DEFAULT_SHADOW_COLOR,
}: BouncyTextProps) {
  return (
    <div
      className={cn(
        "flex items-end z-[60]",
        "text-neutral-200 font-bold text-[0.3rem]",
        className,
      )}
    >
      {text.split("").map((letter, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, "-20%", 0, 0, 0],
            transition: {
              duration: 1,
              repeat: Infinity,
              delay: 0.1 * (i + 1),
              repeatDelay: 0.5,
            },
          }}
          style={{
            textShadow:
              // left bottom
              `-${shadowSize} ${shadowSize} ${shadowColor},` +
              // right bottom
              `${shadowSize} ${shadowSize} ${shadowColor},` +
              // left top
              `-${shadowSize} -${shadowSize} ${shadowColor},` +
              // right top
              `${shadowSize} -${shadowSize} ${shadowColor}`,
            // textShadow,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}
