"use client";

import { LOGISTICS_CARDS, HSN_CODES } from "@/data/content";
import { Anchor, Train, FileText, Clock, Compass } from "lucide-react";

export default function Logistics() {
  const iconMap = [
    <Anchor key="anchor" size={18} className="text-[var(--gold)]" />,
    <Train key="train" size={18} className="text-[var(--gold)]" />,
    <FileText key="file" size={18} className="text-[var(--gold)]" />,
    <Clock key="clock" size={18} className="text-[var(--gold)]" />,
  ];

  return (
    <section className="sec" id="logistics">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="sec-title">Positioned on the Hooghly.</h2>
          </div>
          <p className="sec-meta">
            Minutes from Kolkata and Haldia port infrastructure, with pan-India rake and road freight access.
          </p>
        </div>

        <div className="logi-grid">
          <div className="logi-copy">
            <div className="logi-header-tag">
              <Compass size={15} className="text-[var(--green)]" />
              <span>Grain Corridor &amp; Maritime Access</span>
            </div>
            <h2>Wired into Eastern India&apos;s grain belt &amp; global shipping lanes.</h2>
            <p>
              Our Strand Road headquarters places Hansha Tradecom within direct proximity to Kolkata and Haldia docks, allowing export consignments to reach ocean-going vessels without intermediate transit friction or dead miles.
            </p>

            <div className="logi-cards">
              {LOGISTICS_CARDS.map((card, idx) => (
                <div key={idx} className="logi-card">
                  <div className="logi-card-icon-wrap">
                    {iconMap[idx % iconMap.length]}
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>

            <div className="hsn-strip">
              <span className="lbl">HSN CODES COVERED</span>
              <div className="hsn-codes">
                {HSN_CODES.map((code, idx) => (
                  <span key={idx}>{code}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="logi-media">
            <img
              src="https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/1244d2d1b-6d66-4e6b-a313-eb4a6976b014.png"
              alt="Kolkata port cranes and bagged cargo on the Hooghly at golden hour"
              loading="lazy"
            />
            <div className="logi-caption">
              <span className="logi-caption-kicker">Kolkata &amp; Haldia Docklands</span>
              <span className="logi-caption-text">Direct Container &amp; Breakbulk Handling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
