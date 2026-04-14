import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/../../../public/logo.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Training", path: "/training" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="Zainab Faiz Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
            <div className="hidden sm:block">
              <h1 className="font-heading text-sm md:text-base font-bold text-gradient-gold leading-tight">ZAINAB FAIZ</h1>
              <p className="text-[10px] md:text-xs text-muted-foreground tracking-wider">MAKEUP STUDIO & ACADEMY</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-gold ${
                  location.pathname === link.path ? "text-gold" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/918123338996?text=Hello%2C%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-foreground transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-foreground transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-foreground transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors ${
                    location.pathname === link.path ? "text-gold" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/918123338996?text=Hello%2C%20I%27m%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold text-center"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
