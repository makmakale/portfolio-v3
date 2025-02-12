"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export default function Scrollable({
  scrollResetValue,
  orientation = "vertical",
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  scrollResetValue?: string | number;
  orientation?: "horizontal" | "vertical";
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!ref.current) return;
    ref.current?.scrollTo(0, 0);
  }, [scrollResetValue]);

  return (
    <div className="p-1 h-full overflow-hidden">
      <div
        ref={ref}
        className={cn(
          orientation === "vertical"
            ? "vertical-scroll pr-1"
            : "horizontal-scroll pb-1",
          className,
        )}
        {...props}
      />
    </div>
  );
}
