import { ArrowUpRight } from "lucide-react";
import { MENU_ITEMS } from "@/data/menu";
import { Reveal } from "@/components/effects/Reveal";
import { TiltCard } from "@/components/effects/TiltCard";
import { FoodImage } from "@/components/ui/FoodImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-20 bg-[#fff1d6] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><SectionHeading eyebrow="Made for your cravings" title="हमारा मेन्यू" /></div>
          <p className="max-w-sm text-sm leading-7 text-ink/60 sm:pb-3">कुछ हल्का-फुल्का या भरपेट भोजन — अपनी पसंद का जायका तलाशें।</p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {MENU_ITEMS.map((m, i) => (
            <li key={m.id}>
              <Reveal delay={(i % 4) * .06}>
                <TiltCard className="group h-full overflow-hidden rounded-[1.6rem] border border-[#ead9b9] bg-white shadow-[0_14px_34px_-20px_rgba(36,20,18,.5)] transition duration-300 hover:border-brand/30">
                  <div className="relative aspect-[1.12/1] overflow-hidden bg-[#f4e8d2]">
                    <FoodImage src={m.image} alt={m.alt} sizes="(min-width:1024px) 300px, (min-width:768px) 33vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
                    <span className="absolute bottom-3 right-3 grid size-9 translate-y-2 place-items-center rounded-full bg-gold text-ink opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight aria-hidden className="size-4" />
                    </span>
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-display text-lg text-brand sm:text-xl">{m.hi}</h3>
                    <p className="text-xs font-semibold tracking-wide text-ink/45">{m.en}</p>
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
