"use client";

import { useWorkTabs } from "work/lib/work.store";
import Scrollable from "@/components/ui/scrollable";

export default function DetailsContent() {
  const { activeWork, activeDetail, page } = useWorkTabs();

  const Comp = activeDetail.component || (() => null);
  const scrollResetValue = `${activeWork.id}-${activeDetail.id}-${page}`;

  return (
    <div className="relative rounded-[.2rem] text-[0.21rem] bg-black p-1 flex flex-col gap-1 overflow-hidden">
      <div className="rounded-full whitespace-nowrap truncate font-bold text-[0.27rem] px-2 bg-[#313131] h-[.5rem] flex flex-none items-center">
        {activeWork.title}
      </div>

      <div className="grow pb-1 overflow-hidden">
        <Scrollable className="space-y-1" scrollResetValue={scrollResetValue}>
          <Comp />
        </Scrollable>
      </div>
    </div>
  );
}
