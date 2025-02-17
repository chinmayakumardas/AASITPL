import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HeroSection() {
  const images = [
    "/assets/imgslide1.jpg",
    "/assets/imgslide2.webp",
    "/assets/imgslide3.jpeg",
    "/assets/imgslide4.webp",
    "/assets/imgslide5.jpeg",
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full h-full relative"
    >
      <CarouselContent className="h-full">
        {images.map((image, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="h-full w-full flex items-center justify-center">
              <img src={image} alt={`Carousel Image ${index + 1}`} className="h-full w-full object-cover" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  )
}