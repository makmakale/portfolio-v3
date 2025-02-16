import { itAcademyHTMLCourse } from "education/places/ITAcademy/academy.html.data";
import { CarouselContentTitle } from "education/components/carousel/carousel-content";
import EducationDescription from "education/components/education-description";
import EducationPreview from "education/components/education-preview";

const data = itAcademyHTMLCourse;

export default function AcademyHTMLComponent() {
  return (
    <>
      <CarouselContentTitle>{data.title}</CarouselContentTitle>
      <EducationDescription data={data} />
      <EducationPreview {...data} />
    </>
  );
}
