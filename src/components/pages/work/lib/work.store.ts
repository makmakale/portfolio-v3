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
}

const workTabs = create<WorkState>()(
  devtools((set, getState) => ({
    data: workList,
    // works
    activeWorkTab: workList[0]?.id || "",
    setActiveWorkTab: (tab) => {
      set({
        activeWorkTab: tab,
        activeWork: getState().data.find(({ id }) => id === tab),
      });
    },
    activeWork: workList[0],
  })),
);

export const useWorkTabs = () => workTabs((state) => state);
