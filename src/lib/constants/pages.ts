import AboutBgImage from "@/assets/images/page-bg/about.jpg";
import WorkBgImage from "@/assets/images/page-bg/work.jpg";
import SkillsBgImage from "@/assets/images/page-bg/skills.jpg";
import EducationBgImage from "@/assets/images/page-bg/education.jpg";

export type PageType = {
  id: string;
  href: string;
  title: string;
  primaryColor: string;
  footerBackground: string;
  bgUrl: string;
};

export const HomePage = {
  id: "about",
  href: "/",
  title: "About Me",
  primaryColor: "172, 90%, 39%",
  footerBackground: "linear-gradient(150deg, #0abda6 25%, #0c5a52 71%)",
  bgUrl: AboutBgImage.src,
};

export const WorkPage = {
  id: "work",
  href: "/work",
  title: "Work Experience",
  primaryColor: "191, 21%, 45%",
  footerBackground: "linear-gradient(150deg, #57909f 25%, #9b5c8d 71%)",
  bgUrl: WorkBgImage.src,
};

export const SkillPage = {
  id: "skills",
  href: "/skills",
  title: "Tech Skills",
  primaryColor: "192 61% 50%",
  footerBackground: "linear-gradient(150deg, #22dbf1 0%, #00537f 100%)",
  bgUrl: SkillsBgImage.src,
};

export const EducationPage = {
  id: "education",
  href: "/education",
  title: "Education",
  primaryColor: "50 85% 50%",
  footerBackground: "linear-gradient(150deg, #F2B11D 0%, #FDE278 83%)",
  bgUrl: EducationBgImage.src,
};

export const PAGES: PageType[] = [HomePage, WorkPage, SkillPage, EducationPage];
