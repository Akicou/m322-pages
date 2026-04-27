import { useEffect } from "react";
import { FaqList } from "../components/FaqList";
import { PageHeader } from "../components/PageHeader";
import { FinalCta } from "../components/FinalCta";
import { useLang } from "../i18n/LanguageContext";

export function FaqPage() {
  const { t } = useLang();

  useEffect(() => {
    document.title = "Häufige Fragen – Yes-Doc";
  }, []);

  return (
    <main>
      <PageHeader
        crumb={t.faqPage.crumb}
        title={t.faqPage.title}
        lead={t.faqPage.lead}
      />

      <section className="section">
        <div className="section-inner faq-page-inner">
          <FaqList items={t.faqItems} />
        </div>
      </section>

      <FinalCta
        title={t.faqPage.ctaTitle}
        sub={t.faqPage.ctaSub}
      />
    </main>
  );
}
