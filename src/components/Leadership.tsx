"use client";

import { LEADERSHIP } from "@/data/content";

export default function Leadership() {
  return (
    <section className="sec" id="leadership">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="sec-title">The people behind the desk.</h2>
          </div>
          <p className="sec-meta">
            Two decades of commodity trade acumen rooted in Eastern India&apos;s agricultural corridors.
          </p>
        </div>

        <div className="leadership-grid">
          {LEADERSHIP.map((leader, idx) => (
            <article key={idx} className="leader-card">
              <div className="leader-top">
                <div className="leader-avatar">
                  <span>{leader.initials}</span>
                </div>
                <span className="leader-idx">DIR · 0{idx + 1}</span>
              </div>
              
              <div className="leader-content">
                <h3 className="leader-name">{leader.name}</h3>
                <p className="leader-role">{leader.role}</p>
                <div className="leader-focus-badge">{leader.focus}</div>
                <p className="leader-bio">{leader.bio}</p>
              </div>

              <div className="leader-foot">
                <span className="leader-desk-tag">Hansha Trade Desk · Kolkata</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
