// bysis — central mock data (faithful to reference v23)
// NOTE: All content is original demo data, no fabricated user reviews.

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663647066372/N2FuuGBcaB5BrhyDqi6q22";

export const LOGOS = {
  black: `/manus-storage/bysis_logo_main_e864d768.png`,
  white: `/manus-storage/bysis_logo_white_3d12b1c2.png`,
  vision: `/manus-storage/bysis_logo_b_9fc4918d.png`,
  ai: `/manus-storage/bysis_logo_ai_1926a607.png`,
};

export const IMG = {
  hero: `${CDN}/bysis_hero-DJ4vzzPpDnpHiXTARciThF.webp`,
  vanguard: `${CDN}/bysis_vanguard-HaEDWhUzBk7EwaKC8w2Phx.webp`,
  storeAmazon: `${CDN}/store_amazon-3qmc29eX6ozSzjVcdtQcz9.webp`,
  storePastel: `${CDN}/store_pastel-ajvBbdbdpZs8uwXPSCpKfz.webp`,
};

export type Video = { id: string; title: string; img: string; dark?: boolean };
export const VIDEOS: Video[] = [
  { id: "v1", title: "Arrivage pro", img: `${CDN}/video_card_1-jpmQi4ZPADXdccb9B3456f.webp` },
  { id: "v2", title: "Hands-free", img: `${CDN}/video_card_2-48jwiETFPBVikCixTLjRuS.webp`, dark: true },
  { id: "v3", title: "Sélection mode", img: `${CDN}/video_card_3-Am8ns6xzn9j2TgH6dQYe2y.webp` },
  { id: "v4", title: "Offres du moment", img: `${CDN}/video_card_4-bPj6HmnYshTzjtZtxoPVvm.webp` },
];

export type Product = {
  id: string;
  brand: string;
  name: string;
  oldPrice: string;
  price: string;
  img: string;
  cat: string;
};

const P = (s: string) => `${CDN}/${s}`;

export const SHOP_PRODUCTS: Product[] = [
  { id: "s1", brand: "BAYTON", name: "Mules", oldPrice: "70,00 €", price: "31,90 €", img: P("prod_mules_black-bgcv22gwaxXNRAHCZzZvaR.webp"), cat: "Chaussures ouvertes" },
  { id: "s2", brand: "Puma", name: "Mules", oldPrice: "27,95 €", price: "13,50 €", img: P("prod_slides_sport-ZqiGY3eb9AmYTTry4tmEv6.webp"), cat: "Chaussures ouvertes" },
  { id: "s3", brand: "BAYTON", name: "Sandales Tongs", oldPrice: "80,00 €", price: "36,00 €", img: P("prod_sandals_tan-i8NJNpAnYXFZczYTB6gvf5.webp"), cat: "Sandales" },
  { id: "s4", brand: "Nike", name: "Claquettes", oldPrice: "55,00 €", price: "24,00 €", img: P("prod_slides_sport-ZqiGY3eb9AmYTTry4tmEv6.webp"), cat: "Chaussures ouvertes" },
  { id: "s5", brand: "Jordan", name: "Mules", oldPrice: "65,00 €", price: "29,00 €", img: P("prod_mules_black-bgcv22gwaxXNRAHCZzZvaR.webp"), cat: "Chaussures ouvertes" },
  { id: "s6", brand: "Adidas", name: "Sandales", oldPrice: "59,00 €", price: "27,50 €", img: P("prod_sandals_tan-i8NJNpAnYXFZczYTB6gvf5.webp"), cat: "Sandales" },
  { id: "s7", brand: "Zara", name: "Sandales", oldPrice: "45,00 €", price: "19,90 €", img: P("prod_sandals_tan-i8NJNpAnYXFZczYTB6gvf5.webp"), cat: "Sandales" },
  { id: "s8", brand: "SHEIN", name: "Mules été", oldPrice: "35,00 €", price: "14,00 €", img: P("prod_mules_black-bgcv22gwaxXNRAHCZzZvaR.webp"), cat: "Chaussures ouvertes" },
  { id: "s9", brand: "BYSIS", name: "Slides confort", oldPrice: "49,00 €", price: "22,00 €", img: P("prod_slides_sport-ZqiGY3eb9AmYTTry4tmEv6.webp"), cat: "Chaussures ouvertes" },
  { id: "s10", brand: "Puma", name: "Claquettes cool", oldPrice: "39,00 €", price: "17,00 €", img: P("prod_slides_sport-ZqiGY3eb9AmYTTry4tmEv6.webp"), cat: "Chaussures ouvertes" },
];

