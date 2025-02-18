"use client";

import { motion } from "motion/react";
import { animate } from "@/lib/utils";
import { slideInOut } from "education/components/education-preview/education-preview.constants";

import { DialogTrigger } from "@/components/ui/dialog";
import ReadMoreButton from "@/components/ui/read-more-button";
import { useEducationStore } from "education/components/carousel/carousel.store";

export default function EducationPreviewButton() {
  const { currentItem } = useEducationStore();
  if (!currentItem?.certificate) return null;

  return (
    <motion.div
      key={currentItem.id}
      {...animate(slideInOut)}
      className="absolute bottom-0"
    >
      <DialogTrigger asChild>
        <ReadMoreButton />
      </DialogTrigger>
    </motion.div>
  );
}
