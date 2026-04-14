import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const categories = ["Makeup Academy", "Bridal", "Makeup", "Mehndi", "Hair", "Bleach", "Facial", "Spa", "Treatment", "Wax", "Draping"];

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeading title="Our Services" subtitle="Premium beauty treatments tailored to enhance your natural beauty" gold />
          </AnimatedSection>

          {categories.map((cat) => {
            const catServices = services.filter(s => s.category === cat);
            if (catServices.length === 0) return null;
            return (
              <div key={cat} className="mb-16">
                <AnimatedSection>
                  <div className="mb-6">
                    <h3 className="text-2xl font-heading font-semibold text-gold mb-1">{cat}</h3>
                    <div className="w-12 h-0.5 bg-primary rounded-full" />
                  </div>
                </AnimatedSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {catServices.map((s, i) => (
                    <AnimatedSection key={s.slug} delay={(i % 4) * 100}>
                      <ServiceCard image={s.image} title={s.title} description={s.description} price={s.price} slug={s.slug} />
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Why Choose */}
          <section className="mt-12">
            <AnimatedSection>
              <SectionHeading title="Why Choose Our Services" subtitle="Experience the difference of premium beauty care" />
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Expert Professionals", desc: "Our team consists of certified beauty experts with years of experience in their respective fields." },
                { title: "Premium Products", desc: "We use only high-quality, dermatologically tested products for all our treatments." },
                { title: "Personalized Care", desc: "Every treatment is customized to meet your unique beauty needs and preferences." },
              ].map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 150} animation="scale-in">
                  <div className="bg-gradient-card gold-border rounded-xl p-6 text-center hover-gold-glow transition-all">
                    <h4 className="font-heading font-semibold text-lg mb-3 text-gold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Services;
