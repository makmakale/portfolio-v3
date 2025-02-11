import css from "../footer.module.scss";

export default function FooterContent() {
  return (
    <div className={css.content}>
      <div className={css.primaryText}>Hire Me</div>

      <div>
        <div className={css.secondaryText}>and you won&apos;t regret</div>

        <div className={css.subText}>
          Download my resume and check if I&apos;m right for You!
        </div>
      </div>
    </div>
  );
}
