import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import studioInterior from "@/assets/studio-interior.jpg";
import teamMuslim1 from "@/assets/team-muslim-1.jpg";
import teamMuslim2 from "@/assets/team-muslim-2.jpg";
import teamNonmuslim1 from "@/assets/team-nonmuslim-1.jpg";
import teamNonmuslim2 from "@/assets/team-nonmuslim-2.jpg";

const team = [
  { name: "Zainab Faiz", role: "Founder & Lead Makeup Artist", image: teamMuslim1, bio: "Zainab Faiz, the visionary behind Zainab Faiz Makeup Studio & Academy, blends artistry with 8+ years of experience. Her mission is to empower women through premium, personalized beauty services." },
  { name: "Ayesha Khan", role: "Senior Bridal Makeup Artist", image: teamMuslim2, bio: "A skilled bridal makeup specialist known for her elegant Islamic bridal looks and dedication to making every bride feel special." },
  { name: "Priya Sharma", role: "Hair Styling Expert", image: teamNonmuslim1, bio: "With expertise in modern and traditional hairstyling, Priya creates stunning looks for every occasion." },
  { name: "Deepika Rao", role: "Mehndi Artist", image: teamNonmuslim2, bio: "A talented mehndi artist known for intricate designs, from traditional Marwadi to modern stone & glitter mehndi." },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <img src={studioInterior} alt="Studio" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient-gold mb-4">About Zainab Faiz</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our story, our mission, and our commitment to making every woman feel beautiful</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left">
              <h2 className="text-2xl font-heading font-semibold text-gold mb-2">Our Story</h2>
              <p className="text-xs text-muted-foreground tracking-wider uppercase mb-6">How Zainab Faiz Makeup Studio came to be</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded by Zainab Faiz, our studio began as a small studio with a big vision: to create a sanctuary where women could indulge in premium beauty treatments and feel their absolute best.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Zainab, a trained and certified makeup artist with 8+ years of experience in luxury bridal and editorial makeup, noticed that many women were looking for a more personalized approach to beauty services—one that considered their unique features, cultural preferences, and lifestyles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, Zainab Faiz Makeup Studio has grown into a full-service beauty studio and academy with a team of skilled professionals. We specialize in Telugu Brides, Muslim Brides, and all types of Party Makeup, traveling globally for brand shoots and model shoots.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-1 bg-gold rounded-full" />
                <p className="text-sm text-gold italic">Est. 2018 — From a small studio to a premier beauty destination</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-right">
              <img src={studioInterior} alt="Studio Interior" className="rounded-xl gold-border" loading="lazy" width={1200} height={800} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "500+", label: "Happy Clients" },
              { num: "8+", label: "Years Experience" },
              { num: "20+", label: "Expert Stylists" },
              { num: "50+", label: "Beauty Services" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100} animation="scale-in">
                <div className="text-center py-6">
                  <h3 className="text-4xl font-heading font-bold text-gradient-gold">{stat.num}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 150} animation="fade-up">
                <div className="bg-gradient-card rounded-xl overflow-hidden gold-border hover-gold-glow transition-all group text-center">
                  <div className="h-64 overflow-hidden">
                    <img src={member.image} alt={member.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-primary mb-3">{member.role}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
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

export default About;
