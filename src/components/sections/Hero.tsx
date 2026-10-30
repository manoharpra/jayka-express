import { BRAND, PHONES } from "@/lib/constants";
import { HERO_IMAGE, MENU_ITEMS } from "@/data/menu";
import { CallButton } from "@/components/ui/CallButton";
import { FoodImage } from "@/components/ui/FoodImage";
import { FloatingFood } from "@/components/effects/FloatingFood";

export function Hero() {
  const floaters = MENU_ITEMS.filter((m) => m.id === "chicken-biryani" || m.id === "momos");
  return (
    <section id="home" className="relative overflow-hidden bg-ink pt-24 pb-16 md:pt-32 md:pb-24">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(217,39,39,.45),transparent_55%),radial-gradient(ellipse_at_10%_90%,rgba(255,201,40,.12),transparent_50%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <p className="inline-block rounded-full border border-gold/50 px-4 py-1 text-sm font-semibold text-gold">{BRAND.en}</p>
          <h1 className="font-display mt-4 text-5xl leading-tight text-cream sm:text-6xl xl:text-7xl">{BRAND.hi}</h1>
          <p className="mt-2 text-xl font-bold text-gold sm:text-2xl">{BRAND.subtitle}</p>
          <p className="font-display mt-5 text-xl text-cream sm:text-2xl">{BRAND.tagline}</p>
          <p className="mx-auto mt-4 max-w-xl text-lg text-cream/75 lg:mx-0">
            समोसा, चाउमीन, मोमो से लेकर बिरयानी और थाली तक — स्वादिष्ट फास्ट फूड एवं भोजन की वैरायटी एक ही जगह।
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <CallButton href={PHONES[0].href} label={`कॉल करें ${PHONES[0].display}`} variant="gold" />
            <CallButton href={PHONES[1].href} label={`कॉल करें ${PHONES[1].display}`} variant="outline" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl [perspective:1200px]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-2 border-gold/60 bg-ink shadow-[0_40px_80px_-20px_rgba(0,0,0,.8)] lg:[transform:rotateY(-6deg)_rotateX(3deg)]">
            <FoodImage src={HERO_IMAGE.src} alt={HERO_IMAGE.alt} sizes="(min-width:1024px) 600px, 100vw" priority />
          </div>
          {floaters.map((m, i) => (
            <FloatingFood key={m.id} className={i === 0 ? "-bottom-6 -left-2 sm:-left-8" : "-top-6 -right-2 sm:-right-6"} delay={i * 0.8}>
              <FoodImage src={m.image} alt={m.alt} sizes="128px" />
            </FloatingFood>
          ))}
        </div>
      </div>
    </section>
  );
}

