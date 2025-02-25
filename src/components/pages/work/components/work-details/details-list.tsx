"use client";

import * as React from "react";
import { InnerTabsList, TabsTrigger } from "work/components/ui/tabs";

export default function DetailsList() {
  const [activeValue, setActiveValue] = React.useState("0");

  return (
    <InnerTabsList>
      {Array.from({ length: 15 }).map((_, i) => (
        <TabsTrigger
          key={`company-${i}`}
          value={i.toString()}
          activeValue={activeValue}
          onClick={() => setActiveValue(i.toString())}
        >
          Detail {i + 1}
        </TabsTrigger>
      ))}
    </InnerTabsList>
  );
}
