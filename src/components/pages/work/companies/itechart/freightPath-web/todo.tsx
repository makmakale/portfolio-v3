import DetailsTemplate from "work/components/ui/details-template";
import ContentList from "work/components/ui/content-list";

export default function Description() {
  return (
    <DetailsTemplate title="Responsibilities">
      <ContentList>
        <li>
          Developed a server part for Web App on{" "}
          <span className="highlight">Node.js/Express</span>.
        </li>
        <li>
          Developed interfaces for some pages on{" "}
          <span className="highlight">React</span> &{" "}
          <span className="highlight">Material UI</span>.
        </li>
        <li>
          Updated <span className="highlight">Redux</span> state manager with{" "}
          <span className="highlight">Redux Toolkit</span> utility to simplify
          common use cases.
        </li>
        <li>
          Config and deployed project to{" "}
          <span className="highlight">Heroku</span> hosting.
        </li>
      </ContentList>
    </DetailsTemplate>
  );
}
