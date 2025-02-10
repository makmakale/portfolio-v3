"use client";

import * as React from "react";
import { CSSProperties } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import closeBtn from "@/assets/images/portfolio/close-btn.png";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "opacity-[0.6]",
      "[background-size:0.14rem_0.14rem]",
      "bg-[repeating-linear-gradient(45deg,rgba(50,50,50,0.2)0,rgba(50,50,50,0.2)0.05rem,rgba(255,255,255,0.1)0,rgba(255,255,255,0.1)50%)]",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        "border-[0.06rem] border-card rounded-[0.4rem] rounded-tr-none",
        "shadow-[inset_0_0_0_0.06rem] shadow-background",
        "bg-background/75 overflow-hidden",
        className,
      )}
      {...props}
      style={
        {
          "--primary": "73 100% 35%",
        } as CSSProperties
      }
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "relative px-[0.4rem] py-[0.2rem] h-[1rem] bg-card overflow-hidden",
      "flex justify-between items-center",
      "border-[0.06rem] border-background border-b-0 rounded-tl-[0.34rem]",
      "before:absolute before:inset-0 before:[background-size:0.13rem_0.13rem]",
      "before:shadow-[inset_0_-0.5rem_0.4rem]",
      "before:bg-[repeating-linear-gradient(45deg,transparent_0,#222_25%,#222_0,transparent_50%),repeating-linear-gradient(135deg,transparent_0,#000_25%,#000_0,transparent_50%)]",
      "before:shadow-[rgba(0,0,0,0.7)]",
      className,
    )}
    {...props}
  >
    {children}
    <DialogPrimitive.Close
      className={cn(
        "ml-auto w-[1.1rem] h-[0.75rem] z-10 bg-no-repeat bg-center bg-contain",
      )}
      style={{
        backgroundImage: `url(${closeBtn.src})`,
      }}
    >
      <span className="sr-only">Close</span>
    </DialogPrimitive.Close>
  </div>
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-[.42rem] font-teko font-semibold leading-none overflow-hidden truncate z-10",
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      "relative p-[.28rem]",
      "text-[0.21rem] text-secondary-foreground",
      className,
    )}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
