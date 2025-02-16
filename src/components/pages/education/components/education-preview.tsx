import { EducationType } from "education/education.data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReadMoreButton from "@/components/ui/read-more-button";
import Image from "next/image";
import { animate, getDatePeriod } from "@/lib/utils";
import { motion } from "motion/react";
import Scrollable from "@/components/ui/scrollable";
import { IMAGE_SIZES } from "@/lib/constants/images";

const appearToRight = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.8 },
  },
  exit: {
    x: 100,
    opacity: 0,
  },
};

export default function EducationPreview({
  title,
  period,
  image,
  location,
  specialty,
  certificate,
}: EducationType) {
  if (!certificate) return null;

  return (
    <Dialog>
      <motion.div
        key={certificate}
        {...animate(appearToRight)}
        className="absolute bottom-0"
      >
        <DialogTrigger asChild>
          <ReadMoreButton />
        </DialogTrigger>
      </motion.div>

      <DialogContent className="max-w-[15rem] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Certificate - {title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="relative grid grid-cols-[4rem_1fr] gap-4">
            <div className="bg-black rounded-[.2rem] p-2 space-y-0.5 text-[.16rem]">
              <p className="font-bold text-[.21rem]">{title}</p>
              <div>
                <Image
                  src={image}
                  alt={""}
                  width={480}
                  height={320}
                  className="rounded-[.1rem] my-4"
                />
              </div>
              <p>
                <span className="font-semibold">Period</span>:{" "}
                {getDatePeriod(period.startDate, period.endDate)}
              </p>
              <p>
                <span className="font-semibold">Location</span>: {location}
              </p>
              <p>
                <span className="font-semibold">{specialty.label}</span>:{" "}
                {specialty.text}
              </p>
            </div>

            <div className="bg-black rounded-[.2rem] p-2 h-full max-h-[8rem]">
              <Scrollable>
                {certificate ? (
                  <Image
                    src={certificate}
                    alt={""}
                    width={800}
                    height={800}
                    sizes={IMAGE_SIZES}
                    className="mx-auto"
                  />
                ) : null}
              </Scrollable>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
