"use client";

import { COMPANY_INFO } from "@/data/content";

export default function Company() {
  return (
    <section className="sec" id="company">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="sec-title">A Kolkata trading house for the rice economy.</h2>
          </div>
          <p className="sec-meta">
            Wholesaler, distributor and exporter of rice and its by-products.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <h2>Two decades on Strand Road, the trading mile of Kolkata.</h2>
            <p>
              Incorporated on 19 December 2003 as a private limited company, Hansha Tradecom has built
              long standing relationships with rice mills across West Bengal and Bihar. We aggregate, grade
              and supply bulk agri commodities directly to industrial users.
            </p>
            <div className="about-quote">
              Reliable mill gate sourcing, consistent quality grading and transparent trade execution since 2003.
            </div>
          </div>

          <div className="about-right">
            <p>
              <strong>Hansha Tradecom Pvt. Ltd.</strong> was incorporated in December 2003 to supply premium quality
              broken rice, parboiled rice, rice DDGS, rice bran and grain packaging. From our office on Strand Road in Kolkata
              we have spent two decades sourcing directly from rice mills, grading under strict checks and shipping in bulk
              to feed mills, oil expellers, food processors and exporters.
            </p>
            <p>
              Our operations cover both domestic distribution across India and export documentation for overseas buyers.
            </p>

            <div className="info-grid">
              {COMPANY_INFO.map((info, idx) => (
                <div key={idx} className={`info-item ${info.wide ? "wide" : ""}`}>
                  <div className="k">{info.k}</div>
                  <div className="v">{info.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
