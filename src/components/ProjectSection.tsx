interface ProjectSectionProps {
  id: string;
  bgImage: string;
  bgPosition?: string;
  missionTag: string;
  refId: string;
  eyebrow: string;
  headline: string;
  sub: string;
  primary?: string;
  secondary?: string;
  onAction?: () => void;
  onSecondary?: () => void;
}

export function ProjectSection({
  id,
  bgImage,
  bgPosition = "center",
  missionTag,
  refId,
  eyebrow,
  headline,
  sub,
  primary,
  secondary,
  onAction,
  onSecondary,
}: ProjectSectionProps) {
  return (
    <section className="sx-section" id={id}>
      <div
        className="sx-section-bg"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundPosition: bgPosition,
        }}
      />
      <div className="sx-section-top">
        <span>
          Mission_Tag<b>{missionTag}</b>
        </span>
        <span>
          Ref<b>{refId}</b>
        </span>
      </div>
      <div className="sx-section-content">
        <div className="sx-eyebrow">{eyebrow}</div>
        <h2 className="sx-headline">{headline}</h2>
        <p className="sx-sub">{sub}</p>
        <div className="sx-actions">
          {primary && (
            <button className="sx-btn sx-btn-solid" onClick={onAction}>
              {primary}
            </button>
          )}
          {secondary && (
            <button className="sx-btn" onClick={onSecondary}>
              {secondary}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
