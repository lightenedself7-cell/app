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

const Shimmer = () => (
  <div className="flex flex-col items-center justify-center gap-6 py-16 animate-pulse" data-testid="zoho-loading-spinner">
    <div className="w-16 h-16 rounded-full border-[3px] border-[#E8D4CC] border-t-[#A68B76] animate-spin" />
    <p
      className="text-sm text-[#B39A8E] tracking-wide"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      Loading booking calendar...
    </p>
    <div className="w-full max-w-md space-y-4 px-8">
      <div className="h-14 bg-[#F5EDE6] rounded-2xl" />
      <div className="h-4 bg-[#F5EDE6] rounded-full w-3/4 mx-auto" />
      <div className="h-4 bg-[#F5EDE6] rounded-full w-1/2 mx-auto" />
      <div className="grid grid-cols-7 gap-2 pt-4">
        {Array.from({ length: 21 }).map((_, i) => (
          <div key={i} className="h-8 bg-[#F5EDE6] rounded-lg" />
        ))}
      </div>
    </div>
  </div>
);

const ZohoBookingEmbed = ({ url, height = "600px" }) => {
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const idRef = useRef(`zoho-embed-${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    loadScript().then(() => setReady(true));
  }, []);

  useEffect(() => {
    if (!ready || !containerRef.current || !window.Bookings) return;
    containerRef.current.innerHTML = "";
    setLoaded(false);
    window.Bookings.inlineEmbed({
      url,
      parent: `#${idRef.current}`,
      height,
    });
    // Detect when Zoho iframe renders
    const observer = new MutationObserver(() => {
      const iframe = containerRef.current?.querySelector("iframe");
      if (iframe) {
        iframe.addEventListener("load", () => setLoaded(true));
        // Fallback in case load already fired
        setTimeout(() => setLoaded(true), 8000);
        observer.disconnect();
      }
    });
    observer.observe(containerRef.current, { childList: true, subtree: true });
    // Ultimate fallback
    const fallback = setTimeout(() => setLoaded(true), 12000);
    return () => { observer.disconnect(); clearTimeout(fallback); };
  }, [ready, url, height]);

  return (
    <div style={{ minHeight: height, position: "relative" }}>
      {!loaded && <Shimmer />}
      <div
        ref={containerRef}
        id={idRef.current}
        data-testid="zoho-booking-embed"
        style={{ minHeight: height, opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
      />
    </div>
  );
};

export default ZohoBookingEmbed;
