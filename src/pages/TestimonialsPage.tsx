import { Seo } from "../components/Seo";
import { images } from "../assets/images";
import { useLocale } from "../hooks/useLocale";
import "./TestimonialsPage.css";

export function TestimonialsPage() {
  const { t } = useLocale();

  return (
    <>
      <Seo title={t.meta.testimonialsTitle} description={t.meta.testimonialsDesc} />
      <header
        className="page-hero"
        style={{ ["--page-hero-image" as string]: `url(${images.about})` }}
      >
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--brand-silver)" }}>
            {t.testimonials.eyebrow}
          </p>
          <h1>{t.testimonials.title}</h1>
          <p>{t.testimonials.intro}</p>
        </div>
      </header>

      <section className="section">
        <div className="container testimonials-list">
          {t.testimonials.items.map((item) => (
            <blockquote key={item.name} className="testimonial">
              <p>“{item.quote}”</p>
              <footer>— {item.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
