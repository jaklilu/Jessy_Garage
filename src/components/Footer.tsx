import { BUSINESS_NAME, PHONE_TEL, pathFor } from "../i18n";
import { useLocale } from "../hooks/useLocale";
import { ScrollLink } from "./ScrollLink";
import "./Footer.css";

export function Footer() {
  const { locale, t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <img src="/logo.png" alt={BUSINESS_NAME} className="site-footer__logo" />
          <p>{t.footer.aboutBlurb}</p>
          <p className="site-footer__tag">{t.common.tagline}</p>
        </div>
        <div>
          <h3>{t.nav.contact}</h3>
          <p>
            <a href={`tel:${PHONE_TEL}`}>{t.common.phone}</a>
          </p>
          <p>{t.common.address}</p>
          <p>{t.common.hoursDays}, {t.common.hoursTime}</p>
          <p>{t.common.emergency}</p>
          <p>{t.common.serviceArea}</p>
        </div>
        <div>
          <h3>{t.footer.pages}</h3>
          <ul className="site-footer__links">
            <li>
              <ScrollLink to={pathFor(locale, "home")}>{t.nav.home}</ScrollLink>
            </li>
            <li>
              <ScrollLink to={pathFor(locale, "repair")}>{t.nav.repair}</ScrollLink>
            </li>
            <li>
              <ScrollLink to={pathFor(locale, "installations")}>{t.nav.installations}</ScrollLink>
            </li>
            <li>
              <ScrollLink to={pathFor(locale, "testimonials")}>{t.nav.testimonials}</ScrollLink>
            </li>
            <li>
              <ScrollLink to={pathFor(locale, "gallery")}>{t.nav.gallery}</ScrollLink>
            </li>
            <li>
              <ScrollLink to={pathFor(locale, "contact")}>{t.nav.contact}</ScrollLink>
            </li>
          </ul>
          <p className="site-footer__note">{t.common.payments}</p>
          <p className="site-footer__note">{t.common.bilingual}</p>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          © {year} {BUSINESS_NAME}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
