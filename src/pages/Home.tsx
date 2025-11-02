import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import QuickCalculator from "@/components/QuickCalculator";
import TestimonialCard from "@/components/TestimonialCard";
import { Phone } from "lucide-react";

const Home = () => {
  const testimonials = [
    {
      name: "Robert Chen",
      company: "First National Bank",
      serviceType: "Bank Cleaning",
      rating: 5,
      review: "We've been using Miranda Janitorial for three years now. They understand the security requirements of a financial institution and their staff is professional and trustworthy. Our branches always look spotless.",
      date: "Nov 2024"
    },
    {
      name: "Sarah Mitchell",
      company: "Dallas Medical Center",
      serviceType: "Medical Facility",
      rating: 5,
      review: "Healthcare facilities have strict cleaning standards, and Miranda meets them all. Their attention to detail and use of hospital-grade disinfectants gives us peace of mind. Highly recommended.",
      date: "Oct 2024"
    },
    {
      name: "James Rodriguez",
      company: "TechStart Office Park",
      serviceType: "Office Cleaning",
      rating: 5,
      review: "Straight-up the most reliable cleaning service we've worked with. They show up when they say they will, do a thorough job, and their pricing is transparent. No surprises on the invoice.",
      date: "Oct 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-section-alt to-background py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Janitorial Services Dallas Can Count On
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Professional janitorial services you can count on. We show up on time, do the job right, and don't cut corners. That's the Miranda way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <a href="tel:9453989726">
                  <Phone className="mr-2 h-5 w-5" />
                  (945) 398-9726
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-section-alt border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-accent text-lg font-semibold">Licensed & Insured</div>
              <div className="text-sm text-muted-foreground">TX License #56172</div>
            </div>
            <div className="border-l border-border h-12 hidden md:block"></div>
            <div className="text-center">
              <div className="text-accent text-lg font-semibold">Bonded Business</div>
              <div className="text-sm text-muted-foreground">$1M Liability Coverage</div>
            </div>
            <div className="border-l border-border h-12 hidden md:block"></div>
            <div className="text-center">
              <div className="text-accent text-lg font-semibold">Eco-Friendly</div>
              <div className="text-sm text-muted-foreground">Green Cleaning Products</div>
            </div>
            <div className="border-l border-border h-12 hidden md:block"></div>
            <div className="text-center">
              <div className="text-accent text-lg font-semibold">Background Checked</div>
              <div className="text-sm text-muted-foreground">All Staff Vetted</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Dallas Businesses Choose Miranda</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Look, running a business in Dallas is tough enough without worrying about whether your cleaning crew will show up. We started Miranda Janitorial because we got tired of seeing companies get burned by unreliable cleaners who promise the moon and deliver half-finished work.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Here's what we do different: We hire people who actually care about their work. We train them properly. We pay them fairly. And when we say we'll be there at 6 PM on Tuesday, you can bet we'll be there at 6 PM on Tuesday.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 stat-number">15+</div>
              <div className="text-muted-foreground">Years Cleaning Dallas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 stat-number">200+</div>
              <div className="text-muted-foreground">Businesses Trust Us</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 stat-number">24/7</div>
              <div className="text-muted-foreground">Service Available</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 stat-number">98%</div>
              <div className="text-muted-foreground">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Alternating Layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Comprehensive commercial cleaning services tailored to your industry. All services include supplies, equipment, and our satisfaction guarantee.
          </p>
        </div>

        {/* Service 1 - Office Cleaning */}
        <div className="bg-background">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-[4/3] bg-card rounded-lg border border-border"></div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-4">Office Cleaning</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Your office should be a place your team wants to work, not a place they're embarrassed to bring clients. We clean Dallas offices the right way - thorough, consistent, and without drama.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We handle everything from daily trash removal to deep carpet cleaning. Our crews work around your schedule, whether that's before opening, after closing, or on weekends. You focus on running your business, we'll keep it clean.
                </p>
                <div className="font-mono text-2xl md:text-3xl text-accent mb-6 font-semibold">
                  $0.12-0.18/sq ft
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Vacuum and mop all floors (yes, under the desks too)
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Clean and disinfect bathrooms completely
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Empty all trash and recycling bins
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Wipe down desks, tables, and breakroom areas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Service 2 - Medical Facility */}
        <div className="bg-section-alt">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Medical Facility Cleaning</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Healthcare facilities have strict cleaning standards, and Miranda meets them all. Our team is trained in proper disinfection protocols and uses hospital-grade cleaning products that meet CDC guidelines.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From waiting rooms to exam rooms, we understand the importance of infection control. Our staff follows OSHA bloodborne pathogen standards and can provide daily or multiple-times-daily service to keep your facility safe for patients and staff.
                </p>
                <div className="font-mono text-2xl md:text-3xl text-accent mb-6 font-semibold">
                  $0.20-0.30/sq ft
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Hospital-grade disinfection of all surfaces
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Proper medical waste handling procedures
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Waiting room and exam room sanitization
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    OSHA-compliant cleaning protocols
                  </li>
                </ul>
              </div>
              <div>
                <div className="aspect-[4/3] bg-card rounded-lg border border-border"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 3 - Retail Store */}
        <div className="bg-background">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-[4/3] bg-card rounded-lg border border-border"></div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-4">Retail Store Cleaning</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  First impressions matter in retail. A clean store isn't just about looking good - it's about creating an environment where customers want to spend time and money. We get your store ready to impress before you open the doors.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our retail cleaning crews understand the difference between a quick pass and a proper clean. We handle high-traffic areas, fitting rooms, checkout counters, and display floors with the attention they deserve. Nightly service keeps your store looking fresh every morning.
                </p>
                <div className="font-mono text-2xl md:text-3xl text-accent mb-6 font-semibold">
                  $0.10-0.15/sq ft
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Floor cleaning and polishing for sales floor
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Fitting room and restroom sanitization
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Display and checkout counter cleaning
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Window and glass door cleaning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Service 4 - Restaurant */}
        <div className="bg-section-alt">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Restaurant & Kitchen Cleaning</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Restaurants can't mess around with cleanliness - your health rating depends on it. We do deep kitchen cleaning that meets Dallas health department standards, from hood vents to floor drains. Our team knows what inspectors look for because we've been doing this for over 15 years.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We clean when you're closed so we're not in the way of service. That means late nights and early mornings, but that's the restaurant business. Grease buildup, food prep areas, walk-in coolers - we handle it all with food-safe cleaning products.
                </p>
                <div className="font-mono text-2xl md:text-3xl text-accent mb-6 font-semibold">
                  $0.25-0.40/sq ft
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Kitchen deep cleaning and degreasing
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Hood vent and exhaust system cleaning
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Food prep surface sanitization
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Dining area and restroom cleaning
                  </li>
                </ul>
              </div>
              <div>
                <div className="aspect-[4/3] bg-card rounded-lg border border-border"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 5 - School */}
        <div className="bg-background">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-[4/3] bg-card rounded-lg border border-border"></div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-4">School & Educational Facility Cleaning</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Schools are full of kids, which means they're full of germs, spills, and messes that appear out of nowhere. We clean Dallas schools and educational facilities with kid-safe, non-toxic products that still get the job done right.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our crews work after hours so we don't interrupt classes. We handle classrooms, cafeterias, gyms, and administrative offices. Desks get wiped down, floors get mopped, and bathrooms get the deep clean they need. Every classroom ready for the next school day.
                </p>
                <div className="font-mono text-2xl md:text-3xl text-accent mb-6 font-semibold">
                  $0.08-0.12/sq ft
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Classroom cleaning and desk sanitization
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Cafeteria and gym floor cleaning
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Restroom deep cleaning and restocking
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Non-toxic, kid-safe cleaning products
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Service 6 - Gym */}
        <div className="bg-section-alt">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Gym & Fitness Center Cleaning</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Gyms need cleaning multiple times a day - morning crew and evening crew minimum. Sweat, bacteria, and high-touch surfaces mean you can't skip a beat. We do twice-daily service to keep your facility clean when your members need it most.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Equipment gets wiped down, locker rooms get sanitized, cardio areas and weight rooms stay fresh. We use disinfectants that kill bacteria and viruses without leaving that overpowering chemical smell. Your members will notice the difference.
                </p>
                <div className="font-mono text-2xl md:text-3xl text-accent mb-6 font-semibold">
                  $0.15-0.22/sq ft
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Equipment wipe-down and sanitization
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Locker room and shower deep cleaning
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Floor cleaning for cardio and weight areas
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Twice-daily service available
                  </li>
                </ul>
              </div>
              <div>
                <div className="aspect-[4/3] bg-card rounded-lg border border-border"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/services">View All Services & Pricing</Link>
          </Button>
        </div>
      </section>

      {/* Quick Calculator */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-4">Quick Price Estimate</h2>
          <p className="text-muted-foreground text-center mb-8">
            Get a ballpark figure for your cleaning costs. For an exact quote, we'll need to see your facility.
          </p>
          <QuickCalculator />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-xl mb-3">Get Quote</h3>
              <p className="text-muted-foreground">
                Fill out the form or give us a call. We'll respond within 2 hours during business hours with ballpark pricing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-xl mb-3">Site Visit</h3>
              <p className="text-muted-foreground">
                We come to your place, take a look around, and give you an exact quote. No surprises, no hidden fees.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-xl mb-3">Schedule</h3>
              <p className="text-muted-foreground">
                Pick when you want us there. We work around your business hours - before opening, after closing, or weekends.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-xl mb-3">We Clean</h3>
              <p className="text-muted-foreground">
                Our crew shows up on time with everything they need and gets the job done right. Every single time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Preview */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Dallas & Surrounding Areas</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Primary service area includes Dallas, Richardson, Plano, Frisco, McKinney, and Allen. We also serve extended areas with reasonable travel fees.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-xl mb-2 text-primary">Primary Area</h3>
                <p className="text-muted-foreground">Dallas, Richardson, Plano, Frisco, McKinney, Allen</p>
                <p className="text-accent font-semibold mt-2">No Travel Fee</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-xl mb-2 text-primary">Extended Area</h3>
                <p className="text-muted-foreground">Fort Worth, Arlington, Irving, Garland, Mesquite</p>
                <p className="text-accent font-semibold mt-2">+$25-50 Fee</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-xl mb-2 text-primary">By Request</h3>
                <p className="text-muted-foreground">Denton, Waxahachie, Rockwall</p>
                <p className="text-accent font-semibold mt-2">+$75-100 Fee</p>
              </div>
            </div>
            <Button asChild size="lg">
              <Link to="/service-area">View Full Service Area Map</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it - hear from Dallas businesses who trust Miranda Janitorial.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/testimonials">Read All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-section-alt">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Common Questions</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Got questions? We've got answers.
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg hover:no-underline">
                Do you provide cleaning supplies and equipment?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Yes, all our services include supplies and equipment. We bring everything needed - from mops and vacuums to eco-friendly cleaning solutions. You don't need to provide anything. If you have specific products you want us to use, we can do that too.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg hover:no-underline">
                Are your cleaners background checked?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Absolutely. Every member of our team goes through a thorough background check and reference verification before they start. We also carry full liability insurance and worker's comp coverage. Your security is our priority.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg hover:no-underline">
                What if I'm not satisfied with the cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                If something's not right, call us within 24 hours and we'll come back and fix it at no extra charge. No questions asked. That's our guarantee. We want you happy with the service, period.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg hover:no-underline">
                How much notice do you need to start service?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Usually we can start within a week. For one-time deep cleans or emergency situations, we can often accommodate you in 24-48 hours. Just give us a call and we'll figure it out.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg hover:no-underline">
                Do you offer one-time deep cleans or only recurring service?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                We do both. One-time deep cleans for move-outs, post-construction, or special events. And ongoing janitorial services - daily, weekly, whatever you need. Most of our clients are on recurring schedules because it's more cost-effective.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg hover:no-underline">
                What happens if my regular cleaner is sick?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                We send a backup. We've got enough staff that if someone's out, we have someone else ready to cover. You won't even notice - your cleaning still gets done on schedule.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg hover:no-underline">
                Do you clean on weekends and holidays?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Yes. We work around your schedule. If you need weekend or holiday service, we can make it happen. Some of our restaurant and retail clients prefer weekend deep cleans. Just let us know what works for you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free quote today. No pressure, no obligation - just honest pricing for quality janitorial services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <a href="tel:9453989726">
                <Phone className="mr-2 h-5 w-5" />
                Call (945) 398-9726
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
