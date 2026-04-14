import makeupService from "@/assets/makeup-service.jpg";
import mehndiService from "@/assets/mehndi-service.jpg";
import trainingClass from "@/assets/training-class.jpg";
import hairStyling from "@/assets/hair-styling.jpg";

export interface Course {
  slug: string;
  image: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  prices: { Personal: string; Basic: string; Advance: string };
  features: string[];
  whatYouLearn: string[];
}

export const courses: Course[] = [
  {
    slug: "makeup-courses",
    image: makeupService,
    title: "Makeup Courses",
    category: "Makeup",
    duration: "3 months",
    description: "Learn day makeup, party looks, bridal styling, and advanced makeup application techniques. This comprehensive course covers everything from basic to advanced techniques.",
    prices: { Personal: "₹8,000", Basic: "₹10,000", Advance: "₹10,000" },
    features: ["Basic to Advanced Techniques", "Bridal & HD Makeup", "Product Knowledge", "Portfolio Building"],
    whatYouLearn: ["Skin Preparation & Base Makeup", "Eye Makeup Techniques", "Contouring & Highlighting", "Bridal Makeup Application", "HD & Airbrush Techniques", "Color Theory & Correction", "Product Selection & Knowledge", "Client Consultation Skills", "Portfolio & Photography Tips", "Certificate upon completion"],
  },
  {
    slug: "mehndi-courses",
    image: mehndiService,
    title: "Mehndi Courses",
    category: "Mehndi",
    duration: "3 months",
    description: "Become an expert in traditional and bridal mehndi art with hands-on practice and design innovation. Master all popular styles and create stunning designs.",
    prices: { Personal: "₹8,000", Basic: "₹10,000", Advance: "₹10,000" },
    features: ["Traditional Designs", "Arabic & Indo-Arabic", "Stone & Glitter Mehndi", "Bridal Mehndi"],
    whatYouLearn: ["Traditional Indian Designs", "Arabic & Indo-Arabic Patterns", "Marwadi Full Filling Styles", "Modern Fusion Designs", "Stone & Glitter Application", "Speed & Precision Training", "Bridal Mehndi Specialization", "Design Innovation", "Client Management Skills", "Certificate upon completion"],
  },
  {
    slug: "professional-makeup-classes",
    image: trainingClass,
    title: "Professional Makeup Classes",
    category: "Makeup",
    duration: "3 months",
    description: "Comprehensive professional training covering all aspects of makeup artistry for career readiness. Perfect for those who want to become professional makeup artists.",
    prices: { Personal: "₹8,000", Basic: "₹10,000", Advance: "₹10,000" },
    features: ["Celebrity Makeup", "Editorial & Fashion", "Airbrush Techniques", "Business Skills"],
    whatYouLearn: ["Celebrity & Editorial Makeup", "Fashion & Runway Looks", "Airbrush Application", "Special Effects Basics", "Business & Marketing Skills", "Social Media Portfolio Building", "Photography Makeup", "International Techniques", "Client Handling & Etiquette", "Certificate upon completion"],
  },
  {
    slug: "professional-mehndi-classes",
    image: mehndiService,
    title: "Professional Mehndi Classes",
    category: "Mehndi",
    duration: "3 months",
    description: "Advanced mehndi training for those looking to become professional mehndi artists. Master all popular mehndi styles and build your career.",
    prices: { Personal: "₹8,000", Basic: "₹10,000", Advance: "₹10,000" },
    features: ["Marwadi Full Filling", "Modern Fusion", "Speed & Precision", "Client Management"],
    whatYouLearn: ["Advanced Traditional Designs", "Marwadi Full Filling Mastery", "Arabic Fusion Styles", "3D Mehndi Techniques", "Stone & Glitter Expertise", "Speed Building Exercises", "Client Consultation", "Pricing & Business Setup", "Portfolio Photography", "Certificate upon completion"],
  },
  {
    slug: "tailoring-draping-courses",
    image: hairStyling,
    title: "Tailoring & Draping Courses",
    category: "Fashion",
    duration: "3 months",
    description: "Master garment stitching and traditional saree draping styles like Bengali and Marathi with practical training. Perfect for aspiring fashion professionals.",
    prices: { Personal: "₹8,000", Basic: "₹10,000", Advance: "₹10,000" },
    features: ["Garment Stitching", "Saree Draping Styles", "Pattern Making", "Finishing Techniques"],
    whatYouLearn: ["Sketching and Illustration", "Pattern Making", "Garment Construction", "Tailoring Techniques", "Fabric Selection & Knowledge", "Drifting and Fitting", "Use of Sewing Machines", "Saree Draping Styles", "Project Work & Portfolio Building", "Certificate upon completion"],
  },
];

export const getCourseBySlug = (slug: string) => courses.find(c => c.slug === slug);
