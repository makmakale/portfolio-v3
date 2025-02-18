"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface ButtonWithKeyCapProps extends ButtonProps {
  children?: React.ReactNode;
}
interface KeyCapProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function ButtonWithKeyCap({
  className,
  children,
  ...props
}: ButtonWithKeyCapProps) {
  return (
    <Button
      variant="social"
      className={cn("p-1 gap-0 text-[.16rem]", className)}
      {...props}
    >
      {children}
    </Button>
  );
}

function ButtonKeyCap({ className, children, ...props }: KeyCapProps) {
  return (
    <div
      className={cn(
        "relative bg-black border-[.05rem] border-secondary rounded-full aspect-square overflow-hidden",
        "text-[.8em] text-red-700 p-0.5 font-bold inline-flex justify-center items-center",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function ButtonText({ className, children, ...props }: KeyCapProps) {
  return (
    <div
      className={cn(
        "relative px-1 font-extrabold italic group-hover:[text-shadow:0_0_0.05rem_rgba(255,255,255,.5)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { ButtonWithKeyCap, ButtonKeyCap, ButtonText };
