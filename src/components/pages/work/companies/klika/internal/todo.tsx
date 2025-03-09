import DetailsTemplate from "work/components/ui/details-template";
import ContentList from "work/components/ui/content-list";

export default function Description() {
  return (
    <DetailsTemplate title="Responsibilities">
      <div>
        <h4 className="font-bold text-[0.24rem] leading-loose text-primary">
          Time Off Management
        </h4>
        <ContentList>
          <li>Developed the major features of the project.</li>
          <li>Made a lot of legacy code refactoring.</li>
          <li>Improved pages loading speed.</li>
          <li>Synchronized data between applications.</li>
          <li>
            Improved vacation calculations for various offices (countries).
          </li>
          <li>Developed reports for the CEO using Google Sheets and AWS.</li>
          <li>
            Participated in finding the most successful application architecture
            and business solutions.
          </li>
          <li>Helped new team members with the onboarding process.</li>
          <li>
            Had a lot of communication with the other specialized sub-teams.
          </li>
        </ContentList>
      </div>

      <div>
        <h4 className="font-bold text-[0.24rem] leading-loose text-primary">
          Employee Management
        </h4>
        <ContentList>
          <li>Transfer new employees from Windows AT to app database.</li>
          <li>Customized user interfaces for better experience.</li>
          <li>Developed the major features of the project.</li>
          <li>Made the application website responsive and cross-browser.</li>
          <li>
            Sync the application with &#34;Time Off Management&#34; through AWS
            tools.
          </li>
        </ContentList>
      </div>
    </DetailsTemplate>
  );
}
