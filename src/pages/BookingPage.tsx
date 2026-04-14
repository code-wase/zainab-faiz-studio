import { useState, type FormEvent } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { services, getServiceBySlug } from "@/data/services";

const BookingPage = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const preSelected = slug || searchParams.get("service") || "";
  const [selectedSlug, setSelectedSlug] = useState(preSelected);
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const selectedService = getServiceBySlug(selectedSlug);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedSlug) { alert("Please select a service"); return; }

    const serviceName = selectedService?.title || "Unknown";
    const servicePrice = selectedService?.price || "";

    const message = `🌟 *New Booking Request* 🌟

*Service:* ${serviceName}
*Price:* ${servicePrice}
*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Date:* ${form.date}
*Time:* ${form.time}
*Special Requests:* ${form.notes || "None"}

Thank you! 💖`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918123338996?text=${encoded}`, "_blank");
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", date: "", time: "", notes: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
              Book Your <span className="text-gradient-gold">Appointment</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Schedule your beauty treatment with our expert professionals</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatedSection animation="fade-up">
            <div className="bg-gradient-card rounded-xl p-6 md:p-8 gold-border">
              <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                Back to Services
              </Link>

              {submitted && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-500/30 text-green-400 rounded-lg text-sm">
                  ✅ Your appointment has been booked! Please check WhatsApp to confirm.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium mb-1.5">Select Service <span className="text-primary">*</span></label>
                  <select
                    value={selectedSlug}
                    onChange={(e) => setSelectedSlug(e.target.value)}
                    required
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Choose a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.title} - {s.price}</option>
                    ))}
                  </select>
                  {selectedService && (
                    <p className="text-xs text-primary mt-1.5">Price: {selectedService.price}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Full Name <span className="text-primary">*</span></label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email Address <span className="text-primary">*</span></label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone Number <span className="text-primary">*</span></label>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Preferred Date <span className="text-primary">*</span></label>
                    <input type="date" required min={new Date().toISOString().split("T")[0]} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Preferred Time <span className="text-primary">*</span></label>
                  <select required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors">
                    <option value="">Select a time</option>
                    {["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM"].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Special Requests</label>
                  <textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
                </div>

                <button type="submit" className="w-full py-3.5 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity">
                  Book Appointment
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
