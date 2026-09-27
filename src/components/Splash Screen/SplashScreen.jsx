"use client";

import { useState, useEffect } from "react";
import { preloadAssets } from "@/lib/preloadAssets";
import "./SplashScreen.css";

const MIN_SPLASH_MS = 900;
const EXIT_DELAY_MS = 800;

const SplashScreen = ({ setIsLoading }) => {
  const [percentage, setPercentage] = useState(0);
  const [active, setActive] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const startTime = Date.now();

    preloadAssets({
      onProgress: (progress) => {
        if (!cancelled) {
          setPercentage(Math.min(100, Math.round(progress * 100)));
        }
      },
    }).then(() => {
      if (cancelled) return;

      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_SPLASH_MS - elapsed);

      setTimeout(() => {
        if (cancelled) return;
        setPercentage(100);
        setActive(false);
        setTimeout(() => {
          if (!cancelled) setIsLoading(false);
        }, EXIT_DELAY_MS);
      }, remaining);
    });

    return () => {
      cancelled = true;
    };
  }, [setIsLoading]);

  const barWidth = {
    width: `${percentage}%`,
  };

  return (
    <div className="splash-overlay">
      <div
        className={`${active ? "splash-visible" : "splash-not-visible"} splash-panel`}
      >
        <div className="m-auto flex w-[320px] items-center loader">
          <h2 className="text-[1.125rem] font-semibold">Muhammad Bilal</h2>
          <span className="splash-track">
            <span className="splash-track-fill" style={barWidth} />
          </span>
          <h2 className="text-[1.125rem] font-semibold tabular-nums">
            {percentage}%
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
