"use client";

import { STATS, StatItem } from "@/data/content";
import { Landmark, Layers, Building2, CalendarCheck } from "lucide-react";

export default function Stats() {
  const getIcon = (type: StatItem["icon"]) => {
    switch (type) {
      case "heritage":
        return <Landmark size={18} className="text-[var(--gold)]" />;
      case "products":
        return <Layers size={18} className="text-[var(--gold)]" />;
      case "corporate":
        return <Building2 size={18} className="text-[var(--gold)]" />;
      case "continuity":
        return <CalendarCheck size={18} className="text-[var(--gold)]" />;
    }
  };

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-card-top">
                <div className="stat-icon-wrap">
                  {getIcon(stat.icon)}
                </div>
                <span className="stat-card-dot" />
              </div>
              
              <div className="stat-metric-wrap">
                <span className="stat-num">{stat.value}</span>
                {stat.unit && <span className="stat-unit">{stat.unit}</span>}
              </div>

              <h3 className="stat-title">{stat.title}</h3>
              <p className="stat-desc">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
