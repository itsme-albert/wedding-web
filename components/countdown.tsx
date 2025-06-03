"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2024-09-06T15:30:00");

    const calculateTimeLeft = () => {
      const difference = +weddingDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-8">
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-800">
          {timeLeft.days.toString().padStart(2, "0")}
        </div>
        <div className="text-gray-600">Days</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-800">
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <div className="text-gray-600">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-800">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <div className="text-gray-600">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-800">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <div className="text-gray-600">Seconds</div>
      </div>
    </div>
  );
}
