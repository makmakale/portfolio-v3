import { WorkIds } from "work/lib/work.constants";
import { FC } from "react";
import { TWorkCompany } from "work/lib/work.types";

import dynamic from "next/dynamic";
import { freightPathWeb } from "work/companies/itechart/freightPath-web";
import { freightPathMobile } from "work/companies/itechart/freightPath-mobile";

const About = dynamic(() => import("./about")) as FC;

export const iTechArtGroup: TWorkCompany = {
  id: WorkIds.iTechArtGroup,
  title: "iTechArt Group",
  tabs: [
    {
      id: "about",
      title: "About",
      component: About,
    },
    freightPathWeb,
    freightPathMobile,
  ],
};
