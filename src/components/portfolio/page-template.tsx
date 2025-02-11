"use client";

import * as React from "react";
import { PageType } from "@/lib/constants/pages";
import { AnimatePresence, motion } from "motion/react";
import { animate, cn } from "@/lib/utils";

interface IPageTemplateProps extends React.PropsWithChildren {
  pageConfig: PageType;
}

export default function PageTemplate({
  pageConfig,
  children,
}: IPageTemplateProps) {
  const opacity = {
    animate: {
      opacity: [1, 0],
    },
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  };

  React.useEffect(() => {
    const landing = document.getElementById("landing")!;

    landing.style.setProperty("--primary", pageConfig.primaryColor);
    landing.style.setProperty(
      "--footer-background",
      pageConfig.footerBackground,
    );
    // eslint-disable-next-line
  }, [pageConfig.id]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageConfig.id}
        layout
        className="landing-section"
        style={{
          background: `url(${pageConfig.bgUrl}) no-repeat center/cover`,
        }}
      >
        <motion.div
          {...animate(opacity)}
          className={cn("fixed left-0 top-0 size-full bg-black z-[90]")}
        />

        <section>{children}</section>
      </motion.div>
    </AnimatePresence>
  );
}
