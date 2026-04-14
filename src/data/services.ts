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
import facialGold from "@/assets/facial-gold.jpg";
import facialHerbal from "@/assets/facial-herbal.jpg";
import facialDiamond from "@/assets/facial-diamond.jpg";
import facialOxy from "@/assets/facial-oxy.jpg";
import facialDtan from "@/assets/facial-dtan.jpg";
import bodySpa from "@/assets/body-spa.jpg";
import waxingService from "@/assets/waxing-service.jpg";

export interface Service {
  slug: string;
  image: string;
  title: string;
  description: string;
  price: string;
  category: string;
  details?: string[];
}

export const services: Service[] = [
  // Makeup Academy
  { slug: "professional-makeup-classes", image: makeupService, title: "Professional Makeup Classes", description: "Comprehensive professional makeup training from basics to advanced bridal and HD techniques.", price: "₹8,000", category: "Makeup Academy", details: ["Basic to Advanced Makeup Techniques", "Bridal & HD Makeup", "Product Knowledge & Selection", "Portfolio Building", "Celebrity Makeup", "Airbrush Techniques", "Business & Client Management Skills", "Certificate upon completion"] },
  { slug: "professional-mehndi-classes", image: mehndiService, title: "Professional Mehndi Classes", description: "Master the art of mehndi design with hands-on training in traditional and modern styles.", price: "₹8,000", category: "Makeup Academy", details: ["Traditional Indian Designs", "Arabic & Indo-Arabic Styles", "Marwadi Full Filling", "Stone & Glitter Mehndi", "Modern Fusion Designs", "Speed & Precision Training", "Client Management", "Certificate upon completion"] },

  // Makeup Services
  { slug: "makeup-services", image: makeupService, title: "Makeup Services", description: "Master makeup with our courses, from basics to advanced bridal and HD techniques.", price: "₹15,000", category: "Makeup", details: ["Professional makeup application", "Skin preparation & primer", "Eye makeup & contouring", "Lip styling", "Setting spray & finishing", "Suitable for all skin types"] },
  { slug: "sider-makeup", image: partyMakeup, title: "Sider Makeup", description: "Elegant light makeup perfect for attending functions and events.", price: "₹1,499", category: "Makeup", details: ["Lightweight natural finish", "Subtle eye makeup", "Soft lip colors", "Long-lasting formula", "Perfect for daytime events"] },
  { slug: "party-makeup-basic", image: partyMakeup, title: "Party Makeup Basic", description: "Natural yet glamorous makeup for casual parties.", price: "₹2,499", category: "Makeup", details: ["Glamorous party look", "Smokey or shimmer eyes", "Contouring & highlighting", "Long-lasting products", "Suitable for evening events"] },
  { slug: "party-makeup-premium", image: receptionLook, title: "Party Makeup Premium", description: "Glamorous makeup for high-end events and parties.", price: "₹3,499", category: "Makeup", details: ["Premium product usage", "Advanced contouring", "Dramatic eye looks", "Glitter & shimmer accents", "Professional setting spray", "Touch-up kit included"] },
  { slug: "engagement-basic-makeup", image: muslimBridal, title: "Engagement Basic Makeup", description: "Simple and elegant makeup for engagement ceremonies.", price: "₹4,999", category: "Makeup", details: ["Elegant engagement look", "Soft glam makeup", "Eye-catching eye makeup", "Long-lasting formula", "Photo-ready finish"] },
  { slug: "engagement-premium-makeup", image: pakistaniBridal, title: "Engagement Premium Makeup", description: "Luxurious makeup for a memorable engagement day.", price: "₹5,999", category: "Makeup", details: ["Premium luxury products", "HD finish", "Dramatic eye styling", "Professional contouring", "Waterproof formula", "Touch-up kit"] },
  { slug: "basic-bridal-makeup", image: heroBride, title: "Basic Bridal Makeup", description: "Classic bridal makeup with traditional charm.", price: "₹8,999", category: "Bridal", details: ["Traditional bridal look", "Skin preparation", "Eye & lip styling", "Setting spray", "Long-lasting formula", "Pre-bridal consultation"] },
  { slug: "bridal-pakistani-look", image: pakistaniBridal, title: "Bridal Pakistani Look", description: "A majestic look for the most special day of your life.", price: "₹9,999", category: "Bridal", details: ["Pakistani bridal tradition", "Heavy eye makeup", "Perfect skin base", "Gold & shimmer accents", "Dupatta setting", "Jewelry coordination"] },
  { slug: "reception-makeup-look", image: receptionLook, title: "Reception Makeup Look", description: "Sophisticated and elegant look for your reception night.", price: "₹9,999", category: "Bridal", details: ["Reception glam look", "Glamorous eye styling", "Contouring & highlighting", "Lip art", "Hair styling coordination", "Touch-up kit"] },
  { slug: "bridal-makeup-hd-premium", image: heroBride, title: "Bridal Makeup HD Premium", description: "High-definition bridal makeup for perfect photography.", price: "₹10,999", category: "Bridal", details: ["HD camera-ready finish", "Airbrush technique", "Waterproof products", "Full day lasting", "Pre-bridal skincare", "Touch-up kit included"] },
  { slug: "waterproof-makeup", image: makeupService, title: "Waterproof Makeup", description: "Stay flawless through tears, sweat, and long hours.", price: "₹11,999", category: "Bridal", details: ["100% waterproof formula", "Sweat-proof lasting", "HD finish", "All-day wear", "Premium waterproof products", "Perfect for outdoor events"] },
  { slug: "marathi-bridal-makeup", image: teleguBridal, title: "Marathi Bridal Makeup", description: "Traditional Maharashtrian bridal look with nath and mundavalya.", price: "₹12,999", category: "Bridal", details: ["Traditional Marathi look", "Nath & mundavalya styling", "Traditional saree draping", "Authentic jewelry coordination", "Skin preparation", "Long-lasting finish"] },
  { slug: "south-indian-bridal-look", image: koreanMakeup, title: "South Indian Bridal Look", description: "Elegant temple-style bridal makeover.", price: "₹14,999", category: "Bridal", details: ["Temple jewelry coordination", "Traditional South Indian styling", "Silk saree draping", "Flower garland arrangement", "Traditional tikka & mang tikka", "Professional photography-ready"] },
  { slug: "bridal-package", image: muslimBridal, title: "Bridal Package", description: "Look radiant on your big day with our premium bridal beauty package.", price: "₹15,000", category: "Bridal", details: ["Complete bridal package", "Pre-bridal facial", "Makeup & hair styling", "Mehndi included", "Saree/dupatta draping", "Touch-up kit", "Bridal consultation"] },
  { slug: "korean-glass-makeup", image: koreanMakeup, title: "Korean Glass Makeup", description: "Get dewy, glowing skin with K-beauty-inspired makeup.", price: "₹24,999", category: "Makeup", details: ["K-beauty glass skin", "Dewy luminous finish", "Minimal makeup look", "Korean products", "Skin prep & hydration", "Natural glow enhancement"] },

  // Mehndi Services
  { slug: "mehndi-services", image: mehndiService, title: "Mehndi Services", description: "Learn the art of traditional and modern mehndi with hands-on instruction.", price: "₹6,000", category: "Mehndi", details: ["Full hand mehndi", "Both palms & back", "Traditional designs", "Arabic patterns", "Bridal mehndi", "Custom design options"] },
  { slug: "marwadi-mehndi", image: marwadiMehndi, title: "Marwadi Full Filling Mehandi", description: "Intricate Marwadi-style mehndi with full hand and arm coverage.", price: "₹1,240", category: "Mehndi", details: ["Full hand coverage", "Traditional Marwadi patterns", "Intricate detailing", "Both hands & feet", "Premium mehndi cones", "Dark stain guarantee"] },
  { slug: "stone-glitter-mehndi", image: stoneMehndi, title: "Stone & Glitter Mehandi", description: "Stylish mehndi designs with stone and glitter accents.", price: "₹1,880", category: "Mehndi", details: ["Glitter embellishments", "Stone placements", "Modern design fusion", "Sparkle finish", "Party-ready mehndi", "Safe skin-friendly materials"] },

  // Hair Services
  { slug: "hair-styling", image: hairStyling, title: "Hair Styling", description: "Transform your look with our expert hair styling services from cuts to creative updos.", price: "₹399", category: "Hair", details: ["Professional styling", "Updos & braids", "Blow dry & set", "Event hair styling", "Bridal hairdos", "Heat styling protection"] },
  { slug: "threading-services", image: facialService, title: "Threading Services", description: "Achieve perfect brows and facial hair removal with our precise threading technique.", price: "₹70", category: "Hair", details: ["Eyebrow threading", "Upper lip threading", "Full face threading", "Precise technique", "Minimal irritation", "Quick & efficient"] },
  { slug: "haircut-services", image: hairStyling, title: "All Type of Haircut Services", description: "Get the perfect haircut to suit your style, face shape, and personality.", price: "₹399", category: "Hair", details: ["Layer cuts", "Bob cuts", "Bangs & fringes", "U-cut & V-cut", "Step cuts", "Consultation included"] },
  { slug: "hair-color-services", image: hairStyling, title: "Hair Color Services", description: "Transform your look with professional hair coloring tailored to your style.", price: "₹399", category: "Hair", details: ["Global coloring", "Highlights & lowlights", "Balayage", "Ombre", "Root touch-up", "Ammonia-free options"] },
  { slug: "smoothening-rebonding", image: hairStyling, title: "Smoothening & Rebonding", description: "Effectively smooth and straighten frizzy, unmanageable hair for a sleek look.", price: "₹1,500", category: "Hair", details: ["Hair smoothening", "Rebonding treatment", "Frizz-free results", "Long-lasting smoothness", "Professional products", "Aftercare guidance"] },
  { slug: "hair-spa", image: hairStyling, title: "Hair Spa", description: "Revitalizing treatment for healthier, shinier hair.", price: "₹1,499", category: "Hair", details: ["Deep conditioning", "Scalp massage", "Hair mask treatment", "Steam therapy", "Frizz control", "Shine enhancement"] },
  { slug: "keratin-spa", image: hairStyling, title: "Keratin Spa", description: "Protein-rich treatment to strengthen and smoothen hair.", price: "₹999", category: "Hair", details: ["Keratin protein infusion", "Strengthening treatment", "Smoothening effect", "Damage repair", "Frizz reduction", "Long-lasting results"] },
  { slug: "korien-hair-spa", image: hairStyling, title: "Korien Hair Spa", description: "Luxurious hair spa infused with Korean ingredients for deep nourishment.", price: "₹1,999", category: "Hair", details: ["Korean ingredients", "Deep nourishment", "Scalp treatment", "Shine boosting", "Damage repair", "Premium products"] },

  // Bleach Services
  { slug: "herbal-bleach", image: facialHerbal, title: "Herbal Bleach", description: "Natural skin lightening using herbal ingredients for a safer, glowing result.", price: "₹399", category: "Bleach", details: ["Natural herbal formula", "Safe for sensitive skin", "Skin brightening", "No harsh chemicals", "Gentle application", "Instant glow"] },
  { slug: "d-tan-bleach", image: facialDtan, title: "D-Tan Bleach", description: "Effective bleaching solution to remove tan and restore your natural skin tone.", price: "₹499", category: "Bleach", details: ["Tan removal", "Skin tone restoration", "Deep cleansing", "Even skin tone", "Sun damage repair", "Quick results"] },
  { slug: "gold-bleach", image: facialGold, title: "Gold Bleach", description: "Luxurious gold-infused bleach for radiant and glowing skin.", price: "₹350", category: "Bleach", details: ["Gold-infused formula", "Radiant glow", "Anti-aging benefits", "Premium ingredients", "Luxury treatment", "Instant brightness"] },
  { slug: "oxy-bleach", image: facialOxy, title: "OXY Bleach", description: "Advanced oxygen-based bleach for brighter, even-toned skin.", price: "₹700", category: "Bleach", details: ["Oxygen-based formula", "Deep brightening", "Even skin tone", "Advanced technology", "Safe for all skin", "Professional grade"] },
  { slug: "o3-bleach", image: facialOxy, title: "O3 Bleach", description: "Powerful ozone-infused bleach for detoxified, glowing skin.", price: "₹700", category: "Bleach", details: ["Ozone technology", "Skin detoxification", "Deep cleansing", "Pollution protection", "Glow enhancement", "Professional results"] },
  { slug: "coffey-bleach", image: facialHerbal, title: "Coffey Bleach", description: "Natural coffee-infused bleach for glowing, energized skin.", price: "₹700", category: "Bleach", details: ["Coffee extract formula", "Antioxidant benefits", "Skin energizing", "Natural brightening", "Exfoliation benefit", "Fresh glow"] },
  { slug: "diamond-bleach", image: facialDiamond, title: "Diamond Bleach", description: "Premium diamond dust bleach for ultimate skin radiance and luxury.", price: "₹350", category: "Bleach", details: ["Diamond dust infused", "Ultimate radiance", "Luxury treatment", "Premium formula", "Skin polishing", "Professional grade"] },
  { slug: "advanced-bleach", image: facialOxy, title: "Advanced Bleach", description: "High-performance bleach with advanced technology for faster results.", price: "₹550", category: "Bleach", details: ["Advanced formula", "Faster results", "High performance", "Even coverage", "Safe ingredients", "Professional quality"] },

  // Facial Services
  { slug: "hydera-facial", image: facialOxy, title: "Hydera Facial", description: "Revitalize your skin with our Hydera facial for intense hydration and glow.", price: "₹2,999", category: "Facial", details: ["Intense hydration", "Deep cleansing", "Exfoliation", "Serum infusion", "LED therapy", "Instant glow results"] },
  { slug: "gold-facial", image: facialGold, title: "Gold Facial", description: "Luxurious facial enriched with gold for anti-aging and radiant skin.", price: "₹999", category: "Facial", details: ["24K gold infusion", "Anti-aging treatment", "Skin tightening", "Radiance boosting", "Fine line reduction", "Luxury experience"] },
  { slug: "oxy-facial", image: facialOxy, title: "Oxy Facial", description: "Oxygen-based facial for deep cleansing and rejuvenated skin.", price: "₹999", category: "Facial", details: ["Oxygen infusion", "Deep pore cleansing", "Skin rejuvenation", "Detoxification", "Bright complexion", "Hydration boost"] },
  { slug: "korien-facial", image: koreanMakeup, title: "Korien Facial", description: "Korean-inspired facial combining modern technology and traditional methods.", price: "₹2,999", category: "Facial", details: ["Korean skincare routine", "Multi-step treatment", "Sheet mask", "Serum layering", "Glass skin finish", "K-beauty products"] },
  { slug: "anti-aging-facial", image: facialDiamond, title: "Anti-Aging Facial", description: "Combat signs of aging with our scientifically-backed anti-aging facial.", price: "₹1,100", category: "Facial", details: ["Anti-wrinkle treatment", "Collagen boosting", "Fine line reduction", "Skin firming", "Youth restoration", "Premium serums"] },
  { slug: "herbal-facial", image: facialHerbal, title: "Herbal Facial", description: "Rejuvenate your skin naturally with our soothing herbal facial.", price: "₹499", category: "Facial", details: ["100% natural herbs", "Gentle on skin", "Deep nourishment", "Pore minimizing", "Soothing effect", "Natural glow"] },
  { slug: "diamond-facial", image: facialDiamond, title: "Diamond Facial", description: "Experience luxury skincare with our diamond-infused facial.", price: "₹1,199", category: "Facial", details: ["Diamond microdermabrasion", "Skin polishing", "Deep exfoliation", "Luxury treatment", "Instant brightness", "Smooth texture"] },
  { slug: "papaya-facial", image: facialHerbal, title: "Papaya Facial", description: "Nourish your skin with the natural enzymes of papaya.", price: "₹700", category: "Facial", details: ["Papaya enzymes", "Natural exfoliation", "Vitamin A & C boost", "Dead skin removal", "Bright complexion", "Gentle treatment"] },
  { slug: "o3-facial", image: facialOxy, title: "O3 Facial", description: "Revitalize your skin with the power of ozone therapy.", price: "₹1,499", category: "Facial", details: ["Ozone therapy", "Deep detoxification", "Pollution damage repair", "Skin revitalization", "Anti-bacterial", "Professional grade"] },
  { slug: "d-tan-facial", image: facialDtan, title: "D-Tan Facial", description: "Get rid of tanned and dull skin with our intensive D-Tan Facial.", price: "₹1,999", category: "Facial", details: ["Intensive tan removal", "Skin brightening", "Even tone restoration", "Sun damage repair", "Deep cleansing", "Lasting results"] },

  // Spa & Body
  { slug: "wax-facial-chocolate", image: bodySpa, title: "Wax/Facial/Chocolate", description: "Triple-action treatment combining waxing, facial, and chocolate mask.", price: "₹1,200", category: "Spa", details: ["Chocolate wax treatment", "Facial included", "Skin nourishment", "Moisturizing effect", "Anti-oxidant benefits", "Relaxing experience"] },
  { slug: "hand-spa", image: bodySpa, title: "Hand Spa", description: "Pamper your hands with a relaxing and rejuvenating spa treatment.", price: "₹1,199", category: "Spa", details: ["Hand massage", "Exfoliation", "Moisturizing treatment", "Nail care", "Cuticle treatment", "Relaxation therapy"] },
  { slug: "foot-spa", image: bodySpa, title: "Foot Spa", description: "Relax and refresh tired feet with our soothing foot spa treatment.", price: "₹999", category: "Spa", details: ["Foot soak", "Exfoliation", "Massage therapy", "Moisturizing", "Nail care", "Relaxation"] },
  { slug: "pimples-treatment", image: facialOxy, title: "Pimples Treatment", description: "Targeted acne care to clear breakouts and prevent future flare-ups.", price: "₹2,499", category: "Treatment", details: ["Acne analysis", "Deep cleansing", "Extraction", "Anti-bacterial treatment", "Healing serums", "Prevention guidance"] },
  { slug: "fairness-treatment", image: facialDiamond, title: "Fairness Treatment", description: "Skin brightening treatment to achieve a fairer, more even tone.", price: "₹3,999", category: "Treatment", details: ["Skin brightening", "Pigmentation treatment", "Even tone", "Multiple sessions", "Premium products", "Lasting results"] },
  { slug: "body-polish", image: bodySpa, title: "Body Polish", description: "Exfoliating treatment to leave your skin smooth and radiant.", price: "₹3,999", category: "Spa", details: ["Full body exfoliation", "Dead skin removal", "Skin smoothing", "Moisturizing", "Radiance boosting", "Premium products"] },
  { slug: "clean-up", image: facialHerbal, title: "Clean-Up", description: "Basic facial for deep cleansing and refreshment.", price: "₹250", category: "Facial", details: ["Deep cleansing", "Blackhead removal", "Toning", "Moisturizing", "Quick treatment", "Fresh skin"] },
  { slug: "korien-clean-up", image: koreanMakeup, title: "Korien Clean-Up", description: "Korean-inspired clean-up facial for radiant skin.", price: "₹399", category: "Facial", details: ["Korean method", "Multi-step cleansing", "Toner application", "Serum infusion", "Sheet mask", "Glass skin finish"] },
  { slug: "skin-peeling-treatment", image: facialDtan, title: "Skin Peeling Treatment", description: "Advanced exfoliation treatment for clearer, smoother skin.", price: "₹2,999", category: "Treatment", details: ["Chemical peel", "Dead skin removal", "New skin regeneration", "Acne scar reduction", "Brightness enhancement", "Professional supervision"] },
  { slug: "full-body-bean-wax", image: waxingService, title: "Full Body Bean Wax", description: "Smooth and gentle hair removal for the entire body using premium bean wax.", price: "₹1,499", category: "Wax", details: ["Full body waxing", "Premium bean wax", "Gentle on skin", "Smooth finish", "Long-lasting results", "Minimal irritation"] },

  // Draping
  { slug: "marathi-saree-draping", image: teleguBridal, title: "Marathi Saree Draping", description: "Traditional Nauvari saree draping for a graceful Maharashtrian look.", price: "₹499", category: "Draping", details: ["Nauvari style draping", "Traditional pleating", "Pin-free technique", "Comfortable fitting", "Photo-ready look", "Quick service"] },
  { slug: "bengali-saree-draping", image: teleguBridal, title: "Bengali Saree Draping", description: "Elegant Bengali saree styling with traditional pallu and key details.", price: "₹499", category: "Draping", details: ["Bengali style pallu", "Traditional draping", "Key pin details", "Comfortable fitting", "Elegant finish", "Quick service"] },
];

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
