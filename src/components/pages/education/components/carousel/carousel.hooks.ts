"use client";

import * as React from "react";
import { useEducationStore } from "education/components/carousel/carousel.store";

export const useCarouselTimer = (delay: number) => {
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const startRef = React.useRef<number>(new Date().getTime());
  const remainingRef = React.useRef<number>(delay);
  const { swipe, dialogClosed, currentIndex } = useEducationStore();

  const pause = React.useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }
    remainingRef.current = new Date().getTime() - startRef.current;
  }, []);

  const play = React.useCallback((duration: number) => {
    startRef.current = new Date().getTime();
    timerRef.current = setTimeout(() => {
      swipe(1);
      remainingRef.current = delay;
    }, duration);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (dialogClosed) {
      play(remainingRef.current);
    } else {
      pause();
    }

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, dialogClosed]);
};
