import { DateRangeType } from "@/lib/types";
import { getDatePeriod, getDateRange } from "@/lib/utils";

export default function Period({ period }: { period?: DateRangeType }) {
  if (!period) return null;

  return (
    <p>
      <span className="font-semibold mr-0.5">Period:</span>
      {getDatePeriod(period.startDate, period.endDate)}
      {period.endDate ? (
        <span className="text-[0.16rem] italic ml-0.5">
          ({getDateRange(period.startDate, period.endDate)})
        </span>
      ) : null}
    </p>
  );
}
