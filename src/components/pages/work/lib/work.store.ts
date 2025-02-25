import { create } from "zustand/index";
import { devtools } from "zustand/middleware";
import { TActiveDetail, TWorkCompany, TWorkTabs } from "work/lib/work.types";

import { workList } from "work/lib/work.data";
import { DEFAULT_DETAIL_PAGE, WorkIds } from "work/lib/work.constants";

interface WorkState {
  data: TWorkCompany[];
  // works
  activeWorkTab: WorkIds;
  setActiveWorkTab: (workId: WorkIds) => void;
  activeWork: TWorkCompany;
  // details
  activeDetailTab: string;
  setActiveDetailTab: (detailId: string) => void;
  activeDetail: TActiveDetail;
  // pagination
  page: number;
  setPage: (page: number) => void;
}

const workTabs = create<WorkState>()(
  devtools((set, getState) => ({
    data: workList,
    // works
    activeWork: workList[0],
    activeWorkTab: workList[0].id,
    setActiveWorkTab: (workId) => {
      const { data } = getState();
      const activeWork = data.find(({ id }) => id === workId)!;
      const activeDetail = activeWork.tabs[0];

      set({
        activeWorkTab: workId,
        activeWork,
        activeDetail,
        activeDetailTab: activeDetail.id,
      });
    },
    // details
    activeDetail: workList[0].tabs[0],
    activeDetailTab: workList[0].tabs[0].id,
    setActiveDetailTab: (detailId) => {
      const { activeWork, page } = getState();
      const activeDetail = findActiveDetail(activeWork.tabs, detailId, page);

      set({
        activeDetailTab: detailId,
        activeDetail,
        page: DEFAULT_DETAIL_PAGE,
      });
    },
    // pagination
    page: DEFAULT_DETAIL_PAGE,
    setPage: (page: number) => {
      const { activeWork, activeDetailTab } = getState();
      const activeDetail = findActiveDetail(
        activeWork.tabs,
        activeDetailTab,
        page,
      );

      set({ page, activeDetail });
    },
  })),
);

function findActiveDetail(
  tabs: TWorkTabs,
  tabId: string,
  page: number,
): TActiveDetail {
  const tab = tabs.find(({ id }) => id === tabId)!;
  if (tab.children && tab.children.length > 0) {
    return tab.children[page - 1];
  }
  return tab;
}

export const useWorkTabs = () => workTabs((state) => state);
