import { Phone } from "lucide-react";
import { PHONES } from "@/lib/constants";

/** Fixed bottom call bar (mobile only). Footer has bottom padding so nothing is covered. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-gold/30 bg-ink/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      {PHONES.map((p, i) => (
        <a key={p.id} href={p.href} className={`flex min-h-12 items-center justify-center gap-2 rounded-full font-bold ${i === 0 ? "bg-gold text-ink" : "bg-brand-rich text-cream"}`}>
          <Phone aria-hidden className="size-4" /> {p.display}
        </a>
      ))}
    </div>
  );
}

