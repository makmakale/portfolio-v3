import { Metadata } from "next";
import { HomePage } from "@/lib/constants/pages";
import dynamic from "next/dynamic";

const PageTemplate = dynamic(
  () => import("@/components/portfolio/page-template"),
);

export const metadata: Metadata = {
  title: "Maksim's Portfolio",
};

export default function Layout({ children }: { children?: React.ReactNode }) {
  return <PageTemplate pageConfig={HomePage}>{children}</PageTemplate>;
}
