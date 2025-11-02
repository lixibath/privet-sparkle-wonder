import { ContactForm } from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, HardHat } from "lucide-react";

const IndustrialCleaning = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Industrial Facility Cleaning Services in Dallas
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Heavy-duty cleaning for warehouses, manufacturing plants, and industrial facilities. OSHA-compliant service with specialized equipment for tough jobs.
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
                  Why Industrial Facilities Need Specialized Cleaning
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Industrial cleaning isn't the same as office cleaning. You can't push a regular mop around a warehouse floor covered in oil, metal shavings, and forklift tire marks and expect good results. You need industrial-grade equipment - floor scrubbers that can handle concrete, pressure washers for loading docks, high-reach equipment for overhead dusting, and specialized degreasers that actually work on machinery residue.
                  </p>
                  <p>
                    But it's not just about having the right equipment. Industrial cleaning also involves safety compliance and OSHA regulations. Walking surfaces need to stay clean to prevent slip hazards. Dust buildup on machinery can create fire risks. Blocked exits and cluttered work areas violate safety codes. Regular cleaning isn't just about appearances - it's about keeping your facility compliant and your workers safe from preventable accidents.
                  </p>
                  <p>
                    We specialize in industrial facility cleaning and understand the unique challenges of manufacturing and warehouse environments. Our team is trained in lockout/tagout procedures for working around machinery. We know how to clean without disrupting your production schedule. We understand that different areas of your facility have different cleaning needs - office areas need standard commercial cleaning, while production floors need heavy-duty industrial cleaning with specialized chemicals and equipment.
                  </p>
                  <p>
                    We've cleaned everything from small automotive shops to massive 200,000+ square foot distribution centers. We work with facilities that run one shift, two shifts, or 24/7 operations. Whatever your schedule, we'll create a cleaning plan that maintains safety and cleanliness without interfering with productivity. Most industrial clients prefer weekend cleaning or off-shift hours when production is slower or stopped completely.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included in Industrial Cleaning</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Warehouse floor cleaning", desc: "Industrial scrubbing of concrete floors, removal of tire marks and debris" },
                    { title: "Loading dock maintenance", desc: "Pressure washing, debris removal, spill cleanup" },
                    { title: "Machinery exterior cleaning", desc: "Safe cleaning of equipment exteriors without affecting operations" },
                    { title: "High-bay dusting", desc: "Overhead beams, ductwork, light fixtures using specialized equipment" },
                    { title: "Restroom and locker room deep cleaning", desc: "Facilities for workers thoroughly sanitized" },
                    { title: "Break room and cafeteria cleaning", desc: "Eating areas, kitchens, vending machine areas" },
                    { title: "Office area maintenance", desc: "Administrative offices cleaned to commercial standards" },
                    { title: "Hazardous waste handling", desc: "Certified disposal of industrial waste materials" },
                    { title: "Floor scrubbing and degreasing", desc: "Heavy-duty cleaning of oil, grease, and industrial residue" },
                    { title: "Pressure washing", desc: "Exterior and interior surfaces including loading areas" },
                    { title: "Debris removal", desc: "Cardboard, pallets, scrap materials, general trash" },
                    { title: "Safety compliance cleaning", desc: "Maintaining clear exits, marked pathways, OSHA standards" },
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
                <h3 className="text-2xl font-bold mb-4">Custom Industrial Cleaning Pricing</h3>
                <div className="mb-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    Industrial cleaning pricing varies significantly based on facility size, type of operations, hazards present, and specialized equipment required. We provide detailed quotes after a safety assessment.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg space-y-3">
                  <p className="text-sm font-semibold mb-2">Pricing considerations:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Total square footage and ceiling height</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Type of industrial operations and materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Specialized equipment needs (lift equipment, pressure washers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Frequency and scheduling around production</span>
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
                      title: "Safety Assessment & Walk-Through", 
                      desc: "We visit your facility to assess safety requirements, identify potential hazards, understand your production process, and note any areas that require specialized cleaning or equipment. Our team reviews your OSHA requirements and any specific industry regulations you must comply with." 
                    },
                    { 
                      num: 2, 
                      title: "Custom Cleaning & Safety Plan", 
                      desc: "Based on the assessment, we create a detailed cleaning plan that addresses safety compliance, production schedule coordination, and specific cleaning needs for different areas. We identify which tasks can be done during shifts versus requiring shutdown, and outline all safety procedures our team will follow." 
                    },
                    { 
                      num: 3, 
                      title: "Certified Team & Equipment Deployment", 
                      desc: "Our industrial cleaning crews undergo safety training specific to working in industrial environments. All staff is trained in lockout/tagout procedures, hazmat handling where applicable, and proper use of heavy-duty cleaning equipment. We bring industrial-grade scrubbers, pressure washers, and high-reach equipment needed for your facility." 
                    },
                    { 
                      num: 4, 
                      title: "Scheduled Cleaning & Documentation", 
                      desc: "We execute the cleaning plan on schedule, working around your production needs. After each cleaning, we document what was completed and note any safety concerns or maintenance issues we observed. You receive regular reports showing compliance with the cleaning schedule and any areas that need attention." 
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
                <h3 className="text-2xl font-bold mb-6">Industrial Facilities We Serve</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Warehouses", desc: "Distribution centers, storage facilities, fulfillment centers" },
                    { title: "Manufacturing Plants", desc: "Production facilities, assembly plants, fabrication shops" },
                    { title: "Distribution Centers", desc: "Logistics hubs, shipping facilities, cross-dock operations" },
                    { title: "Processing Plants", desc: "Industrial processing, packaging facilities" },
                    { title: "Automotive Shops", desc: "Repair facilities, body shops, service centers" },
                    { title: "Food Processing Facilities", desc: "Commercial kitchens, packaging plants (special protocols)" },
                    { title: "Machine Shops", desc: "Metalworking facilities, CNC operations" },
                    { title: "Cold Storage Facilities", desc: "Refrigerated warehouses, freezer storage" },
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
                          Do you clean around operating machinery?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, but only with proper safety protocols. Our team is trained in lockout/tagout procedures for cleaning near machinery. For most facilities, we recommend cleaning when equipment is shut down to maximize safety and effectiveness. If cleaning must happen during operations, we coordinate with your production team and follow all safety requirements to prevent accidents or interference with production.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Are you OSHA compliant?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, our industrial cleaning team is trained in OSHA safety standards and regulations. We follow proper procedures for working at heights, handling chemicals, personal protective equipment, and facility safety. We also help you maintain OSHA compliance by keeping exits clear, maintaining proper housekeeping standards, and documenting our safety procedures. All our staff carries required safety certifications.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Can you handle hazardous waste?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      We can handle certain types of industrial waste disposal as part of our cleaning service, and our team is certified in hazmat handling for common industrial materials. For specialized hazardous waste requiring EPA permits or special disposal, we coordinate with licensed hazmat disposal companies. We'll work with you to determine the best approach for your facility's specific waste handling needs.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          What equipment do you use for industrial cleaning?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      We bring commercial-grade industrial equipment including walk-behind floor scrubbers, pressure washers (hot and cold water), industrial vacuums, high-reach cleaning equipment for overhead areas, and specialized degreasers and cleaning solutions designed for industrial environments. All our equipment is maintained regularly and we carry backup equipment to ensure we never miss a scheduled cleaning due to equipment failure.
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
            Get Your Free Industrial Cleaning Quote
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Tell us about your facility and we'll schedule a safety assessment and provide a detailed quote
          </p>
          <ContactForm serviceType="Industrial Cleaning" />
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
              <HardHat className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">OSHA Compliant</div>
              <div className="text-sm text-muted-foreground">Safety Certified</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Flexible Scheduling</div>
              <div className="text-sm text-muted-foreground">24/7 Operations Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrialCleaning;