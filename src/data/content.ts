export interface Product {
  id: string;
  name: string;
  title?: string;
  category: "feed" | "food" | "biomass" | "packaging";
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
  chips: string[];
  hsn: string;
}

export type CategoryId = "all" | "feed" | "food" | "biomass" | "packaging";

export interface Category {
  id: CategoryId;
  label: string;
}

export const CATEGORIES: Category[] = [
  { id: "all", label: "All Products" },
  { id: "feed", label: "Feed Ingredients" },
  { id: "food", label: "Food Grains" },
  { id: "biomass", label: "Biomass & Fuel" },
  { id: "packaging", label: "Grain Packaging" },
];

export interface SpecRow {
  product: string;
  primary: string;
  secondary: string;
  moisture?: string;
  protein?: string;
  oil?: string;
  purity?: string;
}

export interface ProcessStep {
  number: string;
  no?: string;
  title: string;
  description: string;
  desc?: string;
}

export interface Leader {
  initials: string;
  name: string;
  role: string;
  bio: string;
  credential?: string;
}

export interface LogiCard {
  title: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "raw-rice-bran",
    name: "Raw Rice Bran",
    title: "Raw Rice Bran",
    category: "feed",
    categoryLabel: "Feed Ingredient",
    image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/176ff7156-01ea-45ec-9085-845325221697.png",
    alt: "Fine golden raw rice bran powder in a brass scoop on jute cloth",
    description: "Fresh mill-run bran for oil extraction and feed blending. Naturally dried, soft texture, gluten free.",
    chips: ["99% purity", "12 to 14% oil", "1 yr shelf life"],
    hsn: "HSN 2302 2020",
  },
  {
    id: "de-oiled-rice-bran",
    name: "De-Oiled Rice Bran (DORB)",
    title: "De-Oiled Rice Bran (DORB)",
    category: "feed",
    categoryLabel: "Feed Ingredient",
    image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/157c39e89-c69c-4fe2-b45f-6220e67b9309.png",
    alt: "Pale golden de-oiled rice bran flakes in a steel scoop on kraft paper",
    description: "Solvent-extracted bran for cattle and poultry rations. Consistent fibre, low residual oil, free flowing.",
    chips: ["Max 1.5% oil", "High fibre", "Bulk or bagged"],
    hsn: "HSN 2302 2010",
  },
  {
    id: "dry-rice-ddgs",
    name: "Dry Rice DDGS",
    title: "Dry Rice DDGS",
    category: "feed",
    categoryLabel: "Feed Ingredient",
    image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/186ffe3cc-822c-468a-ab3a-024bfad471fe.png",
    alt: "Amber rice DDGS crumble and pellets in a wooden scoop",
    description: "Protein-rich distillers grains from rice fermentation. Moisture free and nutrient dense for cattle feed.",
    chips: ["28 to 30% protein", "Moisture free", "95% purity"],
    hsn: "HSN 2302",
  },
  {
    id: "corn-ddgs",
    name: "Corn DDGS",
    title: "Corn DDGS",
    category: "feed",
    categoryLabel: "Feed Ingredient",
    image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/14c712b11-873e-4d01-87fe-92475d8a68f3.png",
    alt: "Golden corn DDGS granules pouring from a burlap sack",
    description: "Yellow grade maize distillers grains, a high energy protein supplement for dairy and poultry rations.",
    chips: ["Yellow grade", "20 to 24% protein", "Ferment derived"],
    hsn: "HSN 2302 1090",
  },
  {
    id: "broken-rice",
    name: "Broken Rice",
    title: "Broken Rice",
    category: "food",
    categoryLabel: "Food Grain",
    image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/18f315526-31de-4cf4-93a1-d31b728ee68b.png",
    alt: "White broken rice grains in an open jute sack on dark slate",
    description: "Hygienically processed white broken rice for food processing, brewing and starch. Sortex cleaned.",
    chips: ["Sortex clean", "Supreme grade", "5 to 50 kg packs"],
    hsn: "HSN 1006",
  },
  {
    id: "paddy-husk",
    name: "Paddy Husk",
    title: "Paddy Husk",
    category: "biomass",
    categoryLabel: "Biomass",
    image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/178bc9683-671f-4e56-b3e6-81de757243cf.png",
    alt: "Heap of golden paddy husk with a steel scoop at a rice mill",
    description: "Finely processed rice husk for biomass power, boiler fuel and insulation. Export grade material.",
    chips: ["Low moisture", "Export grade", "Loose or baled"],
    hsn: "HSN 1213",
  },
  {
    id: "hdpe-pp-rice-bags",
    name: "HDPE / PP Rice Bags",
    title: "HDPE / PP Rice Bags",
    category: "packaging",
    categoryLabel: "Packaging",
    image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/17adac194-be91-40b9-9b92-ceeef543d3b2.png",
    alt: "Neat stack of white woven polypropylene sacks in a warehouse",
    description: "Woven HDPE and PP sacks for grain packing. Custom GSM, laminated options and print on request.",
    chips: ["5 to 50 kg capacity", "Custom print", "UV stabilised"],
    hsn: "HSN 6305",
  },
  {
    id: "jute-gunny-bags",
    name: "Jute Gunny Bags",
    title: "Jute Gunny Bags",
    category: "packaging",
    categoryLabel: "Packaging",
    image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/1c867db16-92ae-4b4e-9cd1-7df8781374dd.png",
    alt: "Stack of natural brown jute gunny bags with coarse weave",
    description: "Natural fibre gunny bags from the Bengal jute belt. Biodegradable, breathable and food safe.",
    chips: ["50 kg standard", "Biodegradable", "Food safe"],
    hsn: "HSN 6305",
  },
];

