"use client";

import { useState, useEffect } from "react";
import { CustomCursor, Nav, SplashScreen } from "@/components";
import PageTransitionShell from "@/components/PageTransition/PageTransitionShell";

export default function SiteShell() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date());
    updateTime();
    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedTime = currentTime
    ? `${currentTime.getHours() % 12 || 12}:${currentTime.getMinutes().toString().padStart(2, "0")} ${currentTime.getHours() >= 12 ? "PM" : "AM"}`
    : "";

  return (
    <>
      {!isLoading && <CustomCursor />}
      <PageTransitionShell formattedTime={formattedTime} introReady={!isLoading}>
        <Nav formattedTime={formattedTime} />
      </PageTransitionShell>
      {isLoading && <SplashScreen setIsLoading={setIsLoading} />}
    </>
  );
}
