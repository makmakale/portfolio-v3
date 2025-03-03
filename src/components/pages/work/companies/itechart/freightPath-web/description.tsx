import DetailsTemplate from "work/components/ui/details-template";
import ContentList from "work/components/ui/content-list";

export default function Description() {
  return (
    <DetailsTemplate title="Freight Path (Web version)">
      <p>
        The web application is designed for drivers of cargo transportation
        companies.
      </p>
      <p>You can:</p>
      <ContentList>
        <li>create client cards;</li>
        <li>issue invoices;</li>
        <li>write out consignment notes;</li>
        <li>write out waybills.</li>
      </ContentList>
    </DetailsTemplate>
  );
}
