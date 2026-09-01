"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = ["company", "products", "process", "leadership", "quality", "logistics"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  const navLinks = [
    { href: "#company", label: "Company" },
    { href: "#products", label: "Products" },
    { href: "#process", label: "Process" },
    { href: "#leadership", label: "Leadership" },
    { href: "#quality", label: "Quality" },
    { href: "#logistics", label: "Logistics" },
  ];

  return (
    <header id="siteHeader" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        {/* ── Brand ── */}
        <a className="nav-brand" href="#top" aria-label="Hansha Tradecom home">
          <img
            src="/images/brand/hansha-tradecom-logo-128.png"
            alt="Hansha Tradecom Logo"
            width={40}
            height={40}
            className="nav-brand-img"
          />
          <div className="nav-brand-text">
            <span className="nav-brand-name">Hansha Tradecom</span>
            <span className="nav-brand-sub">Pvt. Ltd. · Est. 2003</span>
          </div>
        </a>

        {/* ── Desktop Nav ── */}
        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={activeSection === href.slice(1) ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ── CTA + Burger ── */}
        <div className="nav-end">
          <a href="#contact" className="nav-cta">
            <span>Request a quote</span>
            <ArrowUpRight size={14} className="nav-cta-icon" />
          </a>
          <button
            className="burger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((p) => !p)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {menuOpen && (
        <div className="mobile-drawer" role="dialog" aria-label="Mobile navigation">
          <nav>
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a href="#contact" className="mob-cta" onClick={() => setMenuOpen(false)}>
              Request a quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
