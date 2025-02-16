import { EducationType } from "education/education.data";
import dynamic from "next/dynamic";
import { EducationIds } from "education/education.constants";

import ItAcademyImg from "@/assets/images/education/it-academy.jpg";
import certificate from "@/assets/images/education/academy-js-cert.jpg";

export const itAcademyJSCourse: EducationType = {
  id: EducationIds.academyJS,
  title: "IT-Academy",
  image: ItAcademyImg.src,
  period: { startDate: "2020-06-01", endDate: "2020-10-01" },
  location: "Belarus/Minsk",
  specialty: {
    label: "Course",
    text: "Web application development with JavaScript",
  },
  certificate: certificate.src,
  content: dynamic(
    () => import("education/places/ITAcademy/academy.js.component"),
  ),
};
