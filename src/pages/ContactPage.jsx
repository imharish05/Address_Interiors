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
    if (!formData.name.trim()) errs.name = "Please provide your full name";
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email address";
    }
    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    if (cleanPhone && !/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = "Please enter a valid 10-digit Indian mobile number";
    }
    if (!formData.message.trim()) {
      errs.message = "Please share details about your project scope";
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
        text: "Please resolve the highlighted fields before proceeding.",
      });
      return;
    }

    setErrors({});

    const formattedPhone = formData.phone ? `+91 ${formData.phone}` : "Not provided";
    const subject = encodeURIComponent(
      `Private Commission Inquiry: ${formData.projectType} — ${formData.name}`
    );
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formattedPhone}\nProject Scope: ${formData.projectType}\n\nProject Narrative:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${BRAND_INFO.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    setStatusMessage({
      type: "info",
      text: `Inquiry draft prepared. If your mail client did not open automatically, please reach us directly at ${BRAND_INFO.email}.`,
    });
  };

  return (
    <div className="pt-24 lg:pt-28 overflow-hidden bg-secondary">
      {/* 1. HERO HEADER */}
      <section className="px-6 sm:px-8 lg:px-12 pt-6 sm:pt-10 pb-8 sm:pb-12 text-center max-w-4xl mx-auto">
        <AnimatedSection delay={0.1}>
          <span className={EYEBROW}>Connect With Our Studio</span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-primary tracking-tight leading-[1.1] mb-4 sm:mb-5">
            {CONTACT_CONTENT.heading}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#1A1A1A]/85 leading-relaxed max-w-2xl mx-auto">
            {CONTACT_CONTENT.subheading}
          </p>
        </AnimatedSection>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="px-6 sm:px-8 lg:px-12 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Direct Studio Info (Heading in Red, Balance in Black) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <AnimatedSection delay={0.15} className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-light text-primary tracking-tight mb-2">
                    Studio Concierge
                  </h2>
                  <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-normal">
                    Our architects and project directors are available for scheduled private site visits and atelier consultations.
                  </p>
                </div>

                <div className="space-y-4 pt-1">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-primary/[0.03] border border-primary/10">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#1A1A1A]/75 block mb-0.5">
                        Direct Inquiries
                      </span>
                      <a
                        href={`mailto:${BRAND_INFO.email}`}
                        className="text-sm font-medium text-[#1A1A1A] hover:text-primary hover:underline underline-offset-4"
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
                        Direct Line
                      </span>
                      <a
                        href={`tel:${BRAND_INFO.phone.replace(/\s+/g, "")}`}
                        className="text-sm font-medium text-[#1A1A1A] hover:text-primary hover:underline underline-offset-4"
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
                        Principal Atelier
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
                        Consultation Hours
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
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> 100% Custom 3D Design
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#1A1A1A] bg-primary/5 border border-primary/20 px-3 py-1 rounded-full font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Itemized Fixed BOQ
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#1A1A1A] bg-primary/5 border border-primary/20 px-3 py-1 rounded-full font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> 10-Year Warranty
                  </span>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Commission Request Form */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.2}>
                <div className="p-8 sm:p-12 rounded-[2rem] bg-primary/[0.025] border border-primary/15 shadow-xl">
                  <div className="mb-8 pb-6 border-b border-primary/10">
                    <h2 className="text-2xl sm:text-3xl font-light text-primary tracking-tight">
                      Commission Request
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
                        placeholder="e.g. Vikramaditya Singhania"
                        aria-invalid={!!errors.name}
                        className={`text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 border-primary/20 bg-background/60 ${
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
                          placeholder="vikram@residence.com"
                          aria-invalid={!!errors.email}
                          className={`text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 border-primary/20 bg-background/60 ${
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
                          className={`flex rounded-xl overflow-hidden border bg-background/60 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all ${
                            errors.phone ? "border-red-500" : "border-primary/20"
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
                            placeholder="98450 12345"
                            className="w-full bg-transparent px-4 py-2 text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:outline-none"
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
                        Project Type <span className="text-primary">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="flex h-12 w-full rounded-xl border border-primary/20 bg-background/60 px-4 py-2 text-sm text-[#1A1A1A] transition-all duration-200 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary cursor-pointer font-sans"
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
                        Write a Message <span className="text-primary">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your floor plan, carpet area, aesthetic preferences, and expected move-in timeline..."
                        aria-invalid={!!errors.message}
                        className={`text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 border-primary/20 bg-background/60 ${
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
                        <span>Submit Commission Request</span>
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

      {/* 3. CLEAN FULL-WIDTH MAP SECTION (Without Overlay Text or Clutter) */}
      <section className="px-6 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0.15}>
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl bg-primary/5">
              <iframe
                title="Address Interiors Bengaluru Atelier Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.006935261899!2d77.6049219!3d12.9713889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1679a957b01d%3A0x6b4458f33d7b8895!2sRichmond%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
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
