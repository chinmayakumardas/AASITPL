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
    {
      src: "/assets/banner1.jpg",
      heading: "Innovation in Tech",
      description: "Explore the cutting-edge technologies that are transforming the industry.",
    },
    {
      src: "/assets/banner2.avif",
      heading: "The Future is Now",
      description: "Embrace the future with advanced digital solutions for your business.",
    },
    {
      src: "/assets/banner3.avif",
      heading: "Empowering Digital Solutions",
      description: "Transform your operations with tailored digital solutions that drive growth.",
    },
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
            <div className="h-[40vh] md:h-[80vh] w-full flex items-center justify-start relative">
              <img
                src={image.src}
                alt={`Carousel Image ${index + 1}`}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute top-[60%] left-4 p-4   ">
                {/* Heading */}
                <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
                  {image.heading}
                </h1>
                {/* Description */}
                <p className="text-white text-lg md:text-2xl font-normal drop-shadow-lg mt-2">
                  {image.description}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  )
}
