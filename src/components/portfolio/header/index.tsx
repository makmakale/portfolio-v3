import HeaderAnimation from "@/components/portfolio/header/header-menu/components/header-animation";
import Logo from "@/components/portfolio/header/logo";
import HeaderMenu from "@/components/portfolio/header/header-menu";

export default function Header() {
  return (
    <HeaderAnimation>
      <Logo />
      <HeaderMenu />
    </HeaderAnimation>
  );
}
