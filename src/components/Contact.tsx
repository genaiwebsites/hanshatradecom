"use client";

import { useState, FormEvent } from "react";

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
    if (!msgField || msgField.value.trim().length < 10) {
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
          <p className="sec-meta">Response within one business day, seven days a week.</p>
        </div>

        <div className="contact-grid">
          <div className="form-card">
            {!submitted ? (
              <>
                <h3>Tell us your requirement.</h3>
                <p className="sub">
                  Product, tonnage and destination. The desk will revert with prevailing rates and freight.
                </p>
                <form id="quoteForm" noValidate onSubmit={handleSubmit}>
                  <div className="f-row">
                    <div className="f-field">
                      <label htmlFor="fName">
                        Full name <b>*</b>
                      </label>
                      <input
                        id="fName"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="e.g. A. K. Banerjee"
                        className={errors.name ? "invalid" : ""}
                        onChange={() => setErrors((prev) => ({ ...prev, name: false }))}
                      />
                    </div>
                    <div className="f-field">
                      <label htmlFor="fCompany">Company</label>
                      <input
                        id="fCompany"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Firm, mill or factory"
                      />
                    </div>
                  </div>
                  <div className="f-row">
                    <div className="f-field">
                      <label htmlFor="fEmail">
                        Email <b>*</b>
                      </label>
                      <input
                        id="fEmail"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        className={errors.email ? "invalid" : ""}
                        onChange={() => setErrors((prev) => ({ ...prev, email: false }))}
                      />
                    </div>
                    <div className="f-field">
                      <label htmlFor="fPhone">Phone</label>
                      <input
                        id="fPhone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91"
                      />
                    </div>
                  </div>
                  <div className="f-row">
                    <div className="f-field">
                      <label htmlFor="fProduct">Product of interest</label>
                      <select id="fProduct" name="product">
                        <option>Raw Rice Bran</option>
                        <option>De-Oiled Rice Bran (DORB)</option>
                        <option>Dry Rice DDGS</option>
                        <option>Corn DDGS</option>
                        <option>Broken Rice</option>
                        <option>Paddy Husk</option>
                        <option>HDPE/PP Rice Bags</option>
                        <option>Jute Gunny Bags</option>
                        <option>Multiple or other</option>
                      </select>
                    </div>
                    <div className="f-field">
                      <label htmlFor="fQty">Approximate quantity</label>
                      <input id="fQty" name="qty" type="text" placeholder="e.g. 30 MT per month" />
                    </div>
                  </div>
                  <div className="f-row">
                    <div className="f-field full">
                      <label htmlFor="fMsg">
                        Message <b>*</b>
                      </label>
                      <textarea
                        id="fMsg"
                        name="message"
                        placeholder="Destination, packing preference, target specs"
                        className={errors.message ? "invalid" : ""}
                        onChange={() => setErrors((prev) => ({ ...prev, message: false }))}
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-solid">
                    Submit enquiry
                  </button>
                </form>
              </>
            ) : (
              <div className="form-success" id="formSuccess">
                <h3>Enquiry logged.</h3>
                <p>
                  Thank you. The trade desk will revert with rates and freight within one business day.
                  <br />
                  Urgent? Call the desk, Monday to Sunday.
                </p>
              </div>
            )}
          </div>

          <aside className="desk">
            <h4>Trade desk</h4>
            <address>
              55/1A, 2nd Floor, Strand Road,
              <br />
              RNO-204, Kolkata 700006,
              <br />
              West Bengal, India
            </address>
            <div className="desk-line">
              <span className="k">Phone</span>
              <a href="tel:+918043840241">+91 80438 40241</a>
            </div>
            <div className="desk-line">
              <span className="k">Email</span>
              <a href="mailto:info@hanshatradecom.com">info@hanshatradecom.com</a>
            </div>
            <div className="desk-line">
              <span className="k">Hours</span>
              <span>Mon to Sun, 09:30 to 19:00 IST</span>
            </div>
            <div className="desk-line">
              <span className="k">GSTIN</span>
              <span>19AACCB6350P1Z8</span>
            </div>
            <div className="desk-line">
              <span className="k">CIN</span>
              <span>U15497WB2003PTC096805</span>
            </div>
            <p className="desk-note">
              Also listed and verified on IndiaMART and TradeIndia as Hansha Tradecom Pvt. Ltd. Bulk and
              container loads available, ex-Kolkata or FOR destination.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
