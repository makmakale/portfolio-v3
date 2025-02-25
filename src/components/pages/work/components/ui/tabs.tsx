"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import Scrollable from "@/components/ui/scrollable";

const Tabs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    ref={ref}
    className="grid grid-cols-[3.6rem_1fr] gap-3 h-full"
    {...props}
  />
));
Tabs.displayName = "Tabs";

const TabListDirection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { reverse?: boolean }
>(({ reverse, ...props }, ref) => (
  <div
    ref={ref}
    className="py-1 px-0.5 bg-black h-[.5rem] flex justify-center items-center"
    {...props}
  >
    <div className="rounded-full bg-[#323232] w-full h-[.32rem] grid place-items-center">
      <svg height="15" width="40" className="fill-black">
        {reverse ? (
          <polygon points="0,0 20,15 40,0" />
        ) : (
          <polygon points="0,15 20,0 40,15" />
        )}
        {/*Sorry, your browser does not support inline SVG.*/}
        {reverse ? "Up" : "Down"}
      </svg>
    </div>
  </div>
));
TabListDirection.displayName = "TabListDirection";

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    className={cn(
      "relative grid grid-rows-[0.5rem_1fr_0.5rem]",
      "bg-black rounded-[.2rem]",
      "border-[0.06rem] border-black h-full overflow-hidden",
    )}
  >
    <TabListDirection />

    <div className="h-full overflow-hidden bg-gradient-to-br from-[#262626] to-[#141414]">
      <Scrollable
        className={cn(
          "bg-gradient-to-br from-[#262626] to-[#141414]",
          "p-0 scroll-hidden",
        )}
      >
        <div
          ref={ref}
          className={cn("flex flex-col gap-0.5", className)}
          {...props}
        >
          {children}
        </div>
      </Scrollable>
    </div>

    <TabListDirection reverse />
  </div>
));
TabsList.displayName = "TabsList";

const Trigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & {
    value: string;
    activeValue: string;
  }
>(({ value, activeValue, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "relative inline-flex transition-all px-3 py-2 pt-[0.24rem]",
        "font-extrabold italic line-clamp-2 leading-none",
        "after:absolute after:w-full after:h-[0.04rem] after:bg-white/5 after:left-0 after:top-0",
        "rounded-[.1rem]",
        "first:after:hidden data-[state=active]:after:hidden",
        value === activeValue &&
          "bg-gradient-to-br from-yellow-300 to-orange-500 text-black",
        className,
      )}
      {...props}
    />
  );
});
Trigger.displayName = "Trigger";

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & {
    value: string;
    activeValue: string;
  }
>(({ value, activeValue, ...props }, ref) => {
  return (
    <Trigger ref={ref} value={value} activeValue={activeValue} {...props} />
  );
});
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative rounded-[.2rem] text-[0.21rem] size-full overflow-hidden",
      "border-[0.06rem] border-black",
      "bg-gradient-to-br from-[#262626] to-[#141414]",
    )}
    {...props}
  >
    <div className="absolute inset-0 z-0 bg-striped" />

    <div className="relative bg-black h-[0.5rem] text-[#808080] px-2 py-1 font-bold text-[0.18rem] z-10">
      Work Description
    </div>

    <div
      className={cn(
        "relative p-2 pb-3 h-[calc(100%-0.5rem)] overflow-hidden",
        className,
      )}
    >
      {children}
    </div>
  </div>
));
TabsContent.displayName = "TabsContent";

const InnerTabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div className={cn("rounded-[.2rem] h-full overflow-hidden")}>
    <Scrollable className="p-0 scroll-hidden">
      <div
        ref={ref}
        className={cn("flex flex-col gap-0.5", className)}
        {...props}
      >
        {children}
      </div>
    </Scrollable>
  </div>
));
InnerTabsList.displayName = "InnerTabsList";

export { Tabs, TabsList, TabsTrigger, TabsContent, InnerTabsList };
