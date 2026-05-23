"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { id: "flobrain", label: "FloBrain" },
  { id: "athletic", label: "AthPerf Intel" },
  { id: "mood", label: "MoodChanger" },
  { id: "travel", label: "Flo Travel" },
  { id: "svi", label: "Space Ventures" },
  { id: "freq", label: "Flo Frequency" },
];

interface NavProps {
  active: string;
  onNav: (id: string) => void;
  onApply: () => void;
}

export function Nav({ active, onNav, onApply }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`sx-nav${scrolled ? " is-scrolled" : ""}`}>
      <a
        className="sx-brand"
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          onNav("hero");
        }}
      >
        FLOSTUDIOS <span className="sx-brand-dim">·AI</span>
      </a>

      <div className="sx-nav-links">
        {NAV_LINKS.map((l) => (
          <a
            key={l.id}
            className={`sx-nav-link${active === l.id ? " is-active" : ""}`}
            href={`#${l.id}`}
            onClick={(e) => {
              e.preventDefault();
              onNav(l.id);
            }}
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="sx-nav-right">
        <button className="sx-nav-link" onClick={onApply}>
          Apply
        </button>
        <button className="sx-icon-btn" aria-label="Menu">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="3" y1="7" x2="19" y2="7" />
            <line x1="3" y1="15" x2="19" y2="15" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
