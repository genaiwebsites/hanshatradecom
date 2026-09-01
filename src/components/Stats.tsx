"use client";

import { STATS } from "@/data/content";

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-card-header">
                <span className="stat-idx">0{idx + 1}</span>
                <span className="stat-bullet"></span>
              </div>
              <div className="stat-num">
                {stat.count}
                {stat.suffix && <sup>{stat.suffix}</sup>}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
