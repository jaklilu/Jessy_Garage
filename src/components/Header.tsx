import { Link, useLocation } from "react-router-dom";
import { PHONE_TEL, pathFor, switchLocalePath, type PageKey } from "../i18n";
import { useLocale } from "../hooks/useLocale";
import "./Header.css";
import { useState } from "react";

const navKeys: PageKey[] = [
  "home",
  "repair",
  "installations",
  "testimonials",
  "gallery",
  "contact",
];

export function Header() {
  const { locale, t } = useLocale();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navLabel: Record<PageKey, string> = {
    home: t.nav.home,
    repair: t.nav.repair,
    installations: t.nav.installations,
    testimonials: t.nav.testimonials,
    gallery: t.nav.gallery,
    contact: t.nav.contact,
  };

  const otherLocale = locale === "en" ? "es" : "en";
  const switchTo = switchLocalePath(location.pathname, otherLocale);

  return (
    <header className="site-header">
      <div className="site-header__bar container">
        <Link to={pathFor(locale, "home")} className="site-header__brand" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Jessy Garage Doors & Screens" className="site-header__logo" />
        </Link>

        <nav className={`site-header__nav ${open ? "is-open" : ""}`} aria-label="Primary">
          {navKeys.map((key) => {
            const to = pathFor(locale, key);
            const active =
              key === "home"
                ? location.pathname === to
                : location.pathname.startsWith(to);
            return (
              <Link
                key={key}
                to={to}
                className={active ? "is-active" : undefined}
                onClick={() => setOpen(false)}
              >
                {navLabel[key]}
              </Link>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <div className="lang-toggle" role="group" aria-label={t.nav.langLabel}>
            <Link
              to={switchLocalePath(location.pathname, "en")}
              className={locale === "en" ? "is-active" : undefined}
              lang="en"
            >
              {t.nav.langEn}
            </Link>
            <Link
              to={switchLocalePath(location.pathname, "es")}
              className={locale === "es" ? "is-active" : undefined}
              lang="es"
            >
              {t.nav.langEs}
            </Link>
          </div>
          <a
            className="site-header__phone-icon"
            href={`tel:${PHONE_TEL}`}
            aria-label={t.nav.call}
          >
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24">
              <use href="/icons.svg#phone-icon" />
            </svg>
          </a>
          <a className="btn btn-primary site-header__call" href={`tel:${PHONE_TEL}`}>
            {t.nav.call} {t.common.phone}
          </a>
          <button
            type="button"
            className="site-header__menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`site-header__drawer ${open ? "is-open" : ""}`}>
        {navKeys.map((key) => (
          <Link key={key} to={pathFor(locale, key)} onClick={() => setOpen(false)}>
            {navLabel[key]}
          </Link>
        ))}
        <Link to={switchTo} className="site-header__drawer-lang" onClick={() => setOpen(false)}>
          {otherLocale === "es" ? "Español" : "English"}
        </Link>
        <a className="btn btn-primary" href={`tel:${PHONE_TEL}`} onClick={() => setOpen(false)}>
          {t.nav.call} {t.common.phone}
        </a>
      </div>
    </header>
  );
}
