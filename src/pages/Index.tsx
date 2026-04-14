import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import heroBride from "@/assets/hero-bride.jpg";
import makeupService from "@/assets/makeup-service.jpg";
import mehndiService from "@/assets/mehndi-service.jpg";
import partyMakeup from "@/assets/party-makeup.jpg";
import muslimBridal from "@/assets/muslim-bridal.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import trainingClass from "@/assets/training-class.jpg";

const heroSlides = [heroBride, makeupService, muslimBridal];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState("");
  const fullText = "Zainab Faiz";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 120);
    return () => clearInterval(typeInterval);
  }, []);

  const homeServices = [
    { image: makeupService, title: "Makeup Services", description: "Master makeup with our courses, from basics to advanced bridal and HD techniques.", price: "₹15,000" },
    { image: mehndiService, title: "Mehndi Services", description: "Learn the art of traditional and modern mehndi with hands-on instruction.", price: "₹6,000" },
    { image: partyMakeup, title: "Party Makeup", description: "Natural yet glamorous makeup for casual parties and high-end events.", price: "₹2,499" },
    { image: muslimBridal, title: "Muslim Bridal Makeup", description: "Elegant Islamic wedding look with premium bridal styling.", price: "₹9,999" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={slide} alt="Hero" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection animation="fade-up">
              <p className="text-gold text-sm md:text-base font-medium tracking-widest uppercase mb-4">Welcome to</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 leading-tight">
                <span className="text-gradient-gold">{typedText}</span>
                <span className="animate-pulse text-gold">|</span>
                <br />
                <span className="text-foreground">Makeup Studio & Academy</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-8">
                Celebrity & Professional Makeup Artist — Luxury beauty services for women. We travel globally for brand shoots, model shoots & all types of bridal makeup.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity">
                  Our Services
                </Link>
                <a
                  href="https://wa.me/918123338996?text=Hello%2C%20I%27d%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-foreground/30 text-foreground rounded-full font-semibold hover:border-gold hover:text-gold transition-colors"
                >
                  Book Appointment
                </a>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 mt-6 text-sm text-muted-foreground hover:text-gold transition-colors">
                Learn more about us <span>→</span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? "bg-gold w-8" : "bg-foreground/30"}`}
            />
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeading title="Our Services" subtitle="Experience the finest beauty treatments tailored just for you" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeServices.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 150}>
                <ServiceCard {...s} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium transition-colors">
              View All Services <span>→</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <img src={studioInterior} alt="Studio" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <AnimatedSection>
              <p className="text-gold text-sm tracking-widest uppercase mb-2">8+ Years of Excellence</p>
              <p className="text-muted-foreground">Trusted by thousands of women for premium beauty services</p>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left">
              <SectionHeading title="About Zainab Faiz" subtitle="" center={false} />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Zainab Faiz Makeup Studio and Academy was founded with a passion for helping women feel beautiful, confident, and cared for. With 8+ years of experience as a Celebrity & Professional Makeup Artist, Zainab Faiz brings expertise in bridal, party, and editorial makeup.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We specialize in Telugu Brides, Muslim Brides, and all types of Party Makeup. Our team travels globally for brand shoots and model shoots.
              </p>
              <h4 className="font-heading font-semibold text-foreground mb-3">Why Choose Us?</h4>
              <ul className="space-y-2 mb-6">
                {["Premium, high-quality beauty products", "8+ years of professional experience", "Personalized service for every client", "Global availability — we travel worldwide", "Latest techniques and trends"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-gold hover:text-gold-light font-medium transition-colors inline-flex items-center gap-2">
                Learn More About Us <span>→</span>
              </Link>
            </AnimatedSection>
            <AnimatedSection animation="slide-right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "500+", label: "Happy Clients" },
                  { num: "8+", label: "Years Experience" },
                  { num: "20+", label: "Expert Stylists" },
                  { num: "50+", label: "Beauty Services" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gradient-card gold-border rounded-xl p-6 text-center hover-gold-glow transition-all">
                    <h3 className="text-3xl font-heading font-bold text-gradient-gold">{stat.num}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Training Preview */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeading title="Beauty Training Courses" subtitle="Take your passion for beauty to the next level with our professional training" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { image: trainingClass, title: "Makeup Courses", desc: "Learn day makeup, party looks, bridal styling, and advanced makeup application techniques.", duration: "3 months", prices: { Personal: "₹8,000", Basic: "₹10,000", Advance: "₹10,000" } },
              { image: mehndiService, title: "Mehndi Courses", desc: "Become an expert in traditional and bridal mehndi art with hands-on practice and design innovation.", duration: "3 months", prices: { Personal: "₹8,000", Basic: "₹10,000", Advance: "₹10,000" } },
            ].map((course, i) => (
              <AnimatedSection key={course.title} delay={i * 200}>
                <div className="bg-gradient-card rounded-xl overflow-hidden gold-border hover-gold-glow transition-all group">
                  <div className="h-48 overflow-hidden">
                    <img src={course.image} alt={course.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{course.desc}</p>
                    <p className="text-xs text-gold mb-3"><strong>Duration:</strong> {course.duration}</p>
                    <div className="space-y-1 mb-4">
                      {Object.entries(course.prices).map(([k, v]) => (
                        <div key={k} className="flex justify-between text-xs text-muted-foreground">
                          <span>{k}:</span><span className="text-foreground">{v}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/training" className="text-sm text-gold hover:text-gold-light transition-colors font-medium">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-8">
            <Link to="/training" className="text-gold hover:text-gold-light font-medium inline-flex items-center gap-2 transition-colors">
              View All Courses <span>→</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <img src={heroBride} alt="CTA Background" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Ready to Experience Luxury Beauty Care?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Book your appointment today and treat yourself to the care you deserve. Our team of experts is ready to pamper you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/918123338996?text=Hello%2C%20I%27d%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Book an Appointment
              </a>
              <Link to="/contact" className="px-8 py-3 border border-foreground/30 text-foreground rounded-full font-semibold hover:border-gold hover:text-gold transition-colors">
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
