// bysis Home — faithful rebuild of reference v23 (mobile commerce app UI)
// Sections: Hero → tagline → videos → latest banner → Vanguard → Shop (tabs+slider)
//           → Prochainement → Recommandé → Nos magasins → BottomNav + Drawers
import { useState } from "react";
import { toast } from "sonner";
import {
  IMG, LOGOS, VIDEOS, SHOP_PRODUCTS, RECO_PRODUCTS, CATEGORIES, UPCOMING, STORES,
  type Product,
} from "@/data";
import Header from "@/components/bysis/Header";
import BottomNav from "@/components/bysis/BottomNav";
import ProductCard from "@/components/bysis/ProductCard";
import { SectionHeader, HScroll } from "@/components/bysis/Section";
import CountdownCard from "@/components/bysis/CountdownCard";
import { VisionDrawer, AIDrawer } from "@/components/bysis/Drawers";
import SimpleDrawer from "@/components/bysis/SimpleDrawer";
import { Play, ChevronRight, ArrowRight, ShoppingBag, User, Heart, Settings, Package, MapPin } from "lucide-react";

export default function Home() {
  const [cat, setCat] = useState(CATEGORIES[0]);
  const [cart, setCart] = useState<Product[]>([]);
  // Single source of truth for the two side drawers — mutually exclusive, toggle on same button.
  const [panel, setPanel] = useState<"vision" | "ai" | null>(null);
  const toggleVision = () => setPanel((p) => (p === "vision" ? null : "vision"));
  const toggleAI = () => setPanel((p) => (p === "ai" ? null : "ai"));
  const closePanel = () => setPanel(null);
  const [account, setAccount] = useState(false);
  const [menu, setMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (p: Product) => {
    setCart((c) => [...c, p]);
    toast.success(`${p.brand} ajouté`, { description: p.name });
  };

  const shopFiltered = SHOP_PRODUCTS.filter((p) => p.cat === cat);
  const shopList = shopFiltered.length ? shopFiltered : SHOP_PRODUCTS;

  return (
    <div className="app-shell pb-28 overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
        <img src={IMG.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-bysis-black/55 via-bysis-black/20 to-bysis-black/85" />
        <div className="relative h-full flex flex-col justify-end p-6 pb-12 text-white">
          <span className="inline-flex w-fit items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide bg-white/15 backdrop-blur px-3 py-1.5 rounded-full mb-4">
            <Play className="h-3 w-3 fill-white" /> Arrivage vidéo
          </span>
          <h1 className="text-[34px] leading-[1.05] font-bold font-display max-w-[300px]">
            Nouveautés sélectionnées pour vous
          </h1>
          <p className="text-[14px] text-white/85 mt-3 max-w-[300px] leading-relaxed">
            Une expérience visuelle simple pour découvrir les arrivages, les marques et les offres Bysis.
          </p>
          <div className="flex gap-3 mt-6">
            <button className="h-12 px-7 rounded-full bg-white text-bysis-ink font-semibold text-[14px] press inline-flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" /> Shop
            </button>
            <button className="h-12 px-6 rounded-full bg-white/15 backdrop-blur border border-white/25 text-white font-semibold text-[14px] press">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* TAGLINE STRIP */}
      <div className="bg-white py-4 px-5 text-center border-b border-bysis-line">
        <p className="text-[13px] font-semibold text-bysis-ink tracking-tight">
          Destockage Europe <span className="text-bysis-blue mx-1">•</span> Qualité Française <span className="text-bysis-blue mx-1">•</span> Prix Tunisien
        </p>
      </div>

      {/* VIDEOS */}
      <section className="pt-7">
        <div className="flex items-end justify-between px-5 mb-1">
          <h2 className="text-[20px] font-bold text-bysis-ink font-display">Arrivages en vidéo</h2>
          <button onClick={() => toast("4 vidéos disponibles")} className="text-[13px] font-semibold text-bysis-blue press">4 vidéos</button>
        </div>
        <p className="px-5 text-[13px] text-bysis-muted mb-3">Nouveautés sélectionnées pour vous</p>
        <HScroll>
          {VIDEOS.map((v) => (
            <button key={v.id} onClick={() => toast(v.title, { description: "Lecture de la vidéo…" })} className="snap-start shrink-0 w-[160px] press">
              <div className="relative rounded-[22px] overflow-hidden aspect-[3/4]">
                <img src={v.img} alt={v.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className={`absolute inset-0 ${v.dark ? "bg-gradient-to-t from-black/70 to-transparent" : "bg-gradient-to-t from-black/45 to-transparent"}`} />
                <span className="absolute top-3 left-3 h-9 w-9 grid place-items-center rounded-full bg-white/90 text-bysis-ink soft-shadow-sm">
                  <Play className="h-4 w-4 fill-bysis-ink" />
                </span>
                <p className="absolute bottom-3 left-3 right-3 text-white font-semibold text-[14px] font-display">{v.title}</p>
              </div>
            </button>
          ))}
        </HScroll>
      </section>

      {/* LATEST BANNER */}
      <section className="px-5 pt-7">
        <button onClick={() => toast("Nouveautés Bysis")} className="w-full text-left rounded-[24px] bg-bysis-pastel p-4 flex items-center justify-between press">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-bysis-blue">The latest from Bysis</p>
            <p className="text-[15px] font-semibold text-bysis-ink mt-0.5 font-display">Nouveautés, arrivages et sélections fraîches</p>
          </div>
          <ChevronRight className="h-5 w-5 text-bysis-blue shrink-0" />
        </button>
      </section>

      {/* VANGUARD */}
      <section className="px-5 pt-7">
        <div className="relative rounded-[30px] overflow-hidden p-6 min-h-[260px] flex flex-col justify-end text-white">
          <img src={IMG.vanguard} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bysis-black/85 via-bysis-black/40 to-transparent" />
          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/70 mb-1">Bysis Vanguard</p>
            <h3 className="text-[26px] font-bold font-display leading-tight max-w-[230px]">Designed for your next find.</h3>
            <p className="text-[13px] text-white/80 mt-2 max-w-[280px] leading-relaxed">
              Découvrez les arrivages, les marques et les offres qui correspondent à votre style.
            </p>
            <div className="flex gap-3 mt-5">
              <button className="h-11 px-6 rounded-full bg-bysis-blue text-white font-semibold text-[13px] press">Shop</button>
              <button className="h-11 px-5 rounded-full bg-white/15 backdrop-blur border border-white/25 text-white font-semibold text-[13px] press">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP — tabs + slider */}
      <section className="pt-8">
        <SectionHeader title="Continuez votre shopping" />
        <div className="no-scrollbar overflow-x-auto flex gap-2 px-5 mb-4">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`shrink-0 h-9 px-4 rounded-full text-[13px] font-medium press transition-colors ${
                cat === c ? "bg-bysis-ink text-white" : "bg-bysis-soft text-bysis-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <HScroll>
          {shopList.map((p) => <ProductCard key={p.id} p={p} onAdd={addToCart} />)}
        </HScroll>
      </section>

      {/* PROCHAINEMENT */}
      <section className="pt-9">
        <SectionHeader title="Prochainement" />
        <p className="px-5 -mt-2 mb-3 text-[13px] text-bysis-muted">Restez informé des ventes concernant votre marque favorite.</p>
        <HScroll>
          {UPCOMING.map((u) => (
            <CountdownCard key={u.id} item={u} onNotify={(t) => toast.success("Vous serez informé", { description: t })} />
          ))}
        </HScroll>
      </section>

      {/* RECOMMANDÉ */}
      <section className="pt-9">
        <SectionHeader title="Recommandé pour vous" action="Voir Tout" onAction={() => toast("Tous les produits recommandés")} />
        <HScroll>
          {RECO_PRODUCTS.map((p) => <ProductCard key={p.id} p={p} onAdd={addToCart} />)}
        </HScroll>
      </section>

      {/* NOS MAGASINS */}
      <section className="pt-9 px-5">
        <div className="flex items-end justify-between mb-3">
          <h2 className="text-[20px] font-bold text-bysis-ink font-display">Nos magasins</h2>
          <button onClick={() => toast("Explorer les magasins")} className="text-[13px] font-semibold text-bysis-blue press">Explorer</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {STORES.map((s) => (
            <button
              key={s.id}
              onClick={() => toast(s.name, { description: s.sub })}
              className="relative rounded-[24px] overflow-hidden aspect-[4/3] p-4 flex flex-col justify-between text-left press"
            >
              <img src={s.img} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className={`absolute inset-0 ${s.dark ? "bg-bysis-black/55" : "bg-white/45"}`} />
              <div className="relative flex justify-end">
                <span className={`h-7 w-7 grid place-items-center rounded-full ${s.dark ? "bg-white/20 text-white" : "bg-white text-bysis-ink"}`}>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
              <div className="relative">
                <p className={`text-[16px] font-bold font-display ${s.dark ? "text-white" : "text-bysis-ink"}`}>{s.name}</p>
                <p className={`text-[12px] ${s.dark ? "text-white/75" : "text-bysis-muted"}`}>{s.sub}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <footer className="px-5 pt-10 pb-4 text-center">
        <img src={LOGOS.black} alt="bysis" className="h-6 w-auto mx-auto opacity-80" />
        <p className="text-[11px] text-bysis-muted mt-3">Destockage Europe • Qualité Française • Prix Tunisien</p>
        <p className="text-[10px] text-bysis-muted/70 mt-2">© 2026 bysis — Home + AI</p>
      </footer>

      <BottomNav
        cartCount={cart.length}
        active={panel}
        onVision={toggleVision}
        onAI={toggleAI}
        onAccount={() => setAccount(true)}
        onMenu={() => setMenu(true)}
        onCart={() => setCartOpen(true)}
      />

      <VisionDrawer open={panel === "vision"} onClose={closePanel} />
      <AIDrawer open={panel === "ai"} onClose={closePanel} />

      <SimpleDrawer open={account} onClose={() => setAccount(false)} title="Mon compte">
        <div className="space-y-2">
          {[
            { icon: User, label: "Profil" },
            { icon: Package, label: "Mes commandes" },
            { icon: Heart, label: "Favoris" },
            { icon: MapPin, label: "Adresses" },
            { icon: Settings, label: "Paramètres" },
          ].map((i) => (
            <button key={i.label} className="w-full flex items-center gap-3 rounded-[18px] bg-bysis-soft px-4 h-12 press text-[14px] font-medium text-bysis-ink">
              <i.icon className="h-[18px] w-[18px] text-bysis-blue" /> {i.label}
            </button>
          ))}
        </div>
      </SimpleDrawer>

      <SimpleDrawer open={menu} onClose={() => setMenu(false)} title="Menu">
        <div className="grid grid-cols-2 gap-2.5">
          {["Nouveautés", "Femme", "Homme", "Enfant", "Chaussures", "Sacs", "Montres", "Magasins"].map((m) => (
            <button key={m} className="rounded-[18px] bg-bysis-soft h-14 text-[14px] font-semibold text-bysis-ink press">{m}</button>
          ))}
        </div>
      </SimpleDrawer>

      <SimpleDrawer open={cartOpen} onClose={() => setCartOpen(false)} title={`Panier (${cart.length})`}>
        {cart.length === 0 ? (
          <div className="py-10 text-center">
            <ShoppingBag className="h-10 w-10 mx-auto text-bysis-muted/50" />
            <p className="text-[14px] text-bysis-muted mt-3">Votre panier est vide</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-[50vh] overflow-y-auto no-scrollbar">
            {cart.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <img src={p.img} alt="" className="h-14 w-14 rounded-2xl bg-bysis-soft object-contain p-1.5" />
                <div className="flex-1">
                  <p className="text-[13px] font-semibold text-bysis-ink">{p.brand}</p>
                  <p className="text-[12px] text-bysis-muted">{p.name}</p>
                </div>
                <p className="text-[14px] font-bold text-bysis-ink font-display">{p.price}</p>
              </div>
            ))}
            <button className="w-full h-12 rounded-full bg-bysis-blue text-white font-semibold text-[14px] mt-2 press">Passer la commande</button>
          </div>
        )}
      </SimpleDrawer>
    </div>
  );
}
