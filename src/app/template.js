"use client";
import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

export default function Template({ children }) {
  // track time on page
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 10) {
        // Only track if user spent more than 10 seconds
        sendGAEvent("event", "page_engagement", {
          time_spent_seconds: timeSpent,
          page_path: window.location.pathname,
        });
      }
    };
  }, []);

  // scroll tracking
  useEffect(() => {
    let maxScroll = 0;

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );

      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        sendGAEvent("event", "scroll_depth", {
          scroll_percentage: scrollPercent,
          page_path: window.location.pathname,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {children}
    </div>
  );
}
