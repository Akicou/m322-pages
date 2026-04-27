import { useEffect } from "react";
import { Link } from "react-router-dom";
import { faqItems } from "../data/faq";
import { FaqList } from "../components/FaqList";
import { PageHeader } from "../components/PageHeader";
import { FinalCta } from "../components/FinalCta";

const painBlocks = [
  {
    reverse: false,
    painLabel: "Problem 01",
    painTitle: "SOAP-Dokumentation frisst Ihre Zeit",
    painP:
      "Nach einem vollen Praxistag verbringen viele Ärztinnen und Ärzte bis zu 2 Stunden zusätzlich mit der Nacherfassung von Patientennotizen.",
    painItems: [
      "Handschriftliche Notizen müssen digital nacherfasst werden",
      "Keine einheitliche Struktur – jeder Arzt dokumentiert anders",
      "Wichtige Details gehen im Stress vergessen",
      "Spät abends noch am Computer – keine Work-Life-Balance",
    ],
    solTitle: "Strukturierte SOAP-Vorlagen – Klick statt Tippen",
    solP:
      "Vorgefertigte Bausteine für die häufigsten Konsultationsarten. Sie wählen, ergänzen und speichern – keine KI, keine automatischen Vorschläge, volle ärztliche Kontrolle.",
    solItems: [
      "Geprüfte Textbausteine direkt im Behandlungszimmer",
      "Eigene Vorlagen pro Arzt und pro Praxis anlegbar",
      "Konsistente Dokumentationsqualität im ganzen Team",
      "Durchschnittlich 18 Minuten täglich eingespart",
    ],
  },
  {
    reverse: true,
    painLabel: "Problem 02",
    painTitle: "Datenschutz-Unsicherheit blockiert Entscheidungen",
    painP:
      "DSGVO, Schweizer DSG, ärztliche Schweigepflicht – die rechtlichen Anforderungen sind komplex. US-basierte Tools bieten keine Rechtssicherheit.",
    painItems: [
      "Unklar, ob Cloud-Lösungen DSGVO-konform sind",
      "Haftungsrisiko bei Datenpannen ist unklar",
      "US-HIPAA ist kein Ersatz für europäisches Datenschutzrecht",
      "Veraltete Systeme aus Angst vor Neuem",
    ],
    solTitle: "DSGVO als oberstes Designprinzip – nicht als Checkbox",
    solP:
      "Yes-Doc wurde von Anfang an für den europäischen Rechtsraum entwickelt. Serverstandort ausschliesslich Schweiz, keine Daten in US-Rechenzentren.",
    solItems: [
      "Serverstandort 100% Schweiz (Zürich)",
      "DSGVO & Schweizer DSG vollständig erfüllt",
      "Ärztliche Schweigepflicht technisch eingebettet",
      "Kostenlose Datenschutz-Beratung bei Einführung",
    ],
  },
  {
    reverse: false,
    painLabel: "Problem 03",
    painTitle: "Angst vor Datenmigration und Umstellung",
    painP:
      "Ein Systemwechsel bedeutet in der Vorstellung vieler Praxen: Wochen Aufwand, Schulungen, möglicher Datenverlust, gestresstes Team.",
    painItems: [
      "Jahrelange Patientendaten könnten verloren gehen",
      "Team muss intensiv neu geschult werden",
      "Praxisbetrieb könnte während Umstellung leiden",
      "Hoher zeitlicher Aufwand für Praxisinhaber/innen",
    ],
    solTitle: "Migration in 1 Tag – wir übernehmen alles",
    solP:
      "Unser Migrations-Team führt die komplette Datenübernahme durch. Kein Datenverlust, keine Downtime, Team eingearbeitet in 2 Stunden.",
    solItems: [
      "Persönlicher Migrations-Coach Ihnen zugeteilt",
      "Vollständige Datenübernahme aus allen gängigen Systemen",
      "2-Stunden-Teamschulung inklusive",
      "30 Tage Support nach Einführung garantiert",
    ],
  },
];

