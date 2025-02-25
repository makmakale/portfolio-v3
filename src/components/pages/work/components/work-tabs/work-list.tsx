"use client";

import * as React from "react";
import { TabsList, TabsTrigger } from "work/components/ui/tabs";
import { useWorkTabs } from "work/lib/work.store";

export default function WorkList() {
  const { data } = useWorkTabs();

  return (
    <TabsList>
      {data.map((work) => (
        <TabsTrigger key={`company-${work.id}`} value={work.id}>
          {work.title}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}
