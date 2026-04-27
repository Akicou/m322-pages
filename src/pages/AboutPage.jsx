import { useEffect } from "react";
import { PageHeader } from "../components/PageHeader";
import { FinalCta } from "../components/FinalCta";
import { publicUrl } from "../utils/publicUrl";
import { useLang } from "../i18n/LanguageContext";

export function AboutPage() {
  const { t } = useLang();

  const teamImages = [
    publicUrl("images/team-matthias.png"),
    publicUrl("images/team-lina.png"),
    publicUrl("images/team-tobias.png"),
    publicUrl("images/team-sara.png"),
  ];

  const team = t.aboutPage.team.map((p, i) => ({ ...p, image: teamImages[i] }));
  const values = t.aboutPage.values;
  const stats = t.aboutPage.stats;
  const storyP = t.aboutPage.storyP;

  useEffect(() => {
    document.title = "Über uns – Yes-Doc";
  }, []);

  return (
    <main>
      <PageHeader
        crumb={t.aboutPage.crumb}
        title={t.aboutPage.title}
        lead={t.aboutPage.lead}
      />

      <section className="section">
        <div className="section-inner">
          <div className="section-label">{t.aboutPage.storyLabel}</div>
          <h2 className="section-title">{t.aboutPage.storyTitle}</h2>
          <div className="story-grid">
            <div className="story-text">
              <div style={{ marginBottom: "2rem", borderRadius: "12px", overflow: "hidden" }}>
                <img src={publicUrl("images/hero-doctor.png")} alt="Doctor" style={{ width: "100%", display: "block" }} />
              </div>
              {storyP.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="story-stats">
              {stats.map(([num, label]) => (
                <div className="story-stat" key={label}>
                  <div className="story-stat-num">{num}</div>
                  <div className="story-stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section features-bg">
        <div className="section-inner">
          <div className="section-label">{t.aboutPage.valuesLabel}</div>
          <h2 className="section-title">{t.aboutPage.valuesTitle}</h2>
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
          <div className="section-label">{t.aboutPage.teamLabel}</div>
          <h2 className="section-title">{t.aboutPage.teamTitle}</h2>
          <div className="team-grid">
            {team.map((p) => (
              <div className="team-card" key={p.name}>
                <div className="team-avatar">
                  <img
                    src={p.image}
                    alt={`Porträt von ${p.name}, ${p.role}`}
                    loading="lazy"
                  />
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
        title={t.aboutPage.ctaTitle}
        sub={t.aboutPage.ctaSub}
        showBack={false}
      />
    </main>
  );
}
