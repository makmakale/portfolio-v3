"use client";

import { useEducationStore } from "education/components/carousel/carousel.store";
import { cn } from "@/lib/utils";
import css from "education/components/carousel/carousel-indicators/carousel-indicators.module.scss";

export default function CarouselIndicators() {
  const { data, currentIndex, swipeTo } = useEducationStore();
  const indicators = Array.from({ length: data.length });

  return (
    <div
      role="group"
      aria-roledescription="buttons"
      className={css.indicatorsGroup}
    >
      {indicators.map((_, i) => (
        <button
          key={i}
          className={cn(css.indicator, i === currentIndex && "!bg-primary")}
          onClick={() => swipeTo(i)}
        />
      ))}
    </div>
  );
}
