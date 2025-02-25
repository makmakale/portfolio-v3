import { WorkIds } from "work/lib/work.constants";
import { FC } from "react";

export type TWorkCompany = {
  id: WorkIds;
  title: string;
  tabs: TWorkTabs;
};

export type TWorkTabs = TWorkDetails[];
export type TActiveDetail = TWorkDetails | TWorkDetailsData;

type TWorkDetailsBase = {
  id: string;
  title: string;
};

type TWorkDetailsWithComponent = TWorkDetailsBase & {
  component: FC;
  children?: never;
};

type TWorkDetailsWithChildren = TWorkDetailsBase & {
  component?: never;
  children: TWorkDetailsData[];
};

export type TWorkDetails = TWorkDetailsWithComponent | TWorkDetailsWithChildren;

export type TWorkDetailsData = {
  id: string;
  component: FC;
};
