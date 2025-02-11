import { IconType } from "react-icons";

// icons
import {
  FaDiscord,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaViber } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export type SocialLinkType = {
  title: string;
  link: string;
  icon: IconType;
};

export const SOCIAL_LINKS: SocialLinkType[] = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/makmakale",
    icon: FaLinkedinIn,
  },
  {
    title: "Telegram",
    link: "https://t.me/makmakale",
    icon: FaTelegramPlane,
  },
  {
    title: "Viber",
    link: "viber://chat?number=%2B375293783772",
    icon: FaViber,
  },
  {
    title: "Gmail",
    link: "mailto:makmakale87@gmail.com",
    icon: SiGmail,
  },
  {
    title: "Discord",
    link: "https://discordapp.com/users/1311274683563245601",
    icon: FaDiscord,
  },
];

export const GitHub = {
  title: "GitHub",
  link: "https://github.com/makmakale?tab=repositories",
  icon: FaGithub,
};
