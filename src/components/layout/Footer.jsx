import React from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { BRAND_INFO } from "@/data/siteContent";
import { NAV_LINKS } from "@/data/navigation";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="relative z-10 w-full bg-primary text-secondary pt-16 pb-10 border-t border-secondary/20 shadow-2xl"
      style={{
        backgroundColor: "var(--primary)",
        color: "#ffffff",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-secondary/20">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex flex-col mb-6">
                <img
                  src="/logo.png"
                  alt={BRAND_INFO.fullName}
                  className="h-11 sm:h-12 w-auto object-contain object-left mb-4"
                />
                <span className="text-xs tracking-[0.25em] text-secondary/70 uppercase">
                  {BRAND_INFO.tagline}
                </span>
              </div>
              <p className="text-sm font-light text-secondary/80 leading-relaxed max-w-sm">
                Architectural interior design atelier crafting serene, tactile, and
                unhurried residential environments tailored to meaningful living.
              </p>
            </div>

            <div
              className="mt-8 pt-6 border-t border-secondary/15 space-y-1"
              style={{ color: "#ffffff", fontSize: "0.875rem" }}
            >
              <p style={{ color: "#ffffff" }}>
                {BRAND_INFO.established} • International Practice
              </p>
              <p style={{ color: "#ffffff" }}>{BRAND_INFO.location}</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-secondary/60 mb-6">
              Exploration
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary/80 hover:text-secondary hover:underline underline-offset-4 transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio & Inquiries */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-secondary/60 mb-6">
                Studio Concierge
              </h4>
              <div className="space-y-4 text-sm text-secondary/90">
                <div>
                  <span className="block text-[11px] text-secondary/50 uppercase tracking-widest mb-1">
                    Client Inquiries
                  </span>
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="hover:text-secondary underline underline-offset-4 decoration-secondary/40 transition-colors"
                  >
                    {BRAND_INFO.email}
                  </a>
                </div>
                <div>
                  <span className="block text-[11px] text-secondary/50 uppercase tracking-widest mb-1">
                    Direct Line
                  </span>
                  <span>{BRAND_INFO.phone}</span>
                </div>
                <div className="text-xs text-secondary/70 leading-relaxed pt-1">
                  {BRAND_INFO.address}
                </div>
              </div>
            </div>

            {/* Back to top button */}
            <div className="mt-8">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary/80 hover:text-secondary transition-colors p-2 -ml-2 cursor-pointer group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-light"
          style={{ color: "#ffffff", fontSize: "0.875rem" }}
        >
          <p style={{ color: "#ffffff" }}>
            © {new Date().getFullYear()} {BRAND_INFO.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-secondary transition-colors cursor-default">
              Bespoke Interior Architecture
            </span>
            <span>•</span>
            <span className="hover:text-secondary transition-colors cursor-default">
              Private Portfolio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
