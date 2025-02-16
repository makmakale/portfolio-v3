"use client";

import * as React from "react";
import { TiChevronRight } from "react-icons/ti";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ReadMoreButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="readMore"
        className={cn(
          className,
          "w-[2.36rem] h-[.64rem] group bg-background inline-flex justify-start items-center",
        )}
        {...props}
      >
        <div className="absolute w-[.39rem] h-[.38rem] bg-[#858585] rounded-full right-[.1rem] group-hover:w-[2.12rem] transition-[width]" />
        <TiChevronRight className="absolute right-[.15rem] top-1/2 -translate-y-1/2 text-background !size-[.27rem]" />
        <div className="relative text-[#858585] group-hover:text-black">
          <div className="z-10">{children || "Read more"}</div>
        </div>
      </Button>
    );
  },
);
ReadMoreButton.displayName = "ReadMoreButton";

export default ReadMoreButton;