export interface StatItem {
  value: string;
  unit?: string;
  title: string;
  description: string;
  icon: "heritage" | "products" | "corporate" | "continuity";
}

export const STATS: StatItem[] = [
  {
    value: "22+",
    title: "Years of Market Acumen",
    description: "Contracting directly with mill partners across Bengal & Bihar since 2003.",
    icon: "heritage",
  },
  {
    value: "8",
    title: "Bulk Commodity Lines",
    description: "Raw bran, DORB, DDGS, broken rice, husk & industrial packaging.",
    icon: "products",
  },
  {
    value: "2003",
    title: "Year Incorporated",
    description: "Private Limited corporate entity registered with RoC Kolkata.",
    icon: "corporate",
  },
  {
    value: "7",
    unit: "Days",
    title: "Weekly Dispatch",
    description: "Active loading, weighment, and logistical coordination all 7 days.",
    icon: "continuity",
  },
];

export const COMPANY_INFO = [
  { k: "CIN", v: "U15497WB2003PTC096805" },
  { k: "GSTIN", v: "19AACCB6350P1Z8" },
  { k: "Incorporated", v: "19 December 2003" },
  { k: "Legal status", v: "Private Limited Company" },
  { k: "Founder & MD", v: "Mukesh Kumar Choudhary" },
  { k: "Business type", v: "Wholesaler, Distributor, Exporter" },
  { k: "Team strength", v: "11 to 25 People" },
  { k: "Working days", v: "Monday to Sunday (09:30 – 19:00 IST)" },
  {
    k: "Registered office",
    v: "55/1A Strand Road, 2nd Floor, RNO-204, Kolkata 700006, West Bengal, India",
    wide: true,
  },
];

