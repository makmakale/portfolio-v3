"use client";

import * as React from "react";
import { CSSProperties } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import backBtn from "@/assets/images/portfolio/back-btn.png";

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
      "absolute inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "[background-size:0.14rem_0.14rem]",
      "bg-[repeating-linear-gradient(45deg,rgba(20,20,20,1)0,rgba(20,20,20,1)0.05rem,rgba(0,0,0,1)0,rgba(0,0,0,1)50%)]",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const [container, setContainer] = React.useState<HTMLElement>();

  React.useEffect(() => {
    const c = document.getElementById("layout");
    if (c) {
      setContainer(c);
    }
  }, []);

  if (!container) return null;

  return (
    <DialogPortal container={container}>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        aria-describedby={undefined}
        className={cn(
          "absolute inset-0 z-[90] grid grid-rows-[1rem_auto_1rem]",
          "duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-bottom-[48%]",
          "overflow-hidden",
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
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "relative px-[0.4rem] py-[0.2rem] h-[1rem] bg-background overflow-hidden",
      "flex justify-between items-center",
      className,
    )}
    {...props}
  >
    <DialogPrimitive.Close
      className={cn(
        "mr-auto w-[1.1rem] h-[0.6rem] z-10 bg-no-repeat bg-center bg-contain",
      )}
      style={{
        backgroundImage: `url(${backBtn.src})`,
      }}
    >
      <span className="sr-only">Close</span>
    </DialogPrimitive.Close>
    {children}
  </div>
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "relative bottom-0 px-[0.4rem] py-[0.2rem] h-[1rem] bg-background overflow-hidden",
      "flex items-center",
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
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative grow p-[.28rem] overflow-hidden",
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
