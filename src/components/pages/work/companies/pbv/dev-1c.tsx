import DetailsTemplate from "work/components/ui/details-template";
import { MdOutlineStarPurple500 as Star } from "react-icons/md";
import ContentList from "work/components/ui/content-list";

export default function Description() {
  return (
    <DetailsTemplate title="1C Developer">
      <div className="rounded-[.2rem] bg-yellow-200 p-2 text-black">
        <div className="flex items-center mb-2">
          <Star className="mr-1 size-[.3rem] mb-0.5" />
          <div className="font-bold text-[.27rem]">Main achievement:</div>
        </div>

        <ContentList>
          <li>
            Development of external report for statistics report with
            loading/unloading from/to Excel;
          </li>
          <li>Ability to edit goods with division by prices and balances;</li>
          <li>
            Highlighting identical goods but with different prices in different
            colors for easy searching and adjustment.
          </li>
        </ContentList>
      </div>

      <ContentList>
        <li>
          Development of internal/external reports/processing in 1C Enterprise
          8.2;
        </li>
        <li>
          Refinement of the internal structure of reference books/documents in
          1C Enterprise 8.2;
        </li>
        <li>
          Development of internal/external reports/processing in 1C Enterprise
          7.7;
        </li>
        <li>
          Refinement of the internal structure of reference books/documents in
          1C Enterprise 7.7.
        </li>
      </ContentList>
    </DetailsTemplate>
  );
}
