import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { BRAND_INFO } from "@/data/siteContent";
import { PRIMARY_NAV_LINKS } from "@/data/navigation";

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleLinkClick = (e, href) => {
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
    <footer
      className="relative z-10 w-full bg-primary text-white pt-16 pb-10 border-t border-white/25 shadow-2xl [&_p]:text-white [&_span]:text-white [&_h4]:text-white"
      style={{
        backgroundColor: "var(--primary)",
        color: "#ffffff",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-white/25">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col justify-between min-w-0">
            <div>
              <div className="flex flex-col mb-6">
                <Link
                  to="/"
                  onClick={(e) => handleLinkClick(e, "/")}
                  className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded self-start"
                >
                  <img
                    src="/logo.png"
                    alt={BRAND_INFO.fullName}
                    className="h-11 sm:h-12 w-auto object-contain object-left mb-4"
                  />
                </Link>
                <span className="text-xs tracking-[0.25em] text-white uppercase font-semibold">
                  {BRAND_INFO.tagline}
                </span>
              </div>
              <p className="text-sm font-normal text-white leading-relaxed max-w-sm">
                Architectural interior design atelier crafting serene, tactile, and
                unhurried residential environments tailored to meaningful living.
              </p>
            </div>

          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 min-w-0">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-5">
              Exploration
            </h4>
            <ul className="space-y-1.5">
              {PRIMARY_NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="py-1.5 px-2.5 -ml-2.5 rounded-full text-sm font-medium text-white hover:bg-[#1A1A1A] hover:text-white transition-all duration-200 inline-flex items-center gap-1.5 group min-h-[40px] sm:min-h-[36px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio & Enquiries */}
          <div className="lg:col-span-4 flex flex-col justify-between min-w-0">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-5">
                Studio Concierge
              </h4>
              <div className="space-y-4 text-sm text-white">
                <div className="min-w-0">
                  <span className="block text-[11px] text-white uppercase tracking-widest font-semibold mb-1">
                    Client Enquiries
                  </span>
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="text-white hover:bg-[#1A1A1A] hover:px-2.5 hover:-mx-2.5 rounded-full underline underline-offset-4 decoration-white/70 hover:no-underline transition-all duration-200 break-all sm:break-words inline-block py-1 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {BRAND_INFO.email}
                  </a>
                </div>
                <div>
                  <span className="block text-[11px] text-white uppercase tracking-widest font-semibold mb-1">
                    Direct Line
                  </span>
                  <a
                    href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`}
                    className="text-white hover:bg-[#1A1A1A] hover:px-2.5 hover:-mx-2.5 rounded-full underline underline-offset-4 decoration-white/70 hover:no-underline transition-all duration-200 inline-block py-1 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {BRAND_INFO.phone}
                  </a>
                </div>
                <div className="text-xs text-white leading-relaxed pt-1">
                  {BRAND_INFO.address}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <span className="text-[11px] text-white uppercase tracking-widest font-semibold block mb-2">
                Office Hours
              </span>
              <p className="text-xs text-white">
                Monday – Saturday: 10:00 AM – 7:00 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Centered Copyright without Return to Top */}
        <div className="pt-8 flex items-center justify-center text-center">
          <p className="text-xs text-white font-normal">
            © {new Date().getFullYear()} {BRAND_INFO.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
