import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";

/**
 * Centered final CTA used at the bottom of sub-pages.
 *
 * @param {{
 *   title?: string,
 *   sub?: string,
 *   showBack?: boolean,
 * }} props
 */
export function FinalCta({ title, sub, showBack = true }) {
  const { t } = useLang();
  const finalTitle = title ?? t.common.ctaTitle;
  const finalSub = sub ?? t.common.ctaSub;
  return (
    <section className="cta-section">
      <div className="cta-inner cta-inner--center">
        <h2>{finalTitle}</h2>
        <p>{finalSub}</p>
        <div className="cta-btns cta-btns--row">
          <Link to="/contact" className="btn-primary">
            {t.common.ctaBtn}
          </Link>
          {showBack ? (
            <Link to="/" className="btn-outline">
              {t.common.back}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
