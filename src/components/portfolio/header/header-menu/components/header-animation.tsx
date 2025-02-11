"use client";

import { motion } from "motion/react";

export default function HeaderAnimation({ children }: React.PropsWithChildren) {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        translateY: ["-9999px", 0],
      }}
      transition={{
        duration: 1,
      }}
      className="absolute top-[.23rem] left-[3.6rem] right-[3.6rem] flex justify-between items-center"
    >
      {children}
    </motion.div>
  );
}
