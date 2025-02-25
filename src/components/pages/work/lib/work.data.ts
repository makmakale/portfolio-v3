import { WorkIds } from "work/lib/work.constants";

export type TWorkCompany = {
  id: WorkIds;
  title: string;
  image?: string;
  period?: { startDate: string; endDate: string };
  description?: React.ReactNode;
  children?: TWorkDetails[];
};

export type TWorkDetails = {
  id: string;
  title: string;
  period?: { startDate: string; endDate: string };
  image?: string;
  children?: TWorkDetailsData[];
  companyId?: WorkIds;
};

export type TWorkDetailsData = {
  id: string;
  title: string;
  image?: string;
  component: React.ReactNode;
};

export const workList: TWorkCompany[] = [
  {
    id: WorkIds.DEMO1,
    title: "DEMO1",
    children: [
      {
        id: "description",
        title: "Description",
      },
    ],
  },
  {
    id: WorkIds.DEMO2,
    title: "DEMO2",
    children: [
      {
        id: "description",
        title: "Description",
      },
    ],
  },
  {
    id: WorkIds.DEMO3,
    title: "DEMO3",
    children: [
      {
        id: "description",
        title: "Description",
      },
    ],
  },
  {
    id: WorkIds.DEMO4,
    title: "DEMO4",
    children: [
      {
        id: "description",
        title: "Description",
      },
    ],
  },
];
