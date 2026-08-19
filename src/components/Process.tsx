"use client";

import { PROCESS_STEPS } from "@/data/content";

export default function Process() {
  return (
    <section className="sec dark-section" id="process">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="sec-title">How the desk operates.</h2>
          </div>
          <p className="sec-meta">
            From mill gate to weighbridge to port or pan-India dispatch.
          </p>
        </div>

        <div className="steps-grid">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-num">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
