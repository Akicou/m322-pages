import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";

export function NotFoundPage() {
  const { t } = useLang();

  useEffect(() => {
    document.title = "Seite nicht gefunden – Yes-Doc";
  }, []);

  return (
    <main>
      <section className="section" style={{ textAlign: "center" }}>
        <div className="section-inner" style={{ maxWidth: 560 }}>
          <div className="problem-num" style={{ fontSize: "5rem" }}>404</div>
          <h2 className="section-title">{t.notFound.title}</h2>
          <p className="section-sub" style={{ margin: "0 auto 2rem" }}>
            {t.notFound.p}
          </p>
          <div className="cta-btns cta-btns--row">
            <Link to="/" className="btn-primary">{t.notFound.back}</Link>
            <Link to="/contact" className="btn-outline">{t.notFound.cta}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
