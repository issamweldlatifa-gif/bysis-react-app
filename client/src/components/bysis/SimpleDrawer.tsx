// bysis lightweight bottom drawer for Compte / Menu / Panier
import type { ReactNode } from "react";
import { X } from "lucide-react";

export default function SimpleDrawer({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 mx-auto max-w-[480px] bg-bysis-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed z-50 inset-x-0 bottom-0 mx-auto max-w-[480px] bg-white rounded-t-[28px] p-5 transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ transitionTimingFunction: "var(--ease-out)", paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[19px] font-bold font-display text-bysis-ink">{title}</h3>
          <button onClick={onClose} className="h-9 w-9 grid place-items-center rounded-full bg-bysis-soft press"><X className="h-4 w-4" /></button>
        </div>
        {children}
      </aside>
    </>
  );
}
