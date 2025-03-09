import AboutTemplate from "work/components/ui/about-template";
import image from "@/assets/images/works/klika.jpg";

export default function About() {
  return (
    <AboutTemplate
      imageSrc={image.src}
      period={{
        startDate: "2021-07-12",
        endDate: "2023-11-11",
      }}
      link={{
        href: "https://klika-tech.com/",
      }}
    >
      <p>
        Klika Tech was founded in 2013 by business-minded engineers who believe
        innovation and collaboration go hand in hand. Now with ten locations
        around the world, our core mission is to help customers uncover the
        connection between technology and business goals.
      </p>
    </AboutTemplate>
  );
}
