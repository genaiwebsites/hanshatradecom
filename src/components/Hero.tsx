"use client";

import { useState } from "react";
import { ArrowRight, Check, Copy } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="hero-section" id="top">
      {/* ════ Full-bleed two-panel grid ════ */}
      <div className="hero-panels">

        {/* LEFT — dark ink panel */}
        <div className="hero-left">
          <div className="hero-left-inner">

            {/* Provenance tag */}
            <div className="hero-prov">
              <span className="prov-line" />
              <span>Kolkata, West Bengal — Est. 2003</span>
            </div>

            {/* Display heading */}
            <h1 className="hero-h1">
              Bulk supply<br />
              from Bengal's<br />
              <em>rice mills.</em>
            </h1>

            {/* Body */}
            <p className="hero-body">
              Rice bran, de-oiled bran, rice DDGS, broken rice,
              paddy husk and grain packaging — contracted at the mill gate,
              dispatched across India and to export.
            </p>

            {/* Actions */}
            <div className="hero-actions">
              <a href="#products" className="ha-primary">
                View products
                <ArrowRight size={16} strokeWidth={2} />
              </a>
              <a href="#contact" className="ha-secondary">
                Request a quote
              </a>
            </div>

            {/* Product index ticker */}
            <div className="hero-ticker">
              {["Rice Bran", "DORB", "Rice DDGS", "Corn DDGS", "Broken Rice", "Paddy Husk", "PP / Jute Bags"].map((item, i) => (
                <span key={i} className="ticker-item">
                  {i > 0 && <span className="ticker-dot" aria-hidden="true">·</span>}
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — full-bleed warehouse image */}
        <div className="hero-right">
          <img
            src="https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/1c613ef38-856b-4e24-acce-baf2db144491.png"
            alt="Stacked sacks of rice in a Kolkata godown with sunlight streaming through arched windows"
            className="hero-img"
          />
          {/* Inset caption */}
          <div className="hero-img-caption">
            <span className="caption-label">Godown · Kolkata</span>
            <span className="caption-title">Bran &amp; Bagged Rice</span>
          </div>
          {/* Floating credential chip */}
          <div className="hero-float-chip">
            <span className="chip-label">22+ years in commodity trade</span>
          </div>
        </div>
      </div>

      {/* ════ Credentials bar ════ */}
      <div className="hero-creds">
        <div className="cred-item">
          <span className="cred-k">Incorporated</span>
          <span className="cred-v">19 December 2003</span>
        </div>
        <div className="cred-sep" />
        <div className="cred-item">
          <span className="cred-k">Head office</span>
          <span className="cred-v">55/1A Strand Road, Kolkata 700006</span>
        </div>
        <div className="cred-sep" />
        <button
          className="cred-item cred-copy"
          onClick={() => copy("19AACCB6350P1Z8", "gstin")}
          title="Copy GSTIN"
        >
          <span className="cred-k">GSTIN {copied === "gstin" ? <Check size={10} /> : <Copy size={10} />}</span>
          <span className="cred-v mono">19AACCB6350P1Z8</span>
        </button>
        <div className="cred-sep" />
        <button
          className="cred-item cred-copy"
          onClick={() => copy("U15497WB2003PTC096805", "cin")}
          title="Copy CIN"
        >
          <span className="cred-k">CIN {copied === "cin" ? <Check size={10} /> : <Copy size={10} />}</span>
          <span className="cred-v mono">U15497WB2003PTC096805</span>
        </button>
        <div className="cred-sep" />
        <a href="#contact" className="cred-enquire">
          Enquire <ArrowRight size={13} strokeWidth={2.5} />
        </a>
      </div>
    </section>
  );
}
