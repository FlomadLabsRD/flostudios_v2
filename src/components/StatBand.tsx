const STATS = [
  {
    n: "07",
    l: "Live Products",
    d: "Real platforms serving real users — built by studio crew.",
  },
  {
    n: "39",
    l: "Crew · 9 Time Zones",
    d: "Remote-first contributors across designers, engineers, and producers.",
  },
  {
    n: "12",
    l: "Open Mission Roles",
    d: "Internships and residencies in AI, robotics, and content.",
  },
  {
    n: "∞",
    l: "Frontiers",
    d: "No limits. From textbook to flight-ready in a single sprint.",
  },
];

export function StatBand() {
  return (
    <section className="sx-stat-band">
      <div className="sx-stat-band-inner">
        {STATS.map((s) => (
          <div className="sx-stat" key={s.l}>
            <span className="sx-stat-num">{s.n}</span>
            <span className="sx-stat-label">{s.l}</span>
            <span className="sx-stat-desc">{s.d}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
