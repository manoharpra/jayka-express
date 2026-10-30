import { ArrowDown, ArrowUpRight, Utensils } from "lucide-react";
import { BRAND, PHONES } from "@/lib/constants";
import { HERO_IMAGE, MENU_ITEMS } from "@/data/menu";
import { CallButton } from "@/components/ui/CallButton";
import { FoodImage } from "@/components/ui/FoodImage";
import { FloatingFood } from "@/components/effects/FloatingFood";

export function Hero() {
  const floaters = MENU_ITEMS.filter((m) => m.id === "chicken-biryani" || m.id === "momos");
  return (
    <section id="home" className="hero-section relative isolate overflow-hidden bg-ink pb-16 pt-28 md:pb-24 md:pt-36">
      <div aria-hidden className="hero-glow pointer-events-none absolute inset-0" />
      <div aria-hidden className="absolute -left-28 top-28 size-72 rounded-full border border-gold/10 md:size-96" />
      <div aria-hidden className="absolute -left-16 top-40 size-52 rounded-full border border-gold/10 md:size-72" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-[1.02fr_.98fr] lg:gap-14">
        <div className="relative z-10 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/[.04] px-4 py-2 text-xs font-bold tracking-[.18em] text-gold uppercase">
            <span className="size-2 rounded-full bg-gold shadow-[0_0_12px_#ffc928]" />
            {BRAND.en} · {BRAND.subtitle}
          </div>
          <h1 className="font-display text-[clamp(3.4rem,8vw,6.8rem)] leading-[1.04] tracking-tight text-cream">
            हर स्वाद का <span className="text-gold">अपना</span><br className="hidden sm:block" /> जायका।
          </h1>
          <p className="font-display mt-4 text-3xl text-cream/90 sm:text-4xl">{BRAND.hi}</p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-cream/65 sm:text-lg lg:mx-0">
            समोसा, चाउमीन और मोमो से लेकर बिरयानी और थाली तक — अपनी पसंद का स्वाद चुनें।
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <CallButton href={PHONES[0].href} label="अभी कॉल करें" variant="gold" />
            <a href="#menu" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cream/25 px-6 font-bold text-cream transition hover:border-gold hover:text-gold">
              मेन्यू देखें <ArrowDown aria-hidden className="size-4" />
            </a>
          </div>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-cream/55 lg:justify-start">
            <span className="inline-flex items-center gap-2"><Utensils className="size-4 text-gold" /> फास्ट फूड और भोजन</span>
            <span className="hidden h-4 w-px bg-cream/20 sm:block" />
            <span>{BRAND.tagline}</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div aria-hidden className="absolute -inset-5 rounded-[2.5rem] border border-gold/15 rotate-3" />
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/40 bg-[#30201a] p-2 shadow-[0_35px_100px_-35px_rgba(0,0,0,.85)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
              <FoodImage src={HERO_IMAGE.src} alt={HERO_IMAGE.alt} sizes="(min-width:1024px) 600px, 100vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold tracking-[.2em] text-gold uppercase">A taste to remember</p>
                  <p className="font-display mt-1 text-2xl text-white sm:text-3xl">स्वाद और सेवा</p>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold text-ink"><ArrowUpRight className="size-5" /></span>
              </div>
            </div>
          </div>
          {floaters.map((m, i) => (
            <FloatingFood key={m.id} className={i === 0 ? "-bottom-5 -left-2 sm:-left-8" : "-top-5 -right-2 sm:-right-6"} delay={i * 0.8}>
              <div className="overflow-hidden rounded-2xl border-2 border-gold/70 bg-ink p-1 shadow-2xl">
                <div className="size-20 overflow-hidden rounded-xl sm:size-28">
                  <FoodImage src={m.image} alt={m.alt} sizes="112px" />
                </div>
              </div>
            </FloatingFood>
          ))}
        </div>
      </div>
      <div className="relative mx-auto mt-16 max-w-7xl px-4 md:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>
    </section>
  );
}
