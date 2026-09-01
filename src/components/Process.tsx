"use client";

import { PROCESS_STEPS } from "@/data/content";

export default function Process() {
  return (
    <section className="sec dark-section" id="process">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="sec-title text-white">How the desk operates.</h2>
          </div>
          <p className="sec-meta text-slate-300">
            From mill gate to laboratory assay, calibrated weighbridge, and multi-modal dispatch.
          </p>
        </div>

        <div className="steps-grid">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-num-wrap">
                <span className="step-num">{step.number}</span>
                <span className="step-line" />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
