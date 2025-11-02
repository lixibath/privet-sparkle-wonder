import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-section-alt border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-inter font-bold text-lg mb-4 text-foreground">MIRANDA JANITORIAL</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Professional commercial cleaning services in Dallas, TX. Reliable, on-time, and thorough.
            </p>
            <address className="text-sm text-muted-foreground not-italic">
              17878 PRESTON RD APT 378<br />
              DALLAS, TX 75252
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold mb-4 text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link to="/service-area" className="text-sm text-muted-foreground hover:text-primary transition-colors">Service Area</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Testimonials</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-inter font-semibold mb-4 text-foreground">Services</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/services#office" className="text-sm text-muted-foreground hover:text-primary transition-colors">Office Cleaning</Link>
              <Link to="/services#medical" className="text-sm text-muted-foreground hover:text-primary transition-colors">Medical Facility Cleaning</Link>
              <Link to="/services#retail" className="text-sm text-muted-foreground hover:text-primary transition-colors">Retail Store Cleaning</Link>
              <Link to="/services#restaurant" className="text-sm text-muted-foreground hover:text-primary transition-colors">Restaurant Cleaning</Link>
              <Link to="/services#school" className="text-sm text-muted-foreground hover:text-primary transition-colors">School Cleaning</Link>
              <Link to="/services#gym" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gym Cleaning</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter font-semibold mb-4 text-foreground">Contact</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:9453989726" className="text-muted-foreground hover:text-primary transition-colors">
                (945) 398-9726
              </a>
              <a href="mailto:contact@mirandajanitorial.com" className="text-muted-foreground hover:text-primary transition-colors">
                contact@mirandajanitorial.com
              </a>
              <p className="text-muted-foreground mt-2">
                <strong className="text-foreground">Hours:</strong><br />
                Mon-Fri: 8 AM - 6 PM<br />
                Sat: 9 AM - 3 PM<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Miranda GDAL Janitorial LLC. All rights reserved.
            </p>
            <nav className="flex gap-6">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Accessibility
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
