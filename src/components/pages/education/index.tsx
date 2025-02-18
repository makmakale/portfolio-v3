import Carousel from "education/components/carousel";
import CarouselContent from "education/components/carousel/carousel-content";
import CarouselFrame from "education/components/carousel/carousel-frame";
import CarouselIndicators from "education/components/carousel/carousel-indicators";
import {
  CarouselButtonsGroup,
  CarouselNext,
  CarouselPrevious,
} from "education/components/carousel/carousel-navigation";

export default function Education() {
  return (
    <Carousel>
      <CarouselContent />
      <CarouselFrame>
        <div className="relative flex justify-between">
          <CarouselIndicators />
          <CarouselButtonsGroup>
            <CarouselPrevious />
            <CarouselNext />
          </CarouselButtonsGroup>
        </div>
      </CarouselFrame>
    </Carousel>
  );
}
