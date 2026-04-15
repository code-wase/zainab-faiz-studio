import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BookingForm from "./BookingForm";

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
  const [showBooking, setShowBooking] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 relative">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <img src="/logo.jpeg" alt="Zainab Faiz Logo" className="w-14 h-14 md:w-14 md:h-14 rounded-full object-cover border-2 border-primary/30" />
              <div className="hidden md:block">
                <h1 className="font-heading text-base lg:text-lg font-bold leading-tight">
                  <span className="text-primary">Zainab</span><span className="text-foreground">Faiz</span>
                </h1>
                <p className="text-xs text-muted-foreground tracking-wider">MAKEUP STUDIO & ACADEMY</p>
              </div>
            </Link>

            {/* Mobile only center brand name */}
            <div className="md:hidden absolute left-1/2 -translate-x-1/2 text-center">
              <h1 className="font-heading text-base font-bold leading-tight">
                <span className="text-primary">Zainab</span><span className="text-foreground">Faiz</span>
              </h1>
              <p className="text-[10px] text-muted-foreground tracking-wider">MAKEUP STUDIO & ACADEMY</p>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    location.pathname === link.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => setShowBooking(true)}
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Book Now
              </button>
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
                      location.pathname === link.path ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => { setIsOpen(false); setShowBooking(true); }}
                  className="px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold text-center"
                >
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <BookingForm isOpen={showBooking} onClose={() => setShowBooking(false)} />
    </>
  );
};

export default Navbar;
