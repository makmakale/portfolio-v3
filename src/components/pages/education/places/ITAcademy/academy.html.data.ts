import { EducationType } from "education/education.data";
import { EducationIds } from "education/education.constants";

import ItAcademyImg from "@/assets/images/education/it-academy.jpg";
import certificate from "@/assets/images/education/academy-html-cert.jpg";

export const itAcademyHTMLCourse: EducationType = {
  id: EducationIds.academyHTML,
  title: "IT-Academy",
  image: ItAcademyImg.src,
  period: { startDate: "2020-04-01", endDate: "2020-05-30" },
  location: "Belarus/Minsk",
  specialty: {
    label: "Course",
    text: "Website development with HTML, CSS & JavaScript",
  },
  certificate: certificate.src,
};
