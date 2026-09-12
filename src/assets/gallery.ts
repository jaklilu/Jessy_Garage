/** Images imported from the original jessygaragedoors.com gallery. */
export const galleryAlbums = {
  screens: [
    "/gallery/screens/01.jpg",
    "/gallery/screens/02.jpg",
    "/gallery/screens/03.jpg",
    "/gallery/screens/04.jpg",
    "/gallery/screens/05.jpg",
    "/gallery/screens/06.jpg",
    "/gallery/screens/07.jpg",
    "/gallery/screens/08.jpg",
    "/gallery/screens/09.jpg",
    "/gallery/screens/10.jpg",
    "/gallery/screens/11.jpg",
  ],
  flush: [
    "/gallery/flush/01.png",
    "/gallery/flush/02.png",
    "/gallery/flush/03.jpg",
    "/gallery/flush/04.jpg",
    "/gallery/flush/05.jpg",
    "/gallery/flush/06.jpg",
    "/gallery/flush/07.jpg",
    "/gallery/flush/08.jpg",
    "/gallery/flush/09.jpg",
    "/gallery/flush/10.jpg",
  ],
  "full-view": [
    "/gallery/full-view/01.jpg",
    "/gallery/full-view/02.jpg",
    "/gallery/full-view/04.jpg",
    "/gallery/full-view/05.jpg",
    "/gallery/full-view/06.jpg",
    "/gallery/full-view/07.jpg",
    "/gallery/full-view/08.jpg",
    "/gallery/full-view/09.jpg",
    "/gallery/full-view/10.jpg",
    "/gallery/full-view/11.jpg",
    "/gallery/full-view/12.jpg",
    "/gallery/full-view/13.jpg",
  ],
} as const;

export type GalleryAlbumId = keyof typeof galleryAlbums;
