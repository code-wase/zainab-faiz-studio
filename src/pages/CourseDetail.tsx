import { useParams, Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { getCourseBySlug } from "@/data/courses";

const CourseDetail = () => {
  const { slug } = useParams();
  const course = getCourseBySlug(slug || "");

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

              <Link
                to={`/enroll/${course.slug}`}
                className="mt-8 inline-block px-10 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Enroll Now
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div className="bg-gradient-card rounded-xl p-8 gold-border sticky top-24">
                <h3 className="text-xl font-heading font-semibold mb-4 text-gold">Course Highlights</h3>
                <div className="space-y-3">
                  {course.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/enroll/${course.slug}`}
                  className="mt-8 block text-center py-3.5 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Enroll Now
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
