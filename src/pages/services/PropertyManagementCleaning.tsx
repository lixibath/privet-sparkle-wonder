import { ContactForm } from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, Building2 } from "lucide-react";

const PropertyManagementCleaning = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Property Management Cleaning Services in Dallas
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Professional common area cleaning for apartment complexes, office buildings, and commercial properties. Keep tenants happy and property values high with consistent maintenance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#quote">Get Free Quote</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:9453989726">Call (945) 398-9726</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Why Property Managers Choose Professional Cleaning
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Property managers know that clean common areas directly impact tenant satisfaction and retention. A dirty lobby or disgusting elevator creates complaints. Trash piling up in hallways makes good tenants consider moving when their lease ends. Meanwhile, you're juggling maintenance requests, lease renewals, vendor coordination, and a dozen other things - who has time to manage cleaning staff too?
                  </p>
                  <p>
                    That's where we come in. We specialize in property management cleaning and understand what keeps tenants happy without breaking your budget. Our team knows that apartment lobbies need daily attention while storage areas can be cleaned weekly. We understand that amenity areas like gyms and pool houses get heavy use and need multiple cleanings per day during peak seasons. And we know that one missed cleaning during a property showing can cost you a lease.
                  </p>
                  <p>
                    We work with property managers across Dallas who oversee everything from small 20-unit buildings to large 300+ unit complexes. Some manage a single property, others have portfolios of multiple buildings across the metro. We can handle one property or twenty - we scale our services to match your needs and provide consistent quality across all your locations.
                  </p>
                  <p>
                    Our account managers become an extension of your team. You get a dedicated contact who knows your properties, understands your standards, and responds quickly when you need something handled. Need extra cleaning before a property inspection? Call your account manager. Tenant complained about the stairwell? We'll have someone there that day. Multiple properties need coordination? We handle the logistics so you don't have to.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included in Property Management Cleaning</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Hallway and corridor cleaning", desc: "Vacuuming carpets, mopping hard floors, removing debris" },
                    { title: "Lobby and entrance maintenance", desc: "Daily cleaning of high-traffic areas, glass doors, reception areas" },
                    { title: "Elevator cleaning and sanitization", desc: "Interior cleaning, button sanitization, floor mopping" },
                    { title: "Stairwell cleaning", desc: "Steps swept and mopped, handrails wiped, trash removed" },
                    { title: "Amenity area cleaning", desc: "Gym equipment sanitization, pool house cleaning, clubhouse maintenance" },
                    { title: "Parking garage sweeping", desc: "Regular sweeping, trash removal, oil stain cleanup" },
                    { title: "Trash room sanitization", desc: "Chute cleaning, bin sanitization, odor control, floor cleaning" },
                    { title: "Mailroom cleaning", desc: "Floors, surfaces, package areas kept organized and clean" },
                    { title: "Restroom deep cleaning", desc: "Common area bathrooms thoroughly cleaned and disinfected" },
                    { title: "Window and glass door cleaning", desc: "Interior glass in common areas, entry doors, lobby windows" },
                    { title: "Floor care", desc: "Vacuuming, mopping, periodic buffing and waxing for hard floors" },
                    { title: "High-touch sanitization", desc: "Door handles, handrails, elevator buttons, light switches" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                      <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4">Custom Property Management Pricing</h3>
                <div className="mb-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    Every property is different - size, amenities, tenant count, and cleaning frequency all impact pricing. We provide custom quotes based on your specific needs.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg space-y-3">
                  <p className="text-sm font-semibold mb-2">Pricing factors include:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Total square footage of common areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Number of amenities (gym, pool, clubhouse, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Cleaning frequency (daily, 3x weekly, weekly)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Number of properties in your portfolio (volume discounts available)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Our 4-Step Process</h3>
                <div className="space-y-6">
                  {[
                    { 
                      num: 1, 
                      title: "Property Walk-Through & Assessment", 
                      desc: "We visit each property to measure common areas, identify high-traffic zones, review amenities, and understand your specific requirements. We'll note any problem areas that need extra attention and discuss your cleaning priorities and budget constraints." 
                    },
                    { 
                      num: 2, 
                      title: "Custom Cleaning Plan & Quote", 
                      desc: "Based on the assessment, we create a detailed cleaning schedule and checklist specific to each property. This includes frequency for each area, products to be used, and estimated time for completion. You get a transparent quote with no hidden fees or surprises." 
                    },
                    { 
                      num: 3, 
                      title: "Dedicated Account Management", 
                      desc: "You're assigned a dedicated account manager who becomes your single point of contact. They coordinate all cleaning across your properties, handle special requests, respond to tenant issues, and ensure consistent quality. You have their direct phone number for quick communication." 
                    },
                    { 
                      num: 4, 
                      title: "Consistent Execution & Quality Control", 
                      desc: "Our team follows the cleaning checklist for each property every single time. We conduct regular quality inspections, document our work, and adjust staffing as needed. If a tenant complains, we investigate and resolve it within 24 hours - no excuses, no delays." 
                    },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-6">
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold flex-shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-semibold text-xl mb-2">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Property Types We Serve</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Apartment Complexes", desc: "Multi-unit residential buildings with common areas and amenities" },
                    { title: "Office Buildings", desc: "Commercial office properties with lobbies, elevators, and shared spaces" },
                    { title: "Shopping Centers", desc: "Retail properties with common walkways and restrooms" },
                    { title: "Mixed-Use Properties", desc: "Combined residential and commercial developments" },
                    { title: "HOA Communities", desc: "Homeowner association common areas, clubhouses, pools" },
                    { title: "Condominiums", desc: "Condo buildings with shared lobbies, hallways, and amenities" },
                    { title: "Student Housing", desc: "University-area properties with high tenant turnover" },
                    { title: "Senior Living Communities", desc: "Independent living facilities with common areas" },
                  ].map((type, i) => (
                    <div key={i} className="p-5 border border-border rounded-lg hover:bg-card transition-colors">
                      <h4 className="font-semibold text-lg mb-2">{type.title}</h4>
                      <p className="text-sm text-muted-foreground">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - FAQ Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Common Questions</h3>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Can you service multiple properties?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Absolutely. Many of our clients manage multiple properties across Dallas. We can coordinate cleaning for your entire portfolio with one account manager who oversees all locations. You get volume pricing discounts and consistent quality across all your buildings. One invoice, one point of contact, multiple properties handled seamlessly.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Do you offer emergency cleaning services?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, we understand that emergencies happen - water leaks, vandalism, unexpected inspections, or tenant incidents. Call your account manager and we'll dispatch a team within hours, not days. Emergency cleaning is billed separately but we keep crews available specifically for urgent situations that can't wait for the regular cleaning schedule.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          How do you handle tenant complaints?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      When a tenant complains about cleaning, forward it to your account manager immediately. We investigate the issue, verify what happened, and take corrective action within 24 hours. If it's a legitimate complaint, we'll re-clean that area at no extra charge and adjust our process to prevent it from happening again. Communication is key - we keep you updated every step of the way.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          What about amenity area cleaning (gym, pool, etc.)?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Amenity areas often need more frequent cleaning than other common spaces. Gyms need equipment sanitized twice daily during peak use. Pool houses and locker rooms need daily deep cleaning. Clubhouses get cleaned after events. We create custom schedules for each amenity based on usage patterns and can increase frequency during busy seasons without you having to ask.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="quote" className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Get Your Free Property Management Cleaning Quote
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Tell us about your properties and we'll provide a custom quote within 24 hours
          </p>
          <ContactForm serviceType="Property Management Cleaning" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Licensed & Insured</div>
              <div className="text-sm text-muted-foreground">Fully Bonded</div>
            </div>
            <div className="flex flex-col items-center">
              <Building2 className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Multi-Property Service</div>
              <div className="text-sm text-muted-foreground">Volume Discounts</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">24/7 Emergency Response</div>
              <div className="text-sm text-muted-foreground">Dedicated Account Manager</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyManagementCleaning;