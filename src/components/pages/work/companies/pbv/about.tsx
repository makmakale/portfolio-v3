import AboutTemplate from "work/components/ui/about-template";
import image from "@/assets/images/works/zavod.jpg";

export default function About() {
  return (
    <AboutTemplate
      imageSrc={image.src}
      period={{
        startDate: "2010-04-06",
        endDate: "2020-05-29",
      }}
      link={{
        href: "https://promburvod.com/",
      }}
    >
      <p>
        &ldquo;Zavod Promburvod&rdquo; JSC, produces reliable and high-quality
        pumps of various models. You can order professional or household
        equipment for pumping water from us. We guarantee convenient payment
        terms and provide fast delivery.
      </p>
    </AboutTemplate>
  );
}
