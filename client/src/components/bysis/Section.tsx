// bysis section helpers — heading row + horizontal snap scroller
import type { ReactNode } from "react";

export function SectionHeader({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) {
  return (
    <div className="flex items-end justify-between px-5 mb-3">
      <h2 className="text-[20px] font-bold text-bysis-ink font-display">{title}</h2>
      {action && (
        <button onClick={onAction} className="text-[13px] font-semibold text-bysis-blue press">
          {action}
        </button>
      )}
    </div>
  );
}

export function HScroll({ children }: { children: ReactNode }) {
  return (
    <div className="no-scrollbar snap-x-mandatory overflow-x-auto flex gap-3.5 px-5 pb-1">
      {children}
    </div>
  );
}
