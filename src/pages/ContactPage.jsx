import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactPage() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [praxis, setPraxis] = useState("");
  const [software, setSoftware] = useState("");
  const [size, setSize] = useState("");
  const [message, setMessage] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = "Demo anfragen – Yes-Doc";
  }, []);

  function validate() {
    const e = {};
    if (!fname.trim()) e.fname = "Bitte geben Sie Ihren Vornamen ein.";
    if (!lname.trim()) e.lname = "Bitte geben Sie Ihren Nachnamen ein.";
    const em = email.trim();
    if (!em) e.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    else if (!EMAIL_RE.test(em)) e.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!praxis.trim()) e.praxis = "Bitte geben Sie den Praxisnamen ein.";
    if (!privacy) e.privacy = "Bitte stimmen Sie der Datenschutzerklärung zu.";
    return e;
  }

  function submitForm(e) {
    e?.preventDefault?.();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstField = Object.keys(found)[0];
      document.getElementById(firstField)?.focus();
      return;
    }
    setDisplayName(`${fname.trim()} ${lname.trim()}`.trim());
    setSubmitted(true);
  }

  function clearError(field) {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  return (
    <div className="contact-page">
      <div className="contact-layout">
        <div className="contact-left">
          <div className="contact-badge">Keine Kreditkarte erforderlich</div>
          <h1>
            Ihre persönliche
            <br />
            <em>Demo</em> wartet.
          </h1>
          <p>
            30 Minuten, die Ihren Praxisalltag verändern können. Kein Verkaufsgespräch – wir
            zeigen, wie Yes-Doc konkret Ihre Dokumentation vereinfacht.
          </p>

          <div className="what-to-expect">
            <div className="expect-label">Was Sie erwartet</div>
            <div className="expect-item">
              <div className="expect-num">1</div>
              <div className="expect-content">
                <h4>Live-Demo Ihrer Praxis</h4>
                <p>Wir zeigen Yes-Doc anhand Ihrer echten Abläufe – nicht an abstrakten Beispielen.</p>
              </div>
            </div>
            <div className="expect-item">
              <div className="expect-num">2</div>
              <div className="expect-content">
                <h4>Ihre Fragen, direkt beantwortet</h4>
                <p>Datenschutz, Migration, Kosten – stellen Sie alle Fragen, die Sie beschäftigen.</p>
              </div>
            </div>
            <div className="expect-item">
              <div className="expect-num">3</div>
              <div className="expect-content">
                <h4>Kein Druck, keine Verpflichtung</h4>
                <p>Sie entscheiden danach. Kein Follow-up ohne Ihre Erlaubnis.</p>
              </div>
            </div>
          </div>

          <div className="contact-guarantee">
            <div className="guarantee-row">Antwort innerhalb von 24 Stunden</div>
            <div className="guarantee-row">30 Tage kostenlose Testphase danach möglich</div>
            <div className="guarantee-row">Kein Vertrag bis Sie 100% überzeugt sind</div>
            <div className="guarantee-row">Alle Daten bleiben in der Schweiz</div>
          </div>
        </div>

        <div className={`contact-right${!submitted ? " contact-right--animate" : ""}`}>
          {!submitted ? (
            <>
              <form
                id="form-container"
                className="contact-form"
                onSubmit={submitForm}
                noValidate
              >
                <div className="form-header">
                  <h2>Demo anfragen</h2>
                  <p>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                </div>

                <div className="form-row">
                  <div>
                    <label htmlFor="fname">
                      Vorname <span className="req">*</span>
                    </label>
                    <input
                      id="fname"
                      type="text"
                      value={fname}
                      onChange={(e) => { setFname(e.target.value); clearError("fname"); }}
                      placeholder="Thomas"
                      autoComplete="given-name"
                      aria-invalid={!!errors.fname}
                      aria-describedby={errors.fname ? "err-fname" : undefined}
                      className={errors.fname ? "input-error" : ""}
                    />
                    {errors.fname && <p className="field-error" id="err-fname">{errors.fname}</p>}
                  </div>
                  <div>
                    <label htmlFor="lname">
                      Nachname <span className="req">*</span>
                    </label>
                    <input
                      id="lname"
                      type="text"
                      value={lname}
                      onChange={(e) => { setLname(e.target.value); clearError("lname"); }}
                      placeholder="Weber"
                      autoComplete="family-name"
                      aria-invalid={!!errors.lname}
                      aria-describedby={errors.lname ? "err-lname" : undefined}
                      className={errors.lname ? "input-error" : ""}
                    />
                    {errors.lname && <p className="field-error" id="err-lname">{errors.lname}</p>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    E-Mail-Adresse <span className="req">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); clearError("email"); }}
                    placeholder="t.weber@praxis-beispiel.ch"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "err-email" : undefined}
                    className={errors.email ? "input-error" : ""}
                  />
                  {errors.email && <p className="field-error" id="err-email">{errors.email}</p>}
                </div>

                <div className="form-row">
                  <div>
                    <label htmlFor="phone">Telefon</label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+41 44 000 00 00"
                    />
                  </div>
                  <div>
                    <label htmlFor="praxis">
                      Praxisname <span className="req">*</span>
                    </label>
                    <input
                      id="praxis"
                      type="text"
                      value={praxis}
                      onChange={(e) => { setPraxis(e.target.value); clearError("praxis"); }}
                      placeholder="Hausarztpraxis Weber"
                      aria-invalid={!!errors.praxis}
                      aria-describedby={errors.praxis ? "err-praxis" : undefined}
                      className={errors.praxis ? "input-error" : ""}
                    />
                    {errors.praxis && <p className="field-error" id="err-praxis">{errors.praxis}</p>}
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label htmlFor="software">Aktuelle Software</label>
                    <select
                      id="software"
                      value={software}
                      onChange={(e) => setSoftware(e.target.value)}
                    >
                      <option value="">Bitte wählen…</option>
                      <option>Axon</option>
                      <option>Elexis</option>
                      <option>Medisoft</option>
                      <option>Andere</option>
                      <option>Keine / Papier</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="size">Grösse der Praxis</label>
                    <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
                      <option value="">Bitte wählen…</option>
                      <option>Einzelpraxis</option>
                      <option>2–3 Ärzte</option>
                      <option>Gruppenpraxis (4+)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Was beschäftigt Sie am meisten? (optional)</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="z.B. Dokumentationsaufwand, Datenmigration, DSGVO-Fragen…"
                    rows={4}
                  />
                </div>

                <div className="form-group">
                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={privacy}
                      onChange={(e) => { setPrivacy(e.target.checked); clearError("privacy"); }}
                      aria-invalid={!!errors.privacy}
                      aria-describedby={errors.privacy ? "err-privacy" : undefined}
                    />
                    <label htmlFor="privacy">
                      Ich habe die{" "}
                      <Link to="/datenschutz" className="inline-link">
                        Datenschutzerklärung
                      </Link>{" "}
                      gelesen und stimme der Kontaktaufnahme zu.{" "}
                      <span className="req">*</span>
                    </label>
                  </div>
                  {errors.privacy && (
                    <p className="field-error" id="err-privacy">{errors.privacy}</p>
                  )}
                </div>

                <button className="btn-submit" type="submit">
                  Demo anfragen →
                </button>

                <div className="form-footer">
                  Kein Spam. Keine automatischen Newsletter. Nur die Antwort auf Ihre Anfrage.
                  <br />
                  <Link to="/datenschutz" className="inline-link">Datenschutzerklärung</Link> ·{" "}
                  <Link to="/impressum" className="inline-link">Impressum</Link>
                </div>
              </form>

              <div className="or-divider">
                <span>oder direkt kontaktieren</span>
              </div>

              <div className="direct-contact" id="direct-links">
                <a href="tel:+41441234567" className="contact-method">
                  <div className="contact-method-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#5a7080" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <span className="contact-method-label">Telefon</span>
                    <span className="contact-method-value">+41 44 123 45 67</span>
                  </div>
                </a>
                <a href="mailto:demo@lyan.ch" className="contact-method">
                  <div className="contact-method-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#5a7080" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <span className="contact-method-label">E-Mail</span>
                    <span className="contact-method-value">demo@lyan.ch</span>
                  </div>
                </a>
              </div>
            </>
          ) : (
            <div className="success-state" style={{ animation: "fadeIn 0.4s ease both" }}>
              <div className="success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1d7a4a" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Anfrage erhalten!</h3>
              <p>
                Vielen Dank, <span id="success-name">{displayName}</span>. Wir melden uns innerhalb
                von 24 Stunden mit einem Terminvorschlag für Ihre Demo.
              </p>
              <Link to="/" className="btn-back">
                ← Zurück zur Startseite
              </Link>

              <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", marginBottom: "1rem" }}>
                  In der Zwischenzeit:
                </p>
                <div className="direct-contact">
                  <a href="mailto:demo@lyan.ch" className="contact-method">
                    <div className="contact-method-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#5a7080" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <span className="contact-method-label">E-Mail</span>
                      <span className="contact-method-value">demo@lyan.ch</span>
                    </div>
                  </a>
                  <a href="tel:+41441234567" className="contact-method">
                    <div className="contact-method-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#5a7080" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <span className="contact-method-label">Telefon</span>
                      <span className="contact-method-value">+41 44 123 45 67</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
