import { ipp } from "education/places/IPP/ipp.data";
import { CarouselContentTitle } from "education/components/carousel/carousel-content";
import EducationDescription from "education/components/education-description";
import EducationPreview from "education/components/education-preview";

const data = ipp;

export default function IPPComponent() {
  return (
    <>
      <CarouselContentTitle>{data.title}</CarouselContentTitle>
      <EducationDescription data={data} />
      <EducationPreview {...data} />
    </>
  );
}
