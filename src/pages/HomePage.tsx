import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Seo } from "../components/Seo";
import { images } from "../assets/images";
import { pathFor } from "../i18n";
import { useLocale } from "../hooks/useLocale";
import { useReveal } from "../hooks/useReveal";

export function HomePage() {
  const { locale, t } = useLocale();
  const repairRef = useReveal<HTMLDivElement>();
  const installRef = useReveal<HTMLDivElement>();
  const aboutRef = useReveal<HTMLDivElement>();
  const trustRef = useReveal<HTMLDivElement>();

  return (
    <>
      <Seo title={t.meta.homeTitle} description={t.meta.homeDesc} />
      <Hero />

      <section className="section">
        <div className="container split">
          <div className="prose-block reveal" ref={repairRef}>
            <p className="eyebrow">{t.nav.repair}</p>
            <h2>{t.home.repairTitle}</h2>
            <p>{t.home.repairBody}</p>
            <Link className="btn btn-outline" to={pathFor(locale, "repair")}>
              {t.home.repairLink}
            </Link>
          </div>
          <div className="media-frame">
            <img src={images.repair} alt="Technician performing garage door repair" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split split-reverse">
          <div className="prose-block reveal" ref={installRef}>
            <p className="eyebrow">{t.nav.installations}</p>
            <h2>{t.home.installTitle}</h2>
            <p>{t.home.installBody}</p>
            <Link className="btn btn-outline" to={pathFor(locale, "installations")}>
              {t.home.installLink}
            </Link>
          </div>
          <div className="media-frame">
            <img src={images.install} alt="New garage door installation on a residential home" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro reveal" ref={trustRef}>
            <h2>{t.home.trustTitle}</h2>
          </div>
          <ul className="parts-grid">
            {t.home.trustItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div className="media-frame">
            <img src={images.about} alt="Modern home with stylish garage door" loading="lazy" />
          </div>
          <div className="prose-block reveal" ref={aboutRef}>
            <p className="eyebrow">{t.home.aboutEyebrow}</p>
            <h2>{t.home.aboutTitle}</h2>
            <p>{t.home.aboutBody}</p>
            <Link className="btn btn-ghost-dark" to={pathFor(locale, "contact")}>
              {t.home.aboutCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
