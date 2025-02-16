import { EducationType } from "education/education.data";
import { getDatePeriod } from "@/lib/utils";
import { CarouselContentDescription } from "education/components/carousel/carousel-content";

type EducationDescriptionProps = Pick<
  EducationType,
  "period" | "specialty" | "location"
>;

export default function EducationDescription({
  data,
}: {
  data: EducationDescriptionProps;
}) {
  return (
    <CarouselContentDescription>
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
