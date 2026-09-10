import { Seo } from "../components/Seo";
import { images } from "../assets/images";
import { useLocale } from "../hooks/useLocale";
import "./GalleryPage.css";

const galleryImages = {
  screens: images.screens,
  "full-view": images.fullView,
  flush: images.flush,
} as const;

export function GalleryPage() {
  const { t } = useLocale();

  return (
    <>
      <Seo title={t.meta.galleryTitle} description={t.meta.galleryDesc} />
      <header
        className="page-hero"
        style={{ ["--page-hero-image" as string]: `url(${images.fullView})` }}
      >
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--brand-silver)" }}>
            {t.gallery.eyebrow}
          </p>
          <h1>{t.gallery.title}</h1>
          <p>{t.gallery.intro}</p>
        </div>
      </header>

      <section className="section">
        <div className="container gallery-grid">
          {t.gallery.categories.map((cat) => (
            <article key={cat.id} className="gallery-item">
              <div className="media-frame gallery-item__media">
                <img
                  src={galleryImages[cat.id as keyof typeof galleryImages]}
                  alt={cat.title}
                  loading="lazy"
                />
              </div>
              <h2>{cat.title}</h2>
              <p>{cat.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
