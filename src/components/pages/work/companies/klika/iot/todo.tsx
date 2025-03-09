import DetailsTemplate from "work/components/ui/details-template";
import ContentList from "work/components/ui/content-list";

export default function Description() {
  return (
    <DetailsTemplate title="Responsibilities">
      <ContentList>
        <li>
          Developed the frontend of the commerce platform using{" "}
          <span className="highlight">React</span> 16.8 (class & hooks).
        </li>
        <li>
          Implemented states for components using{" "}
          <span className="highlight">Redux</span>,{" "}
          <span className="highlight">useReducer</span> hook and{" "}
          <span className="highlight">React Context</span>.
        </li>
        <li>
          Integrated with telemetry <span className="highlight">APIs</span> to
          increase charts performance across the application.
        </li>
        <li>
          Developed new and optimized old chart components that are using{" "}
          <span className="highlight">Apache Echarts</span> library.
        </li>
        <li>
          Styled components using <span className="highlight">SASS</span>,{" "}
          <span className="highlight">Material UI</span> and{" "}
          <span className="highlight">Styled Components</span>. Ensuring design
          responsive and work seamlessly across devices and screen sizes.
        </li>
        <li>
          Developed custom components and catch methods to work with errors.
        </li>
        <li>
          Designed <b>UI/UX</b> prototype with{" "}
          <span className="highlight">Figma</span>, translating design concepts
          into functional components and improving user experience through
          iterative feedback and design adjustments.
        </li>
        <li>Collaborated with business analysts and backend developers.</li>
        <li>
          Managed source code and collaboration using{" "}
          <span className="highlight">GitLab</span> and{" "}
          <span className="highlight">Bitbucket</span>.
        </li>
        <li>
          Implemented mock-server using{" "}
          <span className="highlight">Node.js/Express</span>
        </li>
        <li>
          Managed project tasks and progress using{" "}
          <span className="highlight">Jira</span> for Agile workflows and{" "}
          <span className="highlight">Slack</span> for team communication,
          facilitating effective collaboration and timely project updates.
        </li>
        <li>
          Concurrently lead several releases for the different sub-projects.
        </li>
      </ContentList>
    </DetailsTemplate>
  );
}
