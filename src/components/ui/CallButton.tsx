import { Phone } from "lucide-react";
import { cn } from "@/lib/cn";

interface Props {
  href: string;
  label: string;
  variant?: "gold" | "red" | "outline";
  className?: string;
}

const styles = {
  gold: "bg-gold text-ink hover:bg-[#ffd75a] shadow-[0_8px_24px_-8px_rgba(255,201,40,.7)]",
  red: "bg-brand-rich text-cream hover:bg-brand shadow-[0_8px_24px_-8px_rgba(169,21,32,.7)]",
  outline: "border-2 border-gold/70 text-cream hover:bg-gold/10",
} as const;

export function CallButton({ href, label, variant = "gold", className }: Props) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        styles[variant],
        className,
      )}
    >
      <Phone aria-hidden className="size-5" />
      <span>{label}</span>
    </a>
  );
}

