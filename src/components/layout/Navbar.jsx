import React, { useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import { PRIMARY_NAV_LINKS } from "@/data/navigation";
import { BRAND_INFO } from "@/data/siteContent";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

const SECTION_IDS = [
  "hero",
  "about",
  "philosophy",
  "services",
  "projects",
  "experience",
  "process",
  "testimonials",
  "inspiration",
  "contact",
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(60);
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out",
          isScrolled
            ? "bg-secondary/95 backdrop-blur-md py-4 shadow-sm border-b border-primary/10"
            : "bg-transparent py-6 md:py-8"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Studio Brand Logo */}
          <a
            href="#hero"
            className="flex flex-col group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
            aria-label={`${BRAND_INFO.fullName} - Return to top`}
          >
            <span className="text-xl sm:text-2xl font-light tracking-[0.28em] text-foreground transition-opacity group-hover:opacity-80">
              {BRAND_INFO.name}
            </span>
            <span className="text-[9px] tracking-[0.38em] text-foreground/60 uppercase -mt-0.5">
              {BRAND_INFO.suffix}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main Navigation"
          >
            {PRIMARY_NAV_LINKS.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative py-1 text-xs uppercase tracking-[0.2em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded",
                    isActive
                      ? "text-primary font-medium"
                      : "text-primary/70 hover:text-primary"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary rounded-full transition-all duration-300"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-primary px-5 py-2.5 rounded-full border border-primary/30 hover:bg-primary hover:text-secondary transition-all duration-300 active:scale-95"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-full hover:bg-primary/10 transition-colors md:hidden text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
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
