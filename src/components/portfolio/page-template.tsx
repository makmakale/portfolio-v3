"use client";

import * as React from "react";
import { PageType } from "@/lib/constants/pages";
import LoadableImage from "@/components/portfolio/loadable-image";

interface IPageTemplateProps extends React.PropsWithChildren {
  pageConfig: PageType;
}

export default function PageTemplate({
  pageConfig,
  children,
}: IPageTemplateProps) {
  React.useEffect(() => {
    const landing = document.getElementById("landing")!;

    landing.style.setProperty("--primary", pageConfig.primaryColor);
    landing.style.setProperty(
      "--footer-background",
      pageConfig.footerBackground,
    );
    // eslint-disable-next-line
  }, [pageConfig.id]);

  return (
    <div className="landing-section">
      <LoadableImage src={pageConfig.bgUrl} alt={pageConfig.title} />

      <section>{children}</section>
    </div>
  );
}
