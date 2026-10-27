import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, ArrowUpRight } from "lucide-react";
import { PRIMARY_NAV_LINKS } from "@/data/navigation";
import { BRAND_INFO } from "@/data/siteContent";
import { useScrollPosition } from "@/hooks/useScrollPosition";
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
  const navigate = useNavigate();
  const isScrolled = useScrollPosition(60);
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
        className="fixed top-0 left-0 right-0 z-40 py-3 sm:py-3.5 shadow-md border-b border-white/15 text-white"
        style={{ backgroundColor: "#BE5037" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Studio Brand Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg p-0.5"
            aria-label={`${BRAND_INFO.fullName} - Return to home`}
          >
            <img
              src="/logo.png"
              alt={BRAND_INFO.fullName}
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
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
                    "relative py-1 text-xs uppercase tracking-[0.2em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded",
                    isActive
                      ? "text-white font-medium"
                      : "text-white/75 hover:text-white"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full transition-all duration-300"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] !text-primary px-5 py-2.5 rounded-full bg-white hover:bg-white/90 transition-all duration-300 ease-out active:scale-95 group shadow-sm hover:shadow-md font-medium"
            >
              <span className="!text-primary font-medium">Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 !text-primary transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors md:hidden text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
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
