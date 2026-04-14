import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import makeupService from "@/assets/makeup-service.jpg";
import mehndiService from "@/assets/mehndi-service.jpg";
import partyMakeup from "@/assets/party-makeup.jpg";
import muslimBridal from "@/assets/muslim-bridal.jpg";
import teleguBridal from "@/assets/telugu-bridal.jpg";
import hairStyling from "@/assets/hair-styling.jpg";
import pakistaniBridal from "@/assets/pakistani-bridal.jpg";
import koreanMakeup from "@/assets/korean-makeup.jpg";
import receptionLook from "@/assets/reception-look.jpg";
import facialService from "@/assets/facial-service.jpg";
import marwadiMehndi from "@/assets/marwadi-mehndi.jpg";
import stoneMehndi from "@/assets/stone-mehndi.jpg";
import heroBride from "@/assets/hero-bride.jpg";

const services = [
  { image: makeupService, title: "Makeup Services", description: "Master makeup with our courses, from basics to advanced bridal and HD techniques.", price: "₹15,000" },
  { image: mehndiService, title: "Mehndi Services", description: "Learn the art of traditional and modern mehndi with hands-on instruction.", price: "₹6,000" },
  { image: marwadiMehndi, title: "Marwadi Full Filling Mehandi", description: "Intricate Marwadi-style mehndi with full hand and arm coverage.", price: "₹1,240" },
  { image: stoneMehndi, title: "Stone & Glitter Mehandi", description: "Stylish mehndi designs with stone and glitter accents.", price: "₹1,880" },
  { image: partyMakeup, title: "Sider Makeup", description: "Elegant light makeup perfect for attending functions and events.", price: "₹1,499" },
  { image: pakistaniBridal, title: "Bridal Pakistani Look", description: "A majestic look for the most special day of your life.", price: "₹9,999" },
  { image: receptionLook, title: "Reception Makeup Look", description: "Sophisticated and elegant look for your reception night.", price: "₹9,999" },
  { image: heroBride, title: "Waterproof Makeup", description: "Stay flawless through tears, sweat, and long hours.", price: "₹11,999" },
  { image: teleguBridal, title: "Marathi Bridal Makeup", description: "Traditional Maharashtrian bridal look with nath and mundavalya.", price: "₹12,999" },
  { image: teleguBridal, title: "South Indian Bridal Look", description: "Elegant temple-style bridal makeover.", price: "₹14,999" },
  { image: koreanMakeup, title: "Korean Glass Makeup", description: "Get dewy, glowing skin with K-beauty-inspired makeup.", price: "₹24,999" },
  { image: partyMakeup, title: "Party Makeup Basic", description: "Natural yet glamorous makeup for casual parties.", price: "₹2,499" },
  { image: partyMakeup, title: "Party Makeup Premium", description: "Glamorous makeup for high-end events and parties.", price: "₹3,499" },
  { image: heroBride, title: "Basic Bridal Makeup", description: "Classic bridal makeup with traditional charm.", price: "₹8,999" },
  { image: muslimBridal, title: "Engagement Basic Makeup", description: "Simple and elegant makeup for engagement ceremonies.", price: "₹4,999" },
  { image: muslimBridal, title: "Engagement Premium Makeup", description: "Luxurious makeup for a memorable engagement day.", price: "₹5,999" },
  { image: heroBride, title: "Bridal Makeup HD Premium", description: "High-definition bridal makeup for perfect photography.", price: "₹10,999" },
  { image: makeupService, title: "Bridal Package", description: "Look radiant on your big day with our premium bridal beauty package.", price: "₹15,000" },
  { image: hairStyling, title: "Hair Styling", description: "Transform your look with our expert hair styling services from cuts to creative updos.", price: "₹399" },
  { image: hairStyling, title: "Threading Services", description: "Achieve perfect brows and facial hair removal with our precise threading technique.", price: "₹70" },
  { image: hairStyling, title: "All Type of Haircut Services", description: "Get the perfect haircut to suit your style, face shape, and personality.", price: "₹399" },
  { image: hairStyling, title: "Hair Color Services", description: "Transform your look with professional hair coloring tailored to your style.", price: "₹399" },
  { image: hairStyling, title: "Smoothening & Rebonding", description: "Effectively smooth and straighten frizzy, unmanageable hair for a sleek look.", price: "₹1,500" },
  { image: facialService, title: "Herbal Bleach", description: "Natural skin lightening using herbal ingredients for a safer, glowing result.", price: "₹399" },
  { image: facialService, title: "D-Tan Bleach", description: "Effective bleaching solution to remove tan and restore your natural skin tone.", price: "₹499" },
  { image: facialService, title: "Gold Bleach", description: "Luxurious gold-infused bleach for radiant and glowing skin.", price: "₹350" },
  { image: facialService, title: "OXY Bleach", description: "Advanced oxygen-based bleach for brighter, even-toned skin.", price: "₹700" },
  { image: facialService, title: "O3 Bleach", description: "Powerful ozone-infused bleach for detoxified, glowing skin.", price: "₹700" },
  { image: facialService, title: "Coffey Bleach", description: "Natural coffee-infused bleach for glowing, energized skin.", price: "₹700" },
  { image: facialService, title: "Diamond Bleach", description: "Premium diamond dust bleach for ultimate skin radiance and luxury.", price: "₹350" },
  { image: facialService, title: "Advanced Bleach", description: "High-performance bleach with advanced technology for faster results.", price: "₹550" },
  { image: facialService, title: "Hydera Facial", description: "Revitalize your skin with our Hydera facial for intense hydration and glow.", price: "₹2,999" },
  { image: facialService, title: "Gold Facial", description: "Luxurious facial enriched with gold for anti-aging and radiant skin.", price: "₹999" },
  { image: facialService, title: "Oxy Facial", description: "Oxygen-based facial for deep cleansing and rejuvenated skin.", price: "₹999" },
  { image: koreanMakeup, title: "Korien Facial", description: "Korean-inspired facial combining modern technology and traditional methods.", price: "₹2,999" },
  { image: facialService, title: "Anti-Aging Facial", description: "Combat signs of aging with our scientifically-backed anti-aging facial.", price: "₹1,100" },
  { image: facialService, title: "Herbal Facial", description: "Rejuvenate your skin naturally with our soothing herbal facial.", price: "₹499" },
  { image: facialService, title: "Diamond Facial", description: "Experience luxury skincare with our diamond-infused facial.", price: "₹1,199" },
  { image: facialService, title: "Papaya Facial", description: "Nourish your skin with the natural enzymes of papaya.", price: "₹700" },
  { image: facialService, title: "O3 Facial", description: "Revitalize your skin with the power of ozone therapy.", price: "₹1,499" },
  { image: facialService, title: "D-Tan Facial", description: "Get rid of tanned and dull skin with our intensive D-Tan Facial.", price: "₹1,999" },
  { image: facialService, title: "Wax/Facial/Chocolate", description: "Triple-action treatment combining waxing, facial, and chocolate mask.", price: "₹1,200" },
  { image: hairStyling, title: "Hair Spa", description: "Revitalizing treatment for healthier, shinier hair.", price: "₹1,499" },
  { image: facialService, title: "Hand Spa", description: "Pamper your hands with a relaxing and rejuvenating spa treatment.", price: "₹1,199" },
  { image: facialService, title: "Foot Spa", description: "Relax and refresh tired feet with our soothing foot spa treatment.", price: "₹999" },
  { image: facialService, title: "Pimples Treatment", description: "Targeted acne care to clear breakouts and prevent future flare-ups.", price: "₹2,499" },
  { image: facialService, title: "Fairness Treatment", description: "Skin brightening treatment to achieve a fairer, more even tone.", price: "₹3,999" },
  { image: hairStyling, title: "Keratin Spa", description: "Protein-rich treatment to strengthen and smoothen hair.", price: "₹999" },
  { image: hairStyling, title: "Korien Hair Spa", description: "Luxurious hair spa infused with Korean ingredients for deep nourishment.", price: "₹1,999" },
  { image: facialService, title: "Body Polish", description: "Exfoliating treatment to leave your skin smooth and radiant.", price: "₹3,999" },
  { image: facialService, title: "Clean-Up", description: "Basic facial for deep cleansing and refreshment.", price: "₹250" },
  { image: koreanMakeup, title: "Korien Clean-Up", description: "Korean-inspired clean-up facial for radiant skin.", price: "₹399" },
  { image: facialService, title: "Skin Peeling Treatment", description: "Advanced exfoliation treatment for clearer, smoother skin.", price: "₹2,999" },
  { image: facialService, title: "Full Body Bean Wax", description: "Smooth and gentle hair removal for the entire body using premium bean wax.", price: "₹1,499" },
  { image: teleguBridal, title: "Marathi Saree Draping", description: "Traditional Nauvari saree draping for a graceful Maharashtrian look.", price: "₹499" },
  { image: teleguBridal, title: "Bengali Saree Draping", description: "Elegant Bengali saree styling with traditional pallu and key details.", price: "₹499" },
  // Makeup Academy
  { image: makeupService, title: "Professional Makeup Classes", description: "Comprehensive professional makeup training from basics to advanced bridal and HD techniques.", price: "₹8,000" },
  { image: mehndiService, title: "Professional Mehndi Classes", description: "Master the art of mehndi design with hands-on training in traditional and modern styles.", price: "₹8,000" },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeading title="Our Services" subtitle="Premium beauty treatments tailored to enhance your natural beauty" gold />
          </AnimatedSection>

          {/* Makeup Academy Section */}
          <AnimatedSection>
            <div className="mb-12">
              <h3 className="text-2xl font-heading font-semibold text-gold mb-2">Makeup Academy</h3>
              <p className="text-sm text-muted-foreground mb-6">Professional training programs to launch your beauty career</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.filter(s => s.title.includes("Classes")).map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 100}>
                <ServiceCard {...s} />
              </AnimatedSection>
            ))}
          </div>

          {/* All Services */}
          <AnimatedSection>
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-semibold text-gold mb-2">All Services</h3>
              <p className="text-sm text-muted-foreground">Discover our range of premium beauty treatments</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.filter(s => !s.title.includes("Classes")).map((s, i) => (
              <AnimatedSection key={s.title + i} delay={(i % 4) * 100}>
                <ServiceCard {...s} />
              </AnimatedSection>
            ))}
          </div>

          {/* Why Choose */}
          <section className="mt-20">
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
