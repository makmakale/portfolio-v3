import { create } from "zustand/index";
import { devtools } from "zustand/middleware";

import { TWorkCompany, workList } from "work/lib/work.data";
import { WorkIds } from "work/lib/work.constants";

interface WorkState {
  data: TWorkCompany[];
  // works
  activeWorkTab: WorkIds;
  setActiveWorkTab: (workId: WorkIds) => void;
  activeWork: TWorkCompany;
  // details
  activeDetailTab: string;
  setActiveDetailTab: (workId: string) => void;
  // pagination
  page: number;
  setPage: (page: number) => void;
}

export const DEFAULT_DETAIL_TAB = "about";
const DEFAULT_DETAIL_PAGE = 1;

const workTabs = create<WorkState>()(
  devtools((set, getState) => ({
    data: workList,
    // works
    activeWorkTab: workList[0]?.id || "",
    setActiveWorkTab: (tab) => {
      set({
        activeWorkTab: tab,
        activeWork: getState().data.find(({ id }) => id === tab),
        activeDetailTab: DEFAULT_DETAIL_TAB,
      });
    },
    activeWork: workList[0],
    // details
    activeDetailTab: DEFAULT_DETAIL_TAB,
    setActiveDetailTab: (tab) => {
      set({
        activeDetailTab: tab,
        page: DEFAULT_DETAIL_PAGE,
      });
    },
    // pagination
    page: DEFAULT_DETAIL_PAGE,
    setPage: (page: number) => set({ page }),
  })),
);

export const useWorkTabs = () => workTabs((state) => state);
