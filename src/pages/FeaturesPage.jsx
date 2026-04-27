import { useEffect } from "react";
import { features } from "../data/features";
import { PageHeader } from "../components/PageHeader";
import { FinalCta } from "../components/FinalCta";

export function FeaturesPage() {
  useEffect(() => {
    document.title = "Funktionen – Yes-Doc";
  }, []);

  return (
    <main>
      <PageHeader
        crumb="Funktionen"
        title={
          <>
            Pragmatische Funktionen.
            <br />
            Klar gedacht für den Praxisalltag.
          </>
        }
        lead="Keine Spielereien, keine KI-Modelle, kein Marketing-Lametta. Nur Werkzeuge, die Praxisinhabende täglich entlasten – ohne Kompromisse beim Datenschutz."
      />

      <section className="section">
        <div className="section-inner">
          <div className="section-label">Im Detail</div>
          <h2 className="section-title">Sechs Bausteine, die zusammenpassen</h2>
          <div className="features-detail-grid">
            {features.map((f) => (
              <article className="feature-detail" key={f.id} id={f.id}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p className="feature-detail__short">{f.short}</p>
                <p className="feature-detail__long">{f.long}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section features-bg">
        <div className="section-inner">
          <div className="section-label">Was Yes-Doc bewusst <em>nicht</em> tut</div>
          <h2 className="section-title">Bewusst weggelassen.</h2>
          <div className="not-grid">
            {[
              {
                title: "Keine KI-Diagnose",
                text: "Keine automatische Diagnose, kein Modell, das Patientendaten analysiert. Sie entscheiden, Yes-Doc dokumentiert nur.",
              },
              {
                title: "Keine US-Server",
                text: "Keine Daten in US-Rechenzentren. Kein CLOUD Act. Serverstandort ausschliesslich Schweiz (Zürich).",
              },
              {
                title: "Keine Datenweitergabe",
                text: "Keine Werbe-Tracker, kein Verkauf an Dritte, kein Re-Identification-Risiko durch externe Dienste.",
              },
              {
                title: "Kein Feature-Bloat",
                text: "Keine 200 Funktionen, die niemand nutzt. Wir konzentrieren uns auf das, was Hausarztpraxen wirklich brauchen.",
              },
            ].map((x) => (
              <div className="not-card" key={x.title}>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
