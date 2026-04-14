import { useState, type FormEvent } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { getCourseBySlug } from "@/data/courses";

const EnrollPage = () => {
  const { slug } = useParams();
  const course = getCourseBySlug(slug || "");
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Course Not Found</h1>
          <Link to="/training" className="text-primary hover:underline">← Back to Training</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `*New Course Enrollment Request*

*Course:* ${course.title}
*Duration:* ${course.duration}
*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Address:* ${form.address}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918123338996?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center bg-green-900/20 p-8 rounded-xl border border-green-500/30">
          <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          <h3 className="text-2xl font-heading font-semibold mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-4">You've successfully enrolled in the <strong className="text-foreground">{course.title}</strong> course.</p>
          <button onClick={() => navigate("/training")} className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity">
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
              Enroll in <span className="text-gradient-gold">{course.title}</span>
            </h1>
            <p className="text-muted-foreground">Fill out the form below to start your journey</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to={`/training/${course.slug}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Course Details
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Course Info */}
            <AnimatedSection animation="slide-left">
              <div className="bg-gradient-card rounded-xl p-6 gold-border">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h2 className="text-2xl font-heading font-semibold mb-2">{course.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-foreground">Duration:</strong> <span className="text-muted-foreground">{course.duration}</span></p>
                  <div>
                    <strong className="text-foreground">Price:</strong>
                    <ul className="mt-1 space-y-1 text-muted-foreground">
                      {Object.entries(course.prices).map(([k, v]) => (
                        <li key={k}>• {k}: <span className="text-foreground">{v}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Enrollment Form */}
            <AnimatedSection animation="slide-right">
              <div className="bg-gradient-card rounded-xl p-6 md:p-8 gold-border">
                <h3 className="text-xl font-heading font-semibold mb-6 text-gold">Enrollment Form</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Full Name <span className="text-primary">*</span></label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email Address <span className="text-primary">*</span></label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone Number <span className="text-primary">*</span></label>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Address <span className="text-primary">*</span></label>
                    <textarea required rows={3} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity">
                    Submit Application
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnrollPage;
