// bysis Vision drawer + Bysis AI chat drawer
// Behaviour faithful to reference v23/v5:
//  - Both drawers slide in horizontally from the side (translateX), not vertically.
//  - Same nav button toggles open/close; opening one closes the other (mutual exclusion handled in Home).
//  - Bottom navigation bar STAYS visible (drawer sits above content but below the nav, bottom: nav height).
//  - An X button in the header also closes the drawer.
import { useState } from "react";
import { LOGOS } from "@/data";
import { X, Camera, ImageUp, Search, Tag, GitCompare, Send } from "lucide-react";

// Side panel shell: fixed, slides from right, leaves the bottom nav visible.
function SidePanel({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <aside
      aria-hidden={!open}
      className="fixed z-50 top-0 right-0 mx-auto w-full max-w-[480px] bg-white flex flex-col"
      style={{
        left: "auto",
        bottom: "88px", // keep the floating bottom nav (64px + margins) visible
        transform: open ? "translateX(0)" : "translateX(105%)",
        opacity: open ? 1 : 0.98,
        pointerEvents: open ? "auto" : "none",
        transition: "transform 420ms cubic-bezier(.22,.9,.22,1), opacity 220ms ease",
        boxShadow: open ? "-18px 0 50px rgba(17,20,24,.10)" : "none",
      }}
    >
      {children}
    </aside>
  );
}

export function VisionDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const actions = [
    { icon: Search, label: "Rechercher un produit similaire" },
    { icon: Tag, label: "Identifier une marque" },
    { icon: GitCompare, label: "Comparer avec les arrivages" },
  ];
  return (
    <SidePanel open={open}>
      <header className="flex items-center justify-between px-4 h-16 border-b border-bysis-line shrink-0">
        <button onClick={onClose} aria-label="Fermer" className="h-9 w-9 grid place-items-center rounded-full bg-bysis-soft press">
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          <img src={LOGOS.vision} alt="" className="h-5 w-auto object-contain" />
          <span className="text-[16px] font-bold font-display text-bysis-ink">Vision</span>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-bysis-blue bg-bysis-pastel px-2 py-0.5 rounded-full">beta</span>
        </div>
        <span className="w-9" />
      </header>

      <div className="flex-1 overflow-y-auto p-5 no-scrollbar">
        <h3 className="text-[22px] font-bold font-display text-bysis-ink">Trouvez avec une image</h3>
        <p className="text-[13px] text-bysis-muted mt-1.5 leading-relaxed">
          Utilisez Bysis Vision pour rechercher un article, une marque ou un style à partir d'une photo.
        </p>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <button className="rounded-[22px] bg-bysis-ink text-white p-4 flex flex-col items-start gap-3 press">
            <Camera className="h-6 w-6" />
            <span className="text-[13px] font-semibold text-left">Scanner un article</span>
          </button>
          <button className="rounded-[22px] bg-bysis-pastel text-bysis-ink p-4 flex flex-col items-start gap-3 press">
            <ImageUp className="h-6 w-6 text-bysis-blue" />
            <span className="text-[13px] font-semibold text-left">Importer une image</span>
          </button>
        </div>

        <div className="mt-5 space-y-2">
          {actions.map((a) => (
            <button key={a.label} className="w-full flex items-center justify-between rounded-[18px] bg-bysis-soft px-4 h-12 press">
              <span className="flex items-center gap-3 text-[13px] font-medium text-bysis-ink">
                <a.icon className="h-[18px] w-[18px] text-bysis-blue" /> {a.label}
              </span>
              <span className="text-bysis-muted">›</span>
            </button>
          ))}
        </div>
      </div>
    </SidePanel>
  );
}

type Msg = { role: "ai" | "user"; text: string };

export function AIDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "ai", text: "Bonjour ! Je suis Bysis AI, votre assistant shopping. Comment puis-je vous aider aujourd'hui ?" },
  ]);
  const [val, setVal] = useState("");

  const send = () => {
    const t = val.trim();
    if (!t) return;
    setMsgs((m) => [...m, { role: "user", text: t }]);
    setVal("");
    setTimeout(() => {
      setMsgs((m) => [
        ...m,
        { role: "ai", text: "Bonne idée ! Explorez les arrivages du moment, ou dites-moi votre budget et votre style pour une sélection personnalisée." },
      ]);
    }, 600);
  };

  return (
    <SidePanel open={open}>
      <header className="flex items-center justify-between px-4 h-16 border-b border-bysis-line shrink-0">
        <button onClick={onClose} aria-label="Fermer" className="h-9 w-9 grid place-items-center rounded-full bg-bysis-soft press">
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2.5">
          <span className="h-8 w-8 grid place-items-center rounded-full bg-bysis-blue">
            <img src={LOGOS.ai} alt="" className="h-5 w-5 object-contain" />
          </span>
          <div className="text-left">
            <p className="text-[15px] font-bold font-display text-bysis-ink leading-none">Bysis AI</p>
            <p className="text-[11px] text-bysis-muted mt-0.5">Assistant shopping</p>
          </div>
        </div>
        <span className="w-9" />
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] px-4 py-2.5 text-[13px] leading-relaxed ${
                m.role === "user"
                  ? "bg-bysis-blue text-white rounded-[18px] rounded-br-md"
                  : "bg-bysis-soft text-bysis-ink rounded-[18px] rounded-bl-md"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-bysis-line flex items-center gap-2 shrink-0">
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Demandez à Bysis"
          className="flex-1 h-11 rounded-full bg-bysis-soft px-4 text-[14px] outline-none focus:ring-2 focus:ring-bysis-blue/30"
        />
        <button onClick={send} aria-label="Envoyer" className="h-11 w-11 grid place-items-center rounded-full bg-bysis-blue text-white press">
          <Send className="h-[18px] w-[18px]" />
        </button>
      </div>
    </SidePanel>
  );
}
