"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import css from "./card.module.scss";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={cn(css.card, className)}>
      <div className={css.cardInnerCut} {...props} />
      {children}
    </div>
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} {...props} className={cn(css.cardHeader, className)} />
));
CardHeader.displayName = "CardHeader";

const CardSubHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} {...props} className={cn(css.cardSubHeader, className)} />
));
CardSubHeader.displayName = "CardSubHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} {...props} className={cn(css.cardTitle, className)} />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={css.cardContentWrapper}>
    <div className={cn(css.cardContent, className)} {...props}>
      {children}
    </div>
  </div>
));
CardContent.displayName = "CardContent";

const CardInputField = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative bg-background text-foreground",
      "rounded-full px-1.5 py-1",
      "inline-flex items-center truncate",
      "shadow-[inset_0.02rem_0.02rem_0.02rem_rgba(0,0,0,0.2),inset_-0.02rem_-0.02rem_0.02rem_rgba(255,255,255,0.15)]",
      className,
    )}
    {...props}
  />
));
CardInputField.displayName = "CardInputField";

export {
  Card,
  CardHeader,
  CardSubHeader,
  CardTitle,
  CardContent,
  CardInputField,
};
