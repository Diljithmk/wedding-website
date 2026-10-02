import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, Send } from "lucide-react";
import { Instagram, WhatsApp } from "./Icons";
import { BRAND, CONTACT } from "../data/content";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    service: "Wedding Photography & Cinematography",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Listen for service selection from Services component
  useEffect(() => {
    const handleServiceSelect = (e) => {
      if (e.detail && e.detail.service) {
        setFormData((prev) => ({
          ...prev,
          service: e.detail.service,
          message: `Inquiring specifically about your ${e.detail.service} collection.\n` + prev.message,
        }));
      }
    };

    window.addEventListener("select-wedding-service", handleServiceSelect);
    return () => window.removeEventListener("select-wedding-service", handleServiceSelect);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.date || !formData.location.trim()) {
      setErrorMessage("Please complete all required fields so we can check our worldwide availability.");
      setIsSubmitting(false);
      return;
    }

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      location: "",
      service: "Wedding Photography & Cinematography",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-white border-t border-charcoal/5" aria-label="Contact and Booking">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gold text-xs font-medium tracking-luxury uppercase mb-3"
          >
            Reservations & Inquiries
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-charcoal tracking-tight"
          >
            {CONTACT.heading}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="divider-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-charcoal-muted text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto"
          >
            {CONTACT.subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Studio Info (5 cols) */}
          <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-luxury text-gold font-medium block">
                Direct Communications
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-charcoal">
                We'd love to hear your story.
              </h3>
              <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed font-light">
                Whether you are planning an intimate elopement on the Amalfi Coast or a three-day celebration at a French château, our team is at your service.
              </p>
            </div>

            {/* Instant WhatsApp Booking Card */}
            <div className="p-6 bg-champagne-light/50 border border-gold/40 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600/10 flex items-center justify-center text-emerald-700">
                  <WhatsApp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium tracking-wide text-charcoal">
                    Instant WhatsApp Consultation
                  </h4>
                  <p className="text-xs text-charcoal-muted">
                    Quickest response for date availability
                  </p>
                </div>
              </div>
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-medium tracking-luxury uppercase bg-emerald-700 hover:bg-emerald-800 text-white transition-colors duration-300"
              >
                <span>Chat On WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Studio Contact Details */}
            <div className="space-y-6 pt-2">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-charcoal/15 flex items-center justify-center flex-shrink-0 text-charcoal mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-luxury text-charcoal-muted font-medium">
                    Studio Inquiries
                  </p>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-base font-serif text-charcoal hover:text-gold transition-colors font-light"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-charcoal/15 flex items-center justify-center flex-shrink-0 text-charcoal mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-luxury text-charcoal-muted font-medium">
                    Concierge Line
                  </p>
                  <a
                    href={`tel:${BRAND.phone.replace(/\D/g, "")}`}
                    className="text-base font-serif text-charcoal hover:text-gold transition-colors font-light"
                  >
                    {BRAND.phone}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-charcoal/15 flex items-center justify-center flex-shrink-0 text-charcoal mt-0.5">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-luxury text-charcoal-muted font-medium">
                    Visual Journal
                  </p>
                  <a
                    href={BRAND.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-serif text-charcoal hover:text-gold transition-colors font-light"
                  >
                    {BRAND.instagramHandle}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full border border-charcoal/15 flex items-center justify-center flex-shrink-0 text-charcoal mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-luxury text-charcoal-muted font-medium">
                    Studios
                  </p>
                  <p className="text-sm text-charcoal font-light">
                    New York • Paris • Available for destinations worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Note on limited commissions */}
            <div className="pt-4 border-t border-charcoal/10 text-xs text-charcoal-muted leading-relaxed font-light">
              <p>
                To provide our couples with uncompromising artistic dedication, we commission only <strong>25 bespoke weddings</strong> per calendar year.
              </p>
            </div>
          </div>

          {/* Right Column: Complete Editorial Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 border border-charcoal/15 shadow-sm order-1 lg:order-2">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-champagne-light border border-gold/40 flex items-center justify-center mx-auto text-gold-dark">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl text-charcoal font-light">
                    Thank You, {formData.name}
                  </h3>
                  <p className="text-gold-dark text-xs uppercase tracking-luxury font-medium">
                    Inquiry Received with Reverence
                  </p>
                </div>

                <p className="text-charcoal-muted max-w-md mx-auto text-sm leading-relaxed font-light">
                  We have received your celebration details for <strong>{formData.location}</strong> on <strong>{formData.date}</strong>. Our studio concierge will review our global travel calendar and respond within 24 hours.
                </p>

                <div className="pt-4">
                  <button onClick={resetForm} className="btn-secondary text-xs">
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-charcoal font-light mb-1">
                    Check Date Availability
                  </h3>
                  <p className="text-xs text-charcoal-muted tracking-wide">
                    Please provide the details of your celebration below.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 text-xs bg-red-50 text-red-700 border border-red-200">
                    {errorMessage}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs uppercase tracking-luxury text-charcoal font-medium">
                      Couple's Names <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Clara & Alexandre"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm bg-white border border-charcoal/20 focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-all placeholder:text-charcoal-subtle"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs uppercase tracking-luxury text-charcoal font-medium">
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="clara@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm bg-white border border-charcoal/20 focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-all placeholder:text-charcoal-subtle"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs uppercase tracking-luxury text-charcoal font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm bg-white border border-charcoal/20 focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-all placeholder:text-charcoal-subtle"
                    />
                  </div>

                  {/* Wedding Date */}
                  <div className="space-y-1.5">
                    <label htmlFor="date" className="block text-xs uppercase tracking-luxury text-charcoal font-medium">
                      Wedding Date <span className="text-gold">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm bg-white border border-charcoal/20 focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-all text-charcoal"
                    />
                  </div>
                </div>

                {/* Event Location */}
                <div className="space-y-1.5">
                  <label htmlFor="location" className="block text-xs uppercase tracking-luxury text-charcoal font-medium">
                    Event Location & Venue <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    placeholder="e.g. Villa Balbianello, Lake Como, Italy"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-white border border-charcoal/20 focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-all placeholder:text-charcoal-subtle"
                  />
                </div>

                {/* Primary Service Interested In */}
                <div className="space-y-1.5">
                  <label htmlFor="service" className="block text-xs uppercase tracking-luxury text-charcoal font-medium">
                    Collection of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-white border border-charcoal/20 focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-all text-charcoal"
                  >
                    <option value="Wedding Photography & Cinematography">Full Cinema & Photography Collection</option>
                    <option value="Wedding Photography">Fine Art Wedding Photography</option>
                    <option value="Wedding Cinematography">Editorial 4K Cinematography</option>
                    <option value="Pre-Wedding Shoots">Pre-Wedding / Destination Session</option>
                    <option value="Engagement Photography">Engagement Documentation</option>
                    <option value="Destination Weddings">Multi-Day Destination Celebration</option>
                    <option value="Wedding Films & Highlights">Highlight & Teaser Films</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs uppercase tracking-luxury text-charcoal font-medium">
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe the aesthetic, atmosphere, guest count, or any dreams you have for the celebration..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-white border border-charcoal/20 focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-all placeholder:text-charcoal-subtle resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <span>Checking Availability...</span>
                    ) : (
                      <>
                        <span>Submit Private Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-charcoal-muted/70 text-center tracking-wide mt-3">
                    Your information is strictly private and never shared.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
