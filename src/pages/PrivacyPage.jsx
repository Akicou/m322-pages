import { useEffect } from "react";
import { PageHeader } from "../components/PageHeader";
import { FinalCta } from "../components/FinalCta";

const principles = [
  {
    title: "Privacy by Design",
    text: "Datenschutz ist von Tag 1 ins Produkt eingebaut, nicht nachgerüstet. Jede neue Funktion durchläuft eine Datenschutz-Folgenabschätzung, bevor sie produktiv geht.",
  },
  {
    title: "Datensparsamkeit",
    text: "Wir erfassen nur, was die Praxis selbst dokumentiert. Keine Telemetrie zu Patientenakten, keine Verhaltensdaten, keine Klick-Profile.",
  },
  {
    title: "Klare Verantwortlichkeit",
    text: "Sie sind und bleiben Verantwortliche im Sinne der DSGVO. Wir agieren als Auftragsverarbeiter mit AVV nach Art. 28 DSGVO.",
  },
  {
    title: "Keine KI auf Patientendaten",
    text: "Yes-Doc enthält keine generative KI, kein Diagnose-Modell, kein automatisches Training. Patientendaten werden nicht analysiert oder zu Modell-Updates verwendet.",
  },
];

const certs = [
  ["Datenschutz", "DSGVO + Schweizer DSG"],
  ["Serverstandort", "🇨🇭 Zürich, CH"],
  ["Verschlüsselung in transit", "TLS 1.3"],
  ["Verschlüsselung at rest", "AES-256"],
  ["Zertifizierung", "ISO 27001 (in Vorbereitung)"],
  ["Audit", "Jährlich extern, BDO Schweiz"],
  ["Backup-Standort", "🇨🇭 Bern, CH (georedundant)"],
  ["AVV nach Art. 28 DSGVO", "Inklusive, ohne Aufpreis"],
];

const dataFlow = [
  {
    n: "1",
    t: "Sie dokumentieren",
    p: "Eingabe direkt im Behandlungszimmer auf iPad oder Desktop. Daten verlassen die App nur in verschlüsselter Form.",
  },
  {
    n: "2",
    t: "Verschlüsselte Übertragung",
    p: "TLS 1.3 zwischen Endgerät und Schweizer Rechenzentrum. Kein Umweg über US-CDNs oder Drittanbieter.",
  },
  {
    n: "3",
    t: "Sichere Speicherung",
    p: "AES-256 verschlüsselt at rest. Schlüssel-Rotation alle 90 Tage. Backups georedundant innerhalb der Schweiz.",
  },
  {
    n: "4",
    t: "Auditierbarer Zugriff",
    p: "Jeder Zugriff – durch Sie, Ihr Team oder unseren Support – wird protokolliert und ist für Sie einsehbar.",
  },
];

export function PrivacyPage() {
  useEffect(() => {
    document.title = "Datenschutz & Sicherheit – Yes-Doc";
  }, []);

  return (
    <main>
      <PageHeader
        crumb="Datenschutz & Sicherheit"
        title={
          <>
            Datenschutz ist kein Feature.
            <br />
            Es ist das Fundament.
          </>
        }
        lead="Yes-Doc wurde von Anfang an für Schweizer Arztpraxen entwickelt. DSGVO, DSG und ärztliche Schweigepflicht sind keine Checkboxen, sondern Designprinzipien."
      />

      <section className="section">
        <div className="section-inner">
          <div className="section-label">Vier Prinzipien</div>
          <h2 className="section-title">Wie wir Datenschutz verstehen</h2>
          <div className="principles-grid">
            {principles.map((p) => (
              <div className="principle-card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dsgvo-section">
        <div className="dsgvo-inner">
          <div>
            <div className="dsgvo-badge">Sicherheitsarchitektur</div>
            <h2>
              Schweizer Tresor.
              <br />
              Schweizer Recht.
            </h2>
            <p>
              Alle Patientendaten verbleiben physisch in der Schweiz. Es gibt keine Replikation
              in andere Rechtsräume, keinen US-Zugriff über den CLOUD Act, keine Weitergabe
              an Subunternehmer ausserhalb der EU/CH.
            </p>
          </div>
          <div className="dsgvo-card">
            <div className="cert-heading">Sicherheitsdetails</div>
            {certs.map(([k, v]) => (
              <div className="cert-item" key={k}>
                <span className="cert-label">{k}</span>
                <span className="cert-value">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="section-inner">
          <div className="section-label">Datenfluss</div>
          <h2 className="section-title">Was passiert mit Ihren Daten?</h2>
          <div className="steps">
            {dataFlow.map((s) => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Detaillierte Sicherheitsdokumentation gewünscht?"
        sub="Wir senden Ihnen das vollständige Sicherheitskonzept inkl. AVV-Vorlage zu – kostenlos und unverbindlich."
      />
    </main>
  );
}
