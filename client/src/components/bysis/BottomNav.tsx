// bysis bottom navigation — 5 actions: Vision, Compte, Panier, Menu, Bysis AI
// ── Design philosophy (matches reference HTML v23/v8) ──────────────────────────
// • Closed state: a floating white rounded "pill" holding 4 icons + a circular AI
//   button that pops out on the right.
// • Open state (drawer ai/vision active): the rail morphs — the 4 icons stay inside
//   the white pill (slightly raised), and the dark-blue circular AI button detaches
//   on the right, visually separated from the icon pill (reference IMG_8307).
// Bottom nav STAYS visible above the drawers (z-7000). Vision & AI toggle their drawer.
import { Eye, User, ShoppingBag, Menu } from "lucide-react";
import { LOGOS } from "@/data";

type Props = {
  cartCount: number;
  active: "vision" | "ai" | null;
  onVision: () => void;
  onAI: () => void;
  onAccount: () => void;
  onMenu: () => void;
  onCart: () => void;
};

export default function BottomNav({ cartCount, active, onVision, onAI, onAccount, onMenu, onCart }: Props) {
  const open = active !== null; // drawer (ai or vision) is open → morph the rail

  return (
    <nav className="fixed bottom-0 inset-x-0 z-[7000] mx-auto max-w-[480px] px-3 pb-3">
      <div
        className={`flex items-center transition-all duration-[280ms] ${
          open ? "gap-3" : "gap-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
      >
        {/* ── Icon pill (the 4 main tabs) ── */}
        <div
          className={`flex-1 bg-white/95 backdrop-blur-xl border border-bysis-line soft-shadow rounded-[26px] grid grid-cols-4 items-center transition-all duration-[280ms] ${
            open ? "h-[68px]" : "h-[64px]"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
        >
          <NavBtn label="Vision" onClick={onVision} active={active === "vision"} open={open}>
            <Eye className="h-[22px] w-[22px]" />
          </NavBtn>
          <NavBtn label="Compte" onClick={onAccount} open={open}>
            <User className="h-[22px] w-[22px]" />
          </NavBtn>
          <NavBtn label="Panier" onClick={onCart} badge={cartCount} open={open}>
            <ShoppingBag className="h-[22px] w-[22px]" />
          </NavBtn>
          <NavBtn label="Menu" onClick={onMenu} open={open}>
            <Menu className="h-[22px] w-[22px]" />
          </NavBtn>
        </div>

        {/* ── AI button ── pops out / detaches on the right ── */}
        <button
          onClick={onAI}
          aria-label="Bysis AI"
          aria-pressed={active === "ai"}
          className={`relative grid place-items-center soft-shadow press transition-all duration-[280ms] shrink-0 ${
            open
              ? `h-[60px] w-[60px] rounded-full ${
                  active === "ai" ? "bg-bysis-ink ring-4 ring-bysis-blue/25" : "bg-bysis-ink"
                }`
              : `-mt-7 h-[54px] w-[54px] rounded-full ${
                  active === "ai" ? "bg-bysis-ink ring-4 ring-bysis-blue/30 scale-105" : "bg-bysis-blue"
                }`
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
        >
          <img
            src={LOGOS.ai}
            alt=""
            className={`object-contain transition-all duration-200 ${open ? "h-[28px] w-[28px]" : "h-[30px] w-[30px]"}`}
          />
        </button>
      </div>
    </nav>
  );
}

function NavBtn({
  label,
  children,
  onClick,
  badge,
  active,
  open,
}: {
  label: string;
  children: React.ReactNode;
  onClick: () => void;
  badge?: number;
  active?: boolean;
  open?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`relative flex flex-col items-center gap-0.5 press transition-all duration-[260ms] ${
        active ? "text-bysis-blue" : "text-bysis-ink"
      } ${open ? "pt-1.5" : ""}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
    >
      <span className="relative">
        {children}
        {!!badge && badge > 0 && (
          <span className="absolute -top-1.5 -right-2 h-4 min-w-4 px-1 rounded-full bg-bysis-blue text-white text-[10px] font-bold grid place-items-center">
            {badge}
          </span>
        )}
      </span>
      <span className="text-[10px] font-medium">{label}</span>
      {active && !open && <span className="absolute -bottom-1.5 h-1 w-1 rounded-full bg-bysis-blue" />}
    </button>
  );
}
