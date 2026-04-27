import { useEffect } from "react";
import { testimonials } from "../data/testimonials";
import { PageHeader } from "../components/PageHeader";
import { FinalCta } from "../components/FinalCta";
import { useLang } from "../i18n/LanguageContext";

export function ReferencesPage() {
  const { t } = useLang();

  useEffect(() => {
    document.title = "Referenzen – Yes-Doc";
  }, []);

  return (
    <main>
      <PageHeader
        crumb={t.referencesPage.crumb}
        title={t.referencesPage.title}
        lead={t.referencesPage.lead}
      />

      <section className="section">
        <div className="section-inner">
          <div className="section-label">{t.referencesPage.testiLabel}</div>
          <h2 className="section-title">{t.referencesPage.testiTitle}</h2>
          <div className="testimonials-grid testimonials-grid--wide">
            {t.testimonials.map((x, i) => {
              const orig = testimonials[i];
              return (
                <div className="testi-card" key={x.name}>
                  <div className="testi-stars">★★★★★</div>
                  <p className="testi-quote">„{x.quote}“</p>
                  <div className="testi-author">
                    <strong>{x.name}</strong>
                    {x.role}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section features-bg">
        <div className="section-inner">
          <div className="section-label">{t.referencesPage.caseLabel}</div>
          <h2 className="section-title">{t.referencesPage.caseTitle}</h2>
          <div className="case-grid">
            {t.referencesPage.caseStudies.map((c) => (
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
        title={t.referencesPage.ctaTitle}
        sub={t.referencesPage.ctaSub}
      />
    </main>
  );
}
