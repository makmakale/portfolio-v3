import { Tabs } from "work/components/ui/tabs";
import DetailsList from "work/components/work-details/details-list";
import DetailsContent from "work/components/work-details/details-content";
import DetailsPagination from "work/components/work-details/details-pagination";

export default function WorkContent() {
  return (
    <Tabs className="grid grid-cols-[3rem_1fr] gap-1.5 pb-2 h-full overflow-hidden">
      <DetailsList />
      <DetailsContent />
      <DetailsPagination />
    </Tabs>
  );
}
