import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import heroBride from "@/assets/hero-bride.jpg";
import makeupService from "@/assets/makeup-service.jpg";
import mehndiService from "@/assets/mehndi-service.jpg";
import partyMakeup from "@/assets/party-makeup.jpg";
import muslimBridal from "@/assets/muslim-bridal.jpg";
import teleguBridal from "@/assets/telugu-bridal.jpg";
import koreanMakeup from "@/assets/korean-makeup.jpg";
import pakistaniBridal from "@/assets/pakistani-bridal.jpg";
import receptionLook from "@/assets/reception-look.jpg";
import marwadiMehndi from "@/assets/marwadi-mehndi.jpg";
import stoneMehndi from "@/assets/stone-mehndi.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import teamMuslim1 from "@/assets/team-muslim-1.jpg";
import teamMuslim2 from "@/assets/team-muslim-2.jpg";
import teamNonmuslim1 from "@/assets/team-nonmuslim-1.jpg";
import teamNonmuslim2 from "@/assets/team-nonmuslim-2.jpg";

const galleryImages = [
  { src: heroBride, alt: "Bridal Makeup", category: "Bridal" },
  { src: makeupService, alt: "Makeup Application", category: "Makeup" },
  { src: muslimBridal, alt: "Muslim Bridal", category: "Bridal" },
  { src: partyMakeup, alt: "Party Makeup", category: "Party" },
  { src: teleguBridal, alt: "Telugu Bridal", category: "Bridal" },
  { src: mehndiService, alt: "Mehndi Art", category: "Mehndi" },
  { src: koreanMakeup, alt: "Korean Makeup", category: "Makeup" },
  { src: pakistaniBridal, alt: "Pakistani Bridal", category: "Bridal" },
  { src: receptionLook, alt: "Reception Look", category: "Party" },
  { src: marwadiMehndi, alt: "Marwadi Mehndi", category: "Mehndi" },
  { src: stoneMehndi, alt: "Stone Mehndi", category: "Mehndi" },
  { src: studioInterior, alt: "Studio Interior", category: "Studio" },
];

const team = [
  { name: "Zainab Faiz", role: "Founder & Lead Makeup Artist", image: teamMuslim1 },
  { name: "Ayesha Khan", role: "Senior Bridal Specialist", image: teamMuslim2 },
  { name: "Priya Sharma", role: "Hair Styling Expert", image: teamNonmuslim1 },
  { name: "Deepika Rao", role: "Mehndi Artist", image: teamNonmuslim2 },
];

const Gallery = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient-gold mb-4">Gallery</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">A glimpse into our stunning transformations, bridal glam, skincare magic, and signature styles</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-card rounded-xl p-8 gold-border mb-12 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-heading font-semibold mb-2">Inside Our Gallery</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  From elegant bridal looks to bold party makeup, our gallery showcases the magic of our work. Each look is a reflection of our artistry, precision, and passion for enhancing natural beauty.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every photo captures a moment of transformation—a client stepping into confidence, joy, and self-love.
                </p>
              </div>
              <div className="w-full lg:w-72 h-48 lg:h-60 rounded-lg overflow-hidden flex-shrink-0">
                <img src={studioInterior} alt="Gallery Preview" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </AnimatedSection>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={i} delay={(i % 3) * 100} animation="scale-in">
                <div className="break-inside-avoid group relative overflow-hidden rounded-xl gold-border">
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="font-heading font-semibold text-foreground">{img.alt}</p>
                      <p className="text-xs text-gold">{img.category}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeading title="Meet Our Team" subtitle="The artists behind the magic" />
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 100} animation="fade-up">
                <div className="bg-gradient-card rounded-xl overflow-hidden gold-border text-center group">
                  <div className="h-52 overflow-hidden">
                    <img src={member.image} alt={member.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-sm">{member.name}</h3>
                    <p className="text-xs text-primary">{member.role}</p>
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

export default Gallery;
