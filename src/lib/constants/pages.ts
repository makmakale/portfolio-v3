export type PageType = {
  id: string;
  href: string;
  title: string;
};

export const HomePage = {
  id: "about",
  href: "/",
  title: "About Me",
};

export const WorkPage = {
  id: "work",
  href: "/work",
  title: "Work Experience",
};

export const SkillPage = {
  id: "skills",
  href: "/skills",
  title: "Tech Skills",
};

export const EducationPage = {
  id: "education",
  href: "/education",
  title: "Education",
};

export const PAGES: PageType[] = [HomePage, WorkPage, SkillPage, EducationPage];
