import { ArrowUpRight, Camera } from "lucide-react";
import { GALLERY } from "@/data/menu";
import { Reveal } from "@/components/effects/Reveal";
import { FoodImage } from "@/components/ui/FoodImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="A glimpse of Jayka" title="स्वाद की कुछ झलकियां" />
          <p className="max-w-xs text-sm leading-7 text-ink/55 sm:pb-3">हमारे मेन्यू और जायका एक्सप्रेस की तस्वीरें।</p>
        </div>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {GALLERY.map((g, i) => (
            <li key={g.src} className={i === 0 || i === 5 ? "md:col-span-2" : ""}>
              <Reveal delay={(i % 3) * .07}>
                <div className={`group relative overflow-hidden rounded-2xl border border-gold/35 bg-[#f4e8d2] shadow-[0_14px_30px_-22px_rgba(36,20,18,.6)] ${i === 0 || i === 5 ? "aspect-[2/1]" : "aspect-[4/3]"}`}>
                  <FoodImage src={g.src} alt={g.alt} sizes={i === 0 || i === 5 ? "(min-width:768px) 50vw, 100vw" : "(min-width:768px) 25vw, 50vw"} className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 text-xs font-semibold text-white sm:bottom-4 sm:left-4">
                    <Camera className="size-4 text-gold" /> Jayka Express
                  </span>
                  <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full border border-white/50 bg-ink/35 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
