import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ArrowUpRight } from "lucide-react";
import { PRIMARY_NAV_LINKS } from "@/data/navigation";
import { BRAND_INFO } from "@/data/siteContent";
import { useActiveSection } from "@/hooks/useActiveSection";
import MobileMenu from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

const SECTION_IDS = [
  "hero",
  "about",
  // "philosophy",
  "services",
  "projects",
  "experience",
  "process",
  "testimonials",
  "inspiration",
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const activeSection = useActiveSection(SECTION_IDS);

  const isHomePage = location.pathname === "/";

  const handleNavClick = (e, href) => {
    if (href === location.pathname) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      if (isHomePage) {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 py-3.5 shadow-md border-b border-white/15 text-white"
        style={{ backgroundColor: "#BE5037" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          {/* Studio Brand Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center min-h-[48px] group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xl p-1 shrink-0"
            aria-label={`${BRAND_INFO.fullName} - Return to home`}
          >
            <img
              src="/logo.png"
              alt={BRAND_INFO.fullName}
              className="h-11 sm:h-14 w-auto max-w-[190px] sm:max-w-[230px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-4 lg:gap-7 xl:gap-8"
            aria-label="Main Navigation"
          >
            {PRIMARY_NAV_LINKS.map((link) => {
              let isActive = false;

              if (link.href === "/") {
                isActive = isHomePage;
              } else if (link.href.startsWith("/#")) {
                const targetId = link.href.replace("/#", "");
                isActive = isHomePage && activeSection === targetId;
              } else {
                isActive = location.pathname === link.href;
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "relative py-2 px-1 text-xs uppercase tracking-[0.16em] lg:tracking-[0.2em] text-white transition-[color,opacity] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded whitespace-nowrap after:content-[''] after:absolute after:bottom-1 after:left-1 after:right-1 after:h-[2px] after:bg-white after:rounded-full after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isActive
                      ? "font-semibold after:scale-x-100"
                      : "font-medium opacity-95 hover:opacity-100 after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              className="btn-sweep btn-sweep-ink hidden lg:inline-flex items-center gap-1.5 min-h-[44px] text-xs uppercase tracking-[0.18em] text-primary hover:text-white px-5 py-2.5 rounded-full bg-white border-[1.5px] border-white hover:border-[#1A1A1A] transition-[color,background-color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] group shadow-[0_6px_18px_-4px_rgba(0,0,0,0.22)] hover:shadow-[0_12px_26px_-6px_rgba(0,0,0,0.45)] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-full bg-white/15 border border-white/60 text-white hover:bg-white hover:text-[#1A1A1A] hover:border-white hover:scale-105 active:scale-95 transition-all duration-200 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Modal */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
