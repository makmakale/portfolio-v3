import { WorkIds } from "work/lib/work.constants";

export type TWorkCompany = {
  id: WorkIds;
  title: string;
};

export const workList: TWorkCompany[] = [
  {
    id: WorkIds.DEMO1,
    title: "DEMO1",
  },
  {
    id: WorkIds.DEMO2,
    title: "DEMO2",
  },
  {
    id: WorkIds.DEMO3,
    title: "DEMO3",
  },
  {
    id: WorkIds.DEMO4,
    title: "DEMO4",
  },
];
