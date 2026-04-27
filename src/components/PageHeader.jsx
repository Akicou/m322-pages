import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";

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
  const { t } = useLang();
  return (
    <div className="page-header">
      <div className="page-header-inner">
        <div className="breadcrumb">
          <Link to="/">{t.common.startseite}</Link>
          <span>›</span>
          <span>{crumb}</span>
        </div>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </div>
  );
}
