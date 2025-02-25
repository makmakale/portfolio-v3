"use client";

import { useWorkTabs } from "work/lib/work.store";

export default function DetailsContent() {
  const { activeWork } = useWorkTabs();

  return (
    <div className="relative rounded-[.2rem] h-full overflow-hidden text-[0.21rem] bg-black p-1">
      <div>
        <pre>{JSON.stringify(activeWork || {}, null, 2)}</pre>
      </div>
    </div>
  );
}
