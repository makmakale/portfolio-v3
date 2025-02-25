"use client";

import * as React from "react";
import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

export default function TimeDisplay() {
  const [time, setTime] = React.useState("");
  const { locale } = Intl.DateTimeFormat().resolvedOptions();
  const isRu = locale === "ru" || locale === "ru-RU";

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        formatInTimeZone(new Date(), "Europe/Minsk", isRu ? "HH:mm" : "hh:mm"),
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRu]);

  if (!time) return null;

  return (
    <>
      <div className="font-teko font-bold text-[.46rem] tracking-wider">
        {time}
      </div>
      <div className="inline-flex font-bold text-[.16rem] text-neutral-600 truncate">
        {!isRu ? (
          <>
            <span className="uppercase">{format(new Date(), "aaaaa'm'")}</span>,{" "}
          </>
        ) : null}
        <span>Minsk</span>
      </div>
    </>
  );
}
