import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpeg" alt="Zainab Faiz" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h3 className="font-heading font-bold text-gradient-gold">ZAINAB FAIZ</h3>
                <p className="text-xs text-muted-foreground tracking-wider">MAKEUP STUDIO & ACADEMY</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Celebrity & Professional Makeup Artist with 8+ years of experience. We travel globally for brand shoots, model shoots & bridal makeup.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About Us", "Services", "Training", "Gallery", "Contact"].map((item) => (
                <Link key={item} to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-").replace("about-us", "about")}`} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              {["Bridal Makeup", "Party Makeup", "Mehndi Services", "Hair Styling", "Facial Treatments", "Makeup Academy"].map((s) => (
                <Link key={s} to="/services" className="text-sm text-muted-foreground hover:text-gold transition-colors">{s}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Tolichowki, Hyderabad</span>
              </div>
              <a href="tel:+918123338996" className="flex items-center gap-2 hover:text-gold transition-colors">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+91 81233 38996</span>
              </a>
              <a href="mailto:abdulwasekhan2432@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>abdulwasekhan2432@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Zainab Faiz Makeup Studio and Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
