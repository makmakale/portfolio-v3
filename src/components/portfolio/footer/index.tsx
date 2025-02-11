import FooterRunningText from "./components/footer.running-text";
import FooterContent from "./components/footer.content";
import FooterDownloadBtn from "./components/download-button";
import css from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <FooterRunningText text={"Portfolio"} />
      <div className={css.contentWrapper}>
        <FooterContent />
        <FooterDownloadBtn />
      </div>
    </footer>
  );
}
