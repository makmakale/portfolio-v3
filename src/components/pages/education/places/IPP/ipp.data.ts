import { EducationType } from "education/education.data";
import { EducationIds } from "education/education.constants";

import IPPImg from "@/assets/images/education/ipp.jpg";
import certificate from "@/assets/images/education/ipp-cert.jpg";

export const ipp: EducationType = {
  id: EducationIds.ipp,
  title: "Institute of Parliamentary and Entrepreneurship",
  image: IPPImg.src,
  period: { startDate: "2004-09-01", endDate: "2009-06-12" },
  location: "Belarus/Minsk",
  specialty: {
    label: "Specialty",
    text: "Economics and Business Management",
  },
  certificate: certificate.src,
};
