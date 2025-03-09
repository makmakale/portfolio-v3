import { FC } from "react";
import { TWorkDetails } from "work/lib/work.types";

import dynamic from "next/dynamic";

const Description = dynamic(() => import("./description")) as FC;
const Team = dynamic(() => import("./team")) as FC;
const Stack = dynamic(() => import("./stack")) as FC;
const Todo = dynamic(() => import("./todo")) as FC;

export const internal: TWorkDetails = {
  id: "internal",
  title: "Internal Projects",
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
