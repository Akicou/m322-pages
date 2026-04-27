import { useEffect } from "react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  useEffect(() => {
    document.title = "Seite nicht gefunden – Yes-Doc";
  }, []);

  return (
    <main>
      <section className="section" style={{ textAlign: "center" }}>
        <div className="section-inner" style={{ maxWidth: 560 }}>
          <div className="problem-num" style={{ fontSize: "5rem" }}>404</div>
          <h2 className="section-title">Diese Seite existiert nicht.</h2>
          <p className="section-sub" style={{ margin: "0 auto 2rem" }}>
            Möglicherweise wurde die Adresse falsch eingegeben oder die Seite wurde verschoben.
          </p>
          <div className="cta-btns cta-btns--row">
            <Link to="/" className="btn-primary">← Zurück zur Startseite</Link>
            <Link to="/contact" className="btn-outline">Demo anfragen</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
