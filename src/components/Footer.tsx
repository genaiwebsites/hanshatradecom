"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="foot-grid">

          {/* Brand */}
          <div className="foot-brand">
            <span className="brand-mark">
              <svg viewBox="0 0 24 24" fill="#F5F2EA" aria-hidden="true" width="22" height="22">
                <path d="M12 3c2.3 3 2.3 6.8 0 9.8-2.3-3-2.3-6.8 0-9.8z" />
                <path d="M6.2 7.6c3.1.7 5.3 3.5 5.4 7.1-3.1-.7-5.3-3.5-5.4-7.1z" />
                <path d="M17.8 7.6c-3.1.7-5.3 3.5-5.4 7.1 3.1-.7 5.3-3.5 5.4-7.1z" />
                <path d="M11.4 14.5h1.2V21h-1.2z" />
              </svg>
            </span>
            <p>
              Hansha Tradecom Pvt. Ltd. supplies rice bran, DDGS, broken rice, paddy husk
              and grain packaging in bulk, from Strand Road, Kolkata, since 2003.
            </p>
          </div>

          {/* Products */}
          <div className="foot-col">
            <h5>Products</h5>
            <a href="#products">Raw rice bran</a>
            <a href="#products">De-oiled rice bran</a>
            <a href="#products">Rice and corn DDGS</a>
            <a href="#products">Broken rice</a>
            <a href="#products">Paddy husk</a>
            <a href="#products">Rice bags and gunny</a>
          </div>

          {/* Company */}
          <div className="foot-col">
            <h5>Company</h5>
            <a href="#company">The firm</a>
            <a href="#process">Process</a>
            <a href="#quality">Quality</a>
            <a href="#logistics">Logistics</a>
            <a href="#contact">Request a quote</a>
          </div>

          {/* Registry */}
          <div className="foot-col">
            <h5>Registry</h5>
            <span className="mono-sm">CIN: U15497WB2003PTC096805</span>
            <span className="mono-sm">GSTIN: 19AACCB6350P1Z8</span>
            <span className="mono-sm">Incorporated: 19 December 2003</span>
            <span className="mono-sm">Director: Mukesh Kumar Choudhary</span>
            <span className="mono-sm">55/1A Strand Road, Kolkata 700006</span>
          </div>

        </div>

        <div className="foot-bottom">
          <span>© {year} Hansha Tradecom Pvt. Ltd. All rights reserved.</span>
          <span>Strand Road, Kolkata. Open Monday to Sunday.</span>
        </div>
      </div>
    </footer>
  );
}
