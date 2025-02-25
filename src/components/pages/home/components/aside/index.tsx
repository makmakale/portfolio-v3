import Me from "@/assets/images/about/photo.jpg";
import {
  TimePhotoCard,
  TimePhotoCardImageBox,
  TimePhotoCardTimeBox,
  TimePhotoCardTimeContent,
} from "../time-photo-card";
import Image from "next/image";

export default function HomeAside() {
  return (
    <TimePhotoCard>
      <TimePhotoCardTimeBox>
        <TimePhotoCardTimeContent />
      </TimePhotoCardTimeBox>

      <TimePhotoCardImageBox>
        <Image
          src={Me.src}
          alt={"photo"}
          loading="eager"
          fill
          className="object-cover bg-center"
        />
      </TimePhotoCardImageBox>
    </TimePhotoCard>
  );
}
