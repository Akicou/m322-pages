import { Link, NavLink } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";

export function Footer() {
  const { t } = useLang();

  const columns = [
    {
      heading: t.footer.col1,
      links: [
        { to: "/funktionen", label: t.nav.funktionen },
        { to: "/problems", label: t.nav.probleme },
        { to: "/referenzen", label: t.footer.referenzen },
      ],
    },
    {
      heading: t.footer.col2,
      links: [
        { to: "/datenschutz", label: t.footer.datenschutz },
        { to: "/faq", label: t.footer.faq },
      ],
    },
    {
      heading: t.footer.col3,
      links: [
        { to: "/ueber-uns", label: t.nav.ueber },
        { to: "/contact", label: t.footer.kontakt },
      ],
    },
  ];

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Yes-<span>Doc</span>
          </Link>
          <p className="footer-tagline">{t.footer.tagline}</p>
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
          <span>{t.footer.copyright}</span>
          <span>{t.footer.servers}</span>
        </div>
      </div>
    </footer>
  );
}
