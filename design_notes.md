# Bysis v23 — Design & Structure Notes

## Brand
- Brand: **bysis** (lowercase wordmark, bold, custom rounded sans). White on dark hero, black on light.
- Tagline strip: "Destockage Europe • Qualité Française • Prix Tunisien"
- Language: French (LTR), some Arabic in nav hints (الحساب, السلة, القائمة).

## Color Palette (from :root)
- --black: #111418
- --white: #ffffff
- --ink: #182b34
- --muted: #70777d
- --line: #e7eaed
- --soft: #f6f8f9
- --pastel-blue: #e4f4ff
- --pastel-blue-2: #d8f0ff
- --blue-text: #2167a9
- --shadow: 0 18px 50px rgba(17,20,24,.12)
- radius-lg: 32px, radius-md: 22px, page-pad: 20px
- Accent / signature: bright blue (#2167a9 text, blue dots).

## Layout (mobile-first single column, app-like)
1. **Sticky Header**: transparent over hero (white logo) → turns white/opaque on scroll (black logo). "bysis" wordmark left.
2. **Hero Section** (dark gradient/metallic image bg):
   - Pill badge "Arrivage vidéo"
   - H1: "Nouveautés sélectionnées pour vous"
   - Sub: "Une expérience visuelle simple pour découvrir les arrivages, les marques et les offres Bysis."
3. **Tagline strip** (white bg, centered, bold): "Destockage Europe • Qualité Française • Prix Tunisien"
4. **Arrivages en vidéo** section: heading + "4 vidéos" link. Horizontal slider of video cards (Arrivage pro, Hands-free, Sélection mode, Offres du moment). Dots.
5. **The latest from Bysis** banner: pill "Nouveautés, arrivages et sélections fraîches ›"
6. **Bysis Vanguard** big dark card: "Designed for your next find." + desc + Shop (blue) + Learn more buttons.
7. **Continuez votre shopping**: category tabs (Chaussures ouvertes, Sandales, Bonnets/chapeaux, Sacs, Montres). Horizontal product slider with cards: brand, type, "Prix conseillé X€*" (strikethrough), big price "X,XX €¹". Blue dots pagination.
   - Products: BAYTON Mules 31,90€, Puma Mules 13,50€, BAYTON Sandales Tongs 36€, Nike Claquettes 24€, Jordan Mules 29€, Adidas Sandales 27,50€, Zara Sandales 19,90€, SHEIN Mules été 14€, BYSIS Slides 22€, Puma Claquettes 17€.
8. **Prochainement** (Upcoming): "Restez informé des ventes..." Horizontal cards with countdown timers (Xh Ym Zs) + "Informez-moi" button. Cards: Nouveau magasin, Arrivage tech, Offres premium, T-shirts & hauts streetwear, etc.
9. **Recommandé pour vous**: "Voir Tout" link. Product slider (Jordan T-Shirt 13€, Jack&Jones Set 24€, Puma Caven 20€, Puma Casquette 7,50€, Jordan Jacket 25€, Nike Short 18€, BAYTON Mules 37€...).
10. **Nos magasins** (Our stores): "Explorer" link. Store cards 2-col grid-ish: SHEIN (Mode & basics), Amazon (Tech & maison, dark card), Zara (Collections), Nike (Sport). Each with pastel-blue rounded card + arrow.
11. **Bottom Navigation** (fixed): 5 icons — Vision (eye), Account (الحساب), Cart (السلة), Menu (القائمة), Bysis AI (logo dot).

## Drawers / Overlays
- **Vision Side Drawer** (beta): "Trouvez avec une image" — Scanner un article, Importer une image, Rechercher produit similaire, Identifier une marque, Comparer avec arrivages.
- **Bysis AI drawer**: chat composer "Bonjour ! Je suis Bysis AI, votre assistant shopping..."

## Typography
- Display/headings: heavy bold sans (Barlow Condensed / Poppins were referenced in another version). Here system font but bold heavy headings.
- Use Poppins for headings + Inter for body to elevate.

## Visual style
- Soft pastel-blue accents, generous rounded corners (22-32px), soft shadows, app-like mobile layout, metallic dark hero.
- Product cards: light bg, pill-shaped product placeholder image, brand bold, price bold black, strikethrough "prix conseillé" muted, blue superscript ¹.
