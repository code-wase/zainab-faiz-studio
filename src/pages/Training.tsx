import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { courses } from "@/data/courses";

const Training = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 relative">
        <div className="absolute inset-0">
          <img src={courses[0].image} alt="Training" className="w-full h-full object-cover opacity-10" />
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
              <AnimatedSection key={course.slug} delay={i * 150}>
                <div className="bg-gradient-card rounded-xl overflow-hidden gold-border hover-gold-glow transition-all group h-full flex flex-col">
                  <div className="h-52 overflow-hidden">
                    <img src={course.image} alt={course.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-heading text-lg font-semibold">{course.title}</h3>
                      <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">{course.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{course.description.slice(0, 100)}...</p>
                    <div className="space-y-2 mb-6 flex-1">
                      {course.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="w-1 h-1 bg-gold rounded-full" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/training/${course.slug}`}
                      className="block text-center px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      View Course
                    </Link>
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
