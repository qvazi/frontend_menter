"use client";

import { useEffect, useState } from "react";

const TimePage = () => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    if (window) {
      setDate(new Date());

      const intervalId = setInterval(() => {
        setDate(new Date());
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div>
      <h1>Date & Time</h1>
      <p suppressHydrationWarning>{date ? date.toLocaleString() : "--:--"}</p>
    </div>
  );
};

export default TimePage;
