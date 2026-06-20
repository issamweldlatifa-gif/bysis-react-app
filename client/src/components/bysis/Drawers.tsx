// bysis Vision drawer + Bysis AI chat drawer
// Faithful re-creation of reference v23 (files v5/v6 + screenshots IMG_8299 / IMG_8300):
//  - Full-screen white panels that slide UP from the bottom (translateY(105%) -> 0), 420ms cubic-bezier(.22,.9,.22,1).
//  - Header is a 3-column grid: [X] [centered brand block] [⋯], with a 1px bottom border.
//  - Vision: grey hero card with big eye logo, "Trouvez avec une image", copy, a blue primary CTA,
//    a grey secondary CTA, then rounded suggestion rows with a blue chevron.
//  - AI: a plain welcome paragraph at top-left + a fixed bottom composer ("Demandez à Bysis") with a blue send pill.
//  - Same nav button toggles open/close; opening one closes the other (handled in Home).
import { useEffect, useRef, useState } from "react";
import { LOGOS } from "@/data";
import { X } from "lucide-react";

// Full-screen panel that slides up from the bottom, exactly like the reference.
function FullPanel({
  open,
  label,
  children,
}: {
  open: boolean;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-label={label}
      aria-hidden={!open}
      className="fixed inset-0 z-[4000] mx-auto w-full max-w-[480px] bg-white text-bysis-ink flex flex-col"
      style={{
        transform: open ? "translateY(0)" : "translateY(105%)",
        opacity: open ? 1 : 0.98,
        pointerEvents: open ? "auto" : "none",
        transition:
          "transform 420ms cubic-bezier(.22,.9,.22,1), opacity 220ms ease",
      }}
    >
      {children}
    </section>
  );
}

// Shared 3-column header (close / centered brand / more).
function DrawerHeader({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <header
      className="shrink-0 grid items-center border-b"
      style={{
        gridTemplateColumns: "58px 1fr 58px",
        height: "64px",
        borderColor: "#d8dcdf",
      }}
    >
      <button
        onClick={onClose}
        aria-label="Fermer"
        className="h-full w-full grid place-items-center press"
        style={{ color: "#818689" }}
      >
        <X className="h-6 w-6" strokeWidth={2.2} />
      </button>
      <div className="flex items-center justify-center gap-2 min-w-0">
        {children}
      </div>
      <button
        aria-label="Plus"
        className="h-full w-full grid place-items-center press"
        style={{ color: "#818689", fontSize: 22, letterSpacing: 2, paddingBottom: 8 }}
      >
        …
      </button>
    </header>
  );
}

/* ============================ VISION ============================ */
export function VisionDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const suggestions = [
    "Rechercher un produit similaire",
    "Identifier une marque",
    "Comparer avec les arrivages",
  ];
  return (
    <FullPanel open={open} label="Bysis Vision">
      <DrawerHeader onClose={onClose}>
        <img
          src={LOGOS.vision}
          alt=""
          className="object-contain"
          style={{ width: 46, height: 34 }}
        />
        <span className="flex flex-col items-start leading-none">
          <strong
            className="font-display"
            style={{ fontSize: 21, fontWeight: 800, letterSpacing: "-.02em", color: "#111418" }}
          >
            Vision
          </strong>
          <small style={{ marginTop: 2, color: "#707579", fontSize: 11 }}>beta</small>
        </span>
      </DrawerHeader>

      <div
        className="flex-1 overflow-y-auto no-scrollbar"
        style={{ padding: "28px 20px 128px" }}
      >
        {/* hero card */}
        <div
          className="text-center"
          style={{
            borderRadius: 28,
            background: "linear-gradient(180deg, #f3f8ff, #fff)",
            border: "1px solid #e0edf8",
            padding: "28px 20px",
          }}
        >
          <img
            src={LOGOS.vision}
            alt=""
            className="object-contain mx-auto"
            style={{ width: 116, height: 86, marginBottom: 18, filter: "contrast(1.08)" }}
          />
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(28px, 8vw, 42px)",
              lineHeight: 1.05,
              letterSpacing: "-.05em",
              fontWeight: 650,
              color: "#1c2b33",
              marginBottom: 10,
            }}
          >
            Trouvez avec une image
          </h2>
          <p
            className="mx-auto"
            style={{ maxWidth: 520, color: "#66717a", fontSize: 16, lineHeight: 1.4 }}
          >
            Utilisez Bysis Vision pour rechercher un article, une marque ou un
            style à partir d'une photo.
          </p>

          <div className="grid grid-cols-1 gap-3" style={{ marginTop: 22 }}>
            <button
              type="button"
              className="press"
              style={{
                minHeight: 54,
                borderRadius: 999,
                background: "#0064e0",
                color: "#fff",
                fontSize: 16,
                fontWeight: 720 as unknown as number,
                letterSpacing: "-.01em",
              }}
            >
              Scanner un article
            </button>
            <button
              type="button"
              className="press"
              style={{
                minHeight: 54,
                borderRadius: 999,
                background: "#edf2f7",
                color: "#1c2b33",
                fontSize: 16,
                fontWeight: 720 as unknown as number,
                letterSpacing: "-.01em",
              }}
            >
              Importer une image
            </button>
          </div>
        </div>

        {/* suggestions */}
        <div className="grid gap-3" style={{ marginTop: 26 }}>
          {suggestions.map((label) => (
            <button
              key={label}
              type="button"
              className="press w-full flex items-center justify-between"
              style={{
                minHeight: 74,
                borderRadius: 20,
                border: "1px solid #e6ebef",
                background: "#fff",
                padding: 16,
                color: "#1c2b33",
                fontWeight: 650 as unknown as number,
                fontSize: 16,
              }}
            >
              <span>{label}</span>
              <span style={{ color: "#0064e0", fontSize: 24 }}>›</span>
            </button>
          ))}
        </div>
      </div>
    </FullPanel>
  );
}

