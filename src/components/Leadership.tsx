"use client";

import { LEADERSHIP } from "@/data/content";

export default function Leadership() {
  return (
    <section className="sec" id="leadership">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="sec-title">Executive leadership.</h2>
          </div>
          <p className="sec-meta">
            Decades of commodity trade acumen, fiscal governance and mill relationships in Eastern India.
          </p>
        </div>

        <div className="leadership-grid">
          {LEADERSHIP.map((leader, idx) => (
            <article key={idx} className="leader-card">
              <div className="leader-top">
                <div className="leader-avatar">
                  <span>{leader.initials}</span>
                </div>
              </div>
              
              <div className="leader-content">
                <div className="leader-name-wrap">
                  <h3 className="leader-name">{leader.name}</h3>
                  {leader.credential && (
                    <span className="leader-cred-tag">{leader.credential}</span>
                  )}
                </div>
                <p className="leader-role">{leader.role}</p>
                <p className="leader-bio">{leader.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
