"use client";

import { motion } from "motion/react";

export default function Loader() {
  return (
    <div
      id="loader"
      className="fixed inset-0 z-[9999] bg-background text-foreground font-dela"
    >
      <motion.div
        animate={{ rotateZ: [0, -2, 2, -5, 5, 0] }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
        className="absolute bottom-[4vmin] right-[9vmax] uppercase italic text-[3vmax] leading-none"
      >
        <div>Loading</div>
        <div className="text-[1.2vmax]">Maksim&apos;s Portfolio</div>
      </motion.div>
    </div>
  );
}
