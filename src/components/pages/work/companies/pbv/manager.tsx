import DetailsTemplate from "work/components/ui/details-template";
import ContentList from "work/components/ui/content-list";

export default function Marketer() {
  return (
    <DetailsTemplate title="Sales Manager">
      <ContentList>
        <li>
          Issuing contracts/invoices in the 1C Enterprise 7.7/8.2 program;
        </li>
        <li>Issuing goods/goods transportation waybills;</li>
        <li>Monitoring payments from customers;</li>
        <li>
          Shipping goods from the warehouse in the absence of the warehouse
          manager;
        </li>
        <li>Consulting clients on product selection.</li>
      </ContentList>
    </DetailsTemplate>
  );
}
