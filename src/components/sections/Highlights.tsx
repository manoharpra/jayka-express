import { BadgeIndianRupee, Leaf, Sparkles, SprayCan } from "lucide-react";
import { Reveal } from "@/components/effects/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ITEMS = [
  { icon: Leaf, title: "ताजा एवं शुद्ध भोजन" },
  { icon: Sparkles, title: "स्वाद में लाजवाब" },
  { icon: SprayCan, title: "साफ-सुथरा वातावरण" },
  { icon: BadgeIndianRupee, title: "उचित मूल्य" },
] as const;

export function Highlights() {
  return (
    <section id="features" className="scroll-mt-20 bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Why Jayka Express" title="हमारी खासियत" />
        <ul className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="group h-full rounded-3xl border border-gold/50 bg-white p-5 text-center shadow-[0_12px_30px_-14px_rgba(36,20,18,.35)] transition hover:-translate-y-1 md:p-8">
                  <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-rich to-brand text-gold transition group-hover:scale-110 md:size-16">
                    <Icon aria-hidden className="size-7 md:size-8" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink md:text-lg">{title}</h3>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

