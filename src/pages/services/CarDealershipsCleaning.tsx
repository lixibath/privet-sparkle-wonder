import { ContactForm } from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, Car } from "lucide-react";

const CarDealershipsCleaning = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Car Dealership Cleaning Services in Dallas
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Professional cleaning for showrooms, service departments, and sales offices. Create the perfect first impression and maintain a premium environment that sells cars.
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
                  Why Showroom Cleanliness Sells Cars
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Your showroom is where the sale happens. Customers walk in and immediately start forming opinions - not just about the cars, but about your entire dealership. Dusty vehicles, fingerprints on glass, scuff marks on floors, and dirty restrooms all send the same message: if you don't care about your building, why would anyone trust you to care about their $40,000 purchase? A spotless showroom communicates quality, attention to detail, and professionalism.
                  </p>
                  <p>
                    But dealership cleaning goes way beyond the showroom. Your service department is where customers bring their cars after the sale - and a clean, well-maintained service area builds long-term customer loyalty. Sales offices need to stay clean and organized so your team can focus on closing deals, not cleaning their desks. Customer lounges should be comfortable and spotless so people don't mind waiting. Every part of your dealership contributes to the customer experience.
                  </p>
                  <p>
                    We specialize in car dealership cleaning and understand what actually works in this environment. Showroom floors need special care to maintain that high-gloss finish that makes your space look premium. Display vehicles collect dust constantly and need regular detailing attention. Glass doors and windows show every fingerprint and need streak-free cleaning multiple times per day. Service bays get covered in oil, grease, and tire marks that regular mopping can't handle.
                  </p>
                  <p>
                    We work with dealerships across Dallas - from small independent used car lots to massive multi-brand new car campuses. We know how to clean around expensive inventory without causing damage. We understand that sales happen at all hours and cleaning can't disrupt customer interactions. Most dealerships prefer daily cleaning after closing, but we can also provide day porter service to keep high-traffic areas clean during business hours. Whatever your needs, we create a cleaning schedule that keeps your dealership looking showroom-ready every single day.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included in Dealership Cleaning</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Showroom floor maintenance", desc: "High-gloss finish maintenance, buffing, streak-free shine" },
                    { title: "Display vehicle dusting", desc: "Gentle dusting of all display vehicles without damaging finishes" },
                    { title: "Glass and window streak-free cleaning", desc: "All showroom windows, glass doors, and partitions cleaned daily" },
                    { title: "Service bay floor cleaning", desc: "Heavy-duty degreasing, oil stain removal, industrial mopping" },
                    { title: "Parts department organization", desc: "Floor cleaning, counter wiping, keeping areas organized" },
                    { title: "Customer lounge deep cleaning", desc: "Waiting areas, coffee stations, seating, entertainment areas" },
                    { title: "Restroom sanitization", desc: "Customer and employee restrooms thoroughly cleaned and stocked" },
                    { title: "Sales office cleaning", desc: "Desks, computers, phones, filing areas for sales team" },
                    { title: "Reception area maintenance", desc: "Front desk, lobby seating, customer check-in areas" },
                    { title: "Showroom lighting and fixture dusting", desc: "Overhead lights, displays, signage kept dust-free" },
                    { title: "Trash and recycling removal", desc: "All waste collected, bins cleaned, liners replaced" },
                    { title: "High-touch sanitization", desc: "Door handles, counters, display controls, test drive keys" },
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
                <h3 className="text-2xl font-bold mb-4">Car Dealership Cleaning Pricing</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-mono text-accent font-bold">$0.12-0.22</span>
                  <span className="text-muted-foreground">per square foot</span>
                </div>
                <p className="text-muted-foreground mb-6">Includes showroom, offices, and service areas</p>
                <div className="bg-background p-6 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Example Pricing:</p>
                  <p className="text-lg">15,000 sq ft dealership = <span className="font-bold text-accent">$1,800-3,300/month</span></p>
                  <p className="text-sm text-muted-foreground mt-2">Daily service recommended for showrooms. All supplies and equipment included.</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Our 4-Step Process</h3>
                <div className="space-y-6">
                  {[
                    { 
                      num: 1, 
                      title: "Dealership Assessment", 
                      desc: "We tour your entire facility - showroom, service bays, parts department, sales offices, and customer areas. We note floor types, display vehicle locations, high-traffic zones, and any areas that need special attention. We'll discuss your schedule, peak hours, and cleaning priorities." 
                    },
                    { 
                      num: 2, 
                      title: "Custom Cleaning Schedule", 
                      desc: "Based on your dealership layout and operations, we create a detailed cleaning plan. This includes showroom cleaning frequency, service area maintenance, when to clean around inventory, and coordination with your staff. Everything is documented in a checklist specific to your location." 
                    },
                    { 
                      num: 3, 
                      title: "Trained Cleaning Team", 
                      desc: "We assign a consistent team to your dealership so they learn your layout, your vehicles, and your standards. All staff is trained on how to clean around expensive inventory without causing damage, proper floor care for different surface types, and the importance of maintaining that premium showroom appearance." 
                    },
                    { 
                      num: 4, 
                      title: "Consistent Quality Control", 
                      desc: "We conduct regular quality inspections to ensure our team is maintaining your standards. Showroom floors checked for shine and streaks. Glass inspected for fingerprints. Service areas verified for safety and cleanliness. If anything's not right, we address it immediately with retraining or additional resources." 
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
                <h3 className="text-2xl font-bold mb-6">Dealership Areas We Clean</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Showrooms", desc: "New and used vehicle display areas, customer pathways, entry lobbies" },
                    { title: "Service Departments", desc: "Service bays, mechanic areas, service drive, waiting areas" },
                    { title: "Parts Departments", desc: "Parts counters, storage areas, receiving docks" },
                    { title: "Customer Lounges", desc: "Waiting rooms, coffee stations, entertainment areas, kids' zones" },
                    { title: "Sales Offices", desc: "Sales desks, manager offices, finance departments, conference rooms" },
                    { title: "Body Shops", desc: "Collision repair areas, paint booths, detail departments" },
                  ].map((area, i) => (
                    <div key={i} className="p-5 border border-border rounded-lg hover:bg-card transition-colors">
                      <h4 className="font-semibold text-lg mb-2">{area.title}</h4>
                      <p className="text-sm text-muted-foreground">{area.desc}</p>
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
                          Do you clean around display vehicles?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, we're very careful around your inventory. Our team is trained to dust vehicles gently without scratching paint or damaging trim. We use microfiber cloths and proper techniques to remove dust from display cars. We also clean floors around and under vehicles without bumping or touching them. If a vehicle needs to be moved for floor cleaning, we'll coordinate with your staff.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Can you handle service bay cleaning?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Absolutely. Service bays require heavy-duty cleaning - oil stains, grease, tire marks, metal shavings, and general automotive debris. We use industrial degreasers and floor scrubbers designed for this environment. We can clean after service hours when bays are empty, or work around your schedule if you run multiple shifts. Service area cleanliness also helps with safety compliance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          How do you keep showroom glass streak-free?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Professional glass cleaning requires the right products and techniques. We use commercial-grade glass cleaners and microfiber cloths that don't leave streaks or lint. For large showroom windows, we use squeegees and extension poles for streak-free results. We typically clean glass daily because showrooms get so much fingerprint traffic, especially on entry doors and around display vehicles.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          What about special event cleaning?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      We can provide extra cleaning before and after special events - new model launches, sales events, customer appreciation nights, or promotional weekends. Just give us 24-48 hours notice and we'll schedule additional staff to deep clean the showroom, detail all display vehicles, and make sure everything looks perfect. We can also provide day-of cleaning during large events if needed.
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
            Get Your Free Dealership Cleaning Quote
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Tell us about your dealership and we'll provide a detailed quote within 24 hours
          </p>
          <ContactForm serviceType="Car Dealership Cleaning" />
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
              <Car className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Inventory-Safe Cleaning</div>
              <div className="text-sm text-muted-foreground">Trained Around Vehicles</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Flexible Scheduling</div>
              <div className="text-sm text-muted-foreground">After Hours Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarDealershipsCleaning;