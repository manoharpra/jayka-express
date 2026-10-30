import { ArrowDownRight, Heart, Utensils } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { Reveal } from "@/components/effects/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-brand py-16 text-cream md:py-24">
      <div aria-hidden className="absolute -right-24 -top-24 size-96 rounded-full border border-white/10" />
      <div aria-hidden className="absolute -right-12 -top-12 size-72 rounded-full border border-white/10" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-6 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <div className="mx-auto grid aspect-square max-w-xs place-items-center rounded-full border border-gold/40 bg-ink/15 p-5 sm:max-w-sm">
            <div className="grid size-full place-items-center rounded-full border border-dashed border-gold/40">
              <div className="text-center">
                <Utensils className="mx-auto size-12 text-gold" />
                <p className="font-display mt-4 text-4xl">{BRAND.hi}</p>
                <p className="mt-2 text-xs font-bold tracking-[.22em] text-gold uppercase">{BRAND.en}</p>
              </div>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading eyebrow="A little about us" title="स्वाद, जो याद रह जाए" light />
          <Reveal>
            <p className="max-w-2xl text-lg leading-8 text-cream/85">
              {BRAND.hi} {BRAND.subtitle} में आपका स्वागत है। यहां समोसा, चाउमीन, मोमो, बिरयानी और थाली जैसी कई पसंद के विकल्प मिलते हैं। हमारा प्रयास है कि आपको स्वाद के साथ अच्छी सेवा का अनुभव मिले।
            </p>
            <div className="mt-7 flex items-center gap-3 border-t border-white/20 pt-6">
              <span className="grid size-11 place-items-center rounded-full bg-gold text-ink"><Heart className="size-5" /></span>
              <div>
                <p className="font-bold text-gold">{BRAND.tagline}</p>
                <p className="mt-1 text-sm text-cream/55">आपका स्वागत है।</p>
              </div>
              <ArrowDownRight className="ml-auto size-7 text-gold/70" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
