"use client";

import { useEffect, useState } from "react";

const TimePage = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Date & Time</h1>
      <p suppressHydrationWarning>{date.toLocaleString()}</p>
    </div>
  );
};

export default TimePage;
