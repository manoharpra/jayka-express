"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { BRAND, NAV_LINKS, PHONES } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const primary = PHONES[0];

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || open ? "bg-ink/95 shadow-lg backdrop-blur" : "bg-transparent")}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        <a href="#home" className="flex items-center gap-2" aria-label={`${BRAND.en} – Home`}>
          <span className="font-display grid size-10 place-items-center rounded-full bg-gradient-to-br from-brand-rich to-brand text-lg text-gold ring-2 ring-gold/70">ज</span>
          <span className="font-display text-xl text-cream md:text-2xl">{BRAND.hi}</span>
        </a>

        <nav aria-label="मुख्य नेविगेशन" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="font-semibold text-cream/90 transition hover:text-gold">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={primary.href} className="hidden min-h-11 items-center gap-2 rounded-full bg-gold px-5 font-bold text-ink transition hover:bg-[#ffd75a] sm:inline-flex">
            <Phone aria-hidden className="size-4" /> {primary.display}
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full text-cream lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "मेन्यू बंद करें" : "मेन्यू खोलें"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="मोबाइल नेविगेशन" className="border-t border-gold/20 bg-ink px-4 pb-6 lg:hidden">
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-cream/10 py-4 text-lg font-semibold text-cream">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-3">
            {PHONES.map((p) => (
              <a key={p.id} href={p.href} className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold font-bold text-ink">
                <Phone aria-hidden className="size-5" /> {p.display}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

