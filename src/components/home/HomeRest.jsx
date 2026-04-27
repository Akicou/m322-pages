import { Link } from "react-router-dom";
import { features } from "../../data/features";
import { testimonials } from "../../data/testimonials";
import { useLang } from "../../i18n/LanguageContext";

export function HomeStrip() {
  const { t } = useLang();
  const s = t.homeStrip;
  return (
    <div className="strip">
      <div className="strip-inner">
        <div className="strip-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          {s.s1}
        </div>
        <div className="strip-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
          {s.s2}
        </div>
        <div className="strip-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          {s.s3}
        </div>
        <div className="strip-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          {s.s4}
        </div>
        <div className="strip-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
          </svg>
          {s.s5}
        </div>
      </div>
    </div>
  );
}

export function HomeProblemsPreview() {
  const { t } = useLang();
  const p = t.homeProblems;
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-label">{p.label}</div>
        <h2 className="section-title">
          {p.title1}
          <br />
          {p.title2}
        </h2>
        <p className="section-sub">{p.sub}</p>
        <div className="problems-grid">
          <div className="problem-card">
            <div className="problem-num">{p.p1n}</div>
            <h3>{p.p1t}</h3>
            <p>{p.p1d}</p>
            <div className="problem-arrow">{p.p1a}</div>
          </div>
          <div className="problem-card">
            <div className="problem-num">{p.p2n}</div>
            <h3>{p.p2t}</h3>
            <p>{p.p2d}</p>
            <div className="problem-arrow">{p.p2a}</div>
          </div>
          <div className="problem-card">
            <div className="problem-num">{p.p3n}</div>
            <h3>{p.p3t}</h3>
            <p>{p.p3d}</p>
            <div className="problem-arrow">{p.p3a}</div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link to="/problems" className="btn-primary">
            {p.btn}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeFeatures() {
  const { t } = useLang();
  const f = t.homeFeatures;
  return (
    <section className="section features-bg">
      <div className="section-inner">
        <div className="section-label">{f.label}</div>
        <h2 className="section-title section-title--features">
          {f.title1}
          <br />
          {f.title2}
        </h2>
        <div className="features-grid">
          {t.featuresPage.features.map((it) => {
            const orig = features.find((x) => x.id === it.id);
            return (
              <div className="feature-item" key={it.id}>
                <div className="feature-icon">{orig?.icon}</div>
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.short}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link to="/funktionen" className="btn-primary">
            {f.btn}
          </Link>
        </div>
      </div>
    </section>
  );
}

const check = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4a9fd4" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function HomeDsgvo() {
  const { t } = useLang();
  const d = t.homeDsgvo;
  return (
    <div className="dsgvo-section">
      <div className="dsgvo-inner">
        <div>
          <div className="dsgvo-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            {d.badge}
          </div>
          <h2>
            {d.h1}
            <br />
            {d.h2}
          </h2>
          <p>{d.p}</p>
          <div className="dsgvo-checklist">
            {[d.c1, d.c2, d.c3, d.c4, d.c5, d.c6].map((c) => (
              <div className="dsgvo-check" key={c}>
                <div className="check-icon">{check}</div>
                {c}
              </div>
            ))}
          </div>
        </div>
        <div className="dsgvo-card">
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: "0.75rem",
            }}
          >
            {d.certTitle}
          </div>
          {[
            ["Datenschutz", "DSGVO + DSG"],
            ["Serverstandort", "🇨🇭 Zürich, CH"],
            ["Verschlüsselung", "AES-256 E2E"],
            ["Zertifizierung", "ISO 27001 (in Vorb.)"],
            ["Audit", "Jährlich extern"],
          ].map(([a, b]) => (
            <div className="cert-item" key={a}>
              <span className="cert-label">{a}</span>
              <span className="cert-value">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HomeTestimonials() {
  const { t } = useLang();
  const tt = t.homeTestimonials;
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-label">{tt.label}</div>
        <h2 className="section-title">{tt.title}</h2>
        <div className="testimonials-grid">
          {t.testimonials.slice(0, 3).map((x, i) => {
            const orig = testimonials[i];
            return (
              <div className="testi-card" key={x.name}>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">„{x.quote}“</p>
                <div className="testi-author" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  {orig?.image && (
                    <img
                      src={orig.image}
                      alt={x.name}
                      style={{ width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover" }}
                    />
                  )}
                  <div>
                    <strong>{x.name}</strong>
                    <br />
                    <span style={{ fontSize: "0.85rem", opacity: 0.8 }}>{x.role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link to="/referenzen" className="btn-secondary">
            {tt.btn}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeCta() {
  const { t } = useLang();
  const c = t.homeCta;
  return (
    <section className="cta-section cta-home">
      <div className="cta-inner cta-inner--split">
        <div>
          <h2>{c.h2}</h2>
          <p>{c.p}</p>
        </div>
        <div className="cta-btns">
          <Link to="/contact" className="btn-primary">
            {c.btn}
          </Link>
          <span style={{ fontSize: "0.78rem", color: "var(--muted)", textAlign: "right", whiteSpace: "pre-line" }}>
            {c.sub}
          </span>
        </div>
      </div>
    </section>
  );
}
