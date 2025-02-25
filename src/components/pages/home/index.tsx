import HomeAnimation from "@/components/pages/home/components/home.animation";
import {
  Card,
  CardContent,
  CardHeader,
  CardSubHeader,
  CardTitle,
} from "@/components/ui/card";
import HomeAside from "./components/aside";
import HomeContent from "./components/content";
import { PROFILE } from "./home.constants";
import css from "./home.module.scss";

export default function Home() {
  return (
    <HomeAnimation delay={1.5}>
      <div className={css.homeContainer}>
        <Card>
          <CardHeader>
            <CardTitle>{PROFILE.name}</CardTitle>
          </CardHeader>

          <CardSubHeader>Love what you do. Do what you love.</CardSubHeader>

          <CardContent>
            <div className={css.homeContent}>
              <HomeAside />
              <HomeContent />
            </div>
          </CardContent>
        </Card>
      </div>
    </HomeAnimation>
  );
}
