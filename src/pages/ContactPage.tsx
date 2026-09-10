import { ContactForm } from "../components/ContactForm";
import { Seo } from "../components/Seo";
import { images } from "../assets/images";
import { PHONE_TEL } from "../i18n";
import { useLocale } from "../hooks/useLocale";
import "./ContactPage.css";

export function ContactPage() {
  const { t } = useLocale();

  return (
    <>
      <Seo title={t.meta.contactTitle} description={t.meta.contactDesc} />
      <header
        className="page-hero"
        style={{ ["--page-hero-image" as string]: `url(${images.contact})` }}
      >
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--brand-silver)" }}>
            {t.contact.eyebrow}
          </p>
          <h1>{t.contact.title}</h1>
          <p>{t.contact.intro}</p>
        </div>
      </header>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-details">
            <h2>{t.nav.contact}</h2>
            <dl>
              <div>
                <dt>{t.contact.phoneLabel}</dt>
                <dd>
                  <a href={`tel:${PHONE_TEL}`}>{t.common.phone}</a>
                </dd>
              </div>
              <div>
                <dt>{t.contact.hoursLabel}</dt>
                <dd>
                  {t.common.hours}
                  <br />
                  {t.common.emergency}
                </dd>
              </div>
              <div>
                <dt>{t.contact.areaLabel}</dt>
                <dd>{t.common.serviceArea}</dd>
              </div>
            </dl>
            <p className="contact-note">{t.common.payments}</p>
            <p className="contact-note">{t.common.bilingual}</p>
          </div>

          <div className="contact-form-wrap">
            <h2>{t.contact.formTitle}</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
