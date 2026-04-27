import { useEffect } from "react";
import { PageHeader } from "../components/PageHeader";
import { FinalCta } from "../components/FinalCta";
import { useLang } from "../i18n/LanguageContext";

export function PrivacyPage() {
  const { t } = useLang();

  const principles = t.privacyPage.principles;
  const certs = t.privacyPage.certs;
  const dataFlow = t.privacyPage.dataFlow;

  useEffect(() => {
    document.title = "Datenschutz & Sicherheit – Yes-Doc";
  }, []);

  return (
    <main>
      <PageHeader
        crumb={t.privacyPage.crumb}
        title={
          <>
            {t.privacyPage.title1}
            <br />
            {t.privacyPage.title2}
          </>
        }
        lead={t.privacyPage.lead}
      />

      <section className="section">
        <div className="section-inner">
          <div className="section-label">{t.privacyPage.label1}</div>
          <h2 className="section-title">{t.privacyPage.title1b}</h2>
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
            <div className="dsgvo-badge">{t.privacyPage.badge}</div>
            <h2>
              {t.privacyPage.archH1}
              <br />
              {t.privacyPage.archH2}
            </h2>
            <p>{t.privacyPage.archP}</p>
          </div>
          <div className="dsgvo-card">
            <div className="cert-heading">{t.privacyPage.certHeading}</div>
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
          <div className="section-label">{t.privacyPage.dataLabel}</div>
          <h2 className="section-title">{t.privacyPage.dataTitle}</h2>
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
        title={t.privacyPage.ctaTitle}
        sub={t.privacyPage.ctaSub}
      />
    </main>
  );
}
