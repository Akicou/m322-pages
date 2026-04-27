import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const i18n = {
  de: {
    funktionen: "Funktionen",
    probleme: "Probleme & Lösungen",
    datenschutz: "Datenschutz",
    ueber: "Über uns",
    cta: "Demo anfragen",
    menu: "Menü",
    ctaArrow: "Demo anfragen →",
    footer1: "DSGVO & DSG konform",
    footer2: "Serverstandort 100% Schweiz",
  },
  fr: {
    fonctionnalités: "Fonctions",
    problèmes: "Problèmes & Solutions",
    confidentialité: "Confidentialité",
    à_propos: "À propos",
    cta: "Démo",
    menu: "Menu",
    ctaArrow: "Demander une démo →",
    footer1: "Conforme RGPD & LPD",
    footer2: "Serveurs 100% en Suisse",
  },
};

export function Nav() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "de");
  const { pathname } = useLocation();

  const t = lang === "fr" ? i18n.fr : i18n.de;

  const links = lang === "fr"
    ? [
        { to: "/funktionen", label: t.fonctionnalités },
        { to: "/problems", label: t.problèmes },
        { to: "/datenschutz", label: t.confidentialité },
        { to: "/ueber-uns", label: t.à_propos },
      ]
    : [
        { to: "/funktionen", label: t.funktionen },
        { to: "/problems", label: t.probleme },
        { to: "/datenschutz", label: t.datenschutz },
        { to: "/ueber-uns", label: t.ueber },
      ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

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
              key={l.label}
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
            {t.cta}
          </NavLink>
          <div className="lang-toggle" role="group" aria-label="Sprache wählen">
            <button
              type="button"
              className={lang === "de" ? "lang-btn lang-btn--active" : "lang-btn"}
              onClick={() => setLang("de")}
              aria-pressed={lang === "de"}
            >
              DE
            </button>
            <span className="lang-sep">/</span>
            <button
              type="button"
              className={lang === "fr" ? "lang-btn lang-btn--active" : "lang-btn"}
              onClick={() => setLang("fr")}
              aria-pressed={lang === "fr"}
            >
              FR
            </button>
          </div>
        </div>

        <button
          type="button"
          className={`nav-burger${open ? " nav-burger--open" : ""}`}
          aria-label={open ? "Menü schliessen" : "Menü öffnen"}
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
        <div className="mobile-menu__label">{t.menu}</div>
        <div className="mobile-menu__list">
          {links.map((l) => (
            <NavLink
              key={l.label}
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
          {t.ctaArrow}
        </NavLink>

        <div className="mobile-menu__footer">
          <span>{t.footer1}</span>
          <span>{t.footer2}</span>
        </div>
      </div>
    </nav>
  );
}
