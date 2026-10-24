import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import { PRIMARY_NAV_LINKS } from "@/data/navigation";
import { BRAND_INFO } from "@/data/siteContent";
import { Button } from "@/components/ui/button";

export default function MobileMenu({ isOpen, onClose, activeSection }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
      className="fixed inset-0 z-50 bg-primary/40 backdrop-blur-md transition-all duration-300 md:hidden flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm h-full bg-secondary text-primary p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-primary/10">
          <Link to="/" onClick={(e) => handleLinkClick(e, "/")} className="flex items-center">
            <img
              src="/logo.png"
              alt={BRAND_INFO.fullName}
              className="h-9 w-auto object-contain rounded-md"
            />
          </Link>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-4 my-6">
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
                className={`text-xl font-light tracking-wide transition-all duration-200 flex items-center justify-between py-2 px-2 rounded-xl ${
                  isActive
                    ? "text-primary font-medium bg-primary/10 pl-3 border-l-4 border-primary"
                    : "text-primary/75 hover:text-primary hover:bg-primary/5 hover:pl-3"
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA & Info */}
        <div className="pt-6 border-t border-primary/10 flex flex-col gap-4">
          <Button
            asChild
            className="w-full"
            onClick={(e) => handleLinkClick(e, "/contact")}
          >
            <Link to="/contact">Private Consultation</Link>
          </Button>

          <div className="text-xs text-primary/60 space-y-1 pt-2">
            <p>{BRAND_INFO.location}</p>
            <p>{BRAND_INFO.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
