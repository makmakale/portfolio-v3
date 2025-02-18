import { create } from "zustand/index";
import { devtools } from "zustand/middleware";
import { educationData, EducationType } from "education/education.data";
import { SwipeDirectionType } from "@/lib/types";

interface EducationState {
  data: EducationType[];
  direction: SwipeDirectionType;
  currentIndex: number;
  currentItem: EducationType | null;
  swipe: (direction: SwipeDirectionType) => void;
  swipeTo: (index: number) => void;
  dialogOpen: boolean;
  toggleDialog: (open: boolean) => void;
}

const educationStore = create<EducationState>()(
  devtools((set, get) => ({
    data: educationData,
    direction: 1,
    currentIndex: 0,
    currentItem: educationData[0],
    swipe: (direction) => {
      const nextIndex =
        (get().currentIndex + direction + get().data.length) %
        get().data.length;
      set({
        direction,
        currentIndex: nextIndex,
        currentItem: get().data[nextIndex],
      });
    },
    swipeTo: (index: number) => {
      if (get().data[index]) {
        set({
          direction: get().currentIndex > index ? -1 : 1,
          currentIndex: index,
          currentItem: get().data[index],
        });
      }
    },
    dialogOpen: false,
    toggleDialog: (dialogOpen) => set({ dialogOpen }),
  })),
);

export const useEducationStore = () => educationStore((state) => state);
