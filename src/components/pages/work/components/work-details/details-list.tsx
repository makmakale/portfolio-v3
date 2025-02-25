"use client";

import { TWorkDetails } from "work/lib/work.types";
import { useWorkTabs } from "work/lib/work.store";

import { InnerTabsList, InnerTabsTrigger } from "work/components/ui/tabs";

type TDetailsTabs = Pick<TWorkDetails, "id" | "title">[];

export default function DetailsList() {
  const { activeWork } = useWorkTabs();

  const tabs: TDetailsTabs = activeWork.tabs;

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
