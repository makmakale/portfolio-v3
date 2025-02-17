"use client";

import * as React from "react";

export const useTimer = (callback: () => void, delay: number) => {
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const startRef = React.useRef<number>(new Date().getTime());
  const remainingRef = React.useRef<number>(delay);
  const remainingHasChangedRef = React.useRef<boolean>(false);

  const pause = React.useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    remainingRef.current = new Date().getTime() - startRef.current;
    remainingHasChangedRef.current = true;
  }, []);

  const resume = React.useCallback(() => {
    startRef.current = new Date().getTime();
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(callback, remainingRef.current);
    remainingHasChangedRef.current = false;
  }, [callback]);

  if (!remainingHasChangedRef.current && remainingRef.current < delay) {
    remainingRef.current = delay;
  }

  console.group("useTimer");
  console.log("start", startRef.current);
  console.log("remaining", remainingRef.current);
  console.groupEnd();

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
