"use client";

import * as React from "react";
import { useEducationStore } from "education/components/carousel/carousel.store";
import { AnimatePresence, motion, MotionProps } from "motion/react";
import { animate, cn } from "@/lib/utils";
import {
  animateDescription,
  animateTitle,
} from "education/components/carousel/carousel-content/carousel-content.constants";
import css from "education/components/carousel/carousel-content/carousel-content.module.scss";
import EducationPreview from "education/components/education-preview";
import EducationDescription from "education/components/education-description";

export default function CarouselContent() {
  const { currentItem } = useEducationStore();
  if (!currentItem) return null;

  return (
    <div className={css.slideContent}>
      <AnimatePresence mode="wait">
        <>
          <CarouselContentTitle key={`title-${currentItem.id}`}>
            {currentItem.title}
          </CarouselContentTitle>
          <EducationDescription
            key={`description-${currentItem.id}`}
            data={currentItem}
          />
          <EducationPreview key={`dialog-${currentItem.id}`} />
        </>
      </AnimatePresence>
    </div>
  );
}

const CarouselContentTitle = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & MotionProps) => {
  return (
    <div className="overflow-hidden">
      <motion.h2
        className={cn(css.slideTitle, className)}
        {...animate(animateTitle)}
        {...props}
      >
        {children}
      </motion.h2>
    </div>
  );
};

const CarouselContentDescription = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & MotionProps) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        layout
        className={cn(css.slideDescription, className)}
        {...animate(animateDescription)}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
};

export { CarouselContentTitle, CarouselContentDescription };
