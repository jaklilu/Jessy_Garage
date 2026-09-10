import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { images } from "../assets/images";
import { pathFor } from "../i18n";
import { useLocale } from "../hooks/useLocale";
import { useReveal } from "../hooks/useReveal";

export function InstallationsPage() {
  const { locale, t } = useLocale();
  const ref1 = useReveal<HTMLDivElement>();
  const ref2 = useReveal<HTMLDivElement>();

  return (
    <>
      <Seo title={t.meta.installationsTitle} description={t.meta.installationsDesc} />
      <header
        className="page-hero"
        style={{ ["--page-hero-image" as string]: `url(${images.pageInstall})` }}
      >
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--brand-silver)" }}>
            {t.installations.eyebrow}
          </p>
          <h1>{t.installations.title}</h1>
          <p>{t.installations.intro}</p>
        </div>
      </header>

      <section className="section">
        <div className="container split">
          <div className="prose-block reveal" ref={ref1}>
            <h2>{t.installations.perfectTitle}</h2>
            <p>{t.installations.perfectBody}</p>
            <h3>{t.installations.sizesTitle}</h3>
            <p>{t.installations.sizesBody}</p>
          </div>
          <div className="media-frame">
            <img src={images.install} alt="Professional garage door installation" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split split-reverse">
          <div className="prose-block reveal" ref={ref2}>
            <h2>{t.installations.customTitle}</h2>
            <p>{t.installations.customBody}</p>
            <Link className="btn btn-primary" to={pathFor(locale, "contact")}>
              {t.installations.cta}
            </Link>
          </div>
          <div className="media-frame">
            <img src={images.fullView} alt="Full-view glass garage door with modern design" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
