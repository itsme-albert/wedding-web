"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/sample-pic.jpg",
    alt: "Mira and Dzun together",
  },
  {
    src: "/images/couple-2.svg",
    alt: "Mira and Dzun smiling",
  },
  {
    src: "/images/couple-3.svg",
    alt: "Mira and Dzun holding hands",
  },
  {
    src: "/images/couple-4.svg",
    alt: "Mira and Dzun at sunset",
  },
  {
    src: "/images/couple-5.svg",
    alt: "Mira and Dzun laughing",
  },
];

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${
              index === currentSlide
                ? "carousel-dot-active"
                : "carousel-dot-inactive"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
