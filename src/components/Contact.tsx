"use client";

import { useState, useEffect, FormEvent } from "react";
import { Phone, Mail, Clock, MapPin, CheckCircle, Send, FileCheck, Building, Loader2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Raw Rice Bran");
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleProductSelect = (event: Event) => {
      const customEvent = event as CustomEvent<{ product: string }>;
      if (customEvent.detail?.product) {
        setSelectedProduct(customEvent.detail.product);
      }
    };

    window.addEventListener("hansha-select-product", handleProductSelect);
    return () => window.removeEventListener("hansha-select-product", handleProductSelect);
  }, []);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (isSubmitting) return;

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
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 400);
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
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "fNameErr" : undefined}
                        onChange={() => setErrors((prev) => ({ ...prev, name: false }))}
                      />
                      {errors.name && (
                        <span id="fNameErr" className="field-err" role="alert">
                          Please enter your full name
                        </span>
                      )}
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
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "fEmailErr" : undefined}
                        onChange={() => setErrors((prev) => ({ ...prev, email: false }))}
                      />
                      {errors.email && (
                        <span id="fEmailErr" className="field-err" role="alert">
                          Valid corporate email address required
                        </span>
                      )}
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
                        pattern="[0-9+\s\-()]{8,20}"
                        title="Enter a valid phone or mobile number (8-20 digits)"
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
                        <select 
                          id="fProduct" 
                          name="product" 
                          value={selectedProduct}
                          onChange={(e) => setSelectedProduct(e.target.value)}
                        >
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
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "fMsgErr" : undefined}
                        onChange={() => setErrors((prev) => ({ ...prev, message: false }))}
                      ></textarea>
                      {errors.message && (
                        <span id="fMsgErr" className="field-err" role="alert">
                          Please provide brief details on delivery destination or specs
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Submit Button & Response SLA Line */}
                  <div className="form-submit-wrap">
                    <button 
                      type="submit" 
                      className="btn btn-solid submit-btn" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          <span>Routing requirement...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit quotation request</span>
                          <Send size={14} />
                        </>
                      )}
                    </button>
                    <p className="submit-sla-line">
                      <Clock size={13} className="submit-sla-icon" />
                      <span>Response within 1 business day · Mon to Sat</span>
                    </p>
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
                    onClick={() => {
                      setSubmitted(false);
                      setIsSubmitting(false);
                    }}
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
                <span>Mon – Sat, 11:00 AM – 7:00 PM IST</span>
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
