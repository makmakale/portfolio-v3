"use client";

import React from "react";
import {
  DEFAULT_ASPECT_RATIO,
  DEFAULT_FRAME_ASPECT_RATIO,
  DEFAULT_SCREEN_DELTA,
} from "@/lib/constants/layout";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/portfolio/header"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/components/portfolio/navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/portfolio/footer"), {
  ssr: false,
});

export default function Layout({ children }: React.PropsWithChildren) {
  React.useEffect(() => {
    const handleResize = () => {
      const layout = document.getElementById("layout")!;

      const { innerWidth, innerHeight } = window;
      const aspectHeight = Math.min(
        innerWidth / DEFAULT_ASPECT_RATIO,
        innerHeight,
      );
      const aspectWidth = Math.min(
        aspectHeight * DEFAULT_FRAME_ASPECT_RATIO,
        innerWidth,
      );

      document.documentElement.style.fontSize = `${aspectHeight / DEFAULT_SCREEN_DELTA}px`;

      const topOffset = (innerHeight - aspectHeight) / 2;
      const leftOffset = (innerWidth - aspectWidth) / 2;

      layout.style.width = `${aspectWidth}px`;
      layout.style.height = `${aspectHeight}px`;
      layout.style.left = `${leftOffset}px`;
      layout.style.top = `${topOffset}px`;
    };

    const load = async () => {
      handleResize();
      setTimeout(() => {
        const loader = document.getElementById("loader")!;
        loader.style.display = "none";
      }, 1000);
    };

    load();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="fixed-section">
        <Header />
        <Navbar />
        <Footer />
      </div>

      {children}
    </>
  );
}
