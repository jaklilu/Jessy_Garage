import { Link } from "react-router-dom";
import { PHONE_TEL, pathFor } from "../i18n";
import { images } from "../assets/images";
import { useLocale } from "../hooks/useLocale";
import "./Hero.css";

export function Hero() {
  const { locale, t } = useLocale();

  return (
    <section className="home-hero" style={{ ["--hero-image" as string]: `url(${images.hero})` }}>
      <div className="home-hero__veil" aria-hidden="true" />
      <div className="container home-hero__content">
        <img
          src="/logo.png"
          alt="Jessy Garage Doors & Screens"
          className="home-hero__logo"
        />
        <p className="home-hero__tagline">{t.common.tagline}</p>
        <h1>{t.home.heroHeadline}</h1>
        <p className="home-hero__support">{t.home.heroSupport}</p>
        <div className="cta-row">
          <a className="btn btn-primary" href={`tel:${PHONE_TEL}`}>
            {t.home.heroCtaCall}
          </a>
          <Link className="btn btn-secondary" to={pathFor(locale, "contact")}>
            {t.home.heroCtaEstimate}
          </Link>
        </div>
      </div>
    </section>
  );
}
