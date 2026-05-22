/* global React */
const { useState, useEffect, useRef } = React;

/* =====================  NAV  ===================== */
function FloNav({ active, onNav, onApply }) {
  const links = [
    { id: "work", label: "Work" },
    { id: "services", label: "Services" },
    { id: "frequency", label: "Frequency" },
    { id: "products", label: "Live Products" },
    { id: "ecosystem", label: "Network" },
  ];
  return (
    <nav className="flo-nav">
      <div className="flo-nav-inner">
        <a className="flo-brand" href="#top" onClick={(e) => { e.preventDefault(); onNav("top"); }}>
          <span className="flo-brand-mark">F</span>
          <span>FloStudios<span className="flo-brand-dim">.ai</span></span>
        </a>
        <div className="flo-nav-links">
          {links.map((l) => (
            <a
              key={l.id}
              className={"flo-nav-link " + (active === l.id ? "is-active" : "")}
              href={`#${l.id}`}
              onClick={(e) => { e.preventDefault(); onNav(l.id); }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flo-nav-right">
          <div className="flo-status">
            <span className="flo-status-dot" />
            <span>Studio_Online // 2026</span>
          </div>
          <button className="flo-btn flo-btn-mono" onClick={onApply}>
            Initiate →
          </button>
        </div>
      </div>
    </nav>
  );
}

/* =====================  HERO  ===================== */
function FloHero({ onApply, onNav }) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const hhmm = time.toISOString().slice(11, 19);

  const tickerItems = [
    { l: "FREQ", v: "104.2 // The Flo Frequency S01" },
    { l: "BUILD", v: "CAIPO v0.9 — voice runtime" },
    { l: "RECRUIT", v: "12 open studio crew roles" },
    { l: "STREAM", v: "MoodChanger.ai · pets beta" },
    { l: "MISSION", v: "EOS-V earth-obs pipeline" },
    { l: "ALLIANCE", v: "FloLabs Innovations Group" },
    { l: "STATUS", v: "All systems · nominal" },
    { l: "FREQ", v: "104.2 // The Flo Frequency S01" },
    { l: "BUILD", v: "CAIPO v0.9 — voice runtime" },
    { l: "RECRUIT", v: "12 open studio crew roles" },
    { l: "STREAM", v: "MoodChanger.ai · pets beta" },
    { l: "MISSION", v: "EOS-V earth-obs pipeline" },
    { l: "ALLIANCE", v: "FloLabs Innovations Group" },
    { l: "STATUS", v: "All systems · nominal" },
  ];

  return (
    <section className="flo-hero" id="top">
      <div className="flo-hero-bg" />
      <div className="flo-hero-inner">
        <div className="flo-hero-meta">
          <div className="flo-hero-meta-group">
            <span>COORDINATES<b>STUDIO_ORBIT // FloStudios.ai</b></span>
            <span>UPLINK<b>{hhmm} UTC</b></span>
          </div>
          <div className="flo-hero-meta-group">
            <span>REF_ID<b>STUDIO_2026 // 001</b></span>
            <span>STATUS<b>RECRUITMENT_ACTIVE</b></span>
          </div>
        </div>

        <h1 className="flo-hero-display">
          <span>Creative</span> <em>learning</em>,<br/>
          built at <em>flight</em> <span className="flo-hero-dim">speed</span>
          <span className="flo-hero-cursor" />
        </h1>

        <div className="flo-hero-tail">
          <p className="flo-hero-tagline">
            <strong>FloStudios.ai</strong> is the AI-powered creative-learning division of <strong>FloLabs Innovations Group</strong>. We pair emerging makers with live missions in AI, robotics, and the space economy. Remote first. Open to the world. No frontiers. No limits.
          </p>
          <div className="flo-hero-tail-right">
            <div className="flo-hero-actions">
              <button className="flo-btn flo-btn-primary" onClick={onApply}>
                Apply to studio crew <span className="flo-arrow">→</span>
              </button>
              <button className="flo-btn flo-btn-ghost" onClick={() => onNav("work")}>
                See the work
              </button>
            </div>
            <div className="flo-hero-substat">
              03 Active Missions · 12 Open Roles · 04 Live Products
            </div>
          </div>
        </div>
      </div>

      <div className="flo-ticker">
        <div className="flo-ticker-track">
          {tickerItems.map((t, i) => (
            <span key={i} className="flo-ticker-item">
              {t.l}: <b>{t.v}</b>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================  STATS  ===================== */
function FloStats() {
  const stats = [
    { n: "04", l: "Live Products", p: 80 },
    { n: "39", l: "Studio Crew Across 9 Time-zones", p: 65 },
    { n: "12", l: "Open Mission Roles", p: 100 },
    { n: "∞", l: "Frontiers · No Limits", p: 50 },
  ];
  return (
    <section className="flo-stats" aria-label="Studio telemetry">
      {stats.map((s, i) => (
        <div className="flo-stat" key={i}>
          <span className="flo-stat-num">{s.n}</span>
          <span className="flo-stat-label">{s.l}</span>
          <span className="flo-stat-bar" style={{ "--p": s.p + "%" }} />
        </div>
      ))}
    </section>
  );
}

/* =====================  WORK BENTO  ===================== */
function FloWork({ onApply }) {
  const items = [
    {
      ref: "FEATURE // 01",
      title: "FloLabs Innovations Group",
      desc: "Corporate hub for the parent group — AI & robotics R&D, content programs, and the venture-studio crew.",
      cat: "Corporate site",
      state: "live",
      img: "assets/img-orbit-station.jpg",
      span: "grid-column: span 4; grid-row: span 2;",
      feature: true,
    },
    { ref: "WORK // 02", title: "RoboCollective.ai", desc: "Premium robot marketplace with custom commerce.", cat: "E-commerce", state: "live", img: "assets/img-launch.jpg", span: "grid-column: span 2; grid-row: span 2;" },
    { ref: "WORK // 03", title: "FloLabs International", desc: "Education platform & internship application portal.", cat: "Education", state: "live", img: "assets/img-cupola.png", span: "grid-column: span 2;" },
    { ref: "WORK // 04", title: "CAIPO.ai", desc: "AI wearable landing with waitlist runtime.", cat: "AI platform", state: "dev", img: "assets/img-earth-blue-horizon.png", span: "grid-column: span 2;" },
    { ref: "WORK // 05", title: "MoodChanger.ai", desc: "Brand system + flagship UI for AI mood platform.", cat: "Brand + UI", state: "soon", img: "assets/img-orbital-dawn.png", span: "grid-column: span 2;" },
    { ref: "WORK // 06", title: "MoodChanger · Pets", desc: "Specialized AI wellness for animal companions.", cat: "Brand + Pitch", state: "soon", img: "assets/img-earthrise-moon.png", span: "grid-column: span 2;" },
    { ref: "WORK // 07", title: "Flo Travel", desc: "AI-driven travel planner — adjacent ventures pipeline.", cat: "AI platform", state: "dev", img: "assets/img-astronaut-floating.png", span: "grid-column: span 2;" },
  ];

  return (
    <section className="flo-section" id="work">
      <div className="flo-section-inner">
        <div className="flo-section-head">
          <div>
            <div className="flo-eyebrow-row">
              <span>Studio_Catalog // Ref.2026</span>
              <span className="flo-eyebrow-spacer" />
              <span className="flo-eyebrow-ref">07 ARTIFACTS · 04 LIVE</span>
            </div>
            <h2 className="flo-section-title">Sites & systems we&rsquo;ve <em>actually shipped</em>.</h2>
          </div>
          <p className="flo-section-sub">
            Marketing sites, product surfaces, and brand systems for the FloLabs Innovations Group ecosystem. Each piece is built by studio crew — students, residents, and senior makers working on the same mission.
          </p>
        </div>

        <div className="flo-work-grid">
          {items.map((it, i) => it.feature ? (
            <a key={i} className="flo-work-card" href="#" style={{ gridColumn: "span 4", gridRow: "span 2" }} onClick={(e) => e.preventDefault()}>
              <div className="flo-work-feature" style={{ backgroundImage: `url(${it.img})` }} />
              <div className="flo-work-feature-content" style={{ position: "absolute", inset: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span className="flo-status-pill" data-state={it.state}>
                    <span className="flo-status-pill-dot" /> Live · 2026
                  </span>
                  <span style={{ fontFamily: "var(--svi-font-mono)", fontSize: 10, letterSpacing: 1.8, color: "var(--svi-blue-100)" }}>{it.ref}</span>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--svi-font-mono)", fontSize: 11, letterSpacing: 1.8, textTransform: "uppercase", color: "var(--svi-blue-100)", marginBottom: 10 }}>{it.cat}</div>
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                </div>
              </div>
            </a>
          ) : (
            <a key={i} className="flo-work-card" href="#" style={{ gridColumn: it.span.includes("4") ? "span 4" : "span 2", gridRow: it.span.includes("row: span 2") ? "span 2" : "span 1" }} onClick={(e) => e.preventDefault()}>
              <div className="flo-work-card-img" style={{ backgroundImage: `url(${it.img})` }} />
              <div className="flo-work-card-body">
                <div className="flo-work-card-tag">
                  <span>{it.ref}</span>
                  <span className="flo-status-pill" data-state={it.state}>
                    <span className="flo-status-pill-dot" /> {it.state === "live" ? "Live" : it.state === "dev" ? "In dev" : "Soon"}
                  </span>
                </div>
                <h4 className="flo-work-card-title">{it.title}</h4>
                <p className="flo-work-card-desc">{it.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================  SERVICES  ===================== */
function FloServices() {
  const caps = [
    { n: "01", t: "Web Design & Build", d: "Modern, responsive marketing surfaces and product MVPs — Next.js, React, Tailwind, motion.", tags: ["Next.js", "React", "Framer Motion"] },
    { n: "02", t: "Brand Identity", d: "Visual identity systems built to outlast their first launch — wordmarks, kits, voice, guardrails.", tags: ["Logo", "Type", "Color"] },
    { n: "03", t: "Content Production", d: "Video, audio, and editorial content that tells your story across platforms with a single voice.", tags: ["Video", "Podcast", "Editorial"] },
    { n: "04", t: "Digital Strategy", d: "Plans that connect product goals to creative output — sequencing, channels, measurement.", tags: ["Roadmap", "GTM", "Analytics"] },
    { n: "05", t: "Creative Consultation", d: "From concept to launch — expert review, critique sessions, and direction for your team.", tags: ["Critique", "Direction", "Pairing"] },
    { n: "06", t: "Long-term Support", d: "Ongoing care for your surfaces — performance, content updates, brand evolution.", tags: ["Maintenance", "Iteration", "Care"] },
  ];

  return (
    <section className="flo-section flo-section-tinted" id="services">
      <div className="flo-section-inner">
        <div className="flo-section-head">
          <div>
            <div className="flo-eyebrow-row">
              <span>Capabilities // 042</span>
              <span className="flo-eyebrow-spacer" />
              <span className="flo-eyebrow-ref">06 SERVICE LINES</span>
            </div>
            <h2 className="flo-section-title">What the <em>studio crew</em> does for partners.</h2>
          </div>
          <p className="flo-section-sub">
            Real digital craft, delivered by senior makers and learning crew working side-by-side. No agency theater — just shipped surfaces, owned outcomes, and a credit line for every contributor.
          </p>
        </div>

        <div className="flo-cap-grid">
          {caps.map((c, i) => (
            <div className="flo-cap" key={i}>
              <span className="flo-cap-num">[{c.n}]</span>
              <h3 className="flo-cap-title">{c.t}</h3>
              <p className="flo-cap-desc">{c.d}</p>
              <div className="flo-cap-tags">
                {c.tags.map((t) => <span className="flo-cap-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================  FREQUENCY (PODCAST)  ===================== */
function FloFrequency({ onApply }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(34);
  const bars = 64;
  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setProgress((p) => (p >= 100 ? 0 : p + .35)), 200);
    return () => clearInterval(t);
  }, [playing]);

  // stable random heights so it doesn't re-rand on each render
  const heights = useRef(null);
  if (!heights.current) {
    heights.current = Array.from({ length: bars }, (_, i) => 25 + Math.round(60 * Math.abs(Math.sin(i * .42)) + 10 * Math.sin(i * 1.13)));
  }
  const played = Math.floor((progress / 100) * bars);

  return (
    <section className="flo-section" id="frequency">
      <div className="flo-section-inner">
        <div className="flo-freq">
          <div className="flo-freq-grid">
            <div>
              <div className="flo-freq-eyebrow">// The Flo Frequency · Season 01</div>
              <h2>An AI-powered show about the people <em>actually building</em> the future.</h2>
              <p>
                Long conversations with the engineers, founders, and learning crew shipping AI, robotics, and emerging-tech products inside the FloLabs Innovations Group network. Recorded multi-cam. Released on every major platform.
              </p>
              <div className="flo-freq-row">
                <button className="flo-btn flo-btn-primary" onClick={onApply}>
                  Get notified <span className="flo-arrow">→</span>
                </button>
                <button className="flo-btn flo-btn-ghost">Submit a guest</button>
              </div>
            </div>

            <div className="flo-freq-player">
              <div className="flo-freq-now">{playing ? "// Now Playing · S01.E01" : "// Up Next · S01.E01"}</div>
              <h4 className="flo-freq-track-title">Building CAIPO from a dorm room</h4>
              <p className="flo-freq-track-host">With the studio crew · 48 min</p>
              <div className={"flo-freq-wave " + (playing ? "is-playing" : "")}>
                {heights.current.map((h, i) => (
                  <span key={i} className={i <= played ? "is-played" : ""} style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="flo-freq-controls">
                <button className="flo-freq-play" onClick={() => setPlaying((p) => !p)} aria-label="Play">
                  {playing ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="2" y="2" width="3" height="10" rx="1"/><rect x="9" y="2" width="3" height="10" rx="1"/></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M3 2v10l9-5z"/></svg>
                  )}
                </button>
                <span className="flo-freq-time"><b>{formatTime(progress * 0.48 * 60)}</b> / 48:00</span>
              </div>
              <div className="flo-freq-meta">
                <span>EP.001 // VOICE_RUNTIME</span>
                <span>2026.Q1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

/* =====================  LIVE PRODUCTS  ===================== */
function FloProducts() {
  const prods = [
    { ref: "PROD // 01", name: "CAIPO.ai", tag: "Wearable AI productivity officer", desc: "An always-on AI assistant that helps professionals run their workflow by voice. Built with the FloStudios learning crew.", url: "https://caipo.ai", glyph: "C", img: "assets/illu-caipo-device.png" },
    { ref: "PROD // 02", name: "MoodChanger.ai", tag: "AI-powered mood management", desc: "Personalized wellness tracking and emotional intelligence for people, athletes, and pets. Brand + product partnership.", url: "https://moodchanger.ai", glyph: "M", img: "assets/illu-human-outline.png" },
    { ref: "PROD // 03", name: "Flo Travel", tag: "AI-driven travel planning", desc: "Custom itineraries and destination recommendations powered by machine learning. Currently in private alpha.", url: "https://flotravel.com", glyph: "T", img: null },
    { ref: "PROD // 04", name: "RoboCollective", tag: "Robot marketplace & dealership", desc: "A franchise platform connecting buyers with frontier robotics tech. E-commerce, content, and dealer tools.", url: "https://robocollective.ai", glyph: "R", img: "assets/illu-quadruped-robot.png" },
  ];

  return (
    <section className="flo-section flo-section-darker" id="products">
      <div className="flo-section-inner">
        <div className="flo-section-head">
          <div>
            <div className="flo-eyebrow-row">
              <span>Live_Products // FloLabs Stack</span>
              <span className="flo-eyebrow-spacer" />
              <span className="flo-eyebrow-ref">04 LIVE · STUDIO_BUILT</span>
            </div>
            <h2 className="flo-section-title">Products built by <em>students</em>, for real users.</h2>
          </div>
          <p className="flo-section-sub">
            Real platforms serving real people — designed and built through the FloStudios experiential learning program. Studio crew earn portfolio credits, real launch shipping, and a recruitment fast-lane into the FloLabs Innovations Group network.
          </p>
        </div>

        <div className="flo-prod-grid">
          {prods.map((p, i) => (
            <a key={i} className="flo-prod" href={p.url} target="_blank" rel="noopener noreferrer">
              <div>
                <div className="flo-prod-ref">{p.ref}</div>
                <h3>{p.name}</h3>
                <div className="flo-prod-tagline">{p.tag}</div>
                <p className="flo-prod-desc">{p.desc}</p>
                <span className="flo-prod-link">Open product →</span>
              </div>
              <div className="flo-prod-visual">
                {p.img ? <img src={p.img} alt="" /> : <span className="flo-prod-glyph">{p.glyph}</span>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================  ECOSYSTEM  ===================== */
function FloEcosystem() {
  const eco = [
    { ref: "NODE // 01", name: "FloLabs Innovations Group", desc: "AI & robotics R&D — the parent group.", url: "https://flolabs.com" },
    { ref: "NODE // 02", name: "FloLabs International", desc: "Education programs & internships.", url: "https://flolabs.international" },
    { ref: "NODE // 03", name: "Flo Travel", desc: "AI-powered travel & frontier ventures.", url: "https://flotravel.com" },
    { ref: "NODE // 04", name: "CAIPO", desc: "AI productivity officer · wearable.", url: "https://caipo.ai" },
  ];
  return (
    <section className="flo-section" id="ecosystem">
      <div className="flo-section-inner">
        <div className="flo-section-head">
          <div>
            <div className="flo-eyebrow-row">
              <span>Network_Map // FloLabs Group</span>
              <span className="flo-eyebrow-spacer" />
              <span className="flo-eyebrow-ref">04 NODES · 01 GROUP</span>
            </div>
            <h2 className="flo-section-title">Part of the <em>FloLabs</em> network.</h2>
          </div>
          <p className="flo-section-sub">
            FloStudios.ai operates alongside the rest of the FloLabs Innovations Group — research, education, frontier travel, and CAIPO&rsquo;s wearable AI. One mission. Multiple surfaces. Shared crew.
          </p>
        </div>

        <div className="flo-eco-grid">
          {eco.map((e, i) => (
            <a className="flo-eco" key={i} href={e.url} target="_blank" rel="noopener noreferrer">
              <span className="flo-eco-ref">{e.ref}</span>
              <h4 className="flo-eco-name">{e.name}</h4>
              <p className="flo-eco-desc">{e.desc}</p>
              <span className="flo-eco-link">Visit</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================  CTA + FOOTER  ===================== */
function FloCTA({ onApply }) {
  return (
    <section className="flo-section">
      <div className="flo-section-inner">
        <div className="flo-cta">
          <div className="flo-cta-inner">
            <div className="flo-freq-eyebrow" style={{ justifyContent: "center", marginBottom: 24 }}>// Initiate_Application · 2026.Q2</div>
            <h2>Ready for <em>orbital insertion</em>?</h2>
            <p>
              Join the studio crew. Work on real AI and robotics products with the FloLabs Innovations Group. Remote first, paid in mentorship and portfolio credit, open to the world.
            </p>
            <div className="flo-cta-row">
              <button className="flo-btn flo-btn-primary" onClick={onApply}>
                Apply to studio crew <span className="flo-arrow">→</span>
              </button>
              <a className="flo-btn flo-btn-ghost" href="https://flolabs.international/internships/" target="_blank" rel="noopener noreferrer">
                Explore programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloFooter() {
  return (
    <footer className="flo-footer">
      <div className="flo-footer-inner">
        <div className="flo-footer-grid">
          <div className="flo-footer-brand">
            <h3>FloStudios<span style={{ color: "var(--svi-blue-300)" }}>.ai</span></h3>
            <p>
              The AI-powered creative-learning division of <strong style={{ color: "var(--svi-ink-100)" }}>FloLabs Innovations Group</strong>. We pair emerging makers with live missions across AI, robotics, and the space economy.
            </p>
            <div className="flo-status">
              <span className="flo-status-dot" />
              <span>All systems · nominal</span>
            </div>
          </div>
          <div className="flo-footer-col">
            <h5>Studio</h5>
            <ul>
              <li><a href="#work">Work</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#frequency">The Flo Frequency</a></li>
              <li><a href="#products">Live Products</a></li>
            </ul>
          </div>
          <div className="flo-footer-col">
            <h5>Network</h5>
            <ul>
              <li><a href="https://flolabs.com" target="_blank" rel="noopener noreferrer">FloLabs Innovations Group</a></li>
              <li><a href="https://flolabs.international" target="_blank" rel="noopener noreferrer">FloLabs International</a></li>
              <li><a href="https://flotravel.com" target="_blank" rel="noopener noreferrer">Flo Travel</a></li>
              <li><a href="https://caipo.ai" target="_blank" rel="noopener noreferrer">CAIPO</a></li>
            </ul>
          </div>
          <div className="flo-footer-col">
            <h5>Connect</h5>
            <ul>
              <li><a href="mailto:studios@flolabs.com">studios@flolabs.com</a></li>
              <li><a href="mailto:john@flolabs.com">john@flolabs.com</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="flo-footer-bottom">
          <span>© 2026 FloStudios.ai · A division of FloLabs Innovations Group</span>
          <div className="flo-footer-bottom-right">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =====================  APPLY MODAL  ===================== */
function FloApplyModal({ onClose, onSubmit }) {
  const [stage, setStage] = useState("form"); // form | success
  const [data, setData] = useState({ name: "", email: "", role: "Studio crew · Designer", message: "" });

  function submit(e) {
    e.preventDefault();
    setStage("success");
    setTimeout(() => { onSubmit && onSubmit(); onClose(); }, 1600);
  }

  return (
    <div className="flo-modal-bg" onClick={(e) => { if (e.target.className === "flo-modal-bg") onClose(); }}>
      <div className="flo-modal" role="dialog" aria-modal="true">
        <button className="flo-modal-close" onClick={onClose} aria-label="Close">×</button>
        {stage === "form" ? (
          <>
            <div className="flo-modal-eyebrow">// Initiate_Application · STUDIO_2026</div>
            <h3>Open a channel to the crew</h3>
            <p>Tell us your name, email, and what you want to work on. We&rsquo;ll route you to the right mission lead within 72 hours.</p>
            <form className="flo-form" onSubmit={submit}>
              <div className="flo-form-row">
                <div className="flo-field">
                  <label>Full name</label>
                  <input required value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Ada Lovelace" />
                </div>
                <div className="flo-field">
                  <label>Email</label>
                  <input required type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="ada@example.com" />
                </div>
              </div>
              <div className="flo-field">
                <label>Mission interest</label>
                <select value={data.role} onChange={(e) => setData({ ...data, role: e.target.value })}>
                  <option>Studio crew · Designer</option>
                  <option>Studio crew · Engineer</option>
                  <option>Studio crew · Producer / Content</option>
                  <option>Studio crew · AI Research</option>
                  <option>Just looking around</option>
                </select>
              </div>
              <div className="flo-field">
                <label>Why this mission?</label>
                <textarea value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} placeholder="Tell us your story, background, and why you care about space and this kind of work." />
              </div>
              <div className="flo-form-actions">
                <button type="submit" className="flo-btn flo-btn-primary">Transmit application →</button>
                <span className="flo-mono-mini">// Channel encrypted · 256_BIT</span>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className="flo-modal-eyebrow" style={{ color: "#4ade80" }}>// Transmission_Received · OK</div>
            <h3>Signal locked.</h3>
            <p>
              We&rsquo;ve received your application. Expect a reply from a FloStudios mission lead within 72 hours, routed to <b style={{ color: "var(--svi-ink-50)" }}>{data.email || "your inbox"}</b>.
            </p>
            <div style={{ marginTop: 28, fontFamily: "var(--svi-font-mono)", fontSize: 11, letterSpacing: 1.6, textTransform: "uppercase", color: "var(--svi-fg-fainter)" }}>
              REF // STUDIO_2026 // {Math.floor(Math.random() * 9000 + 1000)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* Expose globally */
Object.assign(window, {
  FloNav, FloHero, FloStats, FloWork, FloServices, FloFrequency, FloProducts, FloEcosystem, FloCTA, FloFooter, FloApplyModal
});
