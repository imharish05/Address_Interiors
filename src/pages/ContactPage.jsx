import React, { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  AlertCircle,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { CONTACT_CONTENT, BRAND_INFO } from "@/data/siteContent";
import AnimatedSection from "@/components/common/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const EYEBROW =
  "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-3.5";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: CONTACT_CONTENT.projectTypes[0],
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    if (cleanPhone && !/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = "Please enter a valid 10-digit Indian mobile number";
    }
    if (!formData.message.trim()) {
      errs.message = "Please tell us a little about your project";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatusMessage({
        type: "error",
        text: "Please check the fields marked above and try again.",
      });
      return;
    }

    setErrors({});

    const formattedPhone = formData.phone ? `+91 ${formData.phone}` : "Not provided";
    const subject = encodeURIComponent(
      `Project Enquiry: ${formData.projectType} — ${formData.name}`
    );
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formattedPhone}\nProject Type: ${formData.projectType}\n\nProject Details:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${BRAND_INFO.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setStatusMessage({
      type: "info",
      text: `Your email draft is ready. If your email app did not open, contact us at ${BRAND_INFO.email}.`,
    });
  };

  return (
    <div className="pt-24 lg:pt-28 overflow-hidden bg-secondary">
      {/* 1. HERO HEADER */}
      <section className="px-5 sm:px-8 lg:px-12 py-12 sm:py-20 lg:py-24 text-center max-w-4xl mx-auto">
        <AnimatedSection delay={0.1}>
          <span className={EYEBROW}>Get in Touch With Us</span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-primary tracking-tight leading-[1.1] mb-4 sm:mb-5">
            {CONTACT_CONTENT.heading}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#1A1A1A]/85 leading-relaxed max-w-2xl mx-auto">
            {CONTACT_CONTENT.subheading}
          </p>
        </AnimatedSection>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="px-5 sm:px-8 lg:px-12 py-12 sm:py-20 lg:py-24 border-t border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 min-w-0">
              <AnimatedSection delay={0.15} className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-light text-primary tracking-tight mb-2">
                    Contact Our Team
                  </h2>
                  <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-normal">
                    Our team is here to answer your questions, discuss your plans, and arrange a visit to your site.
                  </p>
                </div>

                <div className="space-y-4 pt-1">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/[0.03] border border-primary/10">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-semibold text-[#1A1A1A]/75 block mb-0.5">
                        Email Us
                      </span>
                      <a
                        href={`mailto:${BRAND_INFO.email}`}
                        className="text-sm font-medium text-[#1A1A1A] hover:text-primary hover:underline underline-offset-4 transition-colors duration-200 break-all sm:break-words"
                      >
                        {BRAND_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/[0.03] border border-primary/10">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#1A1A1A]/75 block mb-0.5">
                        Call Us
                      </span>
                      <a
                        href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`}
                        className="text-sm font-medium text-[#1A1A1A] hover:text-primary hover:underline underline-offset-4 transition-colors duration-200"
                      >
                        {BRAND_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/[0.03] border border-primary/10">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#1A1A1A]/75 block mb-0.5">
                        Office Location
                      </span>
                      <p className="text-sm text-[#1A1A1A] leading-relaxed font-normal">
                        {BRAND_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/[0.03] border border-primary/10">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#1A1A1A]/75 block mb-0.5">
                        Working Hours
                      </span>
                      <p className="text-sm text-[#1A1A1A] font-normal">
                        Monday – Saturday: 10:00 AM – 7:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Points */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#1A1A1A] bg-primary/5 border border-primary/20 px-3 py-1 rounded-full font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Custom 3D Designs
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#1A1A1A] bg-primary/5 border border-primary/20 px-3 py-1 rounded-full font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Clear Cost Breakdown
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#1A1A1A] bg-primary/5 border border-primary/20 px-3 py-1 rounded-full font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> 10-Year Warranty
                  </span>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Project Enquiry Form */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.2}>
                <div className="p-5 sm:p-10 lg:p-12 rounded-3xl sm:rounded-[2rem] bg-primary/[0.025] border border-primary/15 shadow-xl">
                  <div className="mb-8 pb-6 border-b border-primary/10">
                    <h2 className="text-2xl sm:text-3xl font-light text-primary tracking-tight">
                      Send Us Your Project Details
                    </h2>
                    <p className="text-xs text-[#1A1A1A]/70 mt-1">
                      {CONTACT_CONTENT.demoNotice}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#1A1A1A] mb-2"
                      >
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Your Name"
                        aria-invalid={!!errors.name}
                        className={`text-[#1A1A1A] placeholder:text-[#1A1A1A]/55 border-primary/25 bg-white ${
                          errors.name ? "border-red-500 focus-visible:ring-red-500" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3 text-red-600" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[#1A1A1A] mb-2"
                        >
                          Email Address <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          aria-invalid={!!errors.email}
                          className={`text-[#1A1A1A] placeholder:text-[#1A1A1A]/55 border-primary/25 bg-white ${
                            errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3 h-3 text-red-600" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-[#1A1A1A] mb-2"
                        >
                          Phone Number (India)
                        </label>
                        <div
                          className={`flex h-12 rounded-xl overflow-hidden border bg-white hover:border-primary/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/25 transition-[border-color,box-shadow] duration-200 ${
                            errors.phone ? "border-red-500" : "border-primary/25"
                          }`}
                        >
                          <span className="inline-flex items-center px-3.5 bg-primary/10 text-[#1A1A1A] text-sm font-medium border-r border-primary/15 select-none font-sans">
                            +91
                          </span>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            maxLength={10}
                            value={formData.phone}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                              setFormData((prev) => ({ ...prev, phone: val }));
                              if (errors.phone) setErrors((prev) => ({ ...prev, phone: null }));
                            }}
                            placeholder="98765 43210"
                            className="w-full h-full bg-transparent px-4 py-2 text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/55 focus:outline-none"
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3 h-3 text-red-600" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-[#1A1A1A] mb-2"
                      >
                        What Type of Project Do You Need? <span className="text-primary">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="flex h-12 w-full rounded-xl border border-primary/25 bg-white px-4 py-2 text-sm text-[#1A1A1A] transition-[border-color,box-shadow] duration-200 hover:border-primary/50 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/25 cursor-pointer font-sans"
                      >
                        {CONTACT_CONTENT.projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-secondary text-[#1A1A1A]">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#1A1A1A] mb-2"
                      >
                        Tell Us About Your Project <span className="text-primary">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your home or office, the rooms you want to design, your preferred style, and when you would like the work to start..."
                        aria-invalid={!!errors.message}
                        className={`text-[#1A1A1A] placeholder:text-[#1A1A1A]/55 border-primary/25 bg-white ${
                          errors.message ? "border-red-500 focus-visible:ring-red-500" : ""
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3 text-red-600" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Status Message */}
                    {statusMessage && (
                      <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-xs text-[#1A1A1A] flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="leading-relaxed">{statusMessage.text}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button type="submit" size="lg" className="w-full shadow-md">
                      <span className="flex items-center gap-2">
                        <span>Send Project Enquiry</span>
                        <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FULL-WIDTH MAP SECTION */}
      <section className="px-5 sm:px-8 lg:px-12 py-12 sm:py-20 lg:py-24 border-t border-primary/10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0.15}>
            <div className="relative w-full h-[300px] sm:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl bg-primary/5">
              <iframe
                title="Address Interiors Bengaluru Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1965.654826236036!2d77.01348845474425!3d11.09495303659021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857f447a68d5d%3A0xcb6ee3430112d243!2sSai%20Techno%20Solutions%20Private%20Limited!5e1!3m2!1sen!2sin!4v1794468306929!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale-[15%] contrast-[105%]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
