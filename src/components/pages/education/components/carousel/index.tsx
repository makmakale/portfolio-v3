"use client";

import * as React from "react";
import { useEducationStore } from "education/components/carousel/carousel.store";

export default function Carousel({ children }: { children?: React.ReactNode }) {
  const { swipe, currentIndex } = useEducationStore();
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    timerRef.current = setTimeout(() => {
      swipe(1);
    }, 6000);

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [currentIndex, swipe]);

  return <div className="relative size-full">{children}</div>;
}
