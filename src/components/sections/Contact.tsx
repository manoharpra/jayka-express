import { MessageCircle, Phone } from "lucide-react";
import { PHONES } from "@/lib/constants";
import { CallButton } from "@/components/ui/CallButton";
import { Reveal } from "@/components/effects/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="relative isolate scroll-mt-20 overflow-hidden bg-ink py-16 md:py-24">
      <div aria-hidden className="absolute -left-32 -top-32 size-96 rounded-full border border-gold/10" />
      <div aria-hidden className="absolute -left-20 -top-20 size-72 rounded-full border border-gold/10" />
      <div className="relative mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading eyebrow="We are just a call away" title="आइए, बात करते हैं!" light />
          <p className="mx-auto -mt-2 max-w-xl text-sm leading-7 text-cream/60 sm:text-base">मेन्यू या किसी जानकारी के लिए नीचे दिए गए नंबर पर संपर्क करें।</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-2">
          {PHONES.map((p, i) => (
            <Reveal key={p.id} delay={i * .1}>
              <div className="group h-full rounded-3xl border border-gold/25 bg-white/[.045] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-gold/70 hover:bg-white/[.075] sm:p-8">
                <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-gold/10 text-gold">
                  {i === 0 ? <Phone className="size-5" /> : <MessageCircle className="size-5" />}
                </span>
                <p className="mt-4 text-xs font-bold tracking-[.18em] text-cream/45 uppercase">Contact {i + 1}</p>
                <a href={p.href} className="font-display my-2 block text-3xl text-cream transition hover:text-gold sm:text-4xl">{p.display}</a>
                <CallButton href={p.href} label="अभी कॉल करें" variant={i === 0 ? "gold" : "red"} className="mt-3 w-full" />
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-cream/35">आपकी सेवा में — {PHONES.map((p) => p.display).join(" · ")}</p>
      </div>
    </section>
  );
}
