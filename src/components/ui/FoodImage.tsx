"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageOff } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}

/** Shows the real photo; if the file is missing, shows a clearly labelled placeholder. */
export function FoodImage({ src, alt, sizes, priority, className }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div role="img" aria-label={`${alt} (फोटो जल्द)`} className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-cream-dark p-3 text-center text-ink/60">
        <ImageOff aria-hidden className="size-8" />
        <span className="text-xs font-semibold">PLACEHOLDER</span>
        <span className="text-[10px] break-all">{src}</span>
      </div>
    );
  }
  return (
    <Image src={src} alt={alt} fill sizes={sizes} priority={priority} onError={() => setFailed(true)} className={className ?? "object-cover"} />
  );
}

