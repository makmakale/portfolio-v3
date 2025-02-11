import { Metadata } from "next";
import { EducationPage } from "@/lib/constants/pages";
import dynamic from "next/dynamic";

const PageTemplate = dynamic(
  () => import("@/components/portfolio/page-template"),
);

export const metadata: Metadata = {
  title: "Education - Maksim's Portfolio",
};

export default function Layout({ children }: { children?: React.ReactNode }) {
  return <PageTemplate pageConfig={EducationPage}>{children}</PageTemplate>;
}
