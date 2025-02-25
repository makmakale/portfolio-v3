import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Variants } from "framer-motion";
import {
  addMonths,
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

export function getDatePeriod(startDate: string, endDate: string): string {
  const period = {
    startDate: new Date(startDate),
    endDate: new Date(endDate),
  };

  const formatType = "MMM yyyy";
  const formattedRange = `${format(period.startDate, formatType)} - ${format(period.endDate, formatType)}`;

  return formattedRange;
}

export function getDateRange(startDate: string, endDate: string): string {
  const period = {
    startDate: new Date(startDate),
    endDate: new Date(endDate),
  };

  let years = differenceInYears(period.endDate, period.startDate);
  let months =
    differenceInMonths(
      period.endDate,
      addMonths(period.startDate, years * 12),
    ) + 1;

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
