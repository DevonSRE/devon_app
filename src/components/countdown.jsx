"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";


const Countdown = ({ targetDate, onComplete }) => {
  // Parse the target date, defaulting time to midnight if only date is provided
  const targetTime = new Date(targetDate.includes("T") ? targetDate : `${targetDate}T23:59:59`).getTime();
  const startTime = new Date().getTime();
  const totalDuration = targetTime - startTime; // Total countdown duration in ms

  const calculateTimeLeft = () => {
    const difference = targetTime - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, progress: 100 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      progress: 100 - Math.max((difference / totalDuration) * 100, 0), // Progress in percentage
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.progress >= 100) {
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  return (
    <div className="flex flex-col items-center w-full max-w-md text-white rounded-lg">
      {/* Countdown Display */}
      <div className="flex justify-center gap-2 md:gap-4 text-sm md:text-base lg:text-xl font-bold">
        {(["days", "hours", "minutes", "seconds"]).map((label) => (
          <motion.div
            key={label}
            className="flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-1 md:px-2 py-px md:py-1 w-10 lg:w-16 rounded-md flex flex-col items-center bg-neutral-950 ">
              <motion.span
                key={timeLeft[label]} // Re-animates when value changes
                className="text-lg md:text-2xl"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {timeLeft[label]}
              </motion.span>
            </div>
            <span className="text-[9px] md:text-xs lg:text-sm capitalize text-neutral-400 font-normal">{label}</span>
          </motion.div>
        ))}
      </div>

      {/* Progress Bar */}
      {/*
      <div className="w-full mt-4">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div
            className="h-2 bg-green-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${timeLeft.progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      */}
    </div>
  );
};

export { Countdown };

