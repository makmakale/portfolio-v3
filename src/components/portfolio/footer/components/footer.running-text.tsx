import {
  TextSlider,
  TextSliderItem,
} from "@/components/animations/text-slider";
import css from "../footer.module.scss";

export default function FooterRunningText({ text }: { text: string }) {
  return (
    <TextSlider>
      <TextSliderItem
        text={text}
        repeat={4}
        duration={120}
        className={css.runningText}
      />
    </TextSlider>
  );
}
