import { useEffect } from "react";
import { features } from "../data/features";
import { PageHeader } from "../components/PageHeader";
import { FinalCta } from "../components/FinalCta";
import { useLang } from "../i18n/LanguageContext";

export function FeaturesPage() {
  const { t } = useLang();

  useEffect(() => {
    document.title = "Funktionen – Yes-Doc";
  }, []);

  const tFeatures = t.featuresPage.features.map((f) => {
    const orig = features.find((x) => x.id === f.id);
    return { ...f, icon: orig?.icon };
  });

  return (
    <main>
      <PageHeader
        crumb={t.featuresPage.crumb}
        title={
          <>
            {t.featuresPage.title1}
            <br />
            {t.featuresPage.title2}
          </>
        }
        lead={t.featuresPage.lead}
      />

      <section className="section">
        <div className="section-inner">
          <div className="section-label">{t.featuresPage.label1}</div>
          <h2 className="section-title">{t.featuresPage.title1b}</h2>
          <div className="features-detail-grid">
            {tFeatures.map((f) => (
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
          <div className="section-label">{t.featuresPage.label2}</div>
          <h2 className="section-title">{t.featuresPage.title2b}</h2>
          <div className="not-grid">
            {t.featuresPage.notCards.map((x) => (
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
