import DetailsTemplate from "work/components/ui/details-template";
import ContentList from "work/components/ui/content-list";

export default function Description() {
  return (
    <DetailsTemplate title="Responsibilities">
      <ContentList>
        <li>
          Optimized performance.
        </li>
        <li>
          Developed a Mobile App from scratch on{" "}
          <span className="highlight">React Native (Expo)</span>.
        </li>
      </ContentList>
    </DetailsTemplate>
  );
}
