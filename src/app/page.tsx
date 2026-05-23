"use client";
import { useState, useEffect } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProjectSection } from "@/components/ProjectSection";
import { StatBand } from "@/components/StatBand";
import { Footer } from "@/components/Footer";
import { ApplyModal } from "@/components/ApplyModal";
import { DotsNav } from "@/components/DotsNav";

const SECTIONS = [
  { id: "hero", label: "Studio" },
  { id: "flobrain", label: "FloBrain" },
  { id: "athletic", label: "Ath. Intel" },
  { id: "mood", label: "MoodChanger" },
  { id: "travel", label: "Flo Travel" },
  { id: "svi", label: "Space Ventures" },
  { id: "levi", label: "Legal Ethics" },
  { id: "freq", label: "Flo Frequency" },
  { id: "crew", label: "Studio Crew" },
  { id: "cta", label: "Apply" },
];

export default function Home() {
  const [active, setActive] = useState("hero");
  const [showApply, setShowApply] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;
        entries.forEach((e) => {
          if (
            e.isIntersecting &&
            (!best || e.intersectionRatio > best.intersectionRatio)
          )
            best = e;
        });
        if (best) setActive((best as IntersectionObserverEntry).target.id);
      },
      { threshold: [0.4, 0.6] }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!toast) return;
    const x = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(x);
  }, [toast]);

  const navTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  };

  const openApply = () => setShowApply(true);
  const onApplied = () => setToast("Application Transmitted · Signal Locked");

  return (
    <>
      <Nav active={active} onNav={navTo} onApply={openApply} />
      <Hero onNav={navTo} />

      {/* ── FloBrain AI ── */}
      <ProjectSection
        id="flobrain"
        bgImage="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&q=80"
        missionTag="PROD_01"
        refId="FLOBRAIN.AI · 2026.Q1"
        eyebrow="Live Product · Cognitive AI Platform"
        headline="FloBrain AI"
        sub="An AI-powered cognitive platform that augments human intelligence — research, reasoning, and decision-making at machine speed. Designed and shipped by FloStudios crew."
        primary="Visit FloBrain.ai"
        secondary="Read the brief"
        onAction={() => window.open("https://www.flobrain.ai/", "_blank")}
        onSecondary={openApply}
      />

      {/* ── Athletic Performance Intelligence ── */}
      <ProjectSection
        id="athletic"
        bgImage="https://images.unsplash.com/photo-1547153760-18fc86324498?w=1920&q=80"
        bgPosition="center 30%"
        missionTag="PROD_02"
        refId="ATH PERF INTEL · 2026.Q2"
        eyebrow="Live Product · Sports Science AI"
        headline="Athletic Performance Intelligence"
        sub="AI-driven performance analytics for elite athletes — biomechanics, recovery, and peak-output modeling. Built alongside FloLabs ventures pipeline."
        primary="Visit AthPerf.ai"
        secondary="Join the alpha"
        onAction={() =>
          window.open(
            "https://www.athleticperformanceintelligence.com/",
            "_blank"
          )
        }
        onSecondary={openApply}
      />

      {/* ── MoodChanger ── */}
      <ProjectSection
        id="mood"
        bgImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        missionTag="PROD_03"
        refId="MOODCHANGER.AI · 2026.Q2"
        eyebrow="Live Product · Emotional Intelligence"
        headline="MoodChanger"
        sub="AI-powered wellness tracking and emotional intelligence for people, athletes, and pets. Brand identity, product design, and front-end shipped by the studio."
        primary="Visit MoodChanger"
        secondary="See the case study"
        onAction={() => window.open("https://moodchanger.ai/", "_blank")}
        onSecondary={openApply}
      />

      {/* ── Flo Travel ── */}
      <ProjectSection
        id="travel"
        bgImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
        bgPosition="center 60%"
        missionTag="PROD_04"
        refId="FLO TRAVEL · 2026.Q2"
        eyebrow="Live Product · Frontier Ventures"
        headline="Flo Travel"
        sub="An AI-driven travel planner generating personalized itineraries and destination intelligence. Built alongside the FloLabs ventures pipeline — currently in private alpha."
        primary="Visit Flo Travel"
        secondary="Join the alpha"
        onAction={() => window.open("https://www.flomadtravel.com/", "_blank")}
        onSecondary={openApply}
      />

      <StatBand />

      {/* ── Space Ventures Institute ── */}
      <ProjectSection
        id="svi"
        bgImage="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1920&q=80"
        missionTag="INST_01"
        refId="SVI · 2026.Q1"
        eyebrow="Ventures Institute · Space Economy"
        headline="Space Ventures Institute"
        sub="Educating and accelerating the next generation of space economy entrepreneurs and engineers. Research, incubation, and deployment at the frontier of orbital commerce."
        primary="Visit SVI"
        secondary="Explore programs"
        onAction={() =>
          window.open("https://www.spaceventuresinstitute.com/", "_blank")
        }
        onSecondary={openApply}
      />

      {/* ── Legal Ethics Ventures Institute ── */}
      <ProjectSection
        id="levi"
        bgImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
        missionTag="INST_02"
        refId="LEVI · 2026.Q2"
        eyebrow="Ventures Institute · AI Law & Ethics"
        headline="Legal Ethics Ventures"
        sub="A ventures institute at the intersection of artificial intelligence, law, and ethics. Building the governance frameworks and legal infrastructure for the AI economy."
        primary="Visit LEVI"
        secondary="See our research"
        onAction={() =>
          window.open(
            "https://www.legalethicsventuresinstitute.com/",
            "_blank"
          )
        }
        onSecondary={openApply}
      />

      {/* ── The Flo Frequency ── */}
      <ProjectSection
        id="freq"
        bgImage="/assets/img-cupola.png"
        missionTag="MEDIA_01"
        refId="S01 · 2026"
        eyebrow="Audio Mission · Season 01"
        headline="The Flo Frequency"
        sub="An AI-powered show about the people actually building the future. Long conversations with engineers, founders, and studio crew shipping AI, robotics, and emerging tech inside FloLabs Innovations Group."
        primary="Get Notified"
        secondary="Submit a Guest"
        onAction={openApply}
        onSecondary={openApply}
      />

      {/* ── Studio Crew ── */}
      <ProjectSection
        id="crew"
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
        missionTag="CREW_042"
        refId="RECRUITMENT_ACTIVE"
        eyebrow="Open Missions · 12 Roles · Remote First"
        headline="Studio Crew"
        sub="Work on real AI and robotics products with senior makers as your mentors. Paid in portfolio, credit, and a recruitment fast-lane into the FloLabs Innovations Group network."
        primary="Apply to Crew"
        secondary="Explore Programs"
        onAction={openApply}
        onSecondary={() =>
          window.open("https://www.flolabs.international/", "_blank")
        }
      />

      {/* ── CTA ── */}
      <ProjectSection
        id="cta"
        bgImage="/assets/img-cosmos-deep.jpg"
        missionTag="LAUNCH_042"
        refId="2026.Q2 · INITIATE"
        eyebrow="Ready For Orbital Insertion?"
        headline="Build with the Studio"
        sub="Hire us for a project. Apply to the crew. Submit a guest for the show. Open a single channel to the studio and we'll route you to the right mission lead within 72 hours."
        primary="Open a Channel →"
        secondary="Email studios@flolabs.com"
        onAction={openApply}
        onSecondary={() => {
          window.location.href = "mailto:studios@flolabs.com";
        }}
      />

      <Footer />

      <DotsNav active={active} onNav={navTo} items={SECTIONS} />
      {showApply && (
        <ApplyModal
          onClose={() => setShowApply(false)}
          onSubmit={onApplied}
        />
      )}
      {toast && <div className="sx-toast">{toast}</div>}
    </>
  );
}