const tableRows = [
  ["SOAP-Dokumentation", "Frei tippen, zeitaufwändig", "Strukturierte Vorlagen, ohne KI"],
  ["Serverstandort", "Oft USA/international", "100% Schweiz (Zürich)"],
  ["DSGVO-Konformität", "Unklar oder nicht vorhanden", "Vollständig zertifiziert"],
  ["Mobile Nutzung", "Eingeschränkt oder keine", "iPad, Smartphone, Desktop"],
  ["Offline-Modus", "Nicht verfügbar", "Vollständig offline-fähig"],
  ["Migration", "Wochen, grosser Aufwand", "1 Tag, wir übernehmen alles"],
  ["Support", "Ticket-System, langsam", "Persönlicher Ansprechpartner"],
];

const steps = [
  {
    n: "1",
    t: "Demo buchen",
    p: "30-minütige Live-Demo mit Ihrem persönlichen Berater. Keine Verkaufsgespräche, nur echte Antworten.",
  },
  {
    n: "2",
    t: "Daten migrieren",
    p: "Wir übernehmen die komplette Migration. Sie müssen nichts tun. Dauer: maximal 1 Arbeitstag.",
  },
  {
    n: "3",
    t: "Team einführen",
    p: "2-stündige Schulung für Ihr Team. Danach können alle sofort produktiv arbeiten.",
  },
  {
    n: "4",
    t: "Zeit sparen",
    p: "Ab dem ersten Tag weniger Dokumentationsaufwand. Messbar, spürbar, nachhaltig.",
  },
];

export function ProblemsPage() {
  useEffect(() => {
    document.title = "Probleme & Lösungen – Yes-Doc";
  }, []);

  return (
    <main className="problems-page">
      <PageHeader
        crumb="Probleme & Lösungen"
        title={
          <>
            Wir kennen Ihren Praxisalltag.
            <br />
            Und haben die Antwort darauf.
          </>
        }
        lead="Die häufigsten Herausforderungen für Praxisinhabende – und wie Yes-Doc sie konkret löst. Keine Marketing-Versprechen, nur messbare Resultate."
      />

      <section className="section">
        <div className="section-inner">
          <div className="section-label">Problem → Lösung</div>
          <h2 className="section-title">Was Sie täglich bremst – und was wir dagegen tun</h2>

          {painBlocks.map((b) => (
            <div
              className={`pain-solution${b.reverse ? " reverse" : ""}`}
              key={b.painLabel}
            >
              <div className="pain-side">
                <div className="side-label pain-label">{b.painLabel}</div>
                <h3>{b.painTitle}</h3>
                <p>{b.painP}</p>
                <div className="pain-details">
                  {b.painItems.map((line) => (
                    <div className="pain-detail" key={line}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
              <div className="solution-side">
                <div className="side-label solution-label">Lösung</div>
                <h3>{b.solTitle}</h3>
                <p>{b.solP}</p>
                <div className="solution-details">
                  {b.solItems.map((line) => (
                    <div className="solution-detail" key={line}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="stats-row">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-num">18&apos;</div>
            <div className="stat-label">
              Durchschnittlich eingesparte
              <br />
              Minuten pro Tag
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-num">1 Tag</div>
            <div className="stat-label">
              Bis zur vollständigen
              <br />
              Inbetriebnahme
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-num">200+</div>
            <div className="stat-label">
              Arztpraxen vertrauen
              <br />
              auf Yes-Doc
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-num">0</div>
            <div className="stat-label">
              Datenpannen seit
              <br />
              Gründung
            </div>
          </div>
        </div>
      </div>

      <section className="section comparison-section">
        <div className="section-inner">
          <div className="section-label">Vergleich</div>
          <h2 className="section-title">Yes-Doc vs. bisherige Systeme</h2>
          <div className="comp-table-wrap">
          <table className="comp-table">
            <thead>
              <tr>
                <th />
                <th>Veraltete Praxissoftware</th>
                <th>Yes-Doc</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map(([a, bad, good]) => (
                <tr key={a}>
                  <td>{a}</td>
                  <td className="bad">{bad}</td>
                  <td className="good">{good}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-label">So funktioniert&apos;s</div>
          <h2 className="section-title">Von der Demo bis zum ersten gesparten Abend</h2>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section-bg">
        <div className="section-inner">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Häufige Fragen zur Einführung</h2>
          <FaqList items={faqItems.slice(0, 5)} />
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/faq" className="btn-secondary">
              Alle Fragen ansehen →
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
