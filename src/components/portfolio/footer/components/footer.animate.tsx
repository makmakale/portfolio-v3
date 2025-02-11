"use client";

import { motion } from "motion/react";
import css from "../footer.module.scss";

export default function FooterAnimate({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <motion.footer
      animate={{
        opacity: [0, 1],
        translateY: ["1.64rem", 0],
      }}
      transition={{
        delay: 1.2,
      }}
      className={css.footer}
    >
      {children}
    </motion.footer>
  );
}
