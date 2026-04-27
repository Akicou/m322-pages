import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/funktionen", label: "Funktionen" },
  { to: "/problems", label: "Probleme & Lösungen" },
  { to: "/datenschutz", label: "Datenschutz" },
  { to: "/ueber-uns", label: "Über uns" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

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
            Demo anfragen
          </NavLink>
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
        <div className="mobile-menu__label">Menü</div>
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
          Demo anfragen →
        </NavLink>

        <div className="mobile-menu__footer">
          <span>DSGVO &amp; DSG konform</span>
          <span>Serverstandort 100% Schweiz</span>
        </div>
      </div>
    </nav>
  );
}
