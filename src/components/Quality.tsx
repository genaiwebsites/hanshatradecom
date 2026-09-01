"use client";

import { QUALITY_SPECS, QUALITY_CHECKS } from "@/data/content";
import { CheckCircle2, ShieldCheck, Microscope } from "lucide-react";

export default function Quality() {
  return (
    <section className="sec" id="quality">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="sec-title">Tested parameters, declared per batch.</h2>
          </div>
          <p className="sec-meta">
            Moisture, oil, protein, fibre and purity ranges verified at partner laboratories before dispatch.
          </p>
        </div>

        <div className="quality-grid">
          <div className="quality-media">
            <img
              src="https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/176ff7156-01ea-45ec-9085-845325221697.png"
              alt="Sample of raw rice bran on jute cloth, ready for laboratory testing"
              loading="lazy"
            />
            <div className="quality-media-overlay">
              <div className="quality-tag">
                <Microscope size={14} className="text-[var(--gold-light)]" />
                <span>Lab Sample Assayed Ex-Kolkata</span>
              </div>
            </div>
          </div>

          <div className="quality-copy">
            <div className="quality-badge-row">
              <ShieldCheck size={16} className="text-[var(--green)]" />
              <h3>Graded for Feed, Extraction &amp; Processing</h3>
            </div>
            <p>
              We sample incoming material at mill gates and consolidated loading points to ensure nutritional, physical and moisture parameters strictly match declared contract specifications.
            </p>

            <div className="table-responsive">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Primary Specification</th>
                    <th>Secondary Parameter</th>
                  </tr>
                </thead>
                <tbody>
                  {QUALITY_SPECS.map((row, idx) => (
                    <tr key={idx}>
                      <td className="font-semibold text-[var(--ink)]">{row.product}</td>
                      <td>{row.primary}</td>
                      <td>{row.secondary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="checks-wrap">
              <span className="checks-title">Standard Operating Quality Checkpoints:</span>
              <ul className="checks-grid">
                {QUALITY_CHECKS.map((check, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
