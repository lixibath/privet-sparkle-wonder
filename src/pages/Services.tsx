import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "office",
      title: "Office Cleaning",
      pricing: "$0.12-0.18 per sq ft",
      frequency: "3x weekly recommended",
      description: "Your office should be a place your team wants to work, not a place they're embarrassed to bring clients. We clean Dallas offices the right way - thorough, consistent, and without drama.",
      included: [
        "Vacuum and mop all floors (yes, under the desks too)",
        "Empty all trash and recycling bins",
        "Clean and disinfect bathrooms (toilets, sinks, mirrors)",
        "Wipe down desks, tables, and countertops",
        "Clean breakroom and kitchen areas",
        "Dust surfaces and vacuum furniture",
        "Clean interior windows and glass doors",
        "Sanitize door handles and light switches"
      ],
      example: "5,000 sq ft office = $750-1,100/month (3x weekly)"
    },
    {
      id: "medical",
      title: "Medical Facility Cleaning",
      pricing: "$0.20-0.30 per sq ft",
      frequency: "Daily service",
      description: "Medical facilities can't mess around with cleanliness. We follow healthcare cleaning protocols and use medical-grade disinfectants. Your patients and staff deserve nothing less.",
      included: [
        "Medical-grade disinfection of all surfaces",
        "Exam room thorough cleaning and sanitization",
        "Waiting area furniture and floor cleaning",
        "Restroom deep cleaning and disinfection",
        "Bio-hazard waste handling (with proper licensing)",
        "HIPAA-compliant cleaning procedures",
        "Floor care with hospital-grade products",
        "Touch-point sanitization (door handles, light switches)"
      ],
      example: "3,000 sq ft medical office = $1,200-1,800/month (daily)"
    },
    {
      id: "retail",
      title: "Retail Store Cleaning",
      pricing: "$0.10-0.15 per sq ft",
      frequency: "Nightly service",
      description: "Your customers judge your store in the first 10 seconds. Dirty floors or dusty shelves? They're walking out. We clean after hours so your store looks perfect when you open.",
      included: [
        "Floor sweeping, mopping, and buffing",
        "Display and shelf dusting",
        "Front window and door glass cleaning",
        "Fitting room cleaning and sanitization",
        "Restroom maintenance and restocking",
        "Checkout counter cleaning",
        "Trash removal and can sanitization",
        "Entry area cleaning (keeps dirt from tracking in)"
      ],
      example: "4,000 sq ft retail store = $800-1,200/month (nightly)"
    },
    {
      id: "restaurant",
      title: "Restaurant & Kitchen Cleaning",
      pricing: "$0.25-0.40 per sq ft",
      frequency: "Daily deep clean",
      description: "Health inspectors don't care about excuses. We do commercial kitchen cleaning that passes inspection every time. Deep cleaning, degreasing, the whole deal.",
      included: [
        "Commercial kitchen deep cleaning",
        "Hood and exhaust system degreasing",
        "Floor degreasing and sanitization",
        "Prep area sanitization",
        "Dining area table and chair cleaning",
        "Restroom deep cleaning",
        "Bar area cleaning (if applicable)",
        "Trash and grease disposal"
      ],
      example: "2,500 sq ft restaurant = $1,250-2,000/month (daily)"
    },
    {
      id: "school",
      title: "School & Educational Facility Cleaning",
      pricing: "$0.08-0.12 per sq ft",
      frequency: "After-hours service",
      description: "Schools get beat up during the day. We come in after hours and get everything ready for the next day. Classrooms, hallways, cafeterias - all of it.",
      included: [
        "Classroom floor care and desk cleaning",
        "Hallway mopping and trash removal",
        "Cafeteria deep cleaning and sanitization",
        "Restroom cleaning and restocking",
        "Gym floor care",
        "Common area cleaning",
        "Drinking fountain sanitization",
        "High-touch surface disinfection"
      ],
      example: "20,000 sq ft school = $3,200-4,800/month"
    },
    {
      id: "gym",
      title: "Gym & Fitness Center Cleaning",
      pricing: "$0.15-0.22 per sq ft",
      frequency: "Twice daily",
      description: "Gyms need to be cleaned multiple times a day. Morning crew and evening crew. We sanitize equipment, clean locker rooms, and keep your facility smelling fresh.",
      included: [
        "Equipment sanitization (all machines and weights)",
        "Locker room deep cleaning",
        "Shower and sauna sanitization",
        "Floor mopping and disinfection",
        "Mirror and glass cleaning",
        "Trash removal and odor control",
        "Towel bin sanitization",
        "Cardio area cleaning"
      ],
      example: "6,000 sq ft gym = $1,800-2,640/month (twice daily)"
    },
    {
      id: "bank",
      title: "Bank & Financial Institution Cleaning",
      pricing: "$0.15-0.25 per sq ft",
      frequency: "Daily service",
      description: "Banks need to look professional and trustworthy. We make sure your lobby, offices, and customer areas are spotless. First impressions matter in finance.",
      included: [
        "Lobby floor care and furniture cleaning",
        "Teller station cleaning and sanitization",
        "Office area cleaning",
        "Restroom cleaning and restocking",
        "Break room cleaning",
        "Window and glass cleaning",
        "Carpet vacuuming and spot cleaning",
        "High-security area cleaning protocols"
      ],
      example: "3,500 sq ft bank = $1,050-1,750/month (daily)"
    },
    {
      id: "moveout",
      title: "Move-In/Move-Out Cleaning",
      pricing: "$150-300 flat rate",
      frequency: "One-time service",
      description: "Moving out of a commercial space? We'll get it cleaned up for the next tenant. Deep cleaning everything so you get your deposit back or leave it ready for sale.",
      included: [
        "Complete space deep cleaning",
        "Floor stripping and waxing (if needed)",
        "Wall spot cleaning",
        "All surfaces wiped and sanitized",
        "Bathroom deep cleaning",
        "Kitchen/breakroom deep cleaning",
        "Window cleaning",
        "Final walk-through available"
      ],
      example: "Pricing depends on size: Small office $150, Large space $300"
    }
  ];

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="font-inter font-bold text-4xl md:text-5xl text-foreground mb-6">
            Commercial Cleaning Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Transparent pricing for every type of Dallas business. All prices include supplies, equipment, and labor. No hidden fees, no surprises.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {services.map((service) => (
            <Card key={service.id} id={service.id} className="scroll-mt-24">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="font-inter text-2xl md:text-3xl">{service.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{service.frequency}</CardDescription>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="font-mono text-2xl text-accent font-semibold">
                      {service.pricing}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                <h4 className="font-semibold text-foreground mb-4">What's Included:</h4>
                <ul className="grid md:grid-cols-2 gap-3 mb-6">
                  {service.included.map((item, index) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-section-alt p-4 rounded-lg border border-border">
                  <p className="text-sm font-semibold text-foreground mb-1">Pricing Example:</p>
                  <p className="text-muted-foreground">{service.example}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-section-alt p-8 md:p-12 rounded-lg text-center">
          <h2 className="font-inter font-bold text-2xl md:text-3xl text-foreground mb-4">
            Need a Custom Quote?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every business is different. Tell us about your space and we'll give you an accurate quote within 24 hours. No pressure, no hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <a href="tel:9453989726">
              <Button variant="outline" size="lg">Call (945) 398-9726</Button>
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Pricing based on Dallas metro area rates. Travel fees may apply for locations outside primary service area.{" "}
            <Link to="/service-area" className="text-primary hover:underline">
              View service area map
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
