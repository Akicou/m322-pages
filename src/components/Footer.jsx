import { Link, NavLink } from "react-router-dom";

const columns = [
  {
    heading: "Produkt",
    links: [
      { to: "/funktionen", label: "Funktionen" },
      { to: "/problems", label: "Probleme & Lösungen" },
      { to: "/referenzen", label: "Referenzen" },
    ],
  },
  {
    heading: "Vertrauen",
    links: [
      { to: "/datenschutz", label: "Datenschutz & Sicherheit" },
      { to: "/faq", label: "FAQ" },
    ],
  },
  {
    heading: "Unternehmen",
    links: [
      { to: "/ueber-uns", label: "Über uns" },
      { to: "/contact", label: "Kontakt & Demo" },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Yes-<span>Doc</span>
          </Link>
          <p className="footer-tagline">
            Schweizer Praxissoftware. Pragmatisch, sicher, ohne KI auf Patientendaten.
          </p>
        </div>
        {columns.map((col) => (
          <div className="footer-col" key={col.heading}>
            <div className="footer-col__heading">{col.heading}</div>
            <ul>
              {col.links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) => (isActive ? "active" : undefined)}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>© 2025 Yes-Doc · Zürich, Schweiz</span>
          <span>Alle Daten bleiben in der Schweiz</span>
        </div>
      </div>
    </footer>
  );
}
