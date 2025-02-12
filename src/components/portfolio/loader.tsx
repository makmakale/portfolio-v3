"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Loader() {
  return (
    <div
      id="loader"
      className={cn(
        "fixed left-0 top-0 w-screen h-screen overflow-hidden z-[100]",
        "bg-black text-foreground",
      )}
    >
      <motion.div
        animate={{ rotateZ: [0, -2, 2, -5, 5, 0] }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
        className={cn(
          "absolute bottom-[4vmax] right-[6vmax]",
          "uppercase italic font-dela text-[3vmax] leading-none",
        )}
      >
        <div>Loading</div>
        <div className="text-[1.2vmax]">Maksim&apos;s Portfolio</div>
      </motion.div>
    </div>
  );
}
