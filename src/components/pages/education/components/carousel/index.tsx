"use client";

import * as React from "react";
import { useCarouselTimer } from "education/components/carousel/carousel.hooks";

export default function Carousel({ children }: { children?: React.ReactNode }) {
  useCarouselTimer(6000);

  return <div className="relative size-full">{children}</div>;
}
