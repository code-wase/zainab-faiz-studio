import { useState, type FormEvent } from "react";
import { useParams, Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { getCourseBySlug } from "@/data/courses";

const CourseDetail = () => {
  const { slug } = useParams();
  const course = getCourseBySlug(slug || "");
  const [showEnroll, setShowEnroll] = useState(false);
  const [enrollForm, setEnrollForm] = useState({ name: "", email: "", phone: "", address: "" });

  const handleEnrollSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = [
      `📋 *Course Enrollment Application*`,
      ``,
      `📚 *Course:* ${course?.title}`,
      `⏱ *Duration:* ${course?.duration}`,
      `👤 *Name:* ${enrollForm.name}`,
      `📧 *Email:* ${enrollForm.email}`,
      `📞 *Phone:* ${enrollForm.phone}`,
      `📍 *Address:* ${enrollForm.address}`,
    ].join("%0A");
    window.open(`https://wa.me/918123338996?text=${encodeURIComponent(message).replace(/%250A/g, "%0A")}`, "_blank");
    setShowEnroll(false);
  };

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

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/training" className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Training
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Course Info */}
            <AnimatedSection animation="slide-left">
              <div className="rounded-2xl overflow-hidden gold-border mb-6">
                <img src={course.image} alt={course.title} className="w-full h-[350px] object-cover" />
              </div>
              <h1 className="text-3xl font-heading font-bold text-gradient-gold mb-2">{course.title}</h1>
              <p className="text-xs text-muted-foreground mb-4">Category: <strong className="text-foreground">{course.category}</strong></p>
              <p className="text-muted-foreground leading-relaxed mb-6">{course.description}</p>

              <div className="mb-6">
                <p className="text-sm"><strong className="text-foreground">Duration:</strong> <span className="text-muted-foreground">{course.duration}</span></p>
              </div>

              <div className="mb-6">
                <p className="font-semibold text-foreground mb-2">Price:</p>
                <ul className="space-y-1">
                  {Object.entries(course.prices).map(([k, v]) => (
                    <li key={k} className="text-sm text-muted-foreground">• {k}: <span className="text-foreground">{v}</span></li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-gradient-gold mb-1">What You'll Learn</h3>
                <div className="w-16 h-1 bg-primary rounded-full mb-6" />
                <ul className="space-y-3">
                  {course.whatYouLearn.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setShowEnroll(true)}
                className="mt-8 px-10 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Enroll Now
              </button>
            </AnimatedSection>

            {/* Enroll Form */}
            <AnimatedSection animation="slide-right">
              <div className="bg-gradient-card rounded-xl p-8 gold-border sticky top-24">
                <h3 className="text-xl font-heading font-semibold mb-6 text-gold">Enroll Now</h3>
                <form onSubmit={handleEnrollSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Full Name <span className="text-primary">*</span></label>
                    <input type="text" required value={enrollForm.name} onChange={(e) => setEnrollForm({ ...enrollForm, name: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email Address <span className="text-primary">*</span></label>
                    <input type="email" required value={enrollForm.email} onChange={(e) => setEnrollForm({ ...enrollForm, email: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone Number <span className="text-primary">*</span></label>
                    <input type="tel" required value={enrollForm.phone} onChange={(e) => setEnrollForm({ ...enrollForm, phone: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Address <span className="text-primary">*</span></label>
                    <textarea required rows={3} value={enrollForm.address} onChange={(e) => setEnrollForm({ ...enrollForm, address: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
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

      {/* Enroll Modal (from Enroll Now button) */}
      {showEnroll && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setShowEnroll(false)} />
          <div className="relative bg-card border border-border rounded-2xl w-full max-w-md p-6 md:p-8 animate-scale-in">
            <button onClick={() => setShowEnroll(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="text-xl font-heading font-semibold mb-4 text-gold">Enroll in {course.title}</h3>
            <form onSubmit={handleEnrollSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input type="text" required value={enrollForm.name} onChange={(e) => setEnrollForm({ ...enrollForm, name: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input type="email" required value={enrollForm.email} onChange={(e) => setEnrollForm({ ...enrollForm, email: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone *</label>
                <input type="tel" required value={enrollForm.phone} onChange={(e) => setEnrollForm({ ...enrollForm, phone: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address *</label>
                <textarea required rows={2} value={enrollForm.address} onChange={(e) => setEnrollForm({ ...enrollForm, address: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity">Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
