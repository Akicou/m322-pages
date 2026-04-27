import { Link } from "react-router-dom";
import { features } from "../../data/features";
import { testimonials } from "../../data/testimonials";

export function HomeStrip() {
  return (
    <div className="strip">
      <div className="strip-inner">
        <div className="strip-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          DSGVO &amp; DSG konform
        </div>
        <div className="strip-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
          Läuft auf iPad, Desktop &amp; Mobile
        </div>
        <div className="strip-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          Über 200 Arztpraxen vertrauen uns
        </div>
        <div className="strip-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          Offline-Modus verfügbar
        </div>
        <div className="strip-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
          </svg>
          Keine KI · keine Datenanalyse
        </div>
      </div>
    </div>
  );
}

export function HomeProblemsPreview() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-label">Warum Yes-Doc?</div>
        <h2 className="section-title">
          Die drei grössten
          <br />
          Schmerzpunkte im Praxisalltag
        </h2>
        <p className="section-sub">
          Dr. Thomas Weber ist nicht allein. Diese Probleme kennen 9 von 10 Praxisinhaber – wir
          haben sie behoben.
        </p>
        <div className="problems-grid">
          <div className="problem-card">
            <div className="problem-num">01</div>
            <h3>Zeitfressende Dokumentation</h3>
            <p>
              Stundenlange SOAP-Notizen nach Feierabend. Handschriftliche Zettel, die digital
              nacherfasst werden müssen. Das kostet Sie täglich wertvolle Zeit.
            </p>
            <div className="problem-arrow">→ Yes-Doc halbiert Ihren Dokumentationsaufwand</div>
          </div>
          <div className="problem-card">
            <div className="problem-num">02</div>
            <h3>Datenschutz-Unsicherheit</h3>
            <p>
              DSGVO, DSG, ärztliche Schweigepflicht – wer haftet eigentlich? Viele Tools sind
              US-basiert und bieten keine klare Rechtssicherheit für Schweizer Praxen.
            </p>
            <div className="problem-arrow">→ Serverstandort Schweiz, DSGVO-zertifiziert</div>
          </div>
          <div className="problem-card">
            <div className="problem-num">03</div>
            <h3>Angst vor der Datenmigration</h3>
            <p>
              Ein Systemwechsel klingt nach Wochen Aufwand, Datenverlust und Schulung des ganzen
              Teams. Die meisten Praxen bleiben deshalb bei veralteten Systemen.
            </p>
            <div className="problem-arrow">→ Migration in 1 Tag, wir übernehmen alles</div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link to="/problems" className="btn-primary">
            Alle Lösungen entdecken
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeFeatures() {
  return (
    <section className="section features-bg">
      <div className="section-inner">
        <div className="section-label">Funktionen</div>
        <h2 className="section-title section-title--features">
          Alles was Ihre Praxis braucht.
          <br />
          Nichts was sie nicht braucht.
        </h2>
        <div className="features-grid">
          {features.map((it) => (
            <div className="feature-item" key={it.id}>
              <div className="feature-icon">{it.icon}</div>
              <div>
                <h3>{it.title}</h3>
                <p>{it.short}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link to="/funktionen" className="btn-primary">
            Alle Funktionen im Detail →
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
  return (
    <div className="dsgvo-section">
      <div className="dsgvo-inner">
        <div>
          <div className="dsgvo-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Datenschutz als Fundament
          </div>
          <h2>
            Ihre Patientendaten.
            <br />
            Sicher wie in einem Tresor.
          </h2>
          <p>
            Wir haben Yes-Doc von Grund auf mit Datenschutz als Kernprinzip entwickelt – nicht als
            nachträgliche Checkbox. Serverstandort Schweiz, ärztliche Schweigepflicht eingebettet.
          </p>
          <div className="dsgvo-checklist">
            {[
              "DSGVO & Schweizer DSG vollständig erfüllt",
              "Serverstandort ausschliesslich Schweiz",
              "Ende-zu-Ende-Verschlüsselung",
              "Keine Datenweitergabe an Dritte",
              "Keine KI-Verarbeitung von Patientendaten",
              "Vollständiges Auditprotokoll",
            ].map((t) => (
              <div className="dsgvo-check" key={t}>
                <div className="check-icon">{check}</div>
                {t}
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
            Sicherheitszertifikate
          </div>
          {[
            ["Datenschutz", "DSGVO + DSG"],
            ["Serverstandort", "🇨🇭 Zürich, CH"],
            ["Verschlüsselung", "AES-256 E2E"],
            ["Zertifizierung", "ISO 27001"],
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
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-label">Referenzen</div>
        <h2 className="section-title">Was Praxisinhabende sagen</h2>
        <div className="testimonials-grid">
          {testimonials.slice(0, 3).map((x) => (
            <div className="testi-card" key={x.name}>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">„{x.quote}“</p>
              <div className="testi-author" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                {x.image && (
                  <img
                    src={x.image}
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
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link to="/referenzen" className="btn-secondary">
            Mehr Referenzen ansehen →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeCta() {
  return (
    <section className="cta-section cta-home">
      <div className="cta-inner cta-inner--split">
        <div>
          <h2>Bereit für weniger Verwaltung?</h2>
          <p>30 Tage kostenlos testen. Keine Kreditkarte erforderlich. Kündigung jederzeit.</p>
        </div>
        <div className="cta-btns">
          <Link to="/contact" className="btn-primary">
            Demo buchen →
          </Link>
          <span style={{ fontSize: "0.78rem", color: "var(--muted)", textAlign: "right" }}>
            Antwort innerhalb
            <br />
            von 24 Stunden
          </span>
        </div>
      </div>
    </section>
  );
}
