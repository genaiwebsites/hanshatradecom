"use client";

const TICKER_ITEMS = [
  "Raw Rice Bran (99% Purity)",
  "HSN 2302 2020",
  "De-Oiled Rice Bran (DORB)",
  "Max 1.5% Residual Oil",
  "Dry Rice DDGS (28-30% Protein)",
  "Yellow Corn DDGS",
  "Sortex Clean Broken Rice",
  "Paddy Husk Biomass Fuel",
  "HDPE / PP Rice Bags",
  "Bengal Jute Gunny Bags",
  "Kolkata & Haldia Ports",
  "7-Day Operations",
];

export default function MarqueeTicker() {
  return (
    <div className="marquee-container" aria-hidden="true">
      <div className="marquee-content">
        {TICKER_ITEMS.concat(TICKER_ITEMS).map((item, idx) => (
          <span key={idx} className="marquee-item">
            <i></i>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
