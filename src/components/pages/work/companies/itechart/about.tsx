import AboutTemplate from "work/components/ui/about-template";
import image from "@/assets/images/education/itechart.jpg";

export default function About() {
  return (
    <AboutTemplate
      imageSrc={image.src}
      period={{
        startDate: "2020-12-14",
        endDate: "2021-06-11",
      }}
      link={{
        href: "https://itechartgroup.by/",
      }}
    >
      <p>
        iTechArt — 20+ years of successful activity in the field of IT
        development, testing and consulting. These are top clients from the USA
        and Europe, as well as a wide stack of technologies and projects for
        every taste.
      </p>
    </AboutTemplate>
  );
}
