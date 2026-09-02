"use client";

import { PROCESS_STEPS } from "@/data/content";
import { Wheat, SlidersHorizontal, Microscope, Package, Truck } from "lucide-react";

export default function Process() {
  const iconMap: Record<string, React.ReactNode> = {
    "01": <Wheat size={20} className="step-icon" />,
    "02": <SlidersHorizontal size={20} className="step-icon" />,
    "03": <Microscope size={20} className="step-icon" />,
    "04": <Package size={20} className="step-icon" />,
    "05": <Truck size={20} className="step-icon" />,
  };

  return (
    <section className="sec dark-section" id="process">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="sec-title text-white">How our supply chain works.</h2>
          </div>
          <p className="sec-meta text-slate-300">
            From mill gate to laboratory assay, calibrated weighbridge, and multi-modal dispatch.
          </p>
        </div>

        <div className="steps-grid">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-icon-wrap">
                <div className="step-icon-badge" aria-hidden="true">
                  {iconMap[step.number] || <Wheat size={20} className="step-icon" />}
                </div>
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
