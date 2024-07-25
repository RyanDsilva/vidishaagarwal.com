import React, { useEffect } from "react";

const CalendlyEmbed = ({ url, text }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div className="calendly-popup-button" data-url={url}>
      {text}
    </div>
  );
};

export default CalendlyEmbed;
