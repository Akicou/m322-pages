import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";

export function Nav() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const { pathname } = useLocation();

  const nav = t.nav;
  const links = [
    { to: "/funktionen", label: nav.funktionen },
    { to: "/problems", label: nav.probleme },
    { to: "/datenschutz", label: nav.datenschutz },
    { to: "/ueber-uns", label: nav.ueber },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav>
      <div className="nav-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          Yes-<span>Doc</span>
        </Link>

        <div className="nav-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "btn-nav btn-nav--here" : "btn-nav"
            }
          >
            {nav.cta}
          </NavLink>
          <div className="lang-toggle" role="group" aria-label="Language">
            {["de", "fr", "en"].map((code, i) => (
              <span key={code} style={{ display: "inline-flex", alignItems: "center" }}>
                {i > 0 && <span className="lang-sep">/</span>}
                <button
                  type="button"
                  className={lang === code ? "lang-btn lang-btn--active" : "lang-btn"}
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                >
                  {code.toUpperCase()}
                </button>
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={`nav-burger${open ? " nav-burger--open" : ""}`}
          aria-label={open ? nav.burgerOpen : nav.burgerClose}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " mobile-menu--open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-menu__label">{nav.menu}</div>
        <div className="mobile-menu__list">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="btn-primary mobile-menu__cta"
          onClick={() => setOpen(false)}
        >
          {nav.ctaArrow}
        </NavLink>

        <div className="mobile-menu__footer">
          <span>{nav.footer1}</span>
          <span>{nav.footer2}</span>
        </div>
      </div>
    </nav>
  );
}
