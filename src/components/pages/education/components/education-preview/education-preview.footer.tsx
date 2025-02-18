"use client";

import { DialogFooter } from "education/components/dialog";
import { useEducationStore } from "education/components/carousel/carousel.store";
import {
  ButtonKeyCap,
  ButtonText,
  ButtonWithKeyCap,
} from "@/components/ui/button-with-keycap";

export default function EducationPreviewFooter() {
  const { toggleDialog } = useEducationStore();

  return (
    <DialogFooter className="justify-end">
      <ButtonWithKeyCap onClick={() => toggleDialog(false)}>
        <ButtonKeyCap className="text-red-700">Esc</ButtonKeyCap>
        <ButtonText>Close</ButtonText>
      </ButtonWithKeyCap>
    </DialogFooter>
  );
}
