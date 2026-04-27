import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    document.title = "Demo anfragen – Yes-Doc";
  }, []);

  function submitForm(e) {
    e?.preventDefault?.();
    const fn = fname.trim();
    const em = email.trim();
    const pr = praxis.trim();
    if (!fn || !em || !pr) {
      window.alert("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }
    if (!privacy) {
      window.alert("Bitte stimmen Sie der Datenschutzerklärung zu.");
      return;
    }
    const ln = lname.trim();
    setDisplayName(ln ? `${fn} ${ln}` : fn);
    setSubmitted(true);
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
                      onChange={(e) => setFname(e.target.value)}
                      placeholder="Thomas"
                      autoComplete="given-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lname">
                      Nachname <span className="req">*</span>
                    </label>
                    <input
                      id="lname"
                      type="text"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                      placeholder="Weber"
                      autoComplete="family-name"
                    />
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
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="t.weber@praxis-beispiel.ch"
                    autoComplete="email"
                  />
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
                      onChange={(e) => setPraxis(e.target.value)}
                      placeholder="Hausarztpraxis Weber"
                    />
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
                      onChange={(e) => setPrivacy(e.target.checked)}
                    />
                    <label htmlFor="privacy">
                      Ich habe die <a href="#">Datenschutzerklärung</a> gelesen und stimme der
                      Kontaktaufnahme zu. <span className="req">*</span>
                    </label>
                  </div>
                </div>

                <button className="btn-submit" type="submit" disabled={!privacy}>
                  Demo anfragen →
                </button>

                <div className="form-footer">
                  Kein Spam. Keine automatischen Newsletter. Nur die Antwort auf Ihre Anfrage.
                  <br />
                  <a href="#">Datenschutzerklärung</a> · <a href="#">Impressum</a>
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
                  <a href="#" className="contact-method">
                    <div className="contact-method-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#5a7080" strokeWidth="2">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="contact-method-label">Live-Chat</span>
                      <span className="contact-method-value">Jetzt chatten</span>
                    </div>
                  </a>
                  <a href="#" className="contact-method">
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
