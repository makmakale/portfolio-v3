import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Variants } from "framer-motion";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const animate = (variants: Variants) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
  };
};

export function getDatePeriod(startDate: string, endDate: string): string {
  const period = {
    startDate: new Date(startDate),
    endDate: new Date(endDate),
  };

  const formatType = "MMM yyyy";
  const formattedRange = `${format(period.startDate, formatType)} - ${format(period.endDate, formatType)}`;

  return formattedRange;
}
