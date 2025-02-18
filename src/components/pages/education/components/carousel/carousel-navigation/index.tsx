"use client";

import * as React from "react";
import { useEducationStore } from "education/components/carousel/carousel.store";
import { cn } from "@/lib/utils";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import css from "education/components/carousel/carousel-navigation/carousel-navigation.module.scss";

const CarouselButtonsGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(css.buttonsGroup, className)} {...props} />
  );
});
CarouselButtonsGroup.displayName = "CarouselButtonsGroup";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { data, swipe } = useEducationStore();
  const disabled = data.length === 0;

  return (
    <button
      ref={ref}
      className={cn(css.buttonDefault, css.previous, className)}
      disabled={disabled}
      onClick={() => swipe(-1)}
      {...props}
    >
      <HiChevronLeft />
      <span className="sr-only">Previous</span>
    </button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { data, swipe } = useEducationStore();
  const disabled = data.length === 0;

  return (
    <button
      ref={ref}
      className={cn(css.buttonDefault, css.next, className)}
      disabled={disabled}
      onClick={() => swipe(1)}
      {...props}
    >
      <HiChevronRight />
      <span className="sr-only">Next</span>
    </button>
  );
});
CarouselNext.displayName = "CarouselNext";

export { CarouselButtonsGroup, CarouselPrevious, CarouselNext };
