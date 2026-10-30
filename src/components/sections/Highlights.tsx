import { BadgeIndianRupee, CookingPot, Sparkles, Utensils } from "lucide-react";
import { Reveal } from "@/components/effects/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ITEMS = [
  { icon: Utensils, title: "विविध फूड मेन्यू", detail: "हर पसंद के लिए कुछ खास" },
  { icon: CookingPot, title: "फास्ट फूड और भोजन", detail: "स्नैक्स से लेकर पूरी थाली तक" },
  { icon: Sparkles, title: "स्वाद में लाजवाब", detail: "एक बार सेवा का अवसर अवश्य दें" },
  { icon: BadgeIndianRupee, title: "उचित मूल्य", detail: "आपकी पसंद, आपके बजट में" },
] as const;

export function Highlights() {
  return (
    <section id="features" className="scroll-mt-20 bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="The Jayka Experience" title="क्यों चुनें जायका एक्सप्रेस?" />
        <ul className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, detail }, i) => (
            <li key={title}>
              <Reveal delay={i * .08} className="h-full">
                <div className="group h-full rounded-3xl border border-[#ead9b9] bg-white p-5 text-center shadow-[0_12px_30px_-20px_rgba(36,20,18,.45)] transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl md:p-7">
                  <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-ink text-gold transition duration-300 group-hover:rotate-[-6deg] group-hover:bg-brand md:size-16">
                    <Icon aria-hidden className="size-7 md:size-8" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink md:text-lg">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-ink/55 sm:text-sm">{detail}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
