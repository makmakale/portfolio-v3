import DetailsTemplate from "work/components/ui/details-template";
import ContentList from "work/components/ui/content-list";

export default function Marketer() {
  return (
    <DetailsTemplate title="Marketer">
      <ContentList>
        <li>
          Promotion of products by placing advertisements in newspapers,
          magazines, participation in exhibitions, etc.;
        </li>
        <li>
          Development of promotional products: booklets, catalogs, leaflets,
          etc.;
        </li>
        <li>Administration of the company&#39;s websites;</li>
        <li>
          Replenishment of the warehouse with foreign goods according to
          customers&#39; orders:
          <ul className="list-disc ml-2">
            <li>Consulting customers on product selection;</li>
            <li>Execution of orders with foreign partners;</li>
            <li>
              Control of shipments/deliveries to the company&#39;s warehouse;
            </li>
          </ul>
        </li>
        <li>Combining the duties of a sales manager.</li>
      </ContentList>
    </DetailsTemplate>
  );
}
