export interface MenuItem {
  id: string;
  hi: string;
  en: string;
  /** Path under /public. Replace with the real photograph (same file name). */
  image: string;
  alt: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

