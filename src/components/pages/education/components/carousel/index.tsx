"use client";

import * as React from "react";
import { useEducationStore } from "education/components/carousel/carousel.store";
import { useTimer } from "@/lib/hooks/useTimer";

export default function Carousel({ children }: { children?: React.ReactNode }) {
  const { swipe, currentIndex, dialogClosed } = useEducationStore();

  const [pause, resume] = useTimer(() => swipe(1), 6000);

  React.useEffect(() => {
    if (!dialogClosed) {
      pause();
    } else {
      resume();
    }
  }, [currentIndex, dialogClosed, pause, resume]);

  return <div className="relative size-full">{children}</div>;
}
