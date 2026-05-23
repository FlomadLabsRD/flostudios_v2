"use client";
import { useState, useEffect } from "react";

interface HeroProps {
  onNav: (id: string) => void;
}

export function Hero({ onNav }: HeroProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const utc = time.toISOString().slice(11, 19);

  return (
    <section className="sx-section is-hero is-center" id="hero">
      <div
        className="sx-section-bg"
        style={{
          backgroundImage: `url('/assets/img-cosmos-deep.jpg')`,
        }}
      />

      <div className="sx-hero-status">
        <span className="sx-hero-status-dot" />
        Studio Online · 2026
      </div>
      <div className="sx-hero-utc">{utc} UTC · Mission Brief 042</div>

      <div className="sx-section-content">
        <div className="sx-eyebrow">
          FloLabs Innovations Group · Creative Learning Division
        </div>
        <h1
          className="sx-headline"
          style={{
            fontSize: "clamp(48px, 9vw, 132px)",
            maxWidth: "20ch",
            letterSpacing: "-2.5px",
          }}
        >
          Creative Learning,
          <br />
          Built at Flight Speed
        </h1>
        <p className="sx-sub" style={{ maxWidth: "52ch", marginTop: 14 }}>
          A creative-learning studio for the people building AI, robotics, and
          the space economy. Remote first. Open to the world. No frontiers. No
          limits.
        </p>
        <div className="sx-actions">
          <button
            className="sx-btn sx-btn-solid"
            onClick={() => onNav("flobrain")}
          >
            See Our Work
          </button>
          <button className="sx-btn" onClick={() => onNav("crew")}>
            Apply to Studio Crew
          </button>
        </div>
      </div>

      <div className="sx-scroll">
        <span>Scroll</span>
        <span className="sx-scroll-line" />
      </div>
    </section>
  );
}
