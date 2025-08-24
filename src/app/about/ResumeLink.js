"use client";
import { sendGAEvent } from "@next/third-parties/google";

export default function ResumeLink({ href, text }) {
  return (
    <a
      href={href}
      target="_blank"
      type="application/octet-stream"
      onClick={() => sendGAEvent("event", "buttonClicked", { value: "resume" })}
      download
    >
      {text}
    </a>
  );
}


