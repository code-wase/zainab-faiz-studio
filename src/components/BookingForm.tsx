import { useState, type FormEvent } from "react";
import { services } from "@/data/services";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
];

const BookingForm = ({ isOpen, onClose, preSelectedService }: BookingFormProps) => {
  const [form, setForm] = useState({
    service: preSelectedService || "",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const selectedService = services.find(s => s.title === form.service);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = [
      `📋 *New Appointment Booking*`,
      ``,
      `🎨 *Service:* ${form.service}`,
      selectedService ? `💰 *Price:* ${selectedService.price}` : "",
      `👤 *Name:* ${form.name}`,
      `📧 *Email:* ${form.email}`,
      `📞 *Phone:* ${form.phone}`,
      `📅 *Date:* ${form.date}`,
      `🕐 *Time:* ${form.time}`,
      form.notes ? `📝 *Notes:* ${form.notes}` : "",
    ].filter(Boolean).join("%0A");

    window.open(`https://wa.me/918123338996?text=${encodeURIComponent(message).replace(/%250A/g, "%0A")}`, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card border border-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 animate-scale-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-1">
          Book Your <span className="text-primary">Appointment</span>
        </h2>
        <p className="text-sm text-muted-foreground mb-6">Schedule your beauty treatment with our expert professionals</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Service Select */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-1.5">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              Select Service
            </label>
            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
            >
              <option value="">Choose a service</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>{s.title} - {s.price}</option>
              ))}
            </select>
            {selectedService && (
              <p className="text-xs text-primary mt-1">Price: {selectedService.price}</p>
            )}
          </div>

          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-1.5">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                Full Name
              </label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-1.5">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email Address
              </label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>
          </div>

          {/* Phone & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-1.5">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Phone Number
              </label>
              <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-1.5">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Preferred Date
              </label>
              <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>
          </div>

          {/* Time */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-1.5">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Preferred Time
            </label>
            <select
              required
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
            >
              <option value="">Select a time</option>
              {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-1.5">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
              Special Requests or Notes
            </label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <button type="submit" className="w-full py-3.5 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:opacity-90 transition-opacity">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