export const RECO_PRODUCTS: Product[] = [
  { id: "r1", brand: "Jordan", name: "T-Shirt Imprimé", oldPrice: "25,00 €", price: "13,00 €", img: P("prod_tshirt-bbueMug4JRuticVGJyoUnx.webp"), cat: "Hauts" },
  { id: "r2", brand: "Jack & Jones Junior", name: "Set basique", oldPrice: "49,99 €", price: "24,00 €", img: P("prod_set-RazLpRV9yCPBgahZ8ZGDuv.webp"), cat: "Enfant" },
  { id: "r3", brand: "Puma", name: "Caven 2.0", oldPrice: "39,95 €", price: "20,00 €", img: P("prod_caven-5swArNi9882QBrnBMAD9mM.webp"), cat: "Baskets" },
  { id: "r4", brand: "Puma", name: "Casquette", oldPrice: "14,95 €", price: "7,50 €", img: P("prod_cap-VBZGjaLzh4NhXg3bkFhvQL.webp"), cat: "Accessoires" },
  { id: "r5", brand: "Jordan", name: "Jacket unisex", oldPrice: "59,95 €", price: "25,00 €", img: P("prod_jacket-LnRUXMkq4vcVPz4vRAeaeP.webp"), cat: "Vestes" },
  { id: "r6", brand: "Nike", name: "Short sport", oldPrice: "35,00 €", price: "18,00 €", img: P("prod_short-Bjd8SAJZPGywcb7hfn245f.webp"), cat: "Sport" },
  { id: "r7", brand: "BAYTON", name: "Mules", oldPrice: "75,00 €", price: "37,00 €", img: P("prod_mules_black-bgcv22gwaxXNRAHCZzZvaR.webp"), cat: "Chaussures" },
  { id: "r8", brand: "Adidas", name: "T-Shirt", oldPrice: "29,95 €", price: "15,00 €", img: P("prod_tshirt-bbueMug4JRuticVGJyoUnx.webp"), cat: "Hauts" },
  { id: "r9", brand: "Zara", name: "Sac premium", oldPrice: "69,00 €", price: "34,00 €", img: P("prod_bag-bpwXZdKTM96RuuEiamv7mC.webp"), cat: "Sacs" },
  { id: "r10", brand: "BYSIS", name: "Accessoire", oldPrice: "24,00 €", price: "9,90 €", img: P("prod_cap-VBZGjaLzh4NhXg3bkFhvQL.webp"), cat: "Accessoires" },
];

export const CATEGORIES = ["Chaussures ouvertes", "Sandales", "Bonnets, chapeaux", "Sacs", "Montres"];

export type Upcoming = { id: string; title: string; endsInSec: number };
export const UPCOMING: Upcoming[] = [
  { id: "u1", title: "Nouveau magasin", endsInSec: 3 * 3600 + 17 * 60 + 48 },
  { id: "u2", title: "Arrivage tech", endsInSec: 5 * 3600 + 9 * 60 + 12 },
  { id: "u3", title: "Offres premium", endsInSec: 28 * 3600 + 33 * 60 },
  { id: "u4", title: "T-shirts & hauts streetwear", endsInSec: 2 * 3600 + 51 * 60 + 54 },
  { id: "u5", title: "Les plus grandes marques tendance pour femme", endsInSec: 2 * 3600 + 51 * 60 + 54 },
  { id: "u6", title: "ONLY", endsInSec: 2 * 3600 + 51 * 60 + 54 },
  { id: "u7", title: "Baskets streetwear", endsInSec: 4 * 3600 + 18 * 60 + 5 },
  { id: "u8", title: "Sacs premium", endsInSec: 6 * 3600 + 7 * 60 + 22 },
  { id: "u9", title: "Montres premium & designers", endsInSec: 8 * 3600 + 44 * 60 + 10 },
  { id: "u10", title: "Mode classique pour homme", endsInSec: 26 * 3600 + 18 * 60 },
];

export type Store = { id: string; name: string; sub: string; img: string; dark?: boolean };
export const STORES: Store[] = [
  { id: "st1", name: "SHEIN", sub: "Mode & basics", img: IMG.storePastel },
  { id: "st2", name: "Amazon", sub: "Tech & maison", img: IMG.storeAmazon, dark: true },
  { id: "st3", name: "Zara", sub: "Collections", img: IMG.storePastel },
  { id: "st4", name: "Nike", sub: "Sport", img: IMG.storeAmazon, dark: true },
];
