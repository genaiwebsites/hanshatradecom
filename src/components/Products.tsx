"use client";

import { useState } from "react";
import { PRODUCTS, CATEGORIES, CategoryId } from "@/data/content";
import { ArrowRight } from "lucide-react";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="sec" id="products">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="sec-title">Product portfolio.</h2>
          </div>
          <p className="sec-meta">
            Feed ingredients, food grains, biomass and packaging, all in bulk.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="prod-grid">
          {filteredProducts.map((product) => (
            <article key={product.id} className="prod-card">
              <div className="prod-img">
                <img src={product.image} alt={product.title} />
                <span className="prod-tag">{product.categoryLabel}</span>
              </div>
              <div className="prod-body">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className="chips">
                  {product.chips.map((chip, idx) => (
                    <span key={idx}>{chip}</span>
                  ))}
                </div>
              </div>
              <div className="prod-foot">
                <span className="hsn">{product.hsn}</span>
                <a href="#contact" className="enquire">
                  Enquire <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
