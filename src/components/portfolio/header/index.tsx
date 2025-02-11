import Logo from "@/components/portfolio/header/logo";
import HeaderMenu from "@/components/portfolio/header/header-menu";

export default function Header() {
  return (
    <div className="absolute top-[.23rem] left-[3.6rem] right-[3.6rem] flex justify-between items-center">
      <Logo />
      <HeaderMenu />
    </div>
  );
}
