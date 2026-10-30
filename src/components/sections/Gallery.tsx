import { GALLERY } from "@/data/menu";
import { Reveal } from "@/components/effects/Reveal";
import { FoodImage } from "@/components/ui/FoodImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Gallery" title="फोटो गैलरी" />
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {GALLERY.map((g, i) => (
            <li key={g.src}>
              <Reveal delay={(i % 3) * 0.08}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/50">
                  <FoodImage src={g.src} alt={g.alt} sizes="(min-width:768px) 33vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

