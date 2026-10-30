import { MENU_ITEMS } from "@/data/menu";
import { Reveal } from "@/components/effects/Reveal";
import { TiltCard } from "@/components/effects/TiltCard";
import { FoodImage } from "@/components/ui/FoodImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-20 bg-[#fff1d6] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Our Menu" title="हमारा मेन्यू" />
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {MENU_ITEMS.map((m, i) => (
            <li key={m.id}>
              <Reveal delay={(i % 4) * 0.07}>
                <TiltCard className="group overflow-hidden rounded-3xl border border-gold/60 bg-white shadow-[0_14px_34px_-16px_rgba(36,20,18,.45)]">
                  <div className="relative aspect-square overflow-hidden">
                    <FoodImage src={m.image} alt={m.alt} sizes="(min-width:1024px) 300px, (min-width:768px) 33vw, 50vw" className="object-cover transition duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-3 text-center sm:p-4">
                    <h3 className="font-display text-lg text-brand sm:text-xl">{m.hi}</h3>
                    <p className="text-sm font-semibold text-ink/60">{m.en}</p>
                  </div>
                </TiltCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

