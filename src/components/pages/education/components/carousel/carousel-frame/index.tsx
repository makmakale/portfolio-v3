"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEducationStore } from "education/components/carousel/carousel.store";
import Image from "next/image";
import { IMAGE_SIZES } from "@/lib/constants/images";
import css from "education/components/carousel/carousel-frame/carousel-frame.module.scss";
import {
  animateScreenVariants,
  animateSlideVariants,
} from "education/components/carousel/carousel-frame/carousel-frame.constants";
import { animate } from "@/lib/utils";

export default function CarouselFrame({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { direction, currentItem, currentIndex } = useEducationStore();

  return (
    <motion.div className={css.screen} {...animate(animateScreenVariants)}>
      <div className={css.innerScreen}>
        <div className={css.blankScreen}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              className="relative size-full"
              custom={direction}
              {...animate(animateSlideVariants)}
              transition={{ duration: 1, ease: [0.56, 0.03, 0.12, 1.04] }}
            >
              {currentItem?.image ? (
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  loading="lazy"
                  fill
                  sizes={IMAGE_SIZES}
                  className="absolute object-cover"
                />
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {children}
    </motion.div>
  );
}
