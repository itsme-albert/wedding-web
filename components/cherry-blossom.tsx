"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  speed: number;
  opacity: number;
  sway: number;
  swaySpeed: number;
  swayAmount: number;
}

export function CherryBlossom() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const createPetal = (id: number): Petal => ({
      id,
      x: Math.random() * 100,
      y: -10,
      rotation: Math.random() * 360,
      size: Math.random() * 8 + 8,
      speed: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.3,
      sway: Math.random() * 360,
      swaySpeed: Math.random() * 2 + 1,
      swayAmount: Math.random() * 3 + 2,
    });

    // Create initial petals
    const initialPetals = Array.from({ length: 25 }, (_, i) => createPetal(i));
    setPetals(initialPetals);

    let animationFrame: number;

    const animate = () => {
      setPetals((currentPetals) => {
        return currentPetals.map((petal) => {
          const newY = petal.y + petal.speed;
          const newRotation = petal.rotation + 0.5;
          const newSway = petal.sway + petal.swaySpeed;
          const newX =
            petal.x + Math.sin(newSway * (Math.PI / 180)) * petal.swayAmount;

          if (newY > 100) {
            return createPetal(petal.id);
          }

          return {
            ...petal,
            y: newY,
            x: newX,
            rotation: newRotation,
            sway: newSway,
          };
        });
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="absolute right-0 top-0 w-48 h-full pointer-events-none">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute transition-transform duration-100"
          style={{
            left: `${petal.x}%`,
            top: `${petal.y}%`,
            transform: `rotate(${petal.rotation}deg)`,
            opacity: petal.opacity,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-pink-300 drop-shadow-sm"
          >
            <path
              d="M12 2C13.5 2 14.5 3 14.5 4.5C14.5 6 13.5 7 12 7C10.5 7 9.5 6 9.5 4.5C9.5 3 10.5 2 12 2ZM12 17C13.5 17 14.5 18 14.5 19.5C14.5 21 13.5 22 12 22C10.5 22 9.5 21 9.5 19.5C9.5 18 10.5 17 12 17ZM2 12C2 10.5 3 9.5 4.5 9.5C6 9.5 7 10.5 7 12C7 13.5 6 14.5 4.5 14.5C3 14.5 2 13.5 2 12ZM19.5 9.5C18 9.5 17 10.5 17 12C17 13.5 18 14.5 19.5 14.5C21 14.5 22 13.5 22 12C22 10.5 21 9.5 19.5 9.5Z"
              fill="currentColor"
            />
            <path
              d="M12 2C13.5 2 14.5 3 14.5 4.5C14.5 6 13.5 7 12 7C10.5 7 9.5 6 9.5 4.5C9.5 3 10.5 2 12 2ZM12 17C13.5 17 14.5 18 14.5 19.5C14.5 21 13.5 22 12 22C10.5 22 9.5 21 9.5 19.5C9.5 18 10.5 17 12 17ZM2 12C2 10.5 3 9.5 4.5 9.5C6 9.5 7 10.5 7 12C7 13.5 6 14.5 4.5 14.5C3 14.5 2 13.5 2 12ZM19.5 9.5C18 9.5 17 10.5 17 12C17 13.5 18 14.5 19.5 14.5C21 14.5 22 13.5 22 12C22 10.5 21 9.5 19.5 9.5Z"
              fill="currentColor"
              opacity="0.3"
              transform="rotate(45 12 12)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
