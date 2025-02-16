import { itAcademyJSCourse } from "education/places/ITAcademy/academy.js.data";
import { CarouselContentTitle } from "education/components/carousel/carousel-content";
import EducationDescription from "education/components/education-description";
import EducationPreview from "education/components/education-preview";

const data = itAcademyJSCourse;

export default function AcademyJSComponent() {
  return (
    <>
      <CarouselContentTitle>{data.title}</CarouselContentTitle>
      <EducationDescription data={data} />
      <EducationPreview {...data} />
    </>
  );
}
