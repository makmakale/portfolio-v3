import HomeButton from "@/components/portfolio/header/header-menu/components/home-button";
import InfoButton from "@/components/portfolio/header/header-menu/components/info-button";
import SocialButton from "@/components/portfolio/header/header-menu/components/social-button";
import { GitHub } from "@/lib/constants/social-links";
import ContactMe from "@/components/portfolio/header/header-menu/components/contact-me";
import MusicButton from "@/components/portfolio/header/header-menu/components/music-button";

export default function HeaderMenu() {
  return (
    <div className="flex items-end gap-1">
      <ContactMe />
      <SocialButton link={GitHub} />
      <MusicButton />
      <InfoButton />
      <HomeButton />
    </div>
  );
}
