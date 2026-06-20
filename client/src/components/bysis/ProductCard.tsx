// bysis ProductCard — light card, pill image, bold price, strikethrough "prix conseillé"
import type { Product } from "@/data";
import { Heart } from "lucide-react";

export default function ProductCard({ p, onAdd }: { p: Product; onAdd?: (p: Product) => void }) {
  return (
    <div className="snap-start shrink-0 w-[150px]">
      <div className="relative rounded-[22px] bg-bysis-soft overflow-hidden aspect-[3/4] press">
        <img src={p.img} alt={`${p.brand} ${p.name}`} loading="lazy" className="absolute inset-0 h-full w-full object-contain p-3" />
        <button
          aria-label="Ajouter aux favoris"
          className="absolute top-2.5 right-2.5 h-8 w-8 grid place-items-center rounded-full bg-white/85 backdrop-blur text-bysis-ink soft-shadow-sm press"
          onClick={() => onAdd?.(p)}
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="px-0.5 pt-2.5">
        <p className="text-[13px] font-semibold text-bysis-ink leading-tight">{p.brand}</p>
        <p className="text-[12px] text-bysis-muted leading-tight">{p.name}</p>
        <p className="text-[11px] text-bysis-muted mt-1.5">
          Prix conseillé <span className="line-through">{p.oldPrice}</span>*
        </p>
        <p className="text-[17px] font-bold text-bysis-ink font-display leading-none mt-0.5">
          {p.price}
          <sup className="text-bysis-blue text-[10px] ml-0.5">1</sup>
        </p>
      </div>
    </div>
  );
}
