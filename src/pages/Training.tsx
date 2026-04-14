import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import makeupService from "@/assets/makeup-service.jpg";
import mehndiService from "@/assets/mehndi-service.jpg";
import trainingClass from "@/assets/training-class.jpg";
import hairStyling from "@/assets/hair-styling.jpg";
import teleguBridal from "@/assets/telugu-bridal.jpg";

const courses = [
  { image: makeupService, title: "Makeup Courses", duration: "3 months", desc: "Learn day makeup, party looks, bridal styling, and advanced makeup application techniques.", features: ["Basic to Advanced Techniques", "Bridal & HD Makeup", "Product Knowledge", "Portfolio Building"] },
  { image: mehndiService, title: "Mehndi Courses", duration: "3 months", desc: "Become an expert in traditional and bridal mehndi art with hands-on practice and design innovation.", features: ["Traditional Designs", "Arabic & Indo-Arabic", "Stone & Glitter Mehndi", "Bridal Mehndi"] },
  { image: trainingClass, title: "Professional Makeup Classes", duration: "3 months", desc: "Comprehensive professional training covering all aspects of makeup artistry for career readiness.", features: ["Celebrity Makeup", "Editorial & Fashion", "Airbrush Techniques", "Business Skills"] },
  { image: mehndiService, title: "Professional Mehndi Classes", duration: "3 months", desc: "Advanced mehndi training for those looking to become professional mehndi artists.", features: ["Marwadi Full Filling", "Modern Fusion", "Speed & Precision", "Client Management"] },
  { image: hairStyling, title: "Tailoring & Draping Courses", duration: "3 months", desc: "Master garment stitching and traditional saree draping styles like Bengali and Marathi with practical training.", features: ["Garment Stitching", "Saree Draping Styles", "Pattern Making", "Finishing Techniques"] },
];

const Training = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <img src={trainingClass} alt="Training" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient-gold mb-4">Beauty Training Courses</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Start your career in beauty with our professional training programs</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeading title="Available Courses" subtitle="Comprehensive beauty training programs for aspiring professionals" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <AnimatedSection key={course.title} delay={i * 150}>
                <div className="bg-gradient-card rounded-xl overflow-hidden gold-border hover-gold-glow transition-all group h-full flex flex-col">
                  <div className="h-52 overflow-hidden">
                    <img src={course.image} alt={course.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-heading text-lg font-semibold">{course.title}</h3>
                      <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">{course.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{course.desc}</p>
                    <div className="space-y-2 mb-6 flex-1">
                      {course.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="w-1 h-1 bg-gold rounded-full" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/918123338996?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(course.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      View Course
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
