import { WorkIds } from "work/lib/work.constants";
import { FC } from "react";
import { TWorkCompany } from "work/lib/work.types";

import dynamic from "next/dynamic";

const About = dynamic(() => import("./about")) as FC;
const Marketer = dynamic(() => import("./marketer")) as FC;
const Manager = dynamic(() => import("./manager")) as FC;
const WebDev = dynamic(() => import("./dev-web")) as FC;
const Dev1C = dynamic(() => import("./dev-1c")) as FC;

export const promburvod: TWorkCompany = {
  id: WorkIds.pbv,
  title: "Zavod Promburvod, JSC",
  tabs: [
    {
      id: "about",
      title: "About",
      component: About,
    },
    {
      id: "responsibilities",
      title: "Responsibilities",
      children: [
        {
          id: "1c-dev",
          component: Dev1C,
        },
        {
          id: "web-dev",
          component: WebDev,
        },
        {
          id: "marketer",
          component: Marketer,
        },
        {
          id: "manager",
          component: Manager,
        },
      ],
    },
  ],
};
