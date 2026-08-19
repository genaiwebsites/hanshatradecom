"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = ["company", "products", "process", "quality", "logistics"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
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
    { href: "#quality", label: "Quality" },
    { href: "#logistics", label: "Logistics" },
  ];

  return (
    <header id="siteHeader" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        {/* ── Brand ── */}
        <a className="nav-brand" href="#top" aria-label="Hansha Tradecom home">
          <span className="nav-brand-mark">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="18" height="18">
              <path d="M12 3c2.3 3 2.3 6.8 0 9.8-2.3-3-2.3-6.8 0-9.8z" />
              <path d="M6.2 7.6c3.1.7 5.3 3.5 5.4 7.1-3.1-.7-5.3-3.5-5.4-7.1z" />
              <path d="M17.8 7.6c-3.1.7-5.3 3.5-5.4 7.1 3.1-.7 5.3-3.5 5.4-7.1z" />
              <path d="M11.4 14.5h1.2V21h-1.2z" />
            </svg>
          </span>
          <span className="nav-brand-name">Hansha Tradecom</span>
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
            Request a quote
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
