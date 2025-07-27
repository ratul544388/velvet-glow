import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

const ProductCarousel = () => {
  return (
    <Carousel opts={{ align: "start" }}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i} className="basis-1/2">
            <img
              src={`/carousel/${i + 1}.png`}
              className="size-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="absolute right-1"/>
      <CarouselPrevious className="absolute left-1"/>
    </Carousel>
  );
};

export default ProductCarousel;
