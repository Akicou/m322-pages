import { Link } from "react-router-dom";

export function HomeHero() {
  return (
    <section>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-badge">DSGVO-konform · Schweizer Datenschutz</div>
          <h1>
            Weniger Verwaltung.
            <br />
            <em>Mehr Zeit</em>
            <br />
            für Ihre Patienten.
          </h1>
          <p>
            Die smarte Praxissoftware mit strukturierten SOAP-Vorlagen – sicher,
            effizient und rechtssicher nach Schweizer Standard. Keine KI, keine
            automatische Datenverarbeitung.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn-primary">
              Kostenlose Demo buchen
            </Link>
            <Link to="/problems" className="btn-secondary">
              Wie es funktioniert →
            </Link>
          </div>
          <div className="hero-trust">
            <div className="trust-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Keine Datenweitergabe
            </div>
            <div className="trust-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              30-Tage-Testphase
            </div>
            <div className="trust-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Setup in 1 Tag
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="screen-mockup">
            <div className="screen-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="screen-content">
              <div className="soap-label">// SOAP Dokumentation · Patient #1847</div>
              <div className="soap-row">
                <div className="soap-row-label">S — Subjektiv</div>
                <div className="soap-row-text">
                  Kopfschmerzen seit 3 Tagen, Schlafmangel, leichter Schwindel.
                </div>
              </div>
              <div className="soap-row">
                <div className="soap-row-label">O — Objektiv</div>
                <div className="soap-row-text">RR 130/80, Puls 72/min, Temp. 37.1°C</div>
              </div>
              <div className="soap-row">
                <div className="soap-row-label">A — Assessment</div>
                <div className="soap-row-text">Spannungskopfschmerz, V.a. Schlafentzug</div>
              </div>
              <div className="soap-row">
                <div className="soap-row-label">P — Plan</div>
                <div className="soap-row-text">
                  Schlafhygiene besprochen, Ibuprofen 400mg b.B.<span className="soap-cursor" />
                </div>
              </div>
              <div className="ai-badge">
                <div className="ai-badge-dot" />
                <div className="ai-badge-text">100% manuell · keine KI-Verarbeitung</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
