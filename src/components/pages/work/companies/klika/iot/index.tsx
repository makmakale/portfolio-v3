import { FC } from "react";
import { TWorkDetails } from "work/lib/work.types";

import dynamic from "next/dynamic";

const Description = dynamic(() => import("./description")) as FC;
const Team = dynamic(() => import("./team")) as FC;
const Stack = dynamic(() => import("./stack")) as FC;
const Todo = dynamic(() => import("./todo")) as FC;

export const iot: TWorkDetails = {
  id: "iot",
  title: "IoT.ON",
  children: [
    {
      id: "description",
      component: Description,
    },
    {
      id: "team",
      component: Team,
    },
    {
      id: "stack",
      component: Stack,
    },
    {
      id: "todo",
      component: Todo,
    },
  ],
};
