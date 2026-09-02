"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Phone } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 30;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
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

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
      e.preventDefault();
      if (window.location.hash) {
        window.history.pushState(null, "", "/");
      }
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, opts?: { duration?: number }) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.0 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <header id="siteHeader" className={`header-root ${scrolled ? "scrolled" : "at-top"} ${menuOpen ? "drawer-open" : ""}`}>
      <div className="nav-inner">
        {/* ── Brand ── */}
        <a className="nav-brand" href="/" onClick={handleLogoClick} aria-label="Hansha Tradecom home">
          <img
            src="/images/brand/hansha-tradecom-logo-128.png"
            alt="Hansha Tradecom Logo"
            width={40}
            height={40}
            className="nav-brand-img"
          />
          <span className="nav-brand-name">Hansha Tradecom</span>
        </a>

        {/* ── Desktop Nav Links ── */}
        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={activeSection === href.slice(1) ? "active" : ""}
            >
              <span>{label}</span>
            </a>
          ))}
        </nav>

        {/* ── Actions & CTA ── */}
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
            <div className="mob-contact-row">
              <a href="tel:+918043840241" className="mob-phone">
                <Phone size={14} /> +91 80438 40241
              </a>
            </div>
            <a href="#contact" className="mob-cta" onClick={() => setMenuOpen(false)}>
              Request a quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
