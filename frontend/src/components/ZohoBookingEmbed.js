import React, { useEffect, useRef, useState } from "react";

const SCRIPT_URL = "https://bookings.nimbuspop.com/assets/embed.js";

let scriptLoaded = false;
let scriptLoading = false;
const scriptCallbacks = [];

const loadScript = () => {
  return new Promise((resolve) => {
    if (scriptLoaded && window.Bookings) {
      resolve();
      return;
    }
    scriptCallbacks.push(resolve);
    if (scriptLoading) return;
    scriptLoading = true;
    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.onload = () => {
      scriptLoaded = true;
      scriptCallbacks.forEach((cb) => cb());
      scriptCallbacks.length = 0;
    };
    document.head.appendChild(script);
  });
};

const ZohoBookingEmbed = ({ url, height = "600px" }) => {
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const idRef = useRef(`zoho-embed-${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    loadScript().then(() => setReady(true));
  }, []);

  useEffect(() => {
    if (!ready || !containerRef.current || !window.Bookings) return;
    // Clear previous content
    containerRef.current.innerHTML = "";
    window.Bookings.inlineEmbed({
      url,
      parent: `#${idRef.current}`,
      height,
    });
  }, [ready, url, height]);

  return (
    <div
      ref={containerRef}
      id={idRef.current}
      data-testid="zoho-booking-embed"
      style={{ minHeight: height }}
    />
  );
};

export default ZohoBookingEmbed;
