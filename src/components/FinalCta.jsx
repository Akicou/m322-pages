import { Link } from "react-router-dom";

/**
 * Centered final CTA used at the bottom of sub-pages.
 *
 * @param {{
 *   title?: string,
 *   sub?: string,
 *   showBack?: boolean,
 * }} props
 */
export function FinalCta({
  title = "Überzeugt? Dann sprechen wir.",
  sub = "Buchen Sie eine kostenlose Demo – 30 Minuten, keine Verkaufsgespräche, echte Antworten.",
  showBack = true,
}) {
  return (
    <section className="cta-section">
      <div className="cta-inner cta-inner--center">
        <h2>{title}</h2>
        <p>{sub}</p>
        <div className="cta-btns cta-btns--row">
          <Link to="/contact" className="btn-primary">
            Demo buchen →
          </Link>
          {showBack ? (
            <Link to="/" className="btn-outline">
              ← Zurück zur Startseite
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
