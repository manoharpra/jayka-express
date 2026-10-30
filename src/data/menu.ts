import type { GalleryImage, MenuItem } from "@/types/menu";

const item = (id: string, hi: string, en: string): MenuItem => ({
  id,
  hi,
  en,
  image: `/images/menu/${id}.png`,
  alt: `${hi} (${en}) — जायका एक्सप्रेस`,
});

export const MENU_ITEMS: readonly MenuItem[] = [
  item("samosa", "समोसा", "Samosa"),
  item("chowmein", "चाउमीन", "Chowmein"),
  item("burger", "बर्गर", "Burger"),
  item("egg-roll", "एग रोल", "Egg Roll"),
  item("momos", "मोमो", "Momos"),
  item("chilli-paneer", "चिली पनीर", "Chilli Paneer"),
  item("pizza", "पिज्जा", "Pizza"),
  item("fish-fry", "फिश फ्राई", "Fish Fry"),
  item("chicken-fry", "चिकन फ्राई", "Chicken Fry"),
  item("chicken-biryani", "चिकन बिरयानी", "Chicken Biryani"),
  item("veg-thali", "थाली", "Veg Thali"),
  item("non-veg-thali", "नॉनवेज थाली", "Non-Veg Thali"),
];

export const HERO_IMAGE = {
  src: "/images/hero/stall.png",
  alt: "जायका एक्सप्रेस फास्ट फूड एंड भोजनालय का स्टॉल",
};

/** Add your own photos as public/images/gallery/g1.png … g6.png */
export const GALLERY: readonly GalleryImage[] = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/gallery/g${i + 1}.png`,
  alt: `जायका एक्सप्रेस फोटो ${i + 1}`,
}));

