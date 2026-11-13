import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import { PRIMARY_NAV_LINKS } from "@/data/navigation";
import { BRAND_INFO } from "@/data/siteContent";
import { Button } from "@/components/ui/button";

export default function MobileMenu({ isOpen, onClose, activeSection }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Prevent body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLinkClick = (e, href) => {
    onClose();

    if (href === location.pathname) {
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
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="fixed inset-0 z-50 bg-primary/40 backdrop-blur-md transition-all duration-300 md:hidden flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-[90vw] max-w-sm h-dvh bg-primary text-white p-5 sm:p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/25 shrink-0">
          <Link to="/" onClick={(e) => handleLinkClick(e, "/")} className="flex items-center min-h-[44px]">
            <img
              src="/logo.png"
              alt={BRAND_INFO.fullName}
              className="h-12 w-auto object-contain rounded-md"
            />
          </Link>

          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-full bg-white/15 border-[1.5px] border-white/50 text-white hover:bg-white hover:text-primary hover:border-white hover:rotate-90 active:scale-95 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-2 sm:gap-3 my-5">
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
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`group min-h-[44px] text-lg sm:text-xl tracking-wide transition-all duration-200 flex items-center justify-between py-2.5 px-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] ${
                  isActive
                    ? "bg-primary text-white font-medium shadow-md"
                    : "text-[#1A1A1A] font-normal hover:bg-[#1A1A1A] hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100 group-hover:translate-x-1"}`} />
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA & Info */}
        <div className="pt-5 border-t border-white/25 flex flex-col gap-4 shrink-0">
          <Button
            asChild
            className="w-full"
            onClick={(e) => handleLinkClick(e, "/contact")}
          >
            <Link to="/contact">Private Consultation</Link>
          </Button>

        </div>
      </div>
    </div>
  );
}
