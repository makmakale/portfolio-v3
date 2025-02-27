import DetailsTemplate from "work/components/ui/details-template";
import ContentList from "work/components/ui/content-list";

export default function Description() {
  return (
    <DetailsTemplate title="Responsibilities">
      <ContentList>
        <li>
          Developed a mobile application from scratch using{" "}
          <span className="highlight">React Native CLI</span>.
        </li>
        <li>
          Developed screens design and integrated them in application using{" "}
          <span className="highlight">React Navigation</span>.
        </li>
        <li>
          Added authorization with <span className="highlight">JWT</span>.
        </li>
        <li>
          Connect with <span className="highlight">Google Maps Api</span> to
          build transport routes and set stop marks by coordinates.
        </li>
        <li>Developed list of the waybills for the logged driver.</li>
        <li>
          Added routes and markers on the map according to coordinates from the
          selected waybill.
        </li>
        <li>
          Developed screen and logic for reporting about stolen or damaged
          goods.
        </li>
      </ContentList>
    </DetailsTemplate>
  );
}
