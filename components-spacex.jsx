/* global React */
const { useState, useEffect, useRef } = React;

/* --------- NAV --------- */
function SxNav({ active, onNav, onApply }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [
    { id: "caipo", label: "CAIPO" },
    { id: "mood", label: "MoodChanger" },
    { id: "travel", label: "Flo Travel" },
    { id: "robo", label: "RoboCollective" },
    { id: "freq", label: "Flo Frequency" },
    { id: "crew", label: "Studio Crew" },
  ];
  return (
    <nav className={"sx-nav " + (scrolled ? "is-scrolled" : "")}>
      <a className="sx-brand" href="#hero" onClick={(e) => { e.preventDefault(); onNav("hero"); }}>
        FLOSTUDIOS <span className="sx-brand-dim">·AI</span>
      </a>
      <div className="sx-nav-links">
        {links.map((l) => (
          <a key={l.id} className={"sx-nav-link " + (active === l.id ? "is-active" : "")}
             href={`#${l.id}`} onClick={(e) => { e.preventDefault(); onNav(l.id); }}>
            {l.label}
          </a>
        ))}
      </div>
      <div className="sx-nav-right">
        <button className="sx-nav-link" onClick={onApply}>Apply</button>
        <button className="sx-icon-btn" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="7" x2="19" y2="7" />
            <line x1="3" y1="15" x2="19" y2="15" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

/* --------- HERO --------- */
function SxHero({ onNav }) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const utc = time.toISOString().slice(11, 19);
  return (
    <section className="sx-section is-hero is-center" id="hero">
      <div className="sx-section-bg sx-bg-hero" />

      <div className="sx-hero-status">
        <span className="sx-hero-status-dot" />
        Studio Online · 2026
      </div>
      <div className="sx-hero-utc">{utc} UTC · Mission Brief 042</div>

      <div className="sx-section-content">
        <div className="sx-eyebrow">FloLabs Innovations Group · Creative Learning Division</div>
        <h1 className="sx-headline" style={{ fontSize: "clamp(48px, 9vw, 132px)", maxWidth: "20ch", letterSpacing: "-2.5px" }}>
          Creative Learning,<br/>Built at Flight Speed
        </h1>
        <p className="sx-sub" style={{ maxWidth: "52ch", marginTop: 14 }}>
          A creative-learning studio for the people building AI, robotics, and the space economy. Remote first. Open to the world. No frontiers. No limits.
        </p>
        <div className="sx-actions">
          <button className="sx-btn sx-btn-solid" onClick={() => onNav("caipo")}>See Our Work</button>
          <button className="sx-btn" onClick={() => onNav("crew")}>Apply to Studio Crew</button>
        </div>
      </div>

      <div className="sx-scroll">
        <span>Scroll</span>
        <span className="sx-scroll-line" />
      </div>
    </section>
  );
}

/* --------- GENERIC PROJECT SECTION --------- */
function SxProject({ id, bg, missionTag, refId, eyebrow, headline, sub, primary, secondary, onAction, onSecondary }) {
  return (
    <section className="sx-section" id={id}>
      <div className={`sx-section-bg ${bg}`} />
      <div className="sx-section-top">
        <span>Mission_Tag<b style={{marginLeft: 10}}>{missionTag}</b></span>
        <span>Ref<b style={{marginLeft: 10}}>{refId}</b></span>
      </div>
      <div className="sx-section-content">
        <div className="sx-eyebrow">{eyebrow}</div>
        <h2 className="sx-headline">{headline}</h2>
        <p className="sx-sub">{sub}</p>
        <div className="sx-actions">
          {primary && <button className="sx-btn sx-btn-solid" onClick={onAction}>{primary}</button>}
          {secondary && <button className="sx-btn" onClick={onSecondary}>{secondary}</button>}
        </div>
      </div>
    </section>
  );
}

/* --------- STAT BAND --------- */
function SxStatBand() {
  const stats = [
    { n: "04", l: "Live Products", d: "Real platforms serving real users — built by studio crew." },
    { n: "39", l: "Crew · 9 Time Zones", d: "Remote-first contributors across designers, engineers, and producers." },
    { n: "12", l: "Open Mission Roles", d: "Internships and residencies in AI, robotics, and content." },
    { n: "∞", l: "Frontiers", d: "No limits. From textbook to flight-ready in a single sprint." },
  ];
  return (
    <section className="sx-stat-band">
      <div className="sx-stat-band-inner">
        {stats.map((s, i) => (
          <div className="sx-stat" key={i}>
            <span className="sx-stat-num">{s.n}</span>
            <span className="sx-stat-label">{s.l}</span>
            <span className="sx-stat-desc">{s.d}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------- FOOTER --------- */
function SxFooter() {
  return (
    <footer className="sx-footer">
      <div className="sx-footer-inner">
        <div className="sx-footer-top">
          <div className="sx-footer-brand-block">
            <h3>FloStudios·AI</h3>
            <p>
              The creative-learning division of <strong style={{ opacity: 1 }}>FloLabs Innovations Group</strong>. We pair emerging makers with live missions across AI, robotics, and the space economy.
            </p>
          </div>
          <div className="sx-footer-cols">
            <div className="sx-footer-col">
              <h5>Studio</h5>
              <ul>
                <li><a href="#caipo">Live Products</a></li>
                <li><a href="#freq">The Flo Frequency</a></li>
                <li><a href="#crew">Studio Crew</a></li>
                <li><a href="#cta">Apply</a></li>
              </ul>
            </div>
            <div className="sx-footer-col">
              <h5>Network</h5>
              <ul>
                <li><a href="https://flolabs.com" target="_blank" rel="noopener noreferrer">FloLabs Innovations Group</a></li>
                <li><a href="https://flolabs.international" target="_blank" rel="noopener noreferrer">FloLabs International</a></li>
                <li><a href="https://flotravel.com" target="_blank" rel="noopener noreferrer">Flo Travel</a></li>
                <li><a href="https://caipo.ai" target="_blank" rel="noopener noreferrer">CAIPO</a></li>
              </ul>
            </div>
            <div className="sx-footer-col">
              <h5>Connect</h5>
              <ul>
                <li><a href="mailto:studios@flolabs.com">studios@flolabs.com</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">YouTube</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sx-footer-bottom">
          <span>© 2026 FloStudios.ai · A division of FloLabs Innovations Group</span>
          <div className="sx-footer-bottom-right">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* --------- APPLY MODAL --------- */
function SxApplyModal({ onClose, onSubmit }) {
  const [stage, setStage] = useState("form");
  const [data, setData] = useState({ name: "", email: "", role: "Designer", message: "" });
  function submit(e) {
    e.preventDefault();
    setStage("success");
    setTimeout(() => { onSubmit && onSubmit(); onClose(); }, 1800);
  }
  return (
    <div className="sx-modal-bg" onClick={(e) => { if (e.target.className === "sx-modal-bg") onClose(); }}>
      <div className="sx-modal" role="dialog" aria-modal="true">
        <button className="sx-modal-close" onClick={onClose} aria-label="Close">×</button>
        {stage === "form" ? (
          <>
            <div className="sx-modal-eyebrow">Initiate Application · Studio 2026</div>
            <h3>Join the<br/>Studio Crew</h3>
            <p>Tell us your name, email, and what you want to work on. We&rsquo;ll route you to the right mission lead within 72 hours.</p>
            <form className="sx-form" onSubmit={submit}>
              <div className="sx-form-row">
                <div className="sx-field">
                  <label>Full Name</label>
                  <input required value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Ada Lovelace" />
                </div>
                <div className="sx-field">
                  <label>Email</label>
                  <input required type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="ada@example.com" />
                </div>
              </div>
              <div className="sx-field">
                <label>Mission Interest</label>
                <select value={data.role} onChange={(e) => setData({ ...data, role: e.target.value })}>
                  <option>Designer</option>
                  <option>Engineer</option>
                  <option>Producer / Content</option>
                  <option>AI Research</option>
                  <option>Just looking around</option>
                </select>
              </div>
              <div className="sx-field">
                <label>Why this mission?</label>
                <textarea value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} placeholder="Background, what you&rsquo;ve built, what you want to work on." />
              </div>
              <div className="sx-form-actions">
                <button type="submit" className="sx-btn sx-btn-solid" style={{ height: 44, padding: "0 32px" }}>Transmit Application →</button>
                <small>Channel encrypted · 256-bit</small>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className="sx-modal-eyebrow" style={{ color: "#4ade80", opacity: 1 }}>Transmission Received · OK</div>
            <h3>Signal Locked.</h3>
            <p>
              We&rsquo;ve received your application. Expect a reply from a FloStudios mission lead within 72 hours, routed to <strong style={{ opacity: 1 }}>{data.email || "your inbox"}</strong>.
            </p>
            <div style={{ marginTop: 24, fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", opacity: .55 }}>
              Ref · Studio 2026 · {Math.floor(Math.random()*9000+1000)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* --------- DOTS NAV --------- */
function SxDots({ active, onNav, items }) {
  return (
    <div className="sx-dots">
      {items.map((it) => (
        <button key={it.id} className={"sx-dot " + (active === it.id ? "is-active" : "")}
                onClick={() => onNav(it.id)} aria-label={it.label}>
          <span className="sx-dot-label">{it.label}</span>
        </button>
      ))}
    </div>
  );
}

Object.assign(window, { SxNav, SxHero, SxProject, SxStatBand, SxFooter, SxApplyModal, SxDots });
