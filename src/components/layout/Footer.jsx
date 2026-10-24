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
      className="relative z-10 w-full bg-primary text-white pt-16 pb-10 border-t border-white/20 shadow-2xl [&_p]:!text-white/85 [&_span]:!text-white/85 [&_h4]:!text-white/75"
      style={{
        backgroundColor: "var(--primary)",
        color: "#ffffff",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-white/20">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex flex-col mb-6">
                <Link
                  to="/"
                  onClick={(e) => handleLinkClick(e, "/")}
                  className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  <img
                    src="/logo.png"
                    alt={BRAND_INFO.fullName}
                    className="h-11 sm:h-12 w-auto object-contain object-left mb-4"
                  />
                </Link>
                <span className="text-xs tracking-[0.25em] !text-white/75 uppercase font-medium">
                  {BRAND_INFO.tagline}
                </span>
              </div>
              <p className="text-sm font-light !text-white/85 leading-relaxed max-w-sm">
                Architectural interior design atelier crafting serene, tactile, and
                unhurried residential environments tailored to meaningful living.
              </p>
            </div>

            <div
              className="mt-8 pt-6 border-t border-white/15 space-y-1 text-sm !text-white/85"
            >
              <p className="!text-white/85">
                {BRAND_INFO.established} • International Practice
              </p>
              <p className="!text-white/85">{BRAND_INFO.location}</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium !text-white/75 mb-6">
              Exploration
            </h4>
            <ul className="space-y-3">
              {PRIMARY_NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm !text-white/85 hover:!text-white hover:underline underline-offset-4 transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio & Inquiries */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-medium !text-white/75 mb-6">
                Studio Concierge
              </h4>
              <div className="space-y-4 text-sm !text-white/90">
                <div>
                  <span className="block text-[11px] !text-white/60 uppercase tracking-widest mb-1">
                    Client Inquiries
                  </span>
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="!text-white/90 hover:!text-white underline underline-offset-4 decoration-white/40 transition-colors"
                  >
                    {BRAND_INFO.email}
                  </a>
                </div>
                <div>
                  <span className="block text-[11px] !text-white/60 uppercase tracking-widest mb-1">
                    Direct Line
                  </span>
                  <span className="!text-white/90">{BRAND_INFO.phone}</span>
                </div>
                <div className="text-xs !text-white/80 leading-relaxed pt-1">
                  {BRAND_INFO.address}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <span className="text-[11px] !text-white/60 uppercase tracking-widest block mb-2">
                Office Hours
              </span>
              <p className="text-xs !text-white/85">
                Monday – Saturday: 10:00 AM – 7:00 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Centered Copyright without Return to Top */}
        <div className="pt-8 flex items-center justify-center text-center">
          <p className="text-xs !text-white/75 font-normal">
            © {new Date().getFullYear()} {BRAND_INFO.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
