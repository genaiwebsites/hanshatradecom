"use client";

import { useState } from "react";
import { PRODUCTS, CATEGORIES, CategoryId } from "@/data/content";
import { ArrowRight, Package } from "lucide-react";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleEnquire = (productTitle: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("hansha-select-product", { detail: { product: productTitle } })
      );
    }
  };

  return (
    <section className="sec" id="products">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="sec-title">Bulk commodities &amp; packaging.</h2>
          </div>
          <p className="sec-meta">
            Eight essential product lines sourced directly from grain mills, graded under strict parameters, and supplied in bulk.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filters-container">
          <div className="filters">
            {CATEGORIES.map((cat) => {
              const count = cat.id === "all" 
                ? PRODUCTS.length 
                : PRODUCTS.filter(p => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                >
                  <span>{cat.label}</span>
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="prod-grid">
          {filteredProducts.map((product) => {
            const title = product.title || product.name;
            return (
              <article key={product.id} className="prod-card">
                <div className="prod-img">
                  <img 
                    src={product.image} 
                    alt={product.alt || title}
                    loading="lazy"
                  />
                  <span className="prod-tag">{product.categoryLabel}</span>
                </div>

                <div className="prod-body">
                  <div className="prod-header-row">
                    <h3>{title}</h3>
                  </div>
                  <p>{product.description}</p>
                  
                  <div className="chips">
                    {product.chips.map((chip, idx) => (
                      <span key={idx}>{chip}</span>
                    ))}
                  </div>
                </div>

                <div className="prod-foot">
                  <div className="prod-hsn-wrap">
                    <Package size={12} className="text-[var(--ink-4)]" />
                    <span className="hsn">{product.hsn}</span>
                  </div>
                  <a
                    href="#contact"
                    className="enquire"
                    onClick={() => handleEnquire(title)}
                    aria-label={`Enquire about bulk ${title}`}
                  >
                    <span>Enquire</span>
                    <ArrowRight size={13} strokeWidth={2} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
