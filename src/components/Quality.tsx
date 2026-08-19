"use client";

import { QUALITY_SPECS, QUALITY_CHECKS } from "@/data/content";
import { CheckCircle2 } from "lucide-react";

export default function Quality() {
  return (
    <section className="sec" id="quality">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="sec-title">Tested parameters.</h2>
          </div>
          <p className="sec-meta">
            Moisture, oil, protein, fiber and FFA ranges declared per batch.
          </p>
        </div>

        <div className="quality-grid">
          <div className="quality-media">
            <img
              src="https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/176ff7156-01ea-45ec-9085-845325221697.png"
              alt="Sample of raw rice bran on jute cloth, ready for laboratory testing"
            />
          </div>
          <div className="quality-copy">
            <h2>Graded for feed, extraction & processing.</h2>
            <p>
              We sample incoming material at loading points and mill gates to verify key
              nutritional and physical indicators before dispatch.
            </p>

            <table className="spec-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Primary Spec</th>
                  <th>Secondary Spec</th>
                </tr>
              </thead>
              <tbody>
                {QUALITY_SPECS.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.product}</td>
                    <td>{row.primary}</td>
                    <td>{row.secondary}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <ul className="checks-grid">
              {QUALITY_CHECKS.map((check, idx) => (
                <li key={idx}>
                  <CheckCircle2 className="w-4 h-4 text-[var(--brand-green)] flex-none mt-0.5" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
