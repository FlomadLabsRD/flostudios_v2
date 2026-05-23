"use client";
import { useState } from "react";

interface ApplyModalProps {
  onClose: () => void;
  onSubmit?: () => void;
}

export function ApplyModal({ onClose, onSubmit }: ApplyModalProps) {
  const [stage, setStage] = useState<"form" | "success">("form");
  const [data, setData] = useState({
    name: "",
    email: "",
    role: "Designer",
    message: "",
  });
  const [refNum] = useState(() => Math.floor(Math.random() * 9000 + 1000));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setStage("success");
    setTimeout(() => {
      onSubmit?.();
      onClose();
    }, 1800);
  }

  return (
    <div
      className="sx-modal-bg"
      onClick={(e) => {
        if ((e.target as HTMLElement).classList.contains("sx-modal-bg"))
          onClose();
      }}
    >
      <div className="sx-modal" role="dialog" aria-modal="true">
        <button
          className="sx-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {stage === "form" ? (
          <>
            <div className="sx-modal-eyebrow">
              Initiate Application · Studio 2026
            </div>
            <h3>
              Join the
              <br />
              Studio Crew
            </h3>
            <p>
              Tell us your name, email, and what you want to work on. We&rsquo;ll
              route you to the right mission lead within 72 hours.
            </p>
            <form className="sx-form" onSubmit={submit}>
              <div className="sx-form-row">
                <div className="sx-field">
                  <label>Full Name</label>
                  <input
                    required
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    placeholder="Ada Lovelace"
                  />
                </div>
                <div className="sx-field">
                  <label>Email</label>
                  <input
                    required
                    type="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    placeholder="ada@example.com"
                  />
                </div>
              </div>
              <div className="sx-field">
                <label>Mission Interest</label>
                <select
                  value={data.role}
                  onChange={(e) => setData({ ...data, role: e.target.value })}
                >
                  <option>Designer</option>
                  <option>Engineer</option>
                  <option>Producer / Content</option>
                  <option>AI Research</option>
                  <option>Just looking around</option>
                </select>
              </div>
              <div className="sx-field">
                <label>Why this mission?</label>
                <textarea
                  value={data.message}
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                  placeholder="Background, what you've built, what you want to work on."
                />
              </div>
              <div className="sx-form-actions">
                <button
                  type="submit"
                  className="sx-btn sx-btn-solid"
                  style={{ height: 44, padding: "0 32px" }}
                >
                  Transmit Application →
                </button>
                <small>Channel encrypted · 256-bit</small>
              </div>
            </form>
          </>
        ) : (
          <>
            <div
              className="sx-modal-eyebrow"
              style={{ color: "#4ade80", opacity: 1 }}
            >
              Transmission Received · OK
            </div>
            <h3>Signal Locked.</h3>
            <p>
              We&rsquo;ve received your application. Expect a reply from a
              FloStudios mission lead within 72 hours, routed to{" "}
              <strong style={{ opacity: 1 }}>
                {data.email || "your inbox"}
              </strong>
              .
            </p>
            <div
              style={{
                marginTop: 24,
                fontSize: 11,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                opacity: 0.55,
              }}
            >
              Ref · Studio 2026 · {refNum}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
