"use client";

import { useState } from "react";
import { ArrowRight, Check, Copy, ShieldCheck, MapPin, Clock, Building2, Anchor } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-box">
          
          {/* Top provenance bar */}
          <div className="hero-box-header">
            <div className="hero-box-header-left">
              <span className="live-dot" />
              <span>Kolkata Trade Desk Active</span>
              <span className="dot-sep">·</span>
              <span className="text-[var(--ink-4)]">Private Limited Company · Est. 2003</span>
            </div>
            <div className="hero-box-header-right">
              <span>Strand Road, Kolkata 700006</span>
            </div>
          </div>

          {/* Main 2-column layout */}
          <div className="hero-grid">
            
            {/* Left Content Area */}
            <div className="hero-main">
              <div className="hero-main-top">
                <h1 className="hero-title">
                  Bulk agri commodities,<br />
                  sourced from Bengal&apos;s <em>rice mills.</em>
                </h1>

                <p className="hero-desc">
                  Rice bran, de-oiled bran (DORB), DDGS, broken rice, paddy husk and grain packaging — contracted at the mill gate, graded under strict checks, and dispatched across India and to export.
                </p>

                <div className="hero-actions">
                  <a href="#contact" className="btn btn-solid">
                    <span>Request a quotation</span>
                    <ArrowRight size={14} />
                  </a>
                  <a href="#products" className="btn btn-outline">
                    <span>Explore 8 product lines</span>
                  </a>
                </div>
              </div>

              {/* Product pills inside hero */}
              <div className="hero-ticker-wrap">
                <span className="hero-ticker-lbl">PORTFOLIO LINES:</span>
                <div className="hero-ticker-pills">
                  {["Raw Rice Bran", "DORB", "Rice DDGS", "Corn DDGS", "Broken Rice", "Paddy Husk", "PP & Jute Bags"].map((item, i) => (
                    <a key={i} href="#products" className="hero-ticker-pill">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Telemetry & Visual Sidebar */}
            <div className="hero-sidebar">
              
              {/* Warehouse Godown Inset Image */}
              <div className="hero-image-card">
                <img
                  src="https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/1c613ef38-856b-4e24-acce-baf2db144491.png"
                  alt="Stacked sacks of rice in a Kolkata godown with sunlight streaming through arched windows"
                  className="hero-image-img"
                  loading="eager"
                />
                <div className="hero-image-badge">
                  <span className="hero-image-badge-kicker">Strand Road Godown</span>
                  <span className="hero-image-badge-text">Consignments Graded Ex-Kolkata</span>
                </div>
              </div>

              {/* Grid of 4 compact industrial telemetry cells */}
              <div className="hero-cells-grid">
                
                <div className="hero-cell">
                  <div className="hero-cell-head">
                    <span className="hero-cell-k"><Building2 size={11} /> Incorporated</span>
                  </div>
                  <div className="hero-cell-val">19 Dec 2003</div>
                  <div className="hero-cell-sub">Private Limited · 22+ Yrs</div>
                </div>

                <div className="hero-cell">
                  <div className="hero-cell-head">
                    <span className="hero-cell-k"><Clock size={11} /> Trade Desk</span>
                  </div>
                  <div className="hero-cell-val">Mon – Sun</div>
                  <div className="hero-cell-sub">09:30 – 19:00 IST · 7 Days</div>
                </div>

                <button
                  className="hero-cell hero-cell-btn"
                  onClick={() => copy("19AACCB6350P1Z8", "gstin")}
                  title="Click to copy GSTIN"
                  type="button"
                >
                  <div className="hero-cell-head">
                    <span className="hero-cell-k">
                      GSTIN {copied === "gstin" ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                    </span>
                    {copied === "gstin" && <span className="hero-copy-pill">COPIED</span>}
                  </div>
                  <div className="hero-cell-val mono">19AACCB6350P1Z8</div>
                  <div className="hero-cell-sub">West Bengal State Tax</div>
                </button>

                <button
                  className="hero-cell hero-cell-btn"
                  onClick={() => copy("U15497WB2003PTC096805", "cin")}
                  title="Click to copy CIN"
                  type="button"
                >
                  <div className="hero-cell-head">
                    <span className="hero-cell-k">
                      CIN {copied === "cin" ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                    </span>
                    {copied === "cin" && <span className="hero-copy-pill">COPIED</span>}
                  </div>
                  <div className="hero-cell-val mono">U15497WB2003PTC096805</div>
                  <div className="hero-cell-sub">MCA Registered · RoC Kolkata</div>
                </button>

              </div>
            </div>

          </div>

          {/* Bottom trade corridor footer strip */}
          <div className="hero-bottom-strip">
            <div className="hero-strip-item">
              <Anchor size={12} className="text-[var(--gold)]" />
              <span>Port Connectivity: Kolkata &amp; Haldia Docks</span>
            </div>
            <div className="hero-strip-dot">·</div>
            <div className="hero-strip-item">
              <MapPin size={12} className="text-[var(--gold)]" />
              <span>Procurement: Burdwan, Midnapore &amp; Bihar Grain Belt</span>
            </div>
            <div className="hero-strip-dot">·</div>
            <div className="hero-strip-item">
              <ShieldCheck size={12} className="text-[var(--gold)]" />
              <span>Quality Assayed &amp; Calibrated Weighbridge</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
