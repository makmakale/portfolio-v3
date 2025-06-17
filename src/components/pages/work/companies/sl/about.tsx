import AboutTemplate from "work/components/ui/about-template";
import image from "@/assets/images/works/sl.png";

export default function About() {
  return (
    <AboutTemplate
      imageSrc={image.src}
      period={{
        startDate: "2025-03-07",
        endDate: "2025-06-06",
      }}
      link={{
        href: "https://securitylab.by",
      }}
    >
      <p>
        We provide a wide range of services in the field of information security, certification and declaration of information security means, application development and testing, penetration testing (Pentest).
      </p>
    </AboutTemplate>
  );
}
