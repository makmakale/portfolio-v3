"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import Image, { ImageProps } from "next/image";
import { DEFAULT_COLUMNS } from "skills/lib/skill.data";

const animation = {
  initial: { top: "100%" },
  animate: { top: 0 },
};

const SkillList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { columns?: number }
>(({ columns = DEFAULT_COLUMNS, className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn("relative grid", className)}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {children}
    </div>
  );
});
SkillList.displayName = "SkillList";

const SkillListItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & MotionProps
>(({ className, children, ...props }, ref) => {
  return (
    <div className="p-[0.06rem] aspect-[3/4] -mb-1">
      <motion.div
        ref={ref}
        {...props}
        initial="initial"
        animate="initial"
        whileHover="animate"
        className={cn(
          "relative rounded-[.2rem] border-[.04rem] border-black pointer-events-auto",
          "bg-neutral-700 p-1.5 h-[2.2rem]",
          "hover:ring-[0.06rem] hover:ring-yellow-300",
          "before:rounded-[.16rem]",
          "before:absolute before:inset-[0.03rem_0.03rem_0] before:shadow-[-0.03rem_-0.03rem_rgba(200,200,200,0.15)]",
          className,
        )}
      >
        {children}
      </motion.div>
    </div>
  );
});
SkillListItem.displayName = "SkillListItem";

const SkillListItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "relative size-full rounded-[.14rem] overflow-hidden",
        "shadow-[inset_0_0_0.3rem] shadow-black bg-skill-card",
        "flex flex-col justify-center items-center",
        className,
      )}
    >
      {children}
    </div>
  );
});
SkillListItemContent.displayName = "SkillListItemContent";

const SkillListItemImage = React.forwardRef<
  HTMLImageElement,
  ImageProps & { containerClassName?: string }
>(({ src, alt, containerClassName, className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "relative aspect-square w-[1rem] overflow-hidden",
        containerClassName,
      )}
    >
      <Image
        ref={ref}
        src={src}
        alt={alt}
        {...props}
        fill
        className={cn(
          "absolute object-cover",
          "pointer-events-none select-none",
          className,
        )}
      />
    </div>
  );
});
SkillListItemImage.displayName = "SkillListItemImage";

const SkillListItemHoverContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & MotionProps
>(({ className, children, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      {...props}
      variants={animation}
      className={cn(
        "absolute top-full size-full z-10",
        "bg-black/80 grid place-items-center",
        "font-bold text-center transition-transform",
        className,
      )}
    >
      {children}
    </motion.div>
  );
});
SkillListItemHoverContent.displayName = "SkillListItemHoverContent";

const SkillListItemLevel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { level: number }
>(({ level, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn("relative w-full py-1 mt-1 z-0", className)}
    >
      <div
        className={cn(
          "absolute inset-[0_-0.1rem_0_-0.1rem]",
          "bg-gradient-to-b from-neutral-800 from-40% via-black to-neutral-950 to-50%",
        )}
      />
      <div className="relative grid grid-cols-4 mx-1 h-full place-content-center">
        {Array.from({ length: 4 }).map((_, i) => {
          return (
            <div
              key={`level-${i + 1}`}
              className={cn(
                "bg-neutral-400 z-10 h-[0.14rem] -skew-x-12 rounded-[.06rem]",
                "border-[0.04rem] border-black",
                i + 1 <= level && "bg-yellow-400",
              )}
            />
          );
        })}
      </div>
    </div>
  );
});
SkillListItemLevel.displayName = "SkillListItemLevel";

const SkillListEmptyItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <SkillListItem className="hover:ring-0">
      <SkillListItemContent>
        <div
          ref={ref}
          {...props}
          className={cn("relative aspect-square w-[0.8rem] mb-4", className)}
        >
          <div
            className={cn(
              "absolute w-[1.2rem] h-[0.1rem] rounded-full bg-neutral-600",
              "left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -rotate-45 z-10",
              "shadow-[0_0_0.04rem] shadow-black/60",
            )}
          />
          <div
            className={cn(
              "absolute w-[0.6rem] h-[0.1rem] rounded-full bg-neutral-600",
              "origin-left left-0 top-0 rotate-45",
              "-mt-0.5",
              "rounded-tr-none rounded-br-none",
              "shadow-[0_0_0.04rem] shadow-black/60",
            )}
          />
          <div
            className={cn(
              "absolute w-[0.42rem] h-[0.1rem] rounded-full bg-neutral-600",
              "origin-right right-0 bottom-0 rotate-45",
              "-mb-0.5",
              "rounded-tl-none rounded-bl-none",
              "shadow-[0_0_0.04rem] shadow-black/60",
            )}
          />
        </div>

        <div
          className={cn(
            "absolute w-full bottom-0 py-1 bg-black/40",
            "text-center text-[.16rem] font-extrabold text-neutral-700 uppercase",
            "[text-shadow:0_0_0.02rem_black]",
            "pointer-events-none select-none",
          )}
        >
          - Empty -
        </div>
      </SkillListItemContent>
    </SkillListItem>
  );
});
SkillListEmptyItem.displayName = "SkillListEmptyItem";

export {
  SkillList,
  SkillListItem,
  SkillListItemContent,
  SkillListItemImage,
  SkillListItemHoverContent,
  SkillListItemLevel,
  SkillListEmptyItem,
};
