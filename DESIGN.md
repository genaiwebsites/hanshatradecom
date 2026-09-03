---
name: Gilded Earth Institutional
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1b1c1b'
  on-surface-variant: '#424843'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f0ee'
  outline: '#737973'
  outline-variant: '#c2c8c2'
  surface-tint: '#4d6355'
  primary: '#051a0f'
  on-primary: '#ffffff'
  primary-container: '#1a2f23'
  on-primary-container: '#809787'
  inverse-primary: '#b4ccbb'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#161714'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a2b28'
  on-tertiary-container: '#93928e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d6'
  primary-fixed-dim: '#b4ccbb'
  on-primary-fixed: '#0a2014'
  on-primary-fixed-variant: '#364c3e'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fbf9f6'
  on-background: '#1b1c1b'
  surface-variant: '#e3e2e0'
  deep-forest: '#1A2F23'
  bengal-gold: '#C5A059'
  parchment-cream: '#F9F7F2'
  slate-graphite: '#333333'
  silver-ore: '#E5E5E5'
typography:
  # Primary System: Modern Swiss Heavy Industrial (Installed)
  display-lg:
    fontFamily: 'Syne, "Cabinet Grotesk", sans-serif'
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 68px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: 'Syne, "Cabinet Grotesk", sans-serif'
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 50px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: 'Syne, "Cabinet Grotesk", sans-serif'
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: 'Syne, "Cabinet Grotesk", sans-serif'
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: 'Satoshi, -apple-system, system-ui, sans-serif'
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: 'Satoshi, -apple-system, system-ui, sans-serif'
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  technical-data:
    fontFamily: 'JetBrains Mono, "SF Mono", monospace'
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.03em
  label-caps:
    fontFamily: 'JetBrains Mono, "SF Mono", monospace'
    fontSize: 10.5px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.12em
spacing:
  grid-margin: 4rem
  grid-gutter: 2rem
  section-gap: 8rem
  component-padding: 1.5rem
  data-row-height: 3.5rem
---

## Brand & Style
The brand personality is **Established, Institutional, and Architectural**. This design system reflects over two decades of commodity trading expertise, positioning Hansha Tradecom as a reliable sovereign bridge between Bengal's rice-producing hinterland and national/global processing industries.

The visual style is a blend of **Institutional Stature** and **Mercantile Prestige**. It rejects generic SaaS startup tropes in favor of an authoritative physical trading-house aesthetic: sharp industrial discipline, rich tactile surfaces, deep forest green, antique milled brass, and publication-grade typography.

---

## 8-Theme System Architecture & Default Granary Flagship

