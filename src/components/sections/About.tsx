import { BRAND } from "@/lib/constants";
import { Reveal } from "@/components/effects/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-brand py-16 text-cream md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <SectionHeading eyebrow="About Us" title="हमारे बारे में" light />
        <Reveal>
          <p className="text-lg leading-relaxed md:text-xl">
            {BRAND.hi} {BRAND.subtitle} में आपका स्वागत है। यहां आपको स्वादिष्ट फास्ट फूड एवं भोजन की वैरायटी मिलती है। हमारा प्रयास है कि हर ग्राहक को स्वाद और अच्छी सेवा का अनुभव मिले।
          </p>
        </Reveal>
      </div>
    </section>
  );
}

