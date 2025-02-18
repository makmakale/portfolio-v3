"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "education/components/dialog";
import { useEducationStore } from "education/components/carousel/carousel.store";
import EducationPreviewButton from "education/components/education-preview/education-preview.button";
import EducationPreviewFooter from "education/components/education-preview/education-preview.footer";
import EducationPreviewContent from "education/components/education-preview/education-preview.content";
import css from "./education-preview.module.scss";

export default function EducationPreview() {
  const { currentItem, dialogOpen, toggleDialog } = useEducationStore();
  if (!currentItem?.certificate) return null;

  return (
    <Dialog open={dialogOpen} onOpenChange={toggleDialog}>
      <EducationPreviewButton />

      <DialogContent className={css.dialogContent}>
        <DialogHeader>
          <DialogTitle>Certificate - {currentItem.title}</DialogTitle>
        </DialogHeader>
        <EducationPreviewContent />
        <EducationPreviewFooter />
      </DialogContent>
    </Dialog>
  );
}
