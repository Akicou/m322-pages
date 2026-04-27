import { Link } from "react-router-dom";
import { useLang } from "../../i18n/LanguageContext";

export function HomeHero() {
  const { t } = useLang();
  const h = t.homeHero;
  return (
    <section>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-badge">{h.badge}</div>
          <h1>
            {h.h1a}
            <br />
            <em>{h.h1b}</em>
            <br />
            {h.h1c}
          </h1>
          <p>{h.p}</p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn-primary">
              {h.cta1}
            </Link>
            <Link to="/problems" className="btn-secondary">
              {h.cta2}
            </Link>
          </div>
          <div className="hero-trust">
            <div className="trust-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              {h.trust1}
            </div>
            <div className="trust-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {h.trust2}
            </div>
            <div className="trust-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {h.trust3}
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
              <div className="soap-label">{h.soapLabel}</div>
              <div className="soap-row">
                <div className="soap-row-label">{h.soapS}</div>
                <div className="soap-row-text">{h.soapSt}</div>
              </div>
              <div className="soap-row">
                <div className="soap-row-label">{h.soapO}</div>
                <div className="soap-row-text">{h.soapOt}</div>
              </div>
              <div className="soap-row">
                <div className="soap-row-label">{h.soapA}</div>
                <div className="soap-row-text">{h.soapAt}</div>
              </div>
              <div className="soap-row">
                <div className="soap-row-label">{h.soapP}</div>
                <div className="soap-row-text">
                  {h.soapPt}<span className="soap-cursor" />
                </div>
              </div>
              <div className="ai-badge">
                <div className="ai-badge-dot" />
                <div className="ai-badge-text">{h.aiBadge}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
