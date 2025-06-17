import { WorkIds } from "work/lib/work.constants";
import { FC } from "react";
import { TWorkCompany } from "work/lib/work.types";

import dynamic from "next/dynamic";

const About = dynamic(() => import("./about")) as FC;
import { project2 } from "work/companies/sl/project-2";
import { project1 } from "work/companies/sl/project-1";

export const sl: TWorkCompany = {
  id: WorkIds.sl,
  title: "Security Lab LLC",
  tabs: [
    {
      id: "about",
      title: "About",
      component: About,
    },
    project2,
    project1
  ],
};
