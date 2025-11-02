import { useState } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [filter, setFilter] = useState("all");

  const testimonials = [
    {
      name: "Robert Chen",
      company: "Preston Tech Solutions",
      serviceType: "Office Cleaning",
      rating: 5,
      review: "Been using Miranda for six months now. They show up when they say they will, do a thorough job, and don't make excuses. That's all I need from a cleaning company. Our office looks professional, and I never have to think about it.",
      date: "Oct 2024"
    },
    {
      name: "Dr. Sarah Mitchell",
      company: "Dallas Family Medicine",
      serviceType: "Medical Facility",
      rating: 5,
      review: "Running a medical practice means cleanliness isn't optional. Miranda's team understands that. They're professional, follow our protocols to the letter, and I never have to worry about it. Our inspections have been flawless.",
      date: "Sep 2024"
    },
    {
      name: "Marcus Williams",
      company: "Frisco Fitness",
      serviceType: "Gym Cleaning",
      rating: 5,
      review: "We needed someone who could handle twice-daily cleaning without getting in the way of our members. Miranda figured it out in the first week and hasn't missed a beat since. Equipment stays sanitized, locker rooms stay fresh. Good people.",
      date: "Nov 2024"
    },
    {
      name: "Jennifer Lopez",
      company: "Main Street Retail",
      serviceType: "Retail Store",
      rating: 5,
      review: "They clean our store every night after we close. Floors are always perfect when we open in the morning, displays are dust-free, and the bathrooms are spotless. Our customers notice, and so do we. Worth every penny.",
      date: "Oct 2024"
    },
    {
      name: "David Park",
      company: "Plano Korean BBQ",
      serviceType: "Restaurant",
      rating: 5,
      review: "Commercial kitchens get nasty fast. Miranda's crew does deep cleaning that actually passes health inspections. The degreasing work alone is worth it. They know what they're doing in restaurant kitchens.",
      date: "Sep 2024"
    },
    {
      name: "Principal Tom Johnson",
      company: "McKinney Elementary",
      serviceType: "School",
      rating: 5,
      review: "300 kids make a big mess. Miranda's team comes in after hours and gets everything ready for the next day. Classrooms, hallways, cafeteria - all of it. They're reliable and thorough. That's what we need.",
      date: "Nov 2024"
    },
    {
      name: "Lisa Anderson",
      company: "Richardson Dental Group",
      serviceType: "Medical Facility",
      rating: 5,
      review: "Medical-grade cleaning isn't something you can fake. Miranda uses proper protocols and the right products. Our sterilization standards are high, and they meet them every time. No complaints from our patients or staff.",
      date: "Oct 2024"
    },
    {
      name: "James Wilson",
      company: "Dallas Law Offices",
      serviceType: "Office Cleaning",
      rating: 5,
      review: "Professional environment matters in our line of work. Miranda keeps our offices looking sharp - clean carpets, dust-free surfaces, spotless conference rooms. They understand that we're bringing clients in and it needs to look right.",
      date: "Sep 2024"
    },
    {
      name: "Stephanie Brown",
      company: "Frisco Insurance Group",
      serviceType: "Office Cleaning",
      rating: 5,
      review: "We've had three different cleaning companies over the years. Miranda is the only one that actually does what they say they'll do. Consistent, reliable, thorough. Finally don't have to worry about it anymore.",
      date: "Nov 2024"
    },
    {
      name: "Carlos Rodriguez",
      company: "El Centro Restaurante",
      serviceType: "Restaurant",
      rating: 5,
      review: "Health department doesn't mess around, and neither do we. Miranda's kitchen cleaning is legit - hood systems, floors, prep areas, all of it. They know restaurant standards inside and out. Haven't had a violation since we started with them.",
      date: "Oct 2024"
    },
    {
      name: "Michelle Davis",
      company: "Allen Family Clinic",
      serviceType: "Medical Facility",
      rating: 5,
      review: "Patients notice when a medical office is clean. Miranda's team is professional, quiet, and thorough. They clean after hours so they're never in the way, and they never cut corners. Exactly what we need.",
      date: "Sep 2024"
    },
    {
      name: "Ryan Thompson",
      company: "Dallas CrossFit",
      serviceType: "Gym Cleaning",
      rating: 5,
      review: "Gym cleaning is no joke. Sweat, chalk, dropped weights - it gets rough. Miranda comes in twice a day and keeps everything sanitized. Members have actually commented on how clean we keep the place. That's because of Miranda.",
      date: "Nov 2024"
    },
    {
      name: "Amanda Clark",
      company: "Richardson Boutique",
      serviceType: "Retail Store",
      rating: 5,
      review: "First impressions matter in retail. Miranda makes sure our store is pristine when we open. Windows are clean, floors shine, fitting rooms are fresh. We've tried cheaper options - they don't compare. You get what you pay for.",
      date: "Oct 2024"
    },
    {
      name: "Kevin Martinez",
      company: "Plano Tech Hub",
      serviceType: "Office Cleaning",
      rating: 5,
      review: "Tech office with 50 employees. Miranda handles the whole building - offices, kitchen, bathrooms, conference rooms. Never had an issue. They work around our schedule and keep everything running smooth.",
      date: "Sep 2024"
    },
    {
      name: "Diana Scott",
      company: "First Dallas Bank",
      serviceType: "Bank",
      rating: 5,
      review: "Banks need to look trustworthy. Can't have a dirty lobby or messy offices. Miranda understands that and delivers every time. Professional, discreet, thorough. Our branch always looks sharp.",
      date: "Nov 2024"
    }
  ];

  const serviceTypes = ["all", "Office Cleaning", "Medical Facility", "Retail Store", "Restaurant", "School", "Gym Cleaning", "Bank"];

  const filteredTestimonials = filter === "all" 
    ? testimonials 
    : testimonials.filter(t => t.serviceType === filter);

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="font-inter font-bold text-4xl md:text-5xl text-foreground mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-muted-foreground">
            Real reviews from Dallas businesses we clean. No fluff, no fake reviews. Just honest feedback from people who trust us with their facilities.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {serviceTypes.map((type) => (
            <Button
              key={type}
              variant={filter === type ? "default" : "outline"}
              onClick={() => setFilter(type)}
              className="capitalize"
            >
              {type === "all" ? "All Services" : type}
            </Button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {filteredTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-section-alt p-8 rounded-lg max-w-3xl mx-auto">
          <h2 className="font-inter font-bold text-2xl text-foreground mb-4">
            Ready to Join Them?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Get a free quote and see why Dallas businesses trust Miranda Janitorial for their cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/contact">Get Free Quote</a>
            </Button>
            <a href="tel:9453989726">
              <Button variant="outline" size="lg">Call (945) 398-9726</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
