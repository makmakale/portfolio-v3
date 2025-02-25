"use client";

import { InnerTabsList, InnerTabsTrigger } from "work/components/ui/tabs";
import { useWorkTabs } from "work/lib/work.store";
import { TWorkDetails } from "work/lib/work.data";

export default function DetailsList() {
  const { activeWork } = useWorkTabs();

  const tabs: TWorkDetails[] = activeWork.children
    ? [{ id: "about", title: "About" }, ...activeWork.children]
    : [{ id: "about", title: "About" }];

  return (
    <InnerTabsList>
      {tabs.map((tab) => (
        <InnerTabsTrigger key={`company-${tab.id}`} value={tab.id}>
          {tab.title}
        </InnerTabsTrigger>
      ))}
    </InnerTabsList>
  );
}
