"use client";

import css from "education/components/education-preview/education-preview.module.scss";
import Image from "next/image";
import { IMAGE_SIZES } from "@/lib/constants/images";
import EducationDescription from "education/components/education-description";
import Scrollable from "@/components/ui/scrollable";
import { DialogDescription } from "education/components/dialog";
import { useEducationStore } from "education/components/carousel/carousel.store";

export default function EducationPreviewContent() {
  const { currentItem } = useEducationStore();
  if (!currentItem) return null;

  return (
    <DialogDescription>
      <div className={css.dialogDescription}>
        <div className={css.innerContent}>
          <p className="font-bold text-[.21rem]">{currentItem.title}</p>
          <div>
            <Image
              src={currentItem.image}
              alt={""}
              width={640}
              height={480}
              sizes={IMAGE_SIZES}
              className="rounded-[.1rem] my-4"
            />
          </div>
          <EducationDescription data={currentItem} className={"space-y-1"} />
        </div>

        <div className={css.innerContent}>
          <Scrollable>
            {currentItem.certificate ? (
              <Image
                src={currentItem.certificate}
                alt={""}
                width={800}
                height={800}
                sizes={IMAGE_SIZES}
                className="mx-auto h-full w-auto"
              />
            ) : null}
          </Scrollable>
        </div>
      </div>
    </DialogDescription>
  );
}
