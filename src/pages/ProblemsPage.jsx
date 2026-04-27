import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaqList } from "../components/FaqList";
import { PageHeader } from "../components/PageHeader";
import { FinalCta } from "../components/FinalCta";
import { publicUrl } from "../utils/publicUrl";
import { useLang } from "../i18n/LanguageContext";

export function ProblemsPage() {
  const { t } = useLang();

  useEffect(() => {
    document.title = "Probleme & Lösungen – Yes-Doc";
  }, []);

  const painBlocks = [
    { reverse: false, painLabel: t.problemsPage.b1Label, painTitle: t.problemsPage.b1Title, painP: t.problemsPage.b1P, painImage: publicUrl("images/problem-stress.png"), painItems: t.problemsPage.b1i, solTitle: t.problemsPage.b1sTitle, solP: t.problemsPage.b1sP, solItems: t.problemsPage.b1sI },
    { reverse: true, painLabel: t.problemsPage.b2Label, painTitle: t.problemsPage.b2Title, painP: t.problemsPage.b2P, painImage: publicUrl("images/problem-security.png"), painItems: t.problemsPage.b2i, solTitle: t.problemsPage.b2sTitle, solP: t.problemsPage.b2sP, solItems: t.problemsPage.b2sI },
    { reverse: false, painLabel: t.problemsPage.b3Label, painTitle: t.problemsPage.b3Title, painP: t.problemsPage.b3P, painImage: publicUrl("images/problem-migration.png"), painItems: t.problemsPage.b3i, solTitle: t.problemsPage.b3sTitle, solP: t.problemsPage.b3sP, solItems: t.problemsPage.b3sI },
  ];

  const tableRows = t.problemsPage.compRows;
  const steps = t.problemsPage.steps;

  const renderStatLabel = (s) =>
    s.split("\n").map((line, i, arr) => (
      <span key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </span>
    ));

  return (
    <main className="problems-page">
      <PageHeader
        crumb={t.problemsPage.crumb}
        title={
          <>
            {t.problemsPage.title1}
            <br />
            {t.problemsPage.title2}
          </>
        }
        lead={t.problemsPage.lead}
      />

      <section className="section">
        <div className="section-inner">
          <div className="section-label">{t.problemsPage.label1}</div>
          <h2 className="section-title">{t.problemsPage.title1b}</h2>

          {painBlocks.map((b) => (
            <div
              className={`pain-solution${b.reverse ? " reverse" : ""}`}
              key={b.painLabel}
            >
              <div className="pain-side">
                <div className="side-label pain-label">{b.painLabel}</div>
                <h3>{b.painTitle}</h3>
                {b.painImage && (
                  <div style={{ marginBottom: "1.5rem", borderRadius: "12px", overflow: "hidden" }}>
                    <img src={b.painImage} alt={b.painTitle} style={{ width: "100%", display: "block" }} />
                  </div>
                )}
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
            <div className="stat-label">{renderStatLabel(t.problemsPage.stat1)}</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">1 Tag</div>
            <div className="stat-label">{renderStatLabel(t.problemsPage.stat2)}</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">200+</div>
            <div className="stat-label">{renderStatLabel(t.problemsPage.stat3)}</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">0</div>
            <div className="stat-label">{renderStatLabel(t.problemsPage.stat4)}</div>
          </div>
        </div>
      </div>

      <section className="section comparison-section">
        <div className="section-inner">
          <div className="section-label">{t.problemsPage.compLabel}</div>
          <h2 className="section-title">{t.problemsPage.compTitle}</h2>
          <div className="comp-table-wrap">
          <table className="comp-table">
            <thead>
              <tr>
                <th />
                <th>{t.problemsPage.compTh1}</th>
                <th>{t.problemsPage.compTh2}</th>
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
          <div className="section-label">{t.problemsPage.stepsLabel}</div>
          <h2 className="section-title">{t.problemsPage.stepsTitle}</h2>
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
          <div className="section-label">{t.problemsPage.faqLabel}</div>
          <h2 className="section-title">{t.problemsPage.faqTitle}</h2>
          <FaqList items={t.faqItems.slice(0, 5)} />
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/faq" className="btn-secondary">
              {t.problemsPage.faqBtn}
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
