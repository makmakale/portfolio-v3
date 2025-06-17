import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Variants } from "framer-motion";
import {
  addMonths, differenceInCalendarMonths,
  differenceInMonths,
  differenceInYears,
  format,
} from "date-fns";

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

export function getDatePeriod(startDate: string, endDate?: string): string {
  const period = {
    startDate: new Date(startDate),
    endDate: endDate ? new Date(endDate) : undefined,
  };

  const formatType = "MMM yyyy";
  const formattedRange = `${format(period.startDate, formatType)} - ${period.endDate ? format(period.endDate, formatType) : "now"}`;

  return formattedRange;
}

export function getDateRange(startDate: string, endDate: string): string {
  const period = {
    startDate: new Date(startDate),
    endDate: new Date(endDate),
  };

  let years = differenceInYears(period.endDate, period.startDate);
  let months = differenceInCalendarMonths(period.endDate, period.startDate) % 12;

  if (months === 12) {
    months = 0;
    years += 1;
  }

  if (years === 0 && months > 0) {
    const formattedPeriod = `${months} month${months > 1 ? "s" : ""}`;
    return formattedPeriod;
  }

  const formattedPeriod = `${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""}`;
  return formattedPeriod;
}
