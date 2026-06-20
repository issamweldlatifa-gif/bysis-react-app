// bysis bottom navigation — 5 actions: Vision, Compte, Panier, Menu, Bysis AI
// Bottom nav STAYS visible while AI/Vision drawers are open; active tab is highlighted.
// Vision & AI buttons toggle their drawer (same button opens/closes).
import { useEffect } from "react";
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
  // Sync active state to body classes for CSS to respond
  useEffect(() => {
    if (active === "ai") {
      document.body.classList.add("ai-open");
      document.body.classList.remove("vision-open");
    } else if (active === "vision") {
      document.body.classList.add("vision-open");
      document.body.classList.remove("ai-open");
    } else {
      document.body.classList.remove("ai-open", "vision-open");
    }
  }, [active]);

  return (
    <nav className="fixed bottom-0 inset-x-0 z-[7000] mx-auto max-w-[480px]">
      <div className="m-3 rounded-[26px] bg-white/95 backdrop-blur-xl border border-bysis-line soft-shadow flex items-center justify-around h-[64px] px-2">
        <NavBtn label="Vision" onClick={onVision} active={active === "vision"}>
          <Eye className="h-[22px] w-[22px]" />
        </NavBtn>
        <NavBtn label="Compte" onClick={onAccount}>
          <User className="h-[22px] w-[22px]" />
        </NavBtn>
        <NavBtn label="Panier" onClick={onCart} badge={cartCount}>
          <ShoppingBag className="h-[22px] w-[22px]" />
        </NavBtn>
        <NavBtn label="Menu" onClick={onMenu}>
          <Menu className="h-[22px] w-[22px]" />
        </NavBtn>
        <button
          onClick={onAI}
          aria-label="Bysis AI"
          aria-pressed={active === "ai"}
          className={`relative -mt-7 h-[54px] w-[54px] rounded-full grid place-items-center soft-shadow press transition-all duration-200 ${
            active === "ai" ? "bg-bysis-ink ring-4 ring-bysis-blue/30 scale-105" : "bg-bysis-blue"
          }`}
        >
          <img src={LOGOS.ai} alt="" className="h-[30px] w-[30px] object-contain" />
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
}: {
  label: string;
  children: React.ReactNode;
  onClick: () => void;
  badge?: number;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`relative flex flex-col items-center gap-0.5 press w-12 transition-colors duration-200 ${
        active ? "text-bysis-blue" : "text-bysis-muted"
      }`}
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
      {active && <span className="absolute -bottom-2 h-1 w-1 rounded-full bg-bysis-blue" />}
    </button>
  );
}
