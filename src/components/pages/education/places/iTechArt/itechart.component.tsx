import { iTechArtStudentsLab } from "education/places/iTechArt/itechart.data";
import { CarouselContentTitle } from "education/components/carousel/carousel-content";
import EducationDescription from "education/components/education-description";
import EducationPreview from "education/components/education-preview";

const data = iTechArtStudentsLab;

export default function ITechArtComponent() {
  return (
    <>
      <CarouselContentTitle>{data.title}</CarouselContentTitle>
      <EducationDescription data={data} />
      <EducationPreview {...data} />
    </>
  );
}
