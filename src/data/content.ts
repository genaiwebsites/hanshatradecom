export interface Product {
  id: string;
  name: string;
  category: "feed" | "food" | "biomass" | "packaging";
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
  chips: string[];
  hsn: string;
  title?: string;
}

export type CategoryId = "all" | "feed" | "food" | "biomass" | "packaging";

export interface Category {
  id: CategoryId;
  label: string;
}

export const CATEGORIES: Category[] = [
  { id: "all", label: "All products" },
  { id: "feed", label: "Feed ingredients" },
  { id: "food", label: "Food grains" },
  { id: "biomass", label: "Biomass" },
  { id: "packaging", label: "Packaging" },
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
    categoryLabel: "Feed ingredient",
    image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/176ff7156-01ea-45ec-9085-845325221697.png",
    alt: "Fine golden raw rice bran powder in a brass scoop on jute cloth",
    description: "Fresh mill-run bran for oil extraction and feed blending. Naturally dried, soft texture, gluten free.",
    chips: ["99% purity", "12 to 14% oil", "1 year shelf life"],
    hsn: "HSN 2302 2020",
  },
  {
    id: "de-oiled-rice-bran",
    name: "De-Oiled Rice Bran (DORB)",
    title: "De-Oiled Rice Bran (DORB)",
    category: "feed",
    categoryLabel: "Feed ingredient",
    image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/157c39e89-c69c-4fe2-b45f-6220e67b9309.png",
    alt: "Pale golden de-oiled rice bran flakes in a steel scoop on kraft paper",
    description: "Solvent-extracted bran for cattle and poultry rations. Consistent fibre, low residual oil, free flowing.",
    chips: ["Max 1.5% residual oil", "High fibre", "Bulk or bagged"],
    hsn: "HSN 2302 2010",
  },
  {
    id: "dry-rice-ddgs",
    name: "Dry Rice DDGS",
    title: "Dry Rice DDGS",
    category: "feed",
    categoryLabel: "Feed ingredient",
    image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/186ffe3cc-822c-468a-ab3a-024bfad471fe.png",
    alt: "Amber rice DDGS crumble and pellets in a wooden scoop",
    description: "Protein rich distillers grains from rice fermentation. Moisture free and nutrient dense cattle feed.",
    chips: ["28 to 30% protein", "Moisture free", "95% purity"],
    hsn: "HSN 2302",
  },
  {
    id: "corn-ddgs",
    name: "Corn DDGS",
    title: "Corn DDGS",
    category: "feed",
    categoryLabel: "Feed ingredient",
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
    categoryLabel: "Food grain",
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

export const STATS = [
  { count: 22, suffix: "+", label: "Years in commodity trade" },
  { count: 8, suffix: "", label: "Product lines supplied in bulk" },
  { count: 2003, suffix: "", label: "Year of incorporation, Kolkata" },
  { count: 7, suffix: "", label: "Days a week the desk operates" },
];

export const COMPANY_INFO = [
  { k: "CIN", v: "U15497WB2003PTC096805" },
  { k: "GSTIN", v: "19AACCB6350P1Z8" },
  { k: "Incorporated", v: "19 December 2003" },
  { k: "Legal status", v: "Private Limited Company" },
  { k: "Director", v: "Mukesh Kumar Choudhary" },
  { k: "Business type", v: "Wholesaler, distributor, exporter" },
  { k: "Team strength", v: "11 to 25 people" },
  { k: "Working days", v: "Monday to Sunday" },
  {
    k: "Registered office",
    v: "55/1A Strand Road, 2nd Floor, RNO-204, Kolkata 700006, West Bengal, India",
    wide: true,
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
    title: "Quality control",
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
  { product: "Raw rice bran", primary: "Max 10% Moisture, 99% Purity", secondary: "12 to 14% Oil", moisture: "Max 10%", protein: "12 to 13%", oil: "12 to 14%", purity: "99%" },
  { product: "De-oiled rice bran", primary: "Max 10% Moisture, High Fibre", secondary: "Max 1.5% Residual Oil", moisture: "Max 10%", protein: "14 to 15%", oil: "Max 1.5%", purity: "99%" },
  { product: "Rice DDGS", primary: "28 to 30% Protein", secondary: "Moisture Free, 95% Purity", moisture: "Max 12%", protein: "28 to 30%", oil: "Trace", purity: "95%" },
  { product: "Corn DDGS", primary: "20 to 24% Protein", secondary: "Yellow Grade Maize Derived", moisture: "Max 12%", protein: "20 to 24%", oil: "Trace", purity: "95%" },
  { product: "Broken rice", primary: "Sortex Clean 99%", secondary: "Max 14% Moisture", moisture: "Max 14%", protein: "Around 7%", oil: "Trace", purity: "Sortex 99%" },
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
    title: "Port proximity",
    description: "Kolkata and Haldia docks within a day's haul for export consignments.",
  },
  {
    title: "Rail and road",
    description: "Rake and truck loading with weighbridge certified tonnages.",
  },
  {
    title: "Export paperwork",
    description: "HSN compliant invoicing, GST documentation and batch COA.",
  },
  {
    title: "Seven day desk",
    description: "The trade desk answers Monday to Sunday, all year.",
  },
];

export const HSN_CODES = ["2302.1010", "2302.1090", "2302.2010", "2302.2020", "1006", "1213", "6305"];

