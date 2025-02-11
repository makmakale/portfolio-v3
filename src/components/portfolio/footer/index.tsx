import FooterAnimate from "./components/footer.animate";
import FooterRunningText from "./components/footer.running-text";

export default function Footer() {
  return (
    <FooterAnimate>
      <FooterRunningText text={"Portfolio"} />
    </FooterAnimate>
  );
}
