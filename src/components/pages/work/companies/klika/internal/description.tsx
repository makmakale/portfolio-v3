import DetailsTemplate from "work/components/ui/details-template";
import ContentList from "work/components/ui/content-list";
import Link from "next/link";
import ReadMoreButton from "@/components/ui/read-more-button";

export default function Description() {
  return (
    <DetailsTemplate title="Internal Projects">
      <ContentList>
        <li>
          <b className="text-primary">Time Off Management</b> is a service for
          recording employees&#39; working hours, vacations, time off, sick
          leave. Holidays calendar and notification system through AWS. The
          system takes into account the order of settlements for offices from
          different countries.
        </li>
        <li>
          <b className="text-primary">Employee Management</b> is a service for
          adding/editing, searching for the employees. Display short user
          information. Sync with Time Off Management through Window
          Administration Tool and AWS.
        </li>
        <li>
          <b className="text-primary">Website</b>
          <div className="mt-2">
            <Link
              href={"https://www.klika-tech.com/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ReadMoreButton>Visit Site</ReadMoreButton>
            </Link>
          </div>
        </li>
      </ContentList>
    </DetailsTemplate>
  );
}
