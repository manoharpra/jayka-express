import { PHONES } from "@/lib/constants";
import { CallButton } from "@/components/ui/CallButton";
import { Reveal } from "@/components/effects/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionHeading eyebrow="Contact" title="संपर्क करें" light />
        <div className="grid gap-5 md:grid-cols-2">
          {PHONES.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <div className="rounded-3xl border border-gold/50 bg-white/5 p-6 text-center">
                <p className="text-sm font-semibold text-cream/60">फोन {i + 1}</p>
                <a href={p.href} className="font-display my-2 block text-3xl text-gold sm:text-4xl">{p.display}</a>
                <CallButton href={p.href} label="अभी कॉल करें" variant={i === 0 ? "gold" : "red"} className="mt-3 w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

