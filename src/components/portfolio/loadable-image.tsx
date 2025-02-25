"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { animate, cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

export default function LoadableImage({ src, alt, ...props }: ImageProps) {
  const [isImageLoading, setIsImageLoading] = React.useState(true);

  const opacity = {
    exit: { opacity: 0 },
  };

  const onLoad = () => {
    setIsImageLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isImageLoading && (
          <motion.div
            {...animate(opacity)}
            className={cn(
              "absolute inset-0 bg-background z-[90]",
              "grid place-items-center",
            )}
          />
        )}
      </AnimatePresence>
      <Image
        src={src}
        alt={alt}
        {...props}
        onLoad={onLoad}
        onError={onLoad}
        loading="lazy"
        fill
        className={cn("absolute inset-0 z-0 object-cover bg-center")}
      />
    </>
  );
}
