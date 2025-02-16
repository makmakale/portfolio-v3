"use client";

import * as React from "react";

export const useTimer = (callback: () => void, delay: number) => {
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const [start, setStart] = React.useState(new Date().getTime());
  const [remaining, setRemaining] = React.useState(delay);

  const pause = React.useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    setRemaining(new Date().getTime() - start);
  }, [start]);

  const resume = React.useCallback(() => {
    setStart(new Date().getTime());
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(callback, remaining);
    setRemaining(delay);
  }, [callback, remaining, delay]);

  React.useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return [pause, resume];
};
