/** Curated images from the original jessygaragedoors.com gallery (6 per album). */
export const galleryAlbums = {
  screens: [
    "/gallery/screens/01.jpg",
    "/gallery/screens/02.jpg",
    "/gallery/screens/03.jpg",
    "/gallery/screens/04.jpg",
    "/gallery/screens/05.jpg",
    "/gallery/screens/06.jpg",
  ],
  flush: [
    "/gallery/flush/01.png",
    "/gallery/flush/02.png",
    "/gallery/flush/03.jpg",
    "/gallery/flush/04.jpg",
    "/gallery/flush/05.jpg",
    "/gallery/flush/06.jpg",
  ],
  "full-view": [
    "/gallery/full-view/01.jpg",
    "/gallery/full-view/02.jpg",
    "/gallery/full-view/03.jpg",
    "/gallery/full-view/04.jpg",
    "/gallery/full-view/05.jpg",
    "/gallery/full-view/06.jpg",
  ],
} as const;

export type GalleryAlbumId = keyof typeof galleryAlbums;
