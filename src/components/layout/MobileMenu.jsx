import React, { useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { PRIMARY_NAV_LINKS } from "@/data/navigation";
import { BRAND_INFO } from "@/data/siteContent";
import { Button } from "@/components/ui/button";

export default function MobileMenu({ isOpen, onClose, activeSection }) {
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
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt={BRAND_INFO.fullName}
              className="h-9 w-auto object-contain rounded-md"
            />
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-5 my-8">
          {PRIMARY_NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`text-2xl font-light tracking-wide transition-all duration-200 flex items-center justify-between py-1 ${
                  isActive
                    ? "text-primary font-medium pl-3 border-l-2 border-primary"
                    : "text-primary/70 hover:text-primary hover:pl-2"
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </a>
            );
          })}
        </nav>

        {/* Bottom CTA & Info */}
        <div className="pt-6 border-t border-primary/10 flex flex-col gap-4">
          <Button
            asChild
            className="w-full"
            onClick={onClose}
          >
            <a href="#contact">Private Consultation</a>
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
