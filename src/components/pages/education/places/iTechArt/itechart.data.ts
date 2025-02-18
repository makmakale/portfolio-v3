import { EducationType } from "education/education.data";
import { EducationIds } from "education/education.constants";

import iTechArtImg from "@/assets/images/education/itechart.jpg";
import certificate from "@/assets/images/education/itechart-cert.jpg";

export const iTechArtStudentsLab: EducationType = {
  id: EducationIds.itechart,
  title: "iTechArt Students Lab",
  image: iTechArtImg.src,
  period: { startDate: "2020-12-01", endDate: "2021-02-28" },
  location: "Belarus/Minsk",
  specialty: {
    label: "Specialty",
    text: "Full Stack JS",
  },
  certificate: certificate.src,
};
