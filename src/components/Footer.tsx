"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
      e.preventDefault();
      if (window.location.hash) {
        window.history.pushState(null, "", "/");
      }
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, opts?: { duration?: number }) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.0 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="foot-grid">

          {/* Brand */}
          <div className="foot-brand">
            <a href="/" onClick={handleLogoClick} className="foot-brand-header" aria-label="Hansha Tradecom home">
              <img
                src="/images/brand/hansha-tradecom-logo-128.png"
                alt="Hansha Tradecom Logo"
                width={44}
                height={44}
                className="foot-brand-img"
              />
              <div className="foot-brand-title">
                <h4>Hansha Tradecom</h4>
                <span>Private Limited</span>
              </div>
            </a>
            
            <p>
              Bulk aggregator, supplier and exporter of rice bran, de-oiled bran (DORB), DDGS, broken rice, paddy husk and industrial grain packaging from Strand Road, Kolkata since 2003.
            </p>
          </div>

          {/* Product Lines */}
          <div className="foot-col">
            <h5>Product Lines</h5>
            <a href="#products">Raw Rice Bran (HSN 2302)</a>
            <a href="#products">De-Oiled Rice Bran (DORB)</a>
            <a href="#products">Dry Rice DDGS &amp; Corn DDGS</a>
            <a href="#products">Sortex Clean Broken Rice</a>
            <a href="#products">Paddy Husk for Biomass</a>
            <a href="#products">HDPE / PP &amp; Jute Gunny Bags</a>
          </div>

          {/* Governance & Operations */}
          <div className="foot-col">
            <h5>Organization</h5>
            <a href="#company">The Trading House</a>
            <a href="#products">Bulk Portfolio</a>
            <a href="#process">Five-Step Process</a>
            <a href="#leadership">Leadership &amp; Directors</a>
            <a href="#quality">Quality Standards &amp; COA</a>
            <a href="#logistics">Port &amp; Rail Logistics</a>
            <a href="#contact">Request a Quotation</a>
          </div>

          {/* Registry & Statutory */}
          <div className="foot-col">
            <h5>Corporate Registry</h5>
            <div className="foot-registry-item">
              <span className="reg-k">CIN</span>
              <span className="reg-v mono-sm">U15497WB2003PTC096805</span>
            </div>
            <div className="foot-registry-item">
              <span className="reg-k">GSTIN</span>
              <span className="reg-v mono-sm">19AACCB6350P1Z8</span>
            </div>
            <div className="foot-registry-item">
              <span className="reg-k">Incorporated</span>
              <span className="reg-v">19 December 2003</span>
            </div>
            <div className="foot-registry-item">
              <span className="reg-k">Registered Office</span>
              <span className="reg-v">
                55/1A Strand Road, 2nd Floor, RNO-204,<br />
                Kolkata 700006
              </span>
            </div>
          </div>

        </div>

        <div className="foot-bottom">
          <div className="foot-bottom-center">
            <span>© {year} Hansha Tradecom Pvt. Ltd. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
