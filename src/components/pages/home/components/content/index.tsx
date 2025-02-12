import { PROFILE } from "@/components/pages/home/home.constants";
import HomeHeader from "@/components/pages/home/components/content/home.header";
import Hobbies from "@/components/pages/home/components/content/home.hobbies";
import Scrollable from "@/components/ui/scrollable";

export default function HomeContent() {
  return (
    <div className="flex flex-col gap-1.5">
      <HomeHeader />

      <div className="grow bg-background rounded-[.1rem]">
        <Scrollable className="space-y-0.5">
          <p>Hi! Glad, you come by.</p>
          <p>
            I&apos;m a{" "}
            <span className="highlight">Front-end Software Engineer</span> with
            more then{" "}
            <span className="highlight">{PROFILE.yearsOfExperience} years</span>{" "}
            of experience based in{" "}
            <span className="highlight">Minsk (Belarus)</span>. I enjoy building{" "}
            <span className="italic">sites & apps</span>.
          </p>
          <p>
            My focus is <span className="highlight">React.js (Next.js)</span>,
            but also has some experience in{" "}
            <span className="highlight">Full-stack</span> development on{" "}
            <span className="highlight">Node.js (Express)</span> and{" "}
            <span className="highlight">React Native</span>.
          </p>
        </Scrollable>
      </div>

      <Hobbies />
    </div>
  );
}
