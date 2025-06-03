"use client";

import Image from "next/image";

const images = [
  {
    src: "/images/couple-1.svg",
    alt: "Mira and Dzun together",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/couple-2.svg",
    alt: "Mira and Dzun smiling",
    className: "col-span-1",
  },
  {
    src: "/images/couple-3.svg",
    alt: "Mira and Dzun holding hands",
    className: "col-span-1",
  },
  {
    src: "/images/couple-4.svg",
    alt: "Mira and Dzun at sunset",
    className: "col-span-1",
  },
  {
    src: "/images/couple-5.svg",
    alt: "Mira and Dzun laughing",
    className: "col-span-1",
  },
];

export function ImageGallery() {
  return (
    <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-lg ${image.className}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
