// bysis Vision side drawer + Bysis AI chat drawer
import { useState } from "react";
import { LOGOS } from "@/data";
import { X, Camera, ImageUp, Search, Tag, GitCompare, Send, Sparkles } from "lucide-react";

function Overlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 mx-auto max-w-[480px] bg-bysis-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    />
  );
}

export function VisionDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const actions = [
    { icon: Search, label: "Rechercher un produit similaire" },
    { icon: Tag, label: "Identifier une marque" },
    { icon: GitCompare, label: "Comparer avec les arrivages" },
  ];
  return (
    <>
      <Overlay open={open} onClose={onClose} />
      <aside
        className={`fixed z-50 right-0 top-0 bottom-0 mx-auto w-[86%] max-w-[420px] bg-white rounded-l-[28px] p-5 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ left: "auto", transitionTimingFunction: "var(--ease-out)" }}
      >
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span className="text-[19px] font-bold font-display text-bysis-ink">Vision</span>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-bysis-blue bg-bysis-pastel px-2 py-0.5 rounded-full">beta</span>
          </div>
          <button onClick={onClose} className="h-9 w-9 grid place-items-center rounded-full bg-bysis-soft press"><X className="h-4 w-4" /></button>
        </div>
        <h3 className="text-[22px] font-bold font-display text-bysis-ink mt-3">Trouvez avec une image</h3>
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
      </aside>
    </>
  );
}

type Msg = { role: "ai" | "user"; text: string };

export function AIDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "ai", text: "Bonjour ! Je suis Bysis AI, votre assistant shopping. Je suis là pour vous aider à trouver les produits adaptés à vos besoins. Comment puis-je vous aider aujourd'hui ?" },
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
        { role: "ai", text: "Bonne idée ! Voici quelques pistes : explorez les arrivages du moment ou dites-moi votre budget et votre style pour une sélection personnalisée." },
      ]);
    }, 600);
  };

  return (
    <>
      <Overlay open={open} onClose={onClose} />
      <aside
        className={`fixed z-50 inset-x-0 bottom-0 mx-auto max-w-[480px] bg-white rounded-t-[28px] flex flex-col transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ height: "82vh", transitionTimingFunction: "var(--ease-out)" }}
      >
        <div className="flex items-center justify-between p-4 border-b border-bysis-line">
          <div className="flex items-center gap-2.5">
            <span className="h-9 w-9 grid place-items-center rounded-full bg-bysis-blue text-white"><Sparkles className="h-[18px] w-[18px]" /></span>
            <div>
              <p className="text-[15px] font-bold font-display text-bysis-ink leading-none">Bysis AI</p>
              <p className="text-[11px] text-bysis-muted mt-0.5">Assistant shopping</p>
            </div>
          </div>
          <button onClick={onClose} className="h-9 w-9 grid place-items-center rounded-full bg-bysis-soft press"><X className="h-4 w-4" /></button>
        </div>

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

        <div className="p-3 border-t border-bysis-line flex items-center gap-2" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Posez votre question…"
            className="flex-1 h-11 rounded-full bg-bysis-soft px-4 text-[14px] outline-none focus:ring-2 focus:ring-bysis-blue/30"
          />
          <button onClick={send} className="h-11 w-11 grid place-items-center rounded-full bg-bysis-blue text-white press">
            <Send className="h-[18px] w-[18px]" />
          </button>
        </div>
      </aside>
    </>
  );
}
