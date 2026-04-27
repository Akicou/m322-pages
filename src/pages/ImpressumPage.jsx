import { useEffect } from "react";
import { PageHeader } from "../components/PageHeader";
import { useLang } from "../i18n/LanguageContext";

export function ImpressumPage() {
  const { t } = useLang();

  useEffect(() => {
    document.title = "Impressum – Yes-Doc";
  }, []);

  return (
    <main>
      <PageHeader
        crumb={t.impressumPage.crumb}
        title={t.impressumPage.title}
        lead={t.impressumPage.lead}
      />

      <section className="section">
        <div className="section-inner" style={{ maxWidth: 720 }}>
          <div className="principle-card" style={{ marginBottom: "1.5rem" }}>
            <h3>{t.impressumPage.h1}</h3>
            <p style={{ marginBottom: "0.5rem", whiteSpace: "pre-line" }}>
              {t.impressumPage.provider}
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              Telefon: <a href="tel:+41441234567" className="inline-link">+41 44 123 45 67</a>
              <br />
              E-Mail: <a href="mailto:demo@lyan.ch" className="inline-link">demo@lyan.ch</a>
            </p>
          </div>

          <div className="principle-card" style={{ marginBottom: "1.5rem" }}>
            <h3>{t.impressumPage.vertretung}</h3>
            <p>{t.impressumPage.vertretungV}</p>
          </div>

          <div className="principle-card" style={{ marginBottom: "1.5rem" }}>
            <h3>{t.impressumPage.register}</h3>
            <p style={{ whiteSpace: "pre-line" }}>{t.impressumPage.registerV}</p>
          </div>

          <div className="principle-card" style={{ marginBottom: "1.5rem" }}>
            <h3>{t.impressumPage.verantwortlich}</h3>
            <p>{t.impressumPage.verantwortlichV}</p>
          </div>

          <div className="principle-card">
            <h3>{t.impressumPage.datenschutzH}</h3>
            <p>{t.impressumPage.datenschutzP}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
