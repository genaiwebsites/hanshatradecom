"use client";

import { LOGISTICS_CARDS, HSN_CODES } from "@/data/content";

export default function Logistics() {
  return (
    <section className="sec" id="logistics">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="sec-title">Strategic port & inland network.</h2>
          </div>
          <p className="sec-meta">Kolkata and Haldia ports, plus pan-India rail and road.</p>
        </div>

        <div className="logi-grid">
          <div className="logi-copy">
            <h2>Positioned on the Hooghly, wired into the grain belt.</h2>
            <p>
              Our registered office sits on Strand Road, minutes from Kolkata&apos;s port infrastructure. Export
              cargo reaches Kolkata and Haldia docks without dead miles, and domestic loads move by rake and
              truck to feed clusters across India.
            </p>

            <div className="logi-cards">
              {LOGISTICS_CARDS.map((card, idx) => (
                <div key={idx} className="logi-card">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>

            <div className="hsn-strip">
              <span className="lbl">HSN codes</span>
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
            />
          </div>
        </div>
      </div>
    </section>
  );
}
