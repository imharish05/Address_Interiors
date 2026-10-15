import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from "lucide-react";
import { CONTACT_CONTENT, BRAND_INFO } from "@/data/siteContent";
import SectionHeading from "@/components/common/SectionHeading";
import AnimatedSection from "@/components/common/AnimatedSection";
import ImageReveal from "@/components/common/ImageReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
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
    if (!formData.message.trim()) errs.message = "Please share details about your project";
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
    const subject = encodeURIComponent(`Private Commission Inquiry: ${formData.projectType} — ${formData.name}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formattedPhone}\nProject Scope: ${formData.projectType}\n\nProject Narrative:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${BRAND_INFO.email}?subject=${subject}&body=${body}`;

    // Open email draft
    window.location.href = mailtoUrl;

    setStatusMessage({
      type: "info",
      text: `Draft created. If your default mail client did not open automatically, you can email us directly at ${BRAND_INFO.email}.`,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-secondary scroll-mt-24 border-t border-primary/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Form Details & Complementary Architecture Photo */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <AnimatedSection>
                <SectionHeading
                  badge={CONTACT_CONTENT.badge}
                  title={CONTACT_CONTENT.heading}
                  subtitle={CONTACT_CONTENT.subheading}
                  className="mb-6"
                />
              </AnimatedSection>

              {/* Studio Direct Concierge Details */}
              <AnimatedSection delay={0.2} className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary/60 font-medium block">
                      Direct Inquiries
                    </span>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary/60 font-medium block">
                      Studio Line
                    </span>
                    <span className="text-sm font-medium text-primary">
                      {BRAND_INFO.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary/60 font-medium block">
                      Principal Offices
                    </span>
                    <span className="text-sm font-medium text-primary">
                      {BRAND_INFO.location}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Complementary Arch Image */}
            <AnimatedSection delay={0.3} className="hidden lg:block mt-6">
              <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-primary/10 border border-primary/15 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
                  alt="Address Interiors Consultation Suite"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.2}>
              <div className="p-8 sm:p-12 rounded-[2.5rem] bg-primary/[0.03] border border-primary/15 shadow-lg">
                <div className="mb-8 pb-6 border-b border-primary/10">
                  <h3 className="text-2xl font-light text-primary tracking-tight">
                    Commission Request
                  </h3>
                  <p className="text-xs text-primary/65 mt-1">
                    {CONTACT_CONTENT.demoNotice}
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-luxury text-primary/70 mb-2 font-medium"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Lady Evelyn Sinclair"
                      aria-invalid={!!errors.name}
                      className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-primary/80 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3 text-primary" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Two Column: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-luxury text-primary/70 mb-2 font-medium"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="evelyn@domain.com"
                        aria-invalid={!!errors.email}
                        className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-primary/80 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3 text-primary" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs uppercase tracking-luxury text-primary/70 mb-2 font-medium"
                      >
                        Phone Number (India)
                      </label>
                      <div className={`flex rounded-xl overflow-hidden border bg-background/50 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all ${
                        errors.phone ? "border-red-500" : "border-primary/20"
                      }`}>
                        <span className="inline-flex items-center px-3.5 bg-primary/10 text-primary text-sm font-medium border-r border-primary/15 select-none font-mono">
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
                          className="w-full bg-transparent px-4 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-primary/80 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3 text-primary" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type Select */}
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs uppercase tracking-luxury text-primary/70 mb-2 font-medium"
                    >
                      Project Discipline
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="flex h-12 w-full rounded-xl border border-primary/20 bg-background/50 px-4 py-2 text-sm text-foreground transition-all duration-200 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary cursor-pointer"
                    >
                      {CONTACT_CONTENT.projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-secondary text-primary">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-luxury text-primary/70 mb-2 font-medium"
                    >
                      Spatial Vision & Scope *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please outline the property location, architectural scale, and your desired timeline..."
                      aria-invalid={!!errors.message}
                      className={errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-primary/80 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3 text-primary" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Status Banner */}
                  {statusMessage && (
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-xs text-primary flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{statusMessage.text}</p>
                    </div>
                  )}

                  {/* Submit CTA */}
                  <Button type="submit" size="lg" className="w-full">
                    <span className="flex items-center gap-2">
                      <span>Submit Inquiry Draft</span>
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
  );
}
