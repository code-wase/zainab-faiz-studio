import { useParams, Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { getServiceBySlug } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary hover:underline">← Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection animation="slide-left">
              <div className="rounded-2xl overflow-hidden gold-border">
                <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover" />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div className="space-y-6">
                <div>
                  <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">{service.category}</span>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold mt-3 text-gradient-gold">{service.title}</h1>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <span className="text-sm text-muted-foreground">Starting price</span>
                </div>

                {service.details && (
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-3 text-gold">What's Included</h3>
                    <div className="space-y-2">
                      {service.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Link
                  to={`/book/${service.slug}`}
                  className="inline-block w-full md:w-auto text-center px-10 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:opacity-90 transition-opacity"
                >
                  Book Now
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
