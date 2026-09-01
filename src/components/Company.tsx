"use client";

import { COMPANY_INFO } from "@/data/content";
import { Building2, Landmark, CheckCircle } from "lucide-react";

export default function Company() {
  return (
    <section className="sec" id="company">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="sec-title">A Kolkata institution for the rice economy.</h2>
          </div>
          <p className="sec-meta">
            Wholesaler, distributor and exporter of rice and by-products from Strand Road since 2003.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <div className="about-heritage-tag">
              <Landmark size={14} className="text-[var(--gold-light)]" />
              <span>Two Decades on Strand Road</span>
            </div>
            <h2>Connecting Bengal&apos;s mills with industrial processors.</h2>
            <p>
              Incorporated on 19 December 2003 as a private limited company, Hansha Tradecom has built
              long-standing relationships with rice mills across West Bengal and Bihar. We aggregate, grade
              and supply bulk agri commodities directly to feed mills, solvent oil expellers, food manufacturers and global exporters.
            </p>
            <p>
              Operating from our headquarters on Strand Road — the historic commercial spine of Kolkata — we manage the complete consignment chain: mill-gate procurement, strict laboratory sampling, calibrated weighbridge verification, and dispatch via road, rake or vessel.
            </p>
            <div className="about-quote">
              &ldquo;Reliable mill-gate sourcing, consistent quality grading and transparent trade execution since 2003.&rdquo;
            </div>
          </div>

          <div className="about-right">
            <div className="about-cred-header">
              <Building2 size={16} className="text-[var(--green)]" />
              <h3>Corporate Identity &amp; Registry</h3>
            </div>
            <p>
              Hansha Tradecom Pvt. Ltd. maintains full statutory transparency with all trade documentation, batch Certificates of Analysis (COA), and HSN-compliant GST invoicing generated systematically per dispatch.
            </p>

            <div className="info-grid">
              {COMPANY_INFO.map((info, idx) => (
                <div key={idx} className={`info-item ${info.wide ? "wide" : ""}`}>
                  <div className="k">{info.k}</div>
                  <div className="v">{info.v}</div>
                </div>
              ))}
            </div>

            <div className="about-verification-badge">
              <CheckCircle size={15} className="text-emerald-700 flex-shrink-0" />
              <span>Verified corporate entity on Ministry of Corporate Affairs (MCA), IndiaMART &amp; TradeIndia.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
