"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog";
import { useState } from "react";
import "./image-gallery.css";

const images = [
  {
    src: "/images/sample-pic.jpg",
    alt: "",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/sample-pic.jpg",
    alt: "",
    className: "col-span-1",
  },
  {
    src: "/images/sample-pic.jpg",
    alt: "",
    className: "col-span-1",
  },
  {
    src: "/images/sample-pic.jpg",
    alt: "",
    className: "col-span-1",
  },
  {
    src: "/images/sample-pic.jpg",
    alt: "",
    className: "col-span-1",
  },
];

export function ImageGallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
        {images.map((image, index) => (
          <Dialog
            key={index}
            open={open && selectedImage === index}
            onOpenChange={(o) => {
              setOpen(o);
              if (!o) setSelectedImage(null);
            }}
          >
            <DialogTrigger asChild>
              <div
                className={`relative overflow-hidden rounded-lg cursor-pointer ${image.className}`}
                onClick={() => {
                  setSelectedImage(index);
                  setOpen(true);
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm shadow-2xl border-none w-auto max-w-full p-0 animate-zoom-in rounded-2xl">
              <DialogTitle>{image.alt}</DialogTitle>
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="relative flex items-center justify-center w-auto max-w-[1400px] aspect-[16/10] min-h-[400px] max-h-[80vh] p-4 sm:p-8">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1400}
                  height={875}
                  className="object-contain rounded-xl shadow-xl transition-transform duration-300 w-full h-full"
                  priority
                />
              </div>
              <div className="mt-2 text-white text-center text-lg px-4 pb-4 drop-shadow-lg w-full">
                {image.alt}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  );
}
