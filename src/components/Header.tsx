import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import mirandaLogo from "@/assets/miranda-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const cleaningServices = [
    { name: "Medical Cleaning", path: "/services/medical" },
    { name: "Office Cleaning", path: "/services/office" },
    { name: "School Cleaning", path: "/services/school" },
    { name: "Church Cleaning", path: "/services/church" },
    { name: "Gym Cleaning", path: "/services/gym" },
    { name: "Bank Cleaning", path: "/services/bank" },
    { name: "Daycare Cleaning", path: "/services/daycare" },
    { name: "Property Management", path: "/services/property-management" },
    { name: "Industrial Cleaning", path: "/services/industrial" },
    { name: "Car Dealerships", path: "/services/car-dealerships" },
  ];

  const specialtyServices = [
    { name: "Office Disinfecting", path: "/services/office-disinfecting" },
    { name: "Floor Care", path: "/services/floor-care" },
    { name: "Window Cleaning", path: "/services/window-cleaning" },
    { name: "Day Porter Services", path: "/services/day-porter" },
    { name: "Post Construction", path: "/services/post-construction" },
    { name: "Deep Cleaning", path: "/services/deep-cleaning" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (dropdownName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={mirandaLogo} 
                alt="Miranda Gdal Janitorial LLC" 
                className="h-12 md:h-14 w-auto"
              />
            </Link>
            
            <a 
              href="tel:9453989726" 
              className="hidden lg:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={16} className="text-accent" />
              <span>(945) 398-9726</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>

            {/* Cleaning Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('cleaning')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                onClick={() => setOpenDropdown(openDropdown === 'cleaning' ? null : 'cleaning')}
              >
                Cleaning Services
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {openDropdown === 'cleaning' && (
                <div 
                  className="absolute left-0 top-full mt-2 w-64 bg-card border border-border rounded-lg shadow-lg z-[100] py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => handleMouseEnter('cleaning')}
                  onMouseLeave={handleMouseLeave}
                >
                  {cleaningServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-accent/10 transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Specialty Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('specialty')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                onClick={() => setOpenDropdown(openDropdown === 'specialty' ? null : 'specialty')}
              >
                Specialty Services
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {openDropdown === 'specialty' && (
                <div 
                  className="absolute left-0 top-full mt-2 w-64 bg-card border border-border rounded-lg shadow-lg z-[100] py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => handleMouseEnter('specialty')}
                  onMouseLeave={handleMouseLeave}
                >
                  {specialtyServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-accent/10 transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/service-area"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/service-area") ? "text-primary" : "text-foreground"
              }`}
            >
              Service Area
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About Us
            </Link>

            <Link
              to="/testimonials"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/testimonials") ? "text-primary" : "text-foreground"
              }`}
            >
              Testimonials
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          <Button asChild className="hidden md:inline-flex">
            <Link to="/contact">Get Free Quote</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border mt-2">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isActive("/") ? "text-primary" : "text-foreground"
                }`}
              >
                Home
              </Link>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="cleaning" className="border-none">
                  <AccordionTrigger className="text-sm font-medium py-0 hover:no-underline">
                    Cleaning Services
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-3 pl-4 pt-2">
                      {cleaningServices.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="specialty" className="border-none">
                  <AccordionTrigger className="text-sm font-medium py-0 hover:no-underline">
                    Specialty Services
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-3 pl-4 pt-2">
                      {specialtyServices.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link
                to="/service-area"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isActive("/service-area") ? "text-primary" : "text-foreground"
                }`}
              >
                Service Area
              </Link>

              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isActive("/about") ? "text-primary" : "text-foreground"
                }`}
              >
                About Us
              </Link>

              <Link
                to="/testimonials"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isActive("/testimonials") ? "text-primary" : "text-foreground"
                }`}
              >
                Testimonials
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isActive("/contact") ? "text-primary" : "text-foreground"
                }`}
              >
                Contact
              </Link>

              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
