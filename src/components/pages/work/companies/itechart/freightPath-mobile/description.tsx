import DetailsTemplate from "work/components/ui/details-template";

export default function Description() {
  return (
    <DetailsTemplate title="Freight Path (Mobile version)">
      <p className="hidden">
        Водитель, после авторизации в приложении, видит свой список путевых
        листов выписанных с помощью вэб-приложения. При переходе в путевой лист
        водитель видит основную информацию: что везти, куда и кому. Так же он
        может перейти на карту, чтобы увидеть маршрут, по которому нужно ехать.
        На кадой контрольной точке стоит маркер, по которому он может
        отметиться, когда будет находиться в его области. По окончании маршрута,
        водитель может сформировать отчет об украденных и/или поврежденных
        товарах.
      </p>
      <p>
        The driver, after authorization in the application, sees his list of
        waybills issued using the web application. When going to the waybill,
        the driver sees the basic information: what to transport, where and to
        whom. He can also go to the map to see the route he needs to take. At
        each checkpoint there is a marker, by which he can check in when he is
        in his area. At the end of the route, the driver can generate a report
        on stolen and/or damaged goods.
      </p>
    </DetailsTemplate>
  );
}
