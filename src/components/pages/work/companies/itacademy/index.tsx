import { WorkIds } from "work/lib/work.constants";
import { FC } from "react";
import { TWorkCompany } from "work/lib/work.types";

import dynamic from "next/dynamic";

const About = dynamic(() => import("./about")) as FC;
import { cms } from "work/companies/itacademy/cms";

export const itAcademy: TWorkCompany = {
  id: WorkIds.itacademy,
  title: "IT-Academy",
  tabs: [
    {
      id: "about",
      title: "About",
      component: About,
    },
    cms
  ],
};