/* ============================ AI ============================ */
type Msg = { role: "ai" | "user"; text: string };

export function AIDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [val, setVal] = useState("");
  const [kb, setKb] = useState(false); // keyboard mode (input focused)
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs]);

  // reset on close
  useEffect(() => {
    if (!open) {
      setVal("");
      setKb(false);
    }
  }, [open]);

  const send = () => {
    const t = val.trim();
    if (!t) return;
    setMsgs((m) => [...m, { role: "user", text: t }]);
    setVal("");
    setTimeout(() => {
      setMsgs((m) => [
        ...m,
        {
          role: "ai",
          text: "Bonne idée ! Explorez les arrivages du moment, ou dites-moi votre budget et votre style pour une sélection personnalisée.",
        },
      ]);
    }, 600);
  };

  const hasText = val.trim().length > 0;

  return (
    <FullPanel open={open} label="Bysis AI">
      <DrawerHeader onClose={onClose}>
        <img
          src={LOGOS.black}
          alt="bysis"
          className="object-contain"
          style={{ height: 26, width: "auto" }}
        />
        <span style={{ marginTop: 2, color: "#666", fontSize: 11, fontWeight: 400 }}>
          beta
        </span>
        <img
          src={LOGOS.ai}
          alt=""
          className="object-contain"
          style={{ width: 30, height: 26, marginLeft: 4 }}
        />
      </DrawerHeader>

      {/* content */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto no-scrollbar"
        style={{ padding: "18px 0 184px" }}
      >
        {/* welcome paragraph (always shown first, exactly like reference) */}
        <p
          style={{
            padding: "16px 20px 0",
            color: "#171a1f",
            fontSize: 19,
            lineHeight: 1.45,
            fontWeight: 400,
            letterSpacing: "-0.15px",
          }}
        >
          <strong style={{ fontWeight: 700 }}>Bonjour&nbsp;!</strong> Je suis Bysis
          AI, votre assistant shopping. Je suis là pour vous aider à trouver les
          produits adaptés à vos besoins.
          <br />
          Comment puis-je vous aider aujourd'hui&nbsp;?
        </p>

        {/* conversation */}
        {msgs.length > 0 && (
          <div className="space-y-3" style={{ padding: "22px 20px 0" }}>
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-[82%] px-4 py-2.5 text-[15px] leading-relaxed"
                  style={
                    m.role === "user"
                      ? { background: "#1598ee", color: "#fff", borderRadius: "18px 18px 6px 18px" }
                      : { background: "#f1f3f5", color: "#171a1f", borderRadius: "18px 18px 18px 6px" }
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* composer fixed above the floating bottom nav (nav z=7000, composer z=6500, drawer z=4000) */}
      <div
        className="fixed inset-x-0 mx-auto w-full max-w-[480px]"
        style={{
          bottom: kb ? 0 : 88,
          zIndex: 6500,
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          pointerEvents: open ? "auto" : "none",
          transition: "bottom 200ms ease, opacity 180ms ease",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0, rgba(255,255,255,.96) 34%, #fff 100%)",
        }}
      >
        <div
          className="flex items-center"
          style={{
            borderRadius: "25px 25px 0 0",
            background: "#fff",
            boxShadow: "0 -14px 36px rgba(0,0,0,.05)",
            padding: kb ? "22px 18px" : "0 12px",
            height: kb ? 96 : 64,
            gap: 14,
            transition: "height 200ms ease, padding 200ms ease",
          }}
        >
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onFocus={() => setKb(true)}
            onBlur={() => setKb(false)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Demandez à Bysis"
            className="flex-1 min-w-0 bg-transparent outline-none"
            style={{ color: "#111418", fontSize: kb ? 18 : 15.2, caretColor: "#2a9bd7" }}
          />
          <button
            onClick={send}
            aria-label="Envoyer"
            className="grid place-items-center"
            style={{
              width: 36,
              height: 36,
              flex: "0 0 36px",
              borderRadius: "50%",
              background: "#1598ee",
              boxShadow: "0 1px 0 rgba(0,0,0,.13)",
              opacity: hasText || kb ? 1 : 0,
              transform: hasText || kb ? "scale(1)" : "scale(.82)",
              pointerEvents: hasText || kb ? "auto" : "none",
              transition: "opacity 160ms ease, transform 160ms ease",
            }}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth={4.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20V5" />
              <path d="M5.5 11.5 12 5l6.5 6.5" />
            </svg>
          </button>
        </div>
      </div>
    </FullPanel>
  );
}
