// bysis Prochainement countdown card
import { useEffect, useState } from "react";
import type { Upcoming } from "@/data";
import { Bell } from "lucide-react";

function fmt(total: number) {
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return { d, h: pad(h), m: pad(m), s: pad(s) };
}

export default function CountdownCard({ item, onNotify }: { item: Upcoming; onNotify?: (t: string) => void }) {
  const [left, setLeft] = useState(item.endsInSec);
  useEffect(() => {
    const t = setInterval(() => setLeft((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const { d, h, m, s } = fmt(left);

  return (
    <div className="snap-start shrink-0 w-[210px] rounded-[26px] bg-gradient-to-b from-bysis-pastel to-bysis-pastel2 p-4 flex flex-col justify-between min-h-[180px] press">
      <p className="text-[15px] font-semibold text-bysis-ink leading-snug font-display line-clamp-3">{item.title}</p>
      <div>
        <p className="text-[11px] text-bysis-muted mb-1.5">démarre dans</p>
        <div className="flex items-baseline gap-1.5 text-bysis-ink font-display font-bold mb-3">
          {d > 0 && <Unit n={String(d)} u="j" />}
          <Unit n={h} u="h" />
          <Unit n={m} u="m" />
          {d === 0 && <Unit n={s} u="s" />}
        </div>
        <button
          onClick={() => onNotify?.(item.title)}
          className="w-full h-9 rounded-full bg-white text-bysis-ink text-[13px] font-semibold inline-flex items-center justify-center gap-1.5 soft-shadow-sm press"
        >
          <Bell className="h-3.5 w-3.5" /> Informez-moi
        </button>
      </div>
    </div>
  );
}

function Unit({ n, u }: { n: string; u: string }) {
  return (
    <span className="leading-none">
      <span className="text-[22px]">{n}</span>
      <span className="text-[12px] text-bysis-muted ml-0.5">{u}</span>
    </span>
  );
}
