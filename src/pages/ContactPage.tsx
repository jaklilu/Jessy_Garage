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
            
            <div className="contact-cards">
              <a href={`tel:${PHONE_TEL}`} className="contact-card contact-card--phone">
                <div className="contact-card__icon">
                  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                    <use href="/icons.svg#phone-icon" />
                  </svg>
                </div>
                <div className="contact-card__content">
                  <h3>{t.contact.phoneLabel}</h3>
                  <p className="contact-card__value">{t.common.phone}</p>
                </div>
              </a>
              
              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                    <use href="/icons.svg#clock-icon" />
                  </svg>
                </div>
                <div className="contact-card__content">
                  <h3>{t.contact.hoursLabel}</h3>
                  <p className="contact-card__hours">
                    <span className="contact-card__days">{t.common.hoursDays}</span>
                    <span className="contact-card__time">{t.common.hoursTime}</span>
                  </p>
                  <p className="contact-card__subtext">{t.common.emergency}</p>
                </div>
              </div>
              
              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                    <use href="/icons.svg#location-icon" />
                  </svg>
                </div>
                <div className="contact-card__content">
                  <h3>{t.contact.areaLabel}</h3>
                  <p>{t.common.serviceArea}</p>
                </div>
              </div>
            </div>

            <div className="contact-badges">
              <div className="contact-badge">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
                  <use href="/icons.svg#credit-card-icon" />
                </svg>
                <span>{t.common.payments}</span>
              </div>
              <div className="contact-badge">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
                  <use href="/icons.svg#language-icon" />
                </svg>
                <span>{t.common.bilingual}</span>
              </div>
            </div>
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
