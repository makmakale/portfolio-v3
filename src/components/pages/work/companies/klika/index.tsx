import { WorkIds } from "work/lib/work.constants";
import { FC } from "react";
import { TWorkCompany } from "work/lib/work.types";

import dynamic from "next/dynamic";
import { iot } from "work/companies/klika/iot";
import { internal } from "work/companies/klika/internal";

const About = dynamic(() => import("./about")) as FC;

export const klika: TWorkCompany = {
  id: WorkIds.klika,
  title: "Klika Tech, Inc.",
  tabs: [
    {
      id: "about",
      title: "About",
      component: About,
    },
    iot,
    internal,
  ],
};