export const LEADERSHIP: Leader[] = [
  {
    initials: "SB",
    name: "Mr. Subhash Bansal",
    role: "Chairman & Managing Director",
    bio: "Provides overall leadership, governance, and commercial guidance to the company. Shapes the firm's strategic trade direction, financial foundation, and long-standing associations across the Eastern grain corridor.",
  },
  {
    initials: "MC",
    name: "Mr. Mukesh Kumar Choudhary",
    role: "Managing Director",
    bio: "Manages core trading desk operations, mill-gate procurement contracts, and supply chain logistics across Bengal, Bihar, and domestic distribution centers.",
  },
  {
    initials: "HC",
    name: "Mr. Hansraj Choudhary",
    role: "Head of Finance & Accounts",
    bio: "Chartered Accountant managing financial planning, corporate accounts, working capital banking facilities, taxation, and statutory audit compliance.",
    credential: "CA",
  },
  {
    initials: "PB",
    name: "Mr. Prateek Bansal",
    role: "Head of Business Development",
    bio: "Leads institutional sales and client relationships, coordinating regular bulk commodity supply with feed manufacturers, oil expellers, and processing plants.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    no: "01",
    title: "Sourcing",
    description: "Direct procurement from rice mills across the Bengal and Bihar grain belt, contracted at the mill gate.",
    desc: "Direct procurement from rice mills across the Bengal and Bihar grain belt, contracted at the mill gate.",
  },
  {
    number: "02",
    no: "02",
    title: "Grading",
    description: "Loads pooled, sieved and graded by purity and moisture before anything is sold forward.",
    desc: "Loads pooled, sieved and graded by purity and moisture before anything is sold forward.",
  },
  {
    number: "03",
    no: "03",
    title: "Quality Control",
    description: "Batch sampling with sealed counter samples. Oil, protein and moisture verified at partner labs.",
    desc: "Batch sampling with sealed counter samples. Oil, protein and moisture verified at partner labs.",
  },
  {
    number: "04",
    no: "04",
    title: "Bagging",
    description: "50 kg PP or jute bags, or loose bulk. Every load passes over a calibrated weighbridge.",
    desc: "50 kg PP or jute bags, or loose bulk. Every load passes over a calibrated weighbridge.",
  },
  {
    number: "05",
    no: "05",
    title: "Dispatch",
    description: "Road and rail dispatch with HSN compliant invoicing and COA documentation per consignment.",
    desc: "Road and rail dispatch with HSN compliant invoicing and COA documentation per consignment.",
  },
];

export const QUALITY_SPECS: SpecRow[] = [
  { product: "Raw Rice Bran", primary: "Max 10% Moisture, 99% Purity", secondary: "12 to 14% Oil Content", moisture: "Max 10%", protein: "12 to 13%", oil: "12 to 14%", purity: "99%" },
  { product: "De-Oiled Rice Bran", primary: "Max 10% Moisture, High Fibre", secondary: "Max 1.5% Residual Oil", moisture: "Max 10%", protein: "14 to 15%", oil: "Max 1.5%", purity: "99%" },
  { product: "Rice DDGS", primary: "28 to 30% Protein", secondary: "Moisture Free, 95% Purity", moisture: "Max 12%", protein: "28 to 30%", oil: "Trace", purity: "95%" },
  { product: "Corn DDGS", primary: "20 to 24% Protein", secondary: "Yellow Grade Maize Derived", moisture: "Max 12%", protein: "20 to 24%", oil: "Trace", purity: "95%" },
  { product: "Broken Rice", primary: "Sortex Clean 99%", secondary: "Max 14% Moisture", moisture: "Max 14%", protein: "Around 7%", oil: "Trace", purity: "Sortex 99%" },
];

export const QUALITY_CHECKS = [
  "Sealed counter samples retained for every batch",
  "Moisture, oil and protein verified at partner labs",
  "Calibrated weighbridge and bag weighment",
  "Hygienic, pest controlled godown storage",
  "Certificate of analysis with every consignment",
  "HSN compliant GST invoicing on each dispatch",
];

export const LOGISTICS_CARDS: LogiCard[] = [
  {
    title: "Port Proximity",
    description: "Kolkata and Haldia docks within a day's haul for export consignments, eliminating dead miles.",
  },
  {
    title: "Rail and Road",
    description: "Rake and truck loading with weighbridge certified tonnages for pan-India distribution.",
  },
  {
    title: "Export Paperwork",
    description: "HSN compliant invoicing, GST documentation and batch COA for every shipment.",
  },
  {
    title: "Seven-Day Operations",
    description: "Our commercial team is available Monday to Sunday, all year, for quotation and dispatch coordination.",
  },
];

export const HSN_CODES = [
  "2302.1010",
  "2302.1090",
  "2302.2010",
  "2302.2020",
  "1006",
  "1213",
  "6305"
];
