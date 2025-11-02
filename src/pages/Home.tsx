import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

const Home = () => {
  const services = [
    {
      title: "Office Cleaning",
      description: "Keep your workspace spotless and professional. We handle everything from floors to breakrooms.",
      pricing: "$0.12-0.18/sq ft",
      features: ["Vacuum & mop floors", "Disinfect bathrooms", "Empty trash", "Dust surfaces"]
    },
    {
      title: "Medical Facility Cleaning",
      description: "Healthcare-grade sanitization for medical offices and clinics. We follow strict protocols.",
      pricing: "$0.20-0.30/sq ft",
      features: ["Medical-grade disinfection", "Exam room cleaning", "Waiting area sanitization", "Compliance standards"]
    },
    {
      title: "Retail Store Cleaning",
      description: "Keep your store looking its best for customers. Fast, efficient, after-hours service.",
      pricing: "$0.10-0.15/sq ft",
      features: ["Floor care", "Display cleaning", "Window cleaning", "Restroom maintenance"]
    },
    {
      title: "Restaurant & Kitchen Cleaning",
      description: "Deep cleaning for kitchens and dining areas. Health code compliant.",
      pricing: "$0.25-0.40/sq ft",
      features: ["Kitchen deep clean", "Degreasing", "Floor sanitization", "Dining area cleaning"]
    },
    {
      title: "School Cleaning",
      description: "Safe, thorough cleaning for educational facilities. After-hours service available.",
      pricing: "$0.08-0.12/sq ft",
      features: ["Classroom cleaning", "Hallway maintenance", "Cafeteria sanitization", "Restroom deep clean"]
    },
    {
      title: "Gym & Fitness Center",
      description: "Twice-daily cleaning to keep your facility fresh and hygienic.",
      pricing: "$0.15-0.22/sq ft",
      features: ["Equipment sanitization", "Locker room cleaning", "Floor maintenance", "Mirror & glass cleaning"]
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      company: "Preston Tech Solutions",
      serviceType: "Office Cleaning",
      rating: 5,
      review: "Been using Miranda for six months now. They show up when they say they will, do a thorough job, and don't make excuses. That's all I need from a cleaning company.",
      date: "Oct 2024"
    },
    {
      name: "Dr. Sarah Mitchell",
      company: "Dallas Family Medicine",
      serviceType: "Medical Facility",
      rating: 5,
      review: "Running a medical practice means cleanliness isn't optional. Miranda's team understands that. They're professional, follow our protocols, and I never have to worry about it.",
      date: "Sep 2024"
    },
    {
      name: "Marcus Williams",
      company: "Frisco Fitness",
      serviceType: "Gym Cleaning",
      rating: 5,
      review: "We needed someone who could handle twice-daily cleaning without getting in the way of our members. Miranda figured it out in the first week and hasn't missed a beat since.",
      date: "Nov 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-section-alt py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Professional Janitorial Services in Dallas
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Keeping Dallas businesses clean since day one. We show up on time, do the job right, and don't cut corners. That's the Miranda way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mb-6">
              Why Dallas Businesses Choose Miranda
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Look, running a business in Dallas is tough enough without worrying about whether your cleaning crew will show up. We started Miranda Janitorial because we got tired of seeing companies get burned by unreliable cleaners who promise the moon and deliver half-finished work.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">We Hire Right</h3>
                  <p className="text-base">People who actually care about their work and take pride in doing it well.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">We Train Properly</h3>
                  <p className="text-base">Everyone knows what they're doing and how to do it to our standards.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">We Show Up</h3>
                  <p className="text-base">When we say 6 PM Tuesday, you can count on us being there at 6 PM Tuesday.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">We're Transparent</h3>
                  <p className="text-base">Clear pricing, no hidden fees, no surprises on your invoice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional cleaning for every type of Dallas business. All pricing includes supplies and equipment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">View All Services & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mb-6 text-center">
              Service Area
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              We serve Dallas and surrounding cities. Travel fees apply for extended service areas.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-xl text-foreground mb-4">Primary Service Area (No Travel Fee)</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">• Dallas</li>
                  <li className="text-muted-foreground">• Richardson</li>
                  <li className="text-muted-foreground">• Plano</li>
                  <li className="text-muted-foreground">• Frisco</li>
                  <li className="text-muted-foreground">• McKinney</li>
                  <li className="text-muted-foreground">• Allen</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-foreground mb-4">Extended Service Area (+$25-50)</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">• Fort Worth</li>
                  <li className="text-muted-foreground">• Arlington</li>
                  <li className="text-muted-foreground">• Irving</li>
                  <li className="text-muted-foreground">• Garland</li>
                  <li className="text-muted-foreground">• Mesquite</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/service-area">View Complete Service Area Map</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline">
              <Link to="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free quote today. We respond within 2 hours during business hours.
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
        </div>
      </section>
    </div>
  );
};

export default Home;
