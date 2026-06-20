# Bysis React — Design Spec

## Reference-Replication Task
المستخدم قدّم نسخة HTML مرجعية (`bysis_master_final_v23_vision_side_drawer`) كـ ground-truth.
الهدف: إعادة بناء نفس الواجهة كمشروع React/Tailwind حديث مع الحفاظ على الوفاء البصري للمرجع.
الوفاء للمرجع يتجاوز إرشادات تجنب "AI slop".

## Ground-Truth Spec (from reference)
- **Identity**: bysis — متجر تجميع/تخفيضات (Destockage Europe • Qualité Française • Prix Tunisien).
- **Aesthetic**: تطبيق موبايل أنيق، ألوان أزرق باستيل ناعمة، زوايا دائرية كبيرة (22–32px)، ظلال ناعمة، هيرو معدني داكن.
- **Layout paradigm**: عمود واحد موبايل-فيرست، شريط تنقل سفلي ثابت بـ 5 أيقونات (Vision, Compte, Panier, Menu, Bysis AI).
- **Color tokens**: black #111418, ink #182b34, muted #70777d, line #e7eaed, soft #f6f8f9, pastel-blue #e4f4ff / #d8f0ff, blue-text #2167a9.
- **Typography**: عناوين Poppins/Barlow ثقيلة + جسم Inter.
- **Signature color**: أزرق #2167a9.
- **Sections** (بالترتيب): Sticky Header → Hero (Arrivage vidéo) → Tagline strip → Arrivages en vidéo (slider) → "latest from Bysis" pill → Bysis Vanguard dark card → Continuez votre shopping (tabs + product slider) → Prochainement (countdown cards) → Recommandé pour vous (product slider) → Nos magasins (store cards) → Bottom Nav.
- **Drawers**: Vision side drawer (image search beta), Bysis AI chat drawer.

## Chosen Approach: "Faithful App-Store Mobile UI"
- Design movement: Modern mobile commerce (App Store / Shein-style cards) with soft pastel accents.
- Core principles: mobile-first single column; soft depth (shadows over borders); large rounded radii; bright blue accent for actions.
- Interaction: horizontal snap sliders, sticky header opacity transition on scroll, slide-in drawers from right.
- Animation: ease-out cubic-bezier(0.23,1,0.32,1), <300ms, button active scale(0.97), staggered card entrances.
- Wordmark: "bysis" lowercase bold rounded — white on hero, black on light.
