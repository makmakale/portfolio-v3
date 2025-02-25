"use client";

import curve from "@/assets/images/portfolio/curve.png";
import man from "@/assets/images/portfolio/man.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const targetDate = new Date("2025-03-14").getTime();

interface ITimeItemProps extends React.HTMLProps<HTMLDivElement> {
  label: string;
}

const TimeItem = ({ label, className, children, ...props }: ITimeItemProps) => {
  return (
    <div
      className={cn(
        "relative rounded-[.1rem] bg-neutral-200 text-black font-bold text-[.36rem] text-center aspect-square grid place-items-center pb-2 overflow-hidden shadow-[0_0_0.2rem_black]",
        className,
      )}
      {...props}
    >
      <span className="text-[.13rem] bg-yellow-400 absolute bottom-0 left-0 right-0 py-[.02rem]">
        {label}
      </span>
      {children}
    </div>
  );
};

export default function ComingSoon() {
  const [time, setTime] = useState<number>(new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(targetDate - new Date().getTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative size-full rounded-[0.2rem] bg-[#312747] p-4 overflow-hidden">
      <h2 className="uppercase font-dela text-[.64rem]">Coming soon</h2>
      <p className="my-4">
        Page is under construction. Please, visit it later.
      </p>
      <p className="my-2 font-bold">Approximate time:</p>
      <div className="grid grid-cols-4 gap-4 w-[5rem]">
        <TimeItem label={"Days"}>{format(time, "dd")}</TimeItem>
        <TimeItem label={"Hours"}>{format(time, "hh")}</TimeItem>
        <TimeItem label={"Minutes"}>{format(time, "mm")}</TimeItem>
        <TimeItem label={"Seconds"}>{format(time, "ss")}</TimeItem>
      </div>

      <Image
        src={curve.src}
        alt={"curve"}
        width={800}
        height={600}
        className="absolute bottom-0 right-0"
      />

      <Image
        src={man.src}
        alt={"man"}
        width={400}
        height={400}
        className="absolute bottom-4 right-4 size-[4.5rem]"
      />

      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0.5rem_black] z-10" />
    </div>
  );
}
