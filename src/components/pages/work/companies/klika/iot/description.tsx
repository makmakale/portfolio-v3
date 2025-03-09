import DetailsTemplate from "work/components/ui/details-template";
import ContentList from "work/components/ui/content-list";
import Link from "next/link";
import ReadMoreButton from "@/components/ui/read-more-button";

export default function Description() {
  return (
    <DetailsTemplate title="IoT.ON">
      <p>
        <b className="text-primary">IoT.ON™</b> is an intelligent software
        platform providing services that greatly extend the capabilities and
        benefits of IoTecha’s EVSEs, charging modules, and test equipment.
        IoT.ON™ services are available from the cloud or via a combination of
        cloud and edge services hosted by IoTecha’s Edge Kit site controller.
      </p>

      <p className="font-bold">Projects:</p>

      <ContentList>
        <li>
          <b className="text-primary">IoT.ON™ Cloud Platform</b> is a powerful
          cloud-based tool enabling charger manufacturers and charge point
          operators (CPOs) to significantly reduce charger downtime and monitor
          charger status and performance.
        </li>
        <li>
          <b className="text-primary">IoT.ON™ EDGE PLAZA</b>, this service
          package enables you to monitor your charging infrastructure (across
          all sites and geographies) and orchestrate energy flows to and from
          your EV chargers, allowing participation in smart charging utility
          programs and significant savings on energy costs, for example through
          bi-directional power flow, lower demand charges or schedule
          optimization to charge when energy prices are lower.
        </li>
        <li>
          <b className="text-primary">IoT.ON™ DEVICE MANAGEMENT</b>, this
          service package ensures your devices are operating properly, enables
          remote maintenance and allows firmware updates, extending your fleet’s
          lifetime and saving costly maintenance and truck roll expenses.
        </li>
        <li>
          <b className="text-primary">IoT.ON™ Embedded Software</b>. IoTecha’s
          team has deep expertise in the design and implementation of software
          based Media Access Control (MAC) engines, Real Time Operating Systems
          (RTOS), Embedded Linux applications, and Communication Subsystems with
          a focus on intelligent EV charging systems and protocols.
        </li>
      </ContentList>

      <div className="mt-4">
        <Link
          href={"https://www.iotecha.com/"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ReadMoreButton />
        </Link>
      </div>
    </DetailsTemplate>
  );
}
