import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SOCIAL_LINKS } from "@/lib/constants/social-links";
import SocialButton from "@/components/portfolio/header/header-menu/components/social-button";
import css from "@/components/portfolio/header/header-menu/header-menu.module.scss";

export default function ContactMe() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={cn(css.headerButton, css.contactMe)}>
          <span>Contact Me</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={12}>
        {SOCIAL_LINKS.map((link) => (
          <SocialButton key={link.link} link={link} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
