import { useEffect } from "react";
import { faqItems } from "../data/faq";
import { FaqList } from "../components/FaqList";
import { PageHeader } from "../components/PageHeader";
import { FinalCta } from "../components/FinalCta";

export function FaqPage() {
  useEffect(() => {
    document.title = "Häufige Fragen – Yes-Doc";
  }, []);

  return (
    <main>
      <PageHeader
        crumb="FAQ"
        title="Häufig gestellte Fragen."
        lead="Antworten auf die Fragen, die Praxisinhabende uns am häufigsten stellen – zu Migration, Datenschutz, Preisen und Einführung."
      />

      <section className="section">
        <div className="section-inner faq-page-inner">
          <FaqList items={faqItems} />
        </div>
      </section>

      <FinalCta
        title="Ihre Frage ist nicht dabei?"
        sub="Schreiben Sie uns – wir antworten innerhalb von 24 Stunden, ohne Verkaufsgespräch."
      />
    </main>
  );
}
