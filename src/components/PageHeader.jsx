import { Link } from "react-router-dom";

/**
 * Shared sub-page header (slate background, breadcrumb, h1, lead).
 *
 * @param {{
 *   crumb: string,
 *   title: string | JSX.Element,
 *   lead: string,
 * }} props
 */
export function PageHeader({ crumb, title, lead }) {
  return (
    <div className="page-header">
      <div className="page-header-inner">
        <div className="breadcrumb">
          <Link to="/">Startseite</Link>
          <span>›</span>
          <span>{crumb}</span>
        </div>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </div>
  );
}
