import { SocialLinkType } from "@/lib/constants/social-links";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import css from "@/components/portfolio/header/header-menu/header-menu.module.scss";

interface SocialButtonProps extends Partial<LinkProps> {
  link: SocialLinkType;
  className?: string;
}

const SocialButton = ({ link, className, ...props }: SocialButtonProps) => {
  return (
    <Link
      {...props}
      href={link.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(css.headerButton, "aspect-square", className)}
    >
      <link.icon />
      <span className="sr-only">{link.title}</span>
    </Link>
  );
};

export default SocialButton;
