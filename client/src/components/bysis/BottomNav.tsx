// bysis bottom navigation — 5 actions: Vision, Compte, Panier, Menu, Bysis AI
import { Eye, User, ShoppingBag, Menu, Sparkles } from "lucide-react";

type Props = {
  cartCount: number;
  onVision: () => void;
  onAI: () => void;
  onAccount: () => void;
  onMenu: () => void;
  onCart: () => void;
};

export default function BottomNav({ cartCount, onVision, onAI, onAccount, onMenu, onCart }: Props) {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 mx-auto max-w-[480px]">
      <div className="m-3 rounded-[26px] bg-white/90 backdrop-blur-xl border border-bysis-line soft-shadow flex items-center justify-around h-[64px] px-2">
        <NavBtn label="Vision" onClick={onVision}><Eye className="h-[22px] w-[22px]" /></NavBtn>
        <NavBtn label="Compte" onClick={onAccount}><User className="h-[22px] w-[22px]" /></NavBtn>
        <NavBtn label="Panier" onClick={onCart} badge={cartCount}><ShoppingBag className="h-[22px] w-[22px]" /></NavBtn>
        <NavBtn label="Menu" onClick={onMenu}><Menu className="h-[22px] w-[22px]" /></NavBtn>
        <button
          onClick={onAI}
          aria-label="Bysis AI"
          className="relative -mt-7 h-[54px] w-[54px] rounded-full bg-bysis-blue text-white grid place-items-center soft-shadow press"
        >
          <Sparkles className="h-[24px] w-[24px]" />
        </button>
      </div>
    </nav>
  );
}

function NavBtn({ label, children, onClick, badge }: { label: string; children: React.ReactNode; onClick: () => void; badge?: number }) {
  return (
    <button onClick={onClick} aria-label={label} className="relative flex flex-col items-center gap-0.5 text-bysis-muted press w-12">
      <span className="relative">
        {children}
        {!!badge && badge > 0 && (
          <span className="absolute -top-1.5 -right-2 h-4 min-w-4 px-1 rounded-full bg-bysis-blue text-white text-[10px] font-bold grid place-items-center">
            {badge}
          </span>
        )}
      </span>
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}
