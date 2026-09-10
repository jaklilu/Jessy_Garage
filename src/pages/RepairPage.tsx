import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { images } from "../assets/images";
import { pathFor } from "../i18n";
import { useLocale } from "../hooks/useLocale";
import { useReveal } from "../hooks/useReveal";

export function RepairPage() {
  const { locale, t } = useLocale();
  const bodyRef = useReveal<HTMLDivElement>();

  return (
    <>
      <Seo title={t.meta.repairTitle} description={t.meta.repairDesc} />
      <header
        className="page-hero"
        style={{ ["--page-hero-image" as string]: `url(${images.pageRepair})` }}
      >
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--brand-silver)" }}>
            {t.repair.eyebrow}
          </p>
          <h1>{t.repair.title}</h1>
          <p>{t.repair.intro}</p>
        </div>
      </header>

      <section className="section">
        <div className="container split">
          <div className="prose-block reveal" ref={bodyRef}>
            <h2>{t.repair.experienceTitle}</h2>
            <p>{t.repair.experienceBody}</p>
            <Link className="btn btn-primary" to={pathFor(locale, "contact")}>
              {t.repair.cta}
            </Link>
          </div>
          <div className="media-frame">
            <img src={images.repair} alt="Garage door repair service in progress" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-intro">
            <h2>{t.repair.partsTitle}</h2>
          </div>
          <ul className="parts-grid">
            {t.repair.parts.map((part) => (
              <li key={part}>{part}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
