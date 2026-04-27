import { useEffect } from "react";
import { testimonials } from "../data/testimonials";
import { PageHeader } from "../components/PageHeader";
import { FinalCta } from "../components/FinalCta";

const caseStudies = [
  {
    practice: "Hausarztpraxis Bern",
    setup: "Einzelpraxis · 1 Arzt · 2 MPAs",
    metrics: [
      ["Eingesparte Zeit/Tag", "28 Min."],
      ["Migration", "1 Arbeitstag"],
      ["Aktiv seit", "März 2024"],
    ],
    summary:
      "Wechsel von einer 12 Jahre alten Praxissoftware. Die strukturierten SOAP-Vorlagen wurden binnen einer Woche an die persönliche Dokumentationsweise von Dr. Huber angepasst.",
  },
  {
    practice: "Gruppenpraxis Zürich",
    setup: "5 Ärzte · 6 MPAs · 1 Praxismanagerin",
    metrics: [
      ["Eingesparte Zeit/Tag", "22 Min. pro Arzt"],
      ["Migration", "1 Arbeitstag"],
      ["Aktiv seit", "Sept. 2023"],
    ],
    summary:
      "Drei verschiedene Bestandssysteme wurden parallel migriert. Yes-Doc übernahm die komplette Konsolidierung, das Team arbeitete am Tag nach der Migration produktiv.",
  },
  {
    practice: "Allgemeinpraxis Luzern",
    setup: "Einzelpraxis · 1 Arzt · 1 MPA",
    metrics: [
      ["Eingesparte Zeit/Tag", "31 Min."],
      ["Migration", "Halber Tag"],
      ["Aktiv seit", "Jan. 2025"],
    ],
    summary:
      "Suche explizit nach einer Lösung ohne KI-Verarbeitung. Yes-Doc war die einzige Schweizer Software, die diese Anforderung garantieren konnte.",
  },
];

export function ReferencesPage() {
  useEffect(() => {
    document.title = "Referenzen – Yes-Doc";
  }, []);

  return (
    <main>
      <PageHeader
        crumb="Referenzen"
        title="Praxen, die Yes-Doc vertrauen."
        lead="Über 200 Schweizer Arztpraxen arbeiten täglich mit Yes-Doc. Hier sind ein paar Stimmen und konkrete Zahlen aus dem Praxisalltag."
      />

      <section className="section">
        <div className="section-inner">
          <div className="section-label">Stimmen</div>
          <h2 className="section-title">Was unsere Kundschaft sagt</h2>
          <div className="testimonials-grid testimonials-grid--wide">
            {testimonials.map((t) => (
              <div className="testi-card" key={t.name}>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">„{t.quote}“</p>
                <div className="testi-author">
                  <strong>{t.name}</strong>
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section features-bg">
        <div className="section-inner">
          <div className="section-label">Fallstudien</div>
          <h2 className="section-title">Drei Praxen, drei Realitäten</h2>
          <div className="case-grid">
            {caseStudies.map((c) => (
              <article className="case-card" key={c.practice}>
                <h3>{c.practice}</h3>
                <div className="case-setup">{c.setup}</div>
                <p>{c.summary}</p>
                <dl className="case-metrics">
                  {c.metrics.map(([k, v]) => (
                    <div className="case-metric" key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Werden Sie die nächste Referenz."
        sub="In zwei Wochen produktiv, in einem Monat mit messbarer Entlastung. Sprechen Sie mit uns."
      />
    </main>
  );
}
