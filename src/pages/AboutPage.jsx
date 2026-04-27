import { useEffect } from "react";
import { PageHeader } from "../components/PageHeader";
import { FinalCta } from "../components/FinalCta";

const team = [
  {
    name: "Dr. med. Matthias Brunner",
    role: "Co-Founder, Medizinische Leitung",
    bio: "15 Jahre Hausarztpraxis in Bern. Versteht den Schmerz der manuellen SOAP-Dokumentation aus erster Hand.",
  },
  {
    name: "Lina Wyss",
    role: "Co-Founder, Produkt & Datenschutz",
    bio: "Vorher Datenschutzbeauftragte bei einer Schweizer Privatklinik. Spezialisiert auf DSGVO im Gesundheitswesen.",
  },
  {
    name: "Tobias Keller",
    role: "Lead Engineer",
    bio: "Aufgewachsen mit Schweizer Software-Engineering. Baut Yes-Doc nach Prinzipien, die auch in 10 Jahren noch tragen.",
  },
  {
    name: "Sara Petrov",
    role: "Customer Success",
    bio: "Begleitet Praxen von der Demo bis zur produktiven Nutzung. Kennt jedes gängige Schweizer Bestandssystem.",
  },
];

const values = [
  {
    n: "01",
    t: "Pragmatisch, nicht verspielt",
    p: "Wir bauen Software für Ärzte mit 40+ Patienten am Tag, nicht für Demos auf Konferenzen. Jede Funktion muss sich im Praxisalltag bewähren.",
  },
  {
    n: "02",
    t: "Datenschutz ohne Diskussion",
    p: "Wir wagen keine Kompromisse bei Patientendaten. Lieber bauen wir eine Funktion nicht, als sie auf Kosten der Sicherheit zu liefern.",
  },
  {
    n: "03",
    t: "Ehrliche Kommunikation",
    p: "Was wir nicht können, sagen wir. Was wir nicht tun, ebenfalls. Marketing-Versprechen sind in der Medizin gefährlich.",
  },
  {
    n: "04",
    t: "Schweizer Qualität",
    p: "Code aus Zürich, Server in Zürich, Support auf Deutsch und Französisch. Keine Subunternehmer in Niedriglohn-Ländern.",
  },
];

export function AboutPage() {
  useEffect(() => {
    document.title = "Über uns – Yes-Doc";
  }, []);

  return (
    <main>
      <PageHeader
        crumb="Über uns"
        title="Wer hinter Yes-Doc steht."
        lead="Ein kleines Team aus Zürich. Halb Mediziner, halb Software-Ingenieure. Eine gemeinsame Überzeugung: Schweizer Praxen verdienen bessere Werkzeuge – ohne Cloud-Hype, ohne KI-Versprechen, ohne US-Risiko."
      />

      <section className="section">
        <div className="section-inner">
          <div className="section-label">Unsere Geschichte</div>
          <h2 className="section-title">Aus Frust geboren. Aus Praxis gewachsen.</h2>
          <div className="story-grid">
            <div className="story-text">
              <p>
                2022 sass Matthias an einem Mittwochabend nach einem 12-Stunden-Tag noch zwei
                Stunden vor dem Computer und tippte SOAP-Notizen in ein veraltetes System. Er
                sprach mit Lina, die gerade Datenschutz-Audits für Kliniken durchführte – und
                stellte fest: Es gibt keine Schweizer Praxissoftware, die <em>beides</em> richtig
                macht: pragmatische Bedienung <em>und</em> kompromisslosen Datenschutz.
              </p>
              <p>
                Also haben wir sie gebaut. Yes-Doc startete 2023 mit fünf Pilotpraxen im Raum
                Zürich. Heute arbeiten über 200 Schweizer Praxen damit. Wir wachsen langsam,
                bewusst und nur so schnell, wie wir die Qualität halten können.
              </p>
              <p>
                Wir sind kein Venture-Capital-Unicorn auf der Jagd nach Bewertung. Wir sind
                vier Leute mit einem klaren Ziel: Schweizer Praxen entlasten, ohne dafür
                Patientendaten zu opfern.
              </p>
            </div>
            <div className="story-stats">
              <div className="story-stat">
                <div className="story-stat-num">2023</div>
                <div className="story-stat-label">Gegründet in Zürich</div>
              </div>
              <div className="story-stat">
                <div className="story-stat-num">200+</div>
                <div className="story-stat-label">Aktive Praxen</div>
              </div>
              <div className="story-stat">
                <div className="story-stat-num">4</div>
                <div className="story-stat-label">Köpfe im Team</div>
              </div>
              <div className="story-stat">
                <div className="story-stat-num">0</div>
                <div className="story-stat-label">Datenpannen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section features-bg">
        <div className="section-inner">
          <div className="section-label">Werte</div>
          <h2 className="section-title">Vier Überzeugungen, die uns leiten</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.n}>
                <div className="value-num">{v.n}</div>
                <h3>{v.t}</h3>
                <p>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-label">Team</div>
          <h2 className="section-title">Die Menschen hinter Yes-Doc</h2>
          <div className="team-grid">
            {team.map((p) => (
              <div className="team-card" key={p.name}>
                <div className="team-avatar" aria-hidden="true">
                  {p.name
                    .split(" ")
                    .filter((s) => !s.endsWith("."))
                    .slice(-2)
                    .map((s) => s[0])
                    .join("")}
                </div>
                <h3>{p.name}</h3>
                <div className="team-role">{p.role}</div>
                <p>{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Lust, mit uns zu arbeiten?"
        sub="Wir suchen ständig Praxen, die uns ehrliches Feedback geben. Sprechen Sie uns an – auch ohne Demo-Wunsch."
        showBack={false}
      />
    </main>
  );
}
