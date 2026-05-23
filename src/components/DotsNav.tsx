interface Section {
  id: string;
  label: string;
}

interface DotsNavProps {
  active: string;
  onNav: (id: string) => void;
  items: Section[];
}

export function DotsNav({ active, onNav, items }: DotsNavProps) {
  return (
    <div className="sx-dots">
      {items.map((it) => (
        <button
          key={it.id}
          className={`sx-dot${active === it.id ? " is-active" : ""}`}
          onClick={() => onNav(it.id)}
          aria-label={it.label}
        >
          <span className="sx-dot-label">{it.label}</span>
        </button>
      ))}
    </div>
  );
}
