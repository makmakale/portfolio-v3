import animeIcon from "@/assets/images/about/anime-icon.png";
import gamesIcon from "@/assets/images/about/games-icon.png";
import musicIcon from "@/assets/images/about/music-icon.png";
import {
  TextSlider,
  TextSliderItem,
} from "@/components/animations/text-slider";
import Image from "next/image";

const HomeHobbies = [
  { label: "Anime", image: animeIcon },
  { label: "Games", image: gamesIcon },
  { label: "Music", image: musicIcon },
];

export default function Hobbies() {
  return (
    <div>
      <div className="font-dela text-[.12rem] ml-0.5 mb-0.5 opacity-60">
        Hobbies
      </div>

      <div className="relative bg-background/50 rounded-[.1rem] p-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/20 to-background z-0" />

        <TextSlider>
          <TextSliderItem
            text={"Hobbies"}
            repeat={4}
            duration={40}
            className="font-dela text-[1.2rem]"
          />
        </TextSlider>

        <div className="relative flex justify-center items-center gap-2 z-[2]">
          {HomeHobbies.map((item) => (
            <div
              key={`hobby-${item.label}`}
              className="flex flex-col items-center gap-[0.05rem]"
            >
              <div className="relative aspect-square h-[.7rem] border-[.06rem] border-secondary bg-background rounded-[.1rem]">
                <Image
                  src={item.image}
                  alt={item.label}
                  width={200}
                  height={200}
                  className="size-full"
                />
              </div>
              <div className="text-[.12rem] bg-background rounded-full px-[.1rem] py-[0.04rem]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