To honor Hansha Tradecom’s 22-year physical trading stature while decisively distinguishing it from sister enterprise **AB Udyog Pvt. Ltd.** ([www.abudyog.in](https://www.abudyog.in)), the design system operates on an orchestrated **8-Theme Architecture**.

> [!NOTE]
> **Active Default**: **Granary Earth & Golden Malt** (`granary`) is the active default flagship theme applied across the entire site. The floating theme switcher has been disabled from the frontend UI for production cleanliness, while all 8 semantic themes remain fully preserved in CSS tokens.

### Sister Brand Differentiation Rationale
- **AB Udyog Pvt. Ltd.** ([www.abudyog.in](https://www.abudyog.in)): Anchored in agro-refinery green (`#2D6A4F`) and golden mustard seed yellow (`#D4A94E`).
- **Hansha Tradecom Strategic Mandate**: Rather than mirroring AB Udyog's refinery aesthetic, Hansha Tradecom's flagship **Granary** theme fuses earthy malting moss green, roasted walnut bran, and glowing golden corn DDGS flakes, creating an authoritative physical trading stature with zero overlap.

---

### Theme 1: Hooghly Heritage & Harvest Gold (`[data-theme="heritage"]`)
*Colonial Riverfront Ledger Books, Sovereign Banking Stability & Commodity Gold*

- **Visual Concept**: Evokes historic 2003 Strand Road mercantile offices overlooking the Hooghly River, deep leather-bound transaction ledgers, brass counting-house fixtures, and golden parboiled rice stockpiles.
- **Tone**: Sovereign, institutional, archival, established.
- **Core Color Tokens**:
  - **Deep Bengal Forest Green (`--green-deep`)**: `#08150E` — Subterranean background for high-contrast telemetry.
  - **Primary Mercantile Green (`--green`)**: `#0F2519` — Architectural framing, section headers, badges.
  - **Structural Mid Green (`--green-mid`)**: `#1A3D2A` — Card boundaries, hover tints, secondary surfaces.
  - **Deep Card Surface (`--green-surface`)**: `#28583D` — Elevated dark container panels.
  - **Harvest Commodity Gold (`--gold`)**: `#B8872A` — Primary accent, active tab underlines, brand subline.
  - **Milled Brass Glow (`--gold-light`)**: `#D4A94E` — Hover states, luminous metric values, icons.
  - **Gold Hairline Border (`--gold-border`)**: `rgba(212, 169, 78, 0.35)` — Fine structural hairline delimiters.
  - **Alabaster Ledger Substrate (`--bg`)**: `#F8F7F4` — Warm parchment off-white for effortless daytime reading.
  - **Pure Surface (`--bg-surface`)**: `#FFFFFF` — High-clarity white card backgrounds.
  - **Deep Charcoal Ink (`--ink`)**: `#1A241E` — Primary broadsheet display and headline typography.
  - **Hero Command Bar (`--hero-bar-bg`)**: `#08170E` — Top provenance strip.
  - **Hero Command Canvas (`--hero-body-bg`)**: `#0A1E13` — Main industrial hero card.
  - **Primary Action Gradient (`--btn-gradient`)**: `linear-gradient(135deg, #E6BE68 0%, #B8872A 100%)`
  - **Action Button Text (`--btn-solid-text`)**: `#07150E` (Deep forest ink on gold for WCAG AAA contrast).
  - **Scrolled Navbar Glass (`--nav-bg-scrolled`)**: `rgba(8, 21, 14, 0.95)` with gold hairline border.

---

### Theme 2: Maritime Cobalt & Beacon Amber (`[data-theme="maritime"]`)
*Kolkata Dock System, Haldia Deepwater Terminals & Navigational Beacon Amber*

- **Visual Concept**: Directly honors Kolkata’s maritime gateway status — ocean container vessel charters, river freight barges on the Hooghly, dockside bulk grain loaders, and glowing amber navigation beacons guiding night dispatches.
- **Sister Brand Differentiation**: **100% departure from AB Udyog’s agro-green**. Replaces green tones with sovereign deep-sea navy, industrial harbor slate, and electric warning amber.
- **Tone**: Logistical, maritime, precise, export-grade.
- **Core Color Tokens**:
  - **Deep Ocean Trench (`--green-deep`)**: `#06121E` — Nautical command canvas substrate.
  - **Maritime Cobalt Navy (`--green`)**: `#0B1E32` — Sovereign dark navy for structural surfaces.
  - **Port Harbor Slate (`--green-mid`)**: `#183654` — Industrial steel container and crane tint.
  - **Elevated Hull Surface (`--green-surface`)**: `#244C74` — Hover elevation for table cells and chips.
  - **Beacon Warning Amber (`--gold`)**: `#D9771E` — High-visibility navigational amber for CTAs and status.
  - **Electric Navigational Amber (`--gold-light`)**: `#F59B38` — Glowing metric readouts, telemetry pulse dots.
  - **Beacon Hairline Border (`--gold-border`)**: `rgba(217, 119, 30, 0.38)` — Crisp maritime boundary lines.
  - **Harbor Mist Substrate (`--bg`)**: `#F6F8FB` — Crisp, cool oceanic parchment off-white.
  - **Pure Surface (`--bg-surface`)**: `#FFFFFF` — Clean ledger cards.
  - **Nautical Charcoal Ink (`--ink`)**: `#0A131F` — High-contrast deep slate text.
  - **Hero Command Bar (`--hero-bar-bg`)**: `#06121E` — Port authority dispatch bar.
  - **Hero Command Canvas (`--hero-body-bg`)**: `#09182A` — Deep maritime industrial container.
  - **Primary Action Gradient (`--btn-gradient`)**: `linear-gradient(135deg, #F0A54E 0%, #C2782A 100%)`
  - **Action Button Text (`--btn-solid-text`)**: `#05101A` (Deep navy ink on amber for WCAG AAA contrast).
  - **Scrolled Navbar Glass (`--nav-bg-scrolled`)**: `rgba(6, 18, 30, 0.96)` with amber hairline border.

---

### Theme 3: Raw Grain Terra & Jute Hearth (`[data-theme="terra"]`)
*Burdwan Mill Gate Aggregation, Roasted Rice Bran, Fiery Saffron Clay & Chalk Canvas*

- **Visual Concept**: Grounded directly in the agrarian heartland of Bengal — parboiled rice dryers, toasted de-oiled rice bran (DORB) meal, stitched heavy gunny jute packaging sacks, fiery kilns, and crisp chalk grading markings.
- **Revitalized Energy**: Elevated from dull sepia into a high-vibrance, high-energy roasted hearth palette with crisp Chalk White surfaces and fiery saffron clay accents.
- **Tone**: Earthy, artisanal, vibrant, mill-direct authenticity.
- **Core Color Tokens**:
  - **Dark Roasted Cacao (`--green-deep`)**: `#120904` — Deep obsidian earth substrate.
  - **Roasted Grain Espresso (`--green`)**: `#1F120A` — Earthy industrial core brand surface.
  - **Hearth Umber (`--green-mid`)**: `#2E1C12` — Warm mill kiln and dried husk tone.
  - **Toasted Bran Surface (`--green-surface`)**: `#422A1C` — Elevated grain sack texture surface.
  - **Fiery Saffron Clay (`--gold`)**: `#E05D22` — High-energy burnt saffron accent for CTAs and links.
  - **Flame Amber Glow (`--gold-light`)**: `#F57C36` — Luminous roasted amber for highlights and indicators.
  - **Saffron Hairline Border (`--gold-border`)**: `rgba(224, 93, 34, 0.38)` — Warm structural card borders.
  - **Chalk Canvas Substrate (`--bg`)**: `#FAF7F2` — Crisp warm grain flour off-white.
  - **Chalk Surface (`--bg-surface`)**: `#FFFFFF` — Crisp pure white cards.
  - **Obsidian Espresso Ink (`--ink`)**: `#140B06` — High-contrast deep roasted charcoal text.
  - **Hero Command Bar (`--hero-bar-bg`)**: `#120904` — Mill gate intake bar.
  - **Hero Command Canvas (`--hero-body-bg`)**: `#1A0F08` — Roasted grain command center.
  - **Primary Action Gradient (`--btn-gradient`)**: `linear-gradient(135deg, #FA8C48 0%, #D64E18 100%)`
  - **Action Button Text (`--btn-solid-text`)**: `#120904` (Deep espresso ink on flame amber for WCAG AAA contrast).
  - **Scrolled Navbar Glass (`--nav-bg-scrolled`)**: `rgba(18, 9, 4, 0.96)` with saffron hairline border.

---

### Theme 4: Golden DDGS & Distillery Copper (`[data-theme="distillery"]`)
*Grain-Based Distilleries, Biofuel Ethanol Co-Products, Burnished Copper & Corn Flake Gold*

- **Visual Concept**: Directly represents Hansha Tradecom's premier high-value modern product line — **Rice DDGS & Corn DDGS (Distillers Dried Grains with Solubles)**. Evokes grain mash fermenters, heavy copper distillation columns, and toasted golden DDGS feed flakes.
- **Multi-Color Triad**: Deep Malting Moss Green (`#121910` / `#1A2417`), Burnished Copper (`#C86222`), and Corn DDGS Flake Gold (`#F5C258`).
- **Tone**: Industrial, biochemical, warm, nutrient-dense.
- **Core Color Tokens**:
  - **Deep Malting Vat Bronze (`--green-deep`)**: `#121910` — Subterranean organic substrate.
  - **Fermentation Moss Green (`--green`)**: `#1A2417` — Deep botanical framing.
  - **Structural Moss (`--green-mid`)**: `#2A3826` — Card boundaries and dark section accents.
  - **Elevated Mash Surface (`--green-surface`)**: `#3C4E37` — Elevated dark container panels.
  - **Burnished Distillery Copper (`--gold`)**: `#C86222` — Warm distillation column metal for primary actions.
  - **Toasted Corn Flake Gold (`--gold-light`)**: `#F5C258` — Radiant golden flakes for metrics and pulse dots.
  - **Distillery Copper Border (`--gold-border`)**: `rgba(200, 98, 34, 0.36)` — Fine copper hairline delimiters.
  - **Malt Flour Parchment (`--bg`)**: `#FAF6EE` — Pale warm malted grain off-white.
  - **Pure Surface (`--bg-surface`)**: `#FFFFFF` — Crisp clean ledger cards.
  - **Dark Botanical Ink (`--ink`)**: `#131A10` — Broadsheet deep olive-ink text.
  - **Hero Command Bar (`--hero-bar-bg`)**: `#121910` — Biofuel intake telemetry bar.
  - **Hero Command Canvas (`--hero-body-bg`)**: `#182215` — Deep malting vat command center.
  - **Primary Action Gradient (`--btn-gradient`)**: `linear-gradient(135deg, #F5C258 0%, #C86222 100%)`
  - **Action Button Text (`--btn-solid-text`)**: `#0F160E` (Deep moss ink on corn gold for WCAG AAA contrast).
  - **Scrolled Navbar Glass (`--nav-bg-scrolled`)**: `rgba(18, 25, 16, 0.96)` with copper hairline border.

---

### Theme 5: Emerald Paddy & Celadon Sprout (`[data-theme="paddy"]`)
*Paddy Field Intake, Broken Rice Export, Celadon Vitality & Laboratory Assay Purity*

- **Visual Concept**: Grounded in raw grain procurement — lush Bengal monsoon paddy terraces, fresh-milled broken rice kernels, husk biomass cogeneration fuel, and strict laboratory moisture/protein assay certification.
- **Multi-Color Triad**: Deep Alpine Spruce Green (`#081C17` / `#0C2B24`), Crisp Celadon Sprout (`#1E8262`), and Radiant Sunlit Straw Gold (`#F2C450`).
- **Tone**: Organic, clinical, pristine, assay-certified.
- **Core Color Tokens**:
  - **Deep Alpine Spruce (`--green-deep`)**: `#081C17` — Cool, crystalline deep green foundation.
  - **Spruce Forest (`--green`)**: `#0C2B24` — Cool architectural framing.
  - **Structural Jade (`--green-mid`)**: `#164238` — Card boundaries and hover tints.
  - **Elevated Sprout Surface (`--green-surface`)**: `#22584C` — Elevated dark container panels.
  - **Crisp Celadon Sprout (`--gold`)**: `#1E8262` — Vibrant fresh-growth green for primary actions.
  - **Radiant Sunlit Straw Gold (`--gold-light`)**: `#F2C450` — Golden crop headers for metrics and badges.
  - **Celadon Hairline Border (`--gold-border`)**: `rgba(30, 130, 98, 0.38)` — Crisp botanical boundaries.
  - **Assay Certificate Chalk Jade (`--bg`)**: `#F4F8F6` — Clinical, ultra-pure assay paper off-white.
  - **Pure Surface (`--bg-surface`)**: `#FFFFFF` — Crisp pure white cards.
  - **Clinical Spruce Ink (`--ink`)**: `#0A1F1A` — High-contrast deep jade text.
  - **Hero Command Bar (`--hero-bar-bg`)**: `#081C17` — Mill-gate moisture intake bar.
  - **Hero Command Canvas (`--hero-body-bg`)**: `#0A241E` — Clean alpine green command center.
  - **Primary Action Gradient (`--btn-gradient`)**: `linear-gradient(135deg, #F2C450 0%, #1E8262 100%)`
  - **Action Button Text (`--btn-solid-text`)**: `#061814` (Deep spruce ink on straw gold for WCAG AAA contrast).
  - **Scrolled Navbar Glass (`--nav-bg-scrolled`)**: `rgba(8, 28, 23, 0.96)` with celadon hairline border.

---

### Theme 6: Hansha Crest & Solar Sheaf (`[data-theme="crest"]`)
*Official Brand Emblem — Midnight Velvet Green, Logo Meadow & Radiant Wheat Gold*

- **Visual Concept**: Direct 1:1 digital embodiment of the official **Hansha Tradecom circular crest logo**. Translates the vibrant green emblem circle and radiant golden wheat stalks into a regal, high-contrast trading identity.
- **Multi-Color Triad**: Midnight Crest Velvet Green (`#031407` / `#08200E`), Official Logo Meadow Green (`#15803D` / `#16A34A`), and Radiant Solar Wheat Gold (`#FCD34D` / `#F59E0B`).
- **Tone**: Iconic, celebratory, regal, brand-defining.
- **Core Color Tokens**:
  - **Midnight Velvet Green (`--green-deep`)**: `#031407` — The black-green base of the logo emblem.
  - **Crest Forest (`--green`)**: `#08200E` — Architectural framing.
  - **Structural Crest Green (`--green-mid`)**: `#123D1C` — Card boundaries and hover tints.
  - **Deep Canopy Surface (`--green-surface`)**: `#1B5428` — Elevated dark container panels.
  - **Official Emblem Meadow Green (`--gold`)**: `#15803D` — The vibrant green seal from the logo.
  - **Radiant Solar Wheat Gold (`--gold-light`)**: `#FCD34D` — The golden wheat sheaf stalks from the logo.
  - **Solar Wheat Border (`--gold-border`)**: `rgba(252, 211, 77, 0.42)` — Luminous golden boundary hairlines.
  - **Crest Ivory Substrate (`--bg`)**: `#F8FBF7` — Clean emblem ivory with a delicate green tint.
  - **Pure Surface (`--bg-surface`)**: `#FFFFFF` — Crisp pure white cards.
  - **Deep Velvet Botanical Ink (`--ink`)**: `#081C0E` — High-readability rich forest ink text.
  - **Hero Command Bar (`--hero-bar-bg`)**: `#031407` — Official crest provenance strip.
  - **Hero Command Canvas (`--hero-body-bg`)**: `#071E0C` — Midnight green command center.
  - **Primary Action Gradient (`--btn-gradient`)**: `linear-gradient(135deg, #FCD34D 0%, #D97706 100%)`
  - **Action Button Text (`--btn-solid-text`)**: `#041508` (Deep crest ink on solar gold for WCAG AAA contrast).
  - **Scrolled Navbar Glass (`--nav-bg-scrolled`)**: `rgba(4, 20, 8, 0.96)` with solar wheat hairline border.

---

### Theme 7: Toasted Bran & Golden Jute (`[data-theme="bran"]`)
*De-Oiled Rice Bran (DORB), Raw Rice Bran, Natural Hessian Bags & Golden Tan (Zero Red/Copper)*

- **Visual Concept**: Directly embodies Hansha Tradecom's highest volume bulk products: **De-Oiled Rice Bran (DORB)**, **Raw Rice Bran**, **Paddy Husk**, and **Jute Hessian Packaging Bags**. Pure, warm, earthy agricultural browns with golden oat/tan accents—deliberately free of red or copper undertones.
- **Tone**: Authentic, warm, grain-milled, natural organic bulk packaging.
- **Core Color Tokens**:
  - **Deep Roasted Walnut (`--green-deep`)**: `#140F0B` — Deep dark walnut hull foundation.
  - **Toasted Bran Brown (`--green`)**: `#221A14` — Architectural framing of milled grain meal.
  - **Warm Saddle Brown (`--green-mid`)**: `#362B22` — Card boundaries and hover tints.
  - **Elevated Bran Sack Surface (`--green-surface`)**: `#4C3E33` — Elevated dark container panels.
  - **Toasted Bran Tan (`--gold`)**: `#A87432` — Warm golden tan for primary links and actions (no red/copper).
  - **Sun-Dried Husk & Golden Hessian (`--gold-light`)**: `#C9944D` — Luminous golden burlap fiber highlights.
  - **Golden Hessian Hairline Border (`--gold-border`)**: `rgba(168, 116, 50, 0.38)` — Fine natural kraft delimiters.
  - **Natural Oat Paper Substrate (`--bg`)**: `#FAF6F0` — Clean natural unbleached kraft paper off-white.
  - **Pure Surface (`--bg-surface`)**: `#FFFFFF` — Crisp pure white cards.
  - **Deep Roasted Espresso Ink (`--ink`)**: `#1A130E` — High-contrast deep walnut text.
  - **Hero Command Bar (`--hero-bar-bg`)**: `#140F0B` — Mill intake telemetry strip.
  - **Hero Command Canvas (`--hero-body-bg`)**: `#1D1611` — Toasted bran command center.
  - **Primary Action Gradient (`--btn-gradient`)**: `linear-gradient(135deg, #D4A35C 0%, #A87432 100%)`
  - **Action Button Text (`--btn-solid-text`)**: `#120C08` (Deep walnut ink on golden bran for WCAG AAA contrast).
  - **Scrolled Navbar Glass (`--nav-bg-scrolled`)**: `rgba(20, 15, 11, 0.96)` with golden hessian hairline border.

---

### Theme 8: Granary Earth & Golden Malt (`[data-theme="granary"]`)
*Fusion of Bran & Distillery — Earthy Moss Green, Roasted Walnut Bran & Golden Corn Malt*

- **Visual Concept**: A deliberate synthesis uniting the **natural earthy green of grain malting/fermentation** with the **toasted brown meal of rice bran/DORB** and the **luminous golden yellow of corn DDGS flakes**. Represents high-volume agricultural granaries, bulk silos, and integrated livestock feed milling.
- **Multi-Color Triad**: Earthy Moss-Walnut Green (`#11140E` / `#1C2016`), Warm Toasted Amber Gold (`#B88828`), and Radiant Corn Malt Gold (`#E5B842`).
- **Tone**: Agrarian, robust, earthy, wholesome, commercial granary.
- **Core Color Tokens**:
  - **Deep Peat Moss Foundation (`--green-deep`)**: `#11140E` — Earthy moss-walnut deep base.
  - **Earthy Granary Green-Brown (`--green`)**: `#1C2016` — Architectural framing of malt and bran.
  - **Warm Olive-Wood Brown (`--green-mid`)**: `#303626` — Card boundaries and hover borders.
  - **Elevated Silage Surface (`--green-surface`)**: `#444C37` — Elevated dark container panels.
  - **Warm Toasted Amber Gold (`--gold`)**: `#B88828` — Warm brownish-gold bridge tone for links and buttons.
  - **Radiant Corn DDGS Malt Gold (`--gold-light`)**: `#E5B842` — Luminous golden-yellow highlight.
  - **Golden Malt Hairline Border (`--gold-border`)**: `rgba(229, 184, 66, 0.38)` — Fine luminous grain borders.
  - **Natural Flax Parchment Substrate (`--bg`)**: `#F8F6F0` — Clean warm malt-parchment canvas.
  - **Pure Surface (`--bg-surface`)**: `#FFFFFF` — Crisp pure white cards.
  - **Deep Peat-Espresso Ink (`--ink`)**: `#161912` — High-contrast deep earthy text.
  - **Hero Command Bar (`--hero-bar-bg`)**: `#11140E` — Granary intake bar.
  - **Hero Command Canvas (`--hero-body-bg`)**: `#171B13` — Earthy olive-brown command center.
  - **Primary Action Gradient (`--btn-gradient`)**: `linear-gradient(135deg, #E5B842 0%, #B88828 100%)`
  - **Action Button Text (`--btn-solid-text`)**: `#14170F` (Deep moss-walnut ink on golden malt for WCAG AAA contrast).
  - **Scrolled Navbar Glass (`--nav-bg-scrolled`)**: `rgba(17, 20, 14, 0.96)` with golden malt hairline border (`rgba(229, 184, 66, 0.28)`).

---

### Cross-Theme Semantic Mapping Reference

| CSS Token | 1. Heritage | 2. Maritime | 3. Terra | 4. Bran | 5. Granary (Fusion) | 6. Distillery | 7. Paddy | 8. Crest |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `--green-deep` | `#08150E` | `#06121E` | `#120904` | `#140F0B` | `#11140E` | `#121910` | `#081C17` | `#031407` |
| `--green` | `#0F2519` | `#0B1E32` | `#1F120A` | `#221A14` | `#1C2016` | `#1A2417` | `#0C2B24` | `#08200E` |
| `--green-mid` | `#1A3D2A` | `#183654` | `#2E1C12` | `#362B22` | `#303626` | `#2A3826` | `#164238` | `#123D1C` |
| `--gold` | `#B8872A` | `#D9771E` | `#E05D22` | `#A87432` | `#B88828` | `#C86222` | `#1E8262` | `#15803D` |
| `--gold-light` | `#D4A94E` | `#F59B38` | `#F57C36` | `#C9944D` | `#E5B842` | `#F5C258` | `#F2C450` | `#FCD34D` |
| `--bg` | `#F8F7F4` | `#F6F8FB` | `#FAF7F2` | `#FAF6F0` | `#F8F6F0` | `#FAF6EE` | `#F4F8F6` | `#F8FBF7` |
| `--bg-surface` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |
| `--ink` | `#1A241E` | `#0A131F` | `#140B06` | `#1A130E` | `#161912` | `#131A10` | `#0A1F1A` | `#081C0E` |
| `--hero-bar-bg` | `#08170E` | `#06121E` | `#120904` | `#140F0B` | `#11140E` | `#121910` | `#081C17` | `#031407` |
| `--hero-body-bg`| `#0A1E13` | `#09182A` | `#1A0F08` | `#1D1611` | `#171B13` | `#182215` | `#0A241E` | `#071E0C` |
| `--nav-bg-top`  | `rgba(248, 247, 244, 0.88)` | `rgba(246, 248, 251, 0.90)` | `rgba(250, 247, 242, 0.90)` | `rgba(250, 246, 240, 0.90)` | `rgba(248, 246, 240, 0.90)` | `rgba(250, 246, 238, 0.90)` | `rgba(244, 248, 246, 0.90)` | `rgba(248, 251, 247, 0.90)` |
| `--nav-bg-scrolled` | `rgba(8, 21, 14, 0.95)` | `rgba(6, 18, 30, 0.96)` | `rgba(18, 9, 4, 0.96)` | `rgba(20, 15, 11, 0.96)` | `rgba(17, 20, 14, 0.96)` | `rgba(18, 25, 16, 0.96)` | `rgba(8, 28, 23, 0.96)` | `rgba(4, 20, 8, 0.96)` |
| `--nav-border-scrolled`| `rgba(212, 169, 78, 0.20)`| `rgba(224, 146, 62, 0.24)`| `rgba(224, 93, 34, 0.28)`| `rgba(168, 116, 50, 0.26)`| `rgba(229, 184, 66, 0.28)`| `rgba(200, 98, 34, 0.26)`| `rgba(30, 130, 98, 0.26)`| `rgba(252, 211, 77, 0.30)`|
| `--btn-gradient` | Gold (`#E6BE68`→`#B8872A`) | Amber (`#F0A54E`→`#C2782A`) | Flame (`#FA8C48`→`#D64E18`) | Tan (`#D4A35C`→`#A87432`) | Golden Malt (`#E5B842`→`#B88828`) | Copper/Gold (`#F5C258`→`#C86222`) | Straw/Celadon (`#F2C450`→`#1E8262`) | Solar Wheat (`#FCD34D`→`#D97706`) |
| `--btn-solid-text` | `#07150E` | `#05101A` | `#120904` | `#120C08` | `#14170F` | `#0F160E` | `#061814` | `#041508` |

---

### Theme Switcher Architecture & State Lifecycle

1. **Client Component**: [`src/components/ThemeSwitcher.tsx`](file:///c:/Projects/Hansha%20Tradecom/src/components/ThemeSwitcher.tsx)
   - Positioned as an unobtrusive floating glass pill in the bottom corner (`bottom: 20px; left: 68px;` on desktop).
   - Accessible radiogroup (`role="radiogroup"`, `aria-label="Color Scheme Switcher"`).
   - Each option displays signature multi-tone gradient dots representing the 2-to-3 primary colors of that theme.
   - On screens under 900px, automatically condenses to show the dots with the active option label revealed, ensuring zero obstruction of page content.
2. **Persistence & Anti-FOUC Architecture**:
   - Stored in `localStorage` under key `hansha-theme`.
   - Initialized via an inline synchronous `<script id="theme-initializer">` in [`src/app/layout.tsx`](file:///c:/Projects/Hansha%20Tradecom/src/app/layout.tsx) validating all 6 theme keys before hydration to eliminate any flash of unstyled content (FOUC).
   - Applied cleanly to `document.documentElement.setAttribute("data-theme", theme)`.
3. **Smooth Transitions**:
   - Seamless CSS transitions for backgrounds, borders, and colors across the entire DOM tree without page reload.

---

## Typography Systems Architecture

As a 22-year-old bulk agricultural commodities merchant operating out of Kolkata's historic Strand Road commercial corridor, the typography must convey **sovereign financial stability, maritime logistical capability, and rigorous mill-gate assay certification**.

Three distinct, production-grade Google Font pairing systems have been architected specifically for this institutional context:

### System 1: Strand Road Mercantile (Recommended Flagship)
*Broadsheet Financial Authority meets Modern Executive Clarity*
- **Display / Editorial**: **`Playfair Display`** (`400`, `600`, `700`, `Italic`)
  - *Google Fonts URL*: `https://fonts.google.com/specimen/Playfair+Display`
  - *Rationale*: A high-contrast transitional serif with razor-sharp terminals and authoritative bracketed serifs. Evokes century-old financial broadsheets and colonial mercantile trading charters while rendering with crisp digital sharpness on high-DPI displays.
- **Body & Secondary UI**: **`Plus Jakarta Sans`** (`400`, `500`, `600`, `700`)
  - *Google Fonts URL*: `https://fonts.google.com/specimen/Plus+Jakarta+Sans`
  - *Rationale*: A refined, warm corporate grotesque with tall x-height, open apertures, and geometric harmony. Provides exceptional reading comfort for dense commodity specifications and contract terms without feeling clinical.
- **Assays, HSN & Telemetry**: **`JetBrains Mono`** (`400`, `500`, `700`)
  - *Google Fonts URL*: `https://fonts.google.com/specimen/JetBrains+Mono`
  - *Rationale*: Engineered specifically for high-density distinction (`0` vs `O`, `1` vs `l`). Delivers ledger-grade optical alignment for GSTIN, CIN, assay percentages (Moisture, Oil, Protein, Fibre), and HSN codes.

---

### System 2: Architectural Industrial Merchant
*Heavy Physical Commodity Sourcing & Mill-Gate Gravity*
- **Display / Editorial**: **`DM Serif Display`** (`400`, `400 Italic`)
  - *Google Fonts URL*: `https://fonts.google.com/specimen/DM+Serif+Display`
  - *Rationale*: Robust, muscular, and grounded. Features stout serifs and bold horizontal proportion that evoke heavy industrial grain silos, river freight barges, and bulk packaging sacks.
- **Body & Secondary UI**: **`Manrope`** (`400`, `500`, `600`, `700`)
  - *Google Fonts URL*: `https://fonts.google.com/specimen/Manrope`
  - *Rationale*: Modern semi-geometric sans-serif with balanced proportions, clear tabular figures, and excellent rendering in multi-column tables.
- **Assays, HSN & Telemetry**: **`IBM Plex Mono`** (`400`, `500`, `600`)
  - *Google Fonts URL*: `https://fonts.google.com/specimen/IBM+Plex+Mono`
  - *Rationale*: Industrial corporate typewriter heritage that reinforces statutory MCA registration and calibrated weighbridge certification.

---

### System 3: Boardroom Heritage & Maritime Export
*Aristocratic Bengal Port Prestige & International Trade Charters*
- **Display / Editorial**: **`Cormorant Garamond`** (`500`, `600`, `700`, `Italic`)
  - *Google Fonts URL*: `https://fonts.google.com/specimen/Cormorant+Garamond`
  - *Rationale*: Traditional serif with razor-thin hairline strokes and classical proportions. Delivers an aristocratic, luxury aesthetic fitting for cross-border export agreements and port terminal charters.
- **Body & Secondary UI**: **`DM Sans`** (`400`, `500`, `600`, `700`)
  - *Google Fonts URL*: `https://fonts.google.com/specimen/DM+Sans`
  - *Rationale*: Low-contrast, high-readability geometric sans-serif that remains neutral and clean against dense legal and compliance copy.
- **Assays, HSN & Telemetry**: **`Space Mono`** (`400`, `700`)
  - *Google Fonts URL*: `https://fonts.google.com/specimen/Space+Mono`
  - *Rationale*: Geometric monospace with distinct personality, ideal for high-impact numbers and metric badges.

---

## Layout & Spacing
The layout follows a **Rigid Fixed Grid** system inspired by financial broadsheets and ledger books.

- **Desktop:** 12-column grid with a substantial 4rem (64px) outer margin to create a "contained" institutional feel.
- **Section Gaps:** A generous 8rem gap between major sections ensures that the premium nature of the brand is felt through intentional whitespace.
- **Data Density:** While the overall layout is airy, technical data tables use a tighter `data-row-height` of 3.5rem to allow for high-information density during specification reviews.
- **Mobile:** Reflows to a single column with 1.5rem margins, keeping the sharp-edged containers full-width to maintain the "bulk" visual metaphor.

## Elevation & Depth
This design system rejects floating shadows in favor of **Tonal Layering and Thin Outlines**.

- **Tonal Layers:** Depth is created by stacking `primary-color` (Deep Forest) sections against `tertiary-color` (Parchment) backgrounds.
- **Subtle Borders:** Instead of shadows, use 1px solid borders in `silver-ore` or a low-opacity version of the primary color to define cards and table cells.
- **Sophisticated Shadows:** Only in rare "active" states (like an hovered product card) should a shadow be used. If applied, it must be a "Long Ambient" shadow: very low opacity (5-8%), high blur (30px), and tinted with the primary green to feel like a natural shadow on a physical surface.

## Shapes
The shape language is strictly **Sharp (0px)**. 

Every UI element—from primary buttons to input fields and product cards—must have 90-degree corners. This evokes the precision of industrial bulk handling and the architectural permanence of a trading house. No "pill-shaped" buttons are permitted, as they lean too casual/consumer-focused for this institutional context.

## Components
- **Buttons:** Rectangular, sharp edges. Primary buttons use `primary-color` background with `secondary-color` (Gold) text or white. Ghost buttons use a 1px border.
- **Elegant Data Tables:** Used for technical assays (e.g., Moisture, Purity). Header rows should be `primary-color` with white text. Alternate rows can use a very faint `tertiary-color` tint for legibility.
- **Technical Chips:** Used for HSN codes or status. These are small, rectangular boxes with `label-caps` typography and a 1px `silver-ore` border.
- **Institutional Cards:** Used for leadership profiles and product lines. They feature thin borders, no shadows, and a subtle "header" area defined by a background tint.
- **Input Fields:** Underlined or fully boxed with 1px borders. Use `body-md` for user input and `label-caps` for floating labels.
- **Navigation:** A minimal top bar with high-contrast serif links. On scroll, it should transition to a `primary-color` background with gold accents to maintain a "command center" feel.