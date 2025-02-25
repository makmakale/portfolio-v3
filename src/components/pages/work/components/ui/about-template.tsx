import { DateRangeType } from "@/lib/types";
import { IMAGE_SIZES } from "@/lib/constants/images";

import Image from "next/image";
import Period from "work/components/ui/period";
import Link from "next/link";
import ReadMoreButton from "@/components/ui/read-more-button";

interface IAboutTemplateProps {
  imageSrc?: string;
  period?: DateRangeType;
  link?: {
    href: string;
    label?: string;
  };
  children?: React.ReactNode;
}

export default function AboutTemplate({
  imageSrc,
  period,
  link,
  children,
}: IAboutTemplateProps) {
  return (
    <>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={"image"}
          width={1024}
          height={768}
          sizes={IMAGE_SIZES}
          className="rounded-[.1rem] w-full aspect-[16/7]"
        />
      ) : null}

      <Period period={period} />

      {children}

      {link ? (
        <div className="mt-4">
          <Link href={link.href} rel="noopener noreferrer" target="_blank">
            <ReadMoreButton>{link.label || "Visit Site"}</ReadMoreButton>
          </Link>
        </div>
      ) : null}
    </>
  );
}
