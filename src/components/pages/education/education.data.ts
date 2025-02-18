// images
import { DateRangeType, OptionType } from "@/lib/types";
import { iTechArtStudentsLab } from "education/places/iTechArt/itechart.data";
import { itAcademyJSCourse } from "education/places/ITAcademy/academy.js.data";
import { itAcademyHTMLCourse } from "education/places/ITAcademy/academy.html.data";
import { ipp } from "education/places/IPP/ipp.data";
import { EducationIds } from "education/education.constants";

export type EducationType = {
  id: EducationIds;
  title: string;
  image: string;
  period: DateRangeType;
  location: string;
  specialty: OptionType;
  certificate?: string;
};

export const educationData: EducationType[] = [
  iTechArtStudentsLab,
  itAcademyJSCourse,
  itAcademyHTMLCourse,
  ipp,
];
