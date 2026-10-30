import { ArrowUp } from "lucide-react";
import { BRAND, NAV_LINKS, PHONES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink pt-14 pb-28 text-cream/80 md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-display text-3xl text-gold">{BRAND.hi}</p>
          <p className="mt-1 font-semibold">{BRAND.subtitle}</p>
          <p className="mt-3 text-cream/70">{BRAND.tagline}</p>
        </div>
        <nav aria-label="फुटर नेविगेशन">
          <p className="mb-3 font-bold text-cream">लिंक</p>
          <ul className="space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-gold">{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="mb-3 font-bold text-cream">संपर्क करें</p>
          <ul className="space-y-2">
            {PHONES.map((p) => (
              <li key={p.id}><a href={p.href} className="text-lg font-semibold hover:text-gold">{p.display}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl items-center justify-between gap-4 border-t border-cream/10 px-4 pt-6 text-sm md:px-6">
        <p>© {new Date().getFullYear()} {BRAND.hi}. सर्वाधिकार सुरक्षित।</p>
        <a href="#home" className="inline-flex items-center gap-1 font-semibold text-gold"><ArrowUp aria-hidden className="size-4" /> ऊपर जाएं</a>
      </div>
    </footer>
  );
}

