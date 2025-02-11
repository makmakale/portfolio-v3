import FooterAnimate from "./components/footer.animate";
import FooterRunningText from "./components/footer.running-text";
import FooterContent from "./components/footer.content";
import FooterDownloadBtn from "./components/download-button";
import css from "./footer.module.scss";

export default function Footer() {
  return (
    <FooterAnimate>
      <FooterRunningText text={"Portfolio"} />
      <div className={css.contentWrapper}>
        <FooterContent />
        <FooterDownloadBtn />
      </div>
    </FooterAnimate>
  );
}
