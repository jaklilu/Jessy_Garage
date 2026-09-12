import { Seo } from "../components/Seo";
import { Slideshow } from "../components/Slideshow";
import { galleryAlbums, type GalleryAlbumId } from "../assets/gallery";
import { images } from "../assets/images";
import { useLocale } from "../hooks/useLocale";
import "./GalleryPage.css";

export function GalleryPage() {
  const { t } = useLocale();

  return (
    <>
      <Seo title={t.meta.galleryTitle} description={t.meta.galleryDesc} />
      <header
        className="page-hero"
        style={{ ["--page-hero-image" as string]: `url(${galleryAlbums.screens[0] ?? images.fullView})` }}
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
        <div className="container gallery-list">
          {t.gallery.categories.map((cat) => {
            const albumId = cat.id as GalleryAlbumId;
            const album = galleryAlbums[albumId] ?? [];
            return (
              <article key={cat.id} className="gallery-album">
                <div className="gallery-album__copy">
                  <h2>{cat.title}</h2>
                  <p>{cat.body}</p>
                </div>
                <Slideshow
                  images={album}
                  alt={cat.title}
                  prevLabel={t.gallery.prev}
                  nextLabel={t.gallery.next}
                  ofLabel={t.gallery.of}
                />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
