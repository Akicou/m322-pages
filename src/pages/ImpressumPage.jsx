import { useEffect } from "react";
import { PageHeader } from "../components/PageHeader";

export function ImpressumPage() {
  useEffect(() => {
    document.title = "Impressum – Yes-Doc";
  }, []);

  return (
    <main>
      <PageHeader
        crumb="Impressum"
        title="Impressum"
        lead="Angaben gemäss Art. 25 ff. DSG und Schweizer Obligationenrecht."
      />

      <section className="section">
        <div className="section-inner" style={{ maxWidth: 720 }}>
          <div className="principle-card" style={{ marginBottom: "1.5rem" }}>
            <h3>Anbieterin</h3>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Yes-Doc GmbH</strong>
              <br />
              Bahnhofstrasse 12
              <br />
              8001 Zürich, Schweiz
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              Telefon: <a href="tel:+41441234567" className="inline-link">+41 44 123 45 67</a>
              <br />
              E-Mail: <a href="mailto:demo@lyan.ch" className="inline-link">demo@lyan.ch</a>
            </p>
          </div>

          <div className="principle-card" style={{ marginBottom: "1.5rem" }}>
            <h3>Vertretungsberechtigte</h3>
            <p>Dr. med. Matthias Brunner, Lina Wyss (Co-Founder)</p>
          </div>

          <div className="principle-card" style={{ marginBottom: "1.5rem" }}>
            <h3>Registereintrag</h3>
            <p>
              Handelsregister des Kantons Zürich
              <br />
              CHE-000.000.000 (Beispiel)
            </p>
          </div>

          <div className="principle-card" style={{ marginBottom: "1.5rem" }}>
            <h3>Verantwortlich für den Inhalt</h3>
            <p>Lina Wyss, Yes-Doc GmbH, Zürich</p>
          </div>

          <div className="principle-card">
            <h3>Datenschutz</h3>
            <p>
              Informationen zur Verarbeitung personenbezogener Daten finden Sie auf unserer Seite{" "}
              <a href="/datenschutz" className="inline-link">Datenschutz &amp; Sicherheit</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
