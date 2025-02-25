"use client";

import * as React from "react";
import { TabsList, TabsTrigger } from "work/components/ui/tabs";

export default function WorkList() {
  const [activeValue, setActiveValue] = React.useState("0");

  return (
    <TabsList>
      {Array.from({ length: 15 }).map((_, i) => (
        <TabsTrigger
          key={`company-${i}`}
          value={i.toString()}
          activeValue={activeValue}
          onClick={() => setActiveValue(i.toString())}
        >
          Company {i + 1}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}
