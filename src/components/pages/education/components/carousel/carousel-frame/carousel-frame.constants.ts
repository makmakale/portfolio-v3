import { SwipeDirectionType } from "@/lib/types";

export const animateScreenVariants = {
  initial: { x: -40 },
  animate: { x: 0 },
  exit: { x: 40 },
  transition: { duration: 1 },
};

export const animateSlideVariants = {
  initial: (direction: SwipeDirectionType) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  animate: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: SwipeDirectionType) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};
