"use client";

import { useState } from "react";
import { ArrowRight, Check, Copy, ShieldCheck, MapPin, Clock, Building2, Anchor, PhoneCall } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="hero-stage" id="top">
      <div className="hero-canvas">
        
        {/* Top provenance sub-header bar */}
        <div className="hero-provenance-bar">
          <div className="hero-provenance-left">
            <span className="live-pulse-dot" />
            <span className="provenance-title">Kolkata Trade Desk Active</span>
            <span className="provenance-sep">·</span>
            <span className="provenance-meta">Private Limited Company · Incorporated 2003</span>
          </div>
          <div className="hero-provenance-right">
            <MapPin size={12} className="text-[var(--gold)]" />
            <span>55/1A Strand Road, Kolkata 700006</span>
          </div>
        </div>

        {/* Main 2-column layout */}
        <div className="hero-body-grid">
          
          {/* Left Content Area */}
          <div className="hero-left-content">
            <div className="hero-text-block">
              <h1 className="hero-headline">
                Bulk agri commodities,<br />
                sourced from Bengal&apos;s <em>rice mills.</em>
              </h1>

              <p className="hero-paragraph">
                Rice bran, de-oiled bran (DORB), DDGS, broken rice, paddy husk and industrial packaging — contracted at the mill gate, tested under standardized assays, and dispatched across India and export corridors.
              </p>

              <div className="hero-action-group">
                <a href="#contact" className="btn btn-solid">
                  <span>Request a quotation</span>
                  <ArrowRight size={14} />
                </a>
                <a href="#products" className="btn btn-outline">
                  <span>Explore 8 product lines</span>
                </a>
                <a href="tel:+918043840241" className="hero-call-btn" title="Call Trade Desk">
                  <PhoneCall size={14} />
                  <span>Trade Desk</span>
                </a>
              </div>
            </div>

            {/* Product ticker pills */}
            <div className="hero-commodities-ticker">
              <span className="commodities-lbl">COMMODITY LINES:</span>
              <div className="commodities-pills">
                {["Raw Rice Bran", "DORB", "Rice DDGS", "Corn DDGS", "Broken Rice", "Paddy Husk", "PP & Jute Bags"].map((item, i) => (
                  <a key={i} href="#products" className="commodity-pill">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Telemetry & Visual Sidebar */}
          <div className="hero-right-sidebar">
            
            {/* Warehouse Godown Inset Image */}
            <div className="hero-warehouse-card">
              <img
                src="https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/1c613ef38-856b-4e24-acce-baf2db144491.png"
                alt="Stacked sacks of rice in a Kolkata godown with sunlight streaming through arched windows"
                className="hero-warehouse-img"
                loading="eager"
              />
              <div className="hero-warehouse-badge">
                <span className="hero-badge-tag">Strand Road Godown</span>
                <span className="hero-badge-text">Graded Ex-Kolkata</span>
              </div>
            </div>

            {/* Grid of 4 compact industrial telemetry cells */}
            <div className="hero-telemetry-grid">
              
              <div className="hero-telemetry-cell">
                <div className="telemetry-cell-head">
                  <span className="telemetry-cell-k"><Building2 size={11} /> Incorporation</span>
                </div>
                <div className="telemetry-cell-val">19 Dec 2003</div>
                <div className="telemetry-cell-sub">Private Limited · 22+ Yrs</div>
              </div>

              <div className="hero-telemetry-cell">
                <div className="telemetry-cell-head">
                  <span className="telemetry-cell-k"><Clock size={11} /> Trade Desk</span>
                </div>
                <div className="telemetry-cell-val">Mon – Sun</div>
                <div className="telemetry-cell-sub">09:30 – 19:00 IST · 7 Days</div>
              </div>

              <button
                className="hero-telemetry-cell hero-telemetry-btn"
                onClick={() => copy("19AACCB6350P1Z8", "gstin")}
                title="Click to copy GSTIN"
                type="button"
              >
                <div className="telemetry-cell-head">
                  <span className="telemetry-cell-k">
                    GSTIN {copied === "gstin" ? <Check size={11} className="text-emerald-500" /> : <Copy size={11} />}
                  </span>
                  {copied === "gstin" && <span className="telemetry-copy-pill">COPIED</span>}
                </div>
                <div className="telemetry-cell-val mono">19AACCB6350P1Z8</div>
                <div className="telemetry-cell-sub">West Bengal State Tax</div>
              </button>

              <button
                className="hero-telemetry-cell hero-telemetry-btn"
                onClick={() => copy("U15497WB2003PTC096805", "cin")}
                title="Click to copy CIN"
                type="button"
              >
                <div className="telemetry-cell-head">
                  <span className="telemetry-cell-k">
                    CIN {copied === "cin" ? <Check size={11} className="text-emerald-500" /> : <Copy size={11} />}
                  </span>
                  {copied === "cin" && <span className="telemetry-copy-pill">COPIED</span>}
                </div>
                <div className="telemetry-cell-val mono">U15497WB2003PTC096805</div>
                <div className="telemetry-cell-sub">MCA Registered · RoC Kolkata</div>
              </button>

            </div>
          </div>

        </div>

        {/* Bottom full-width trade corridor strip */}
        <div className="hero-corridor-strip">
          <div className="corridor-item">
            <Anchor size={13} className="text-[var(--gold-light)]" />
            <span>Port Freight: Kolkata Dock System &amp; Haldia Deepwater</span>
          </div>
          <div className="corridor-dot">·</div>
          <div className="corridor-item">
            <MapPin size={13} className="text-[var(--gold-light)]" />
            <span>Direct Sourcing: Burdwan, Midnapore &amp; Bihar Grain Belt</span>
          </div>
          <div className="corridor-dot">·</div>
          <div className="corridor-item">
            <ShieldCheck size={13} className="text-[var(--gold-light)]" />
            <span>Assay Certified &amp; Calibrated Weighbridge Dispatches</span>
          </div>
        </div>

      </div>
    </section>
  );
}
