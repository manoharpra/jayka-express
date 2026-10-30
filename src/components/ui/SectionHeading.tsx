interface Props {
  eyebrow: string;
  title: string;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, light }: Props) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <p className={`text-sm font-bold tracking-[0.25em] uppercase ${light ? "text-gold" : "text-brand-rich"}`}>{eyebrow}</p>
      <h2 className={`font-display mt-2 text-3xl md:text-5xl ${light ? "text-cream" : "text-ink"}`}>{title}</h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent" />
    </div>
  );
}

