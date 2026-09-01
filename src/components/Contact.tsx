"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, Clock, MapPin, CheckCircle, Send, FileCheck, Building } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const nameField = form.elements.namedItem("name") as HTMLInputElement;
    const emailField = form.elements.namedItem("email") as HTMLInputElement;
    const msgField = form.elements.namedItem("message") as HTMLTextAreaElement;

    let valid = true;
    const newErrors: { [key: string]: boolean } = {};

    if (!nameField || nameField.value.trim().length < 2) {
      newErrors.name = true;
      valid = false;
    }
    if (!emailField || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
      newErrors.email = true;
      valid = false;
    }
    if (!msgField || msgField.value.trim().length < 6) {
      newErrors.message = true;
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setSubmitted(true);
    }
  };

  return (
    <section className="sec" id="contact">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="sec-title">Request a quotation.</h2>
          </div>
          <p className="sec-meta">
            Specify product, tonnage and destination. Our team responds with prevailing spot rates and freight estimates within one business day.
          </p>
        </div>

        <div className="contact-grid">
          {/* Form Side */}
          <div className="form-card">
            {!submitted ? (
              <>
                <div className="form-card-head">
                  <h3>Submit Consignment Requirement</h3>
                  <p className="sub">
                    Direct mill-gate quotations for domestic dispatch or export CIF/FOB terms.
                  </p>
                </div>

                <form id="quoteForm" className="contact-form" noValidate onSubmit={handleSubmit}>
                  
                  {/* Row 1: Name & Company */}
                  <div className="f-row">
                    <div className="f-field">
                      <label htmlFor="fName">
                        Full Name <span className="req">*</span>
                      </label>
                      <input
                        id="fName"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="e.g. Mukesh Agarwal"
                        className={errors.name ? "invalid" : ""}
                        onChange={() => setErrors((prev) => ({ ...prev, name: false }))}
                      />
                      {errors.name && <span className="field-err">Please enter your name</span>}
                    </div>

                    <div className="f-field">
                      <label htmlFor="fCompany">
                        Company / Firm Name
                      </label>
                      <input
                        id="fCompany"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Feed Mill / Solvent Unit / Processing Plant"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="f-row">
                    <div className="f-field">
                      <label htmlFor="fEmail">
                        Work Email <span className="req">*</span>
                      </label>
                      <input
                        id="fEmail"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="procurement@company.com"
                        className={errors.email ? "invalid" : ""}
                        onChange={() => setErrors((prev) => ({ ...prev, email: false }))}
                      />
                      {errors.email && <span className="field-err">Valid email address required</span>}
                    </div>

                    <div className="f-field">
                      <label htmlFor="fPhone">
                        Contact Phone / WhatsApp
                      </label>
                      <input
                        id="fPhone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 98300 00000"
                      />
                    </div>
                  </div>

                  {/* Row 3: Product & Tonnage */}
                  <div className="f-row">
                    <div className="f-field">
                      <label htmlFor="fProduct">
                        Product of Interest
                      </label>
                      <div className="select-wrap">
                        <select id="fProduct" name="product" defaultValue="Raw Rice Bran">
                          <option value="Raw Rice Bran">Raw Rice Bran (HSN 2302 2020)</option>
                          <option value="De-Oiled Rice Bran (DORB)">De-Oiled Rice Bran - DORB (HSN 2302 2010)</option>
                          <option value="Dry Rice DDGS">Dry Rice DDGS (HSN 2302)</option>
                          <option value="Corn DDGS">Corn DDGS (HSN 2302 1090)</option>
                          <option value="Broken Rice">Broken Rice (HSN 1006)</option>
                          <option value="Paddy Husk">Paddy Husk (HSN 1213)</option>
                          <option value="HDPE / PP Rice Bags">HDPE / PP Rice Bags (HSN 6305)</option>
                          <option value="Jute Gunny Bags">Jute Gunny Bags (HSN 6305)</option>
                          <option value="Multiple Products">Multiple / Consolidated Consignment</option>
                        </select>
                      </div>
                    </div>

                    <div className="f-field">
                      <label htmlFor="fQty">
                        Approx. Quantity / Target Tonnage
                      </label>
                      <input 
                        id="fQty" 
                        name="qty" 
                        type="text" 
                        placeholder="e.g. 50 MT / 2 Rakes / Monthly contract" 
                      />
                    </div>
                  </div>

                  {/* Row 4: Message / Specs */}
                  <div className="f-row full-width">
                    <div className="f-field">
                      <label htmlFor="fMsg">
                        Consignment Destination &amp; Target Specifications <span className="req">*</span>
                      </label>
                      <textarea
                        id="fMsg"
                        name="message"
                        placeholder="Destination (FOR / Ex-mill / Port), packaging type (50kg PP/Jute/Loose), target moisture or protein parameters..."
                        className={errors.message ? "invalid" : ""}
                        onChange={() => setErrors((prev) => ({ ...prev, message: false }))}
                      ></textarea>
                      {errors.message && <span className="field-err">Please provide brief details on delivery destination or specs</span>}
                    </div>
                  </div>

                  {/* Submit Button & Response SLA Notice */}
                  <div className="form-submit-row">
                    <button type="submit" className="btn btn-solid submit-btn">
                      <span>Submit quotation request</span>
                      <Send size={14} />
                    </button>
                    <div className="submit-sla-badge">
                      <Clock size={13} className="submit-sla-icon" />
                      <span>Response within 1 business day · Mon to Sun</span>
                    </div>
                  </div>

                </form>
              </>
            ) : (
              <div className="form-success" id="formSuccess">
                <div className="form-success-icon">
                  <CheckCircle size={44} className="text-emerald-600" />
                </div>
                <h3>Quotation Request Logged</h3>
                <p>
                  Thank you. Your requirement has been routed directly to our commercial team. An executive will revert with prevailing spot rates and freight estimates within one business day.
                </p>
                <div className="form-success-action">
                  <button 
                    type="button" 
                    className="btn btn-outline btn-sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit another requirement
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Office Directory Sidebar */}
          <aside className="desk">
            <div className="desk-head">
              <h4>Commercial Office Directory</h4>
            </div>

            <address className="desk-address">
              <MapPin size={16} className="desk-icon flex-shrink-0 mt-0.5" />
              <div>
                <strong>Hansha Tradecom Pvt. Ltd.</strong><br />
                55/1A Strand Road, 2nd Floor, RNO-204,<br />
                Kolkata 700006, West Bengal, India
              </div>
            </address>

            <div className="desk-lines">
              <div className="desk-line">
                <span className="k"><Phone size={13} /> Direct Line</span>
                <a href="tel:+918043840241">+91 80438 40241</a>
              </div>
              <div className="desk-line">
                <span className="k"><Mail size={13} /> Email</span>
                <a href="mailto:info@hanshatradecom.com">info@hanshatradecom.com</a>
              </div>
              <div className="desk-line">
                <span className="k"><Clock size={13} /> Business Hours</span>
                <span>Mon – Sun, 09:30 – 19:00 IST</span>
              </div>
              <div className="desk-line">
                <span className="k"><FileCheck size={13} /> GSTIN</span>
                <span className="mono">19AACCB6350P1Z8</span>
              </div>
              <div className="desk-line">
                <span className="k"><Building size={13} /> CIN</span>
                <span className="mono">U15497WB2003PTC096805</span>
              </div>
            </div>

            <div className="desk-footer-badge">
              <p>
                Registered &amp; verified on IndiaMART &amp; TradeIndia. Bulk rakes, truckloads, and containerized cargo available ex-Kolkata godown or FOR destination across India.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
