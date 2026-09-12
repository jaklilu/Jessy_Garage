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
        <div className="site-footer__card site-footer__card--brand">
          <img src="/logo.png" alt={BUSINESS_NAME} className="site-footer__logo" />
          <p>{t.footer.aboutBlurb}</p>
          <p className="site-footer__tag">{t.common.tagline}</p>
        </div>

        <div className="site-footer__card site-footer__card--stack">
          <a href={`tel:${PHONE_TEL}`} className="footer-info-card footer-info-card--link">
            <div className="footer-info-card__icon">
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                <use href="/icons.svg#phone-icon" />
              </svg>
            </div>
            <div className="footer-info-card__content">
              <h3>{t.contact.phoneLabel}</h3>
              <p className="footer-info-card__hours">
                <span className="footer-info-card__time footer-info-card__time--accent">
                  {t.common.phone}
                </span>
              </p>
              <p className="footer-info-card__subtext">{t.common.callNow}</p>
            </div>
          </a>

          <div className="footer-info-card">
            <div className="footer-info-card__icon">
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                <use href="/icons.svg#clock-icon" />
              </svg>
            </div>
            <div className="footer-info-card__content">
              <h3>{t.contact.hoursLabel}</h3>
              <p className="footer-info-card__hours">
                <span className="footer-info-card__days">{t.common.hoursDays}</span>
                <span className="footer-info-card__time">{t.common.hoursTime}</span>
              </p>
              <p className="footer-info-card__subtext">{t.common.emergency}</p>
            </div>
          </div>

          <div className="footer-info-card">
            <div className="footer-info-card__icon">
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                <use href="/icons.svg#location-icon" />
              </svg>
            </div>
            <div className="footer-info-card__content">
              <h3>{t.contact.areaLabel}</h3>
              <p className="footer-info-card__hours">
                <span className="footer-info-card__days">{t.common.address}</span>
                <span className="footer-info-card__time">{t.common.serviceArea}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="site-footer__card">
          <h3 className="site-footer__heading">{t.footer.pages}</h3>
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
          <div className="site-footer__badges">
            <p className="site-footer__note">{t.common.payments}</p>
            <p className="site-footer__note">{t.common.bilingual}</p>
          </div>
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
