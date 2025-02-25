import { WorkIds } from "work/lib/work.constants";
import { FC } from "react";
import { TWorkCompany } from "work/lib/work.types";

import dynamic from "next/dynamic";

const About = dynamic(() => import("./about")) as FC;
const Description = dynamic(() => import("./description")) as FC;

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
      id: "manager",
      title: "Sales Manager",
      children: [
        {
          id: "description",
          component: Description,
        },
      ],
    },
  ],
};
