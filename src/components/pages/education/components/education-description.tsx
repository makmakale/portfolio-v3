import { EducationType } from "education/education.data";
import { getDatePeriod } from "@/lib/utils";
import { CarouselContentDescription } from "education/components/carousel/carousel-content";
import * as React from "react";

type EducationDescriptionProps = Pick<
  EducationType,
  "period" | "specialty" | "location"
>;

interface IEducationDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  data: EducationDescriptionProps;
}

export default function EducationDescription({
  data,
  className,
}: IEducationDescriptionProps) {
  return (
    <CarouselContentDescription className={className}>
      <p>
        <span className={"font-semibold"}>Period</span>:{" "}
        {getDatePeriod(data.period.startDate, data.period.endDate)}
      </p>
      <p>
        <span className={"font-semibold"}>Location</span>: {data.location}
      </p>
      <p>
        <span className={"font-semibold"}>{data.specialty.label}</span>:{" "}
        {data.specialty.text}
      </p>
    </CarouselContentDescription>
  );
}
