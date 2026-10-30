export const BRAND = {
  hi: "जायका एक्सप्रेस",
  en: "Jayka Express",
  subtitle: "फास्ट फूड एंड भोजनालय",
  tagline: "एक बार सेवा का अवसर अवश्य दें...",
} as const;

export const PHONES = [
  { id: "p1", display: "88402 30950", href: "tel:+918840230950" },
  { id: "p2", display: "99363 36440", href: "tel:+919936336440" },
] as const;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "हमारा मेन्यू" },
  { href: "#features", label: "हमारी खासियत" },
  { href: "#contact", label: "संपर्क करें" },
] as const;

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

