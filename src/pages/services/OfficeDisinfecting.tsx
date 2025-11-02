import { ContactForm } from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, Zap } from "lucide-react";

const OfficeDisinfecting = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Office Disinfecting Services in Dallas
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Advanced electrostatic disinfection technology for complete surface coverage. Protect your employees from viruses, bacteria, and illness with EPA-approved professional disinfection.
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
                  Why Professional Office Disinfection Matters
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    COVID-19 changed how we think about workplace cleanliness. Employees are more aware of germs than ever before. They notice when surfaces aren't being disinfected properly. They worry about getting sick from shared equipment, conference room tables, and break room counters. One person coming to work sick can infect an entire office in days, causing absences, lost productivity, and genuine health concerns that affect morale and retention.
                  </p>
                  <p>
                    Regular cleaning wipes down surfaces, but that's not the same as disinfection. Disinfection kills viruses and bacteria that cause illness. It requires EPA-approved disinfectants, proper contact time (the solution needs to stay wet on surfaces long enough to actually kill germs), and complete coverage of all surfaces - not just the ones that look dirty. That's where our electrostatic disinfection technology makes a huge difference compared to traditional spray-and-wipe methods.
                  </p>
                  <p>
                    We use electrostatic sprayers that charge disinfectant particles as they leave the nozzle. These charged particles are attracted to surfaces like a magnet, wrapping around objects to coat all sides - even the backs and undersides that traditional spraying misses. This means keyboards get disinfected between keys, phones get covered on all sides, and desk surfaces get complete coverage without puddling or running. It's faster, more thorough, and uses less chemical than traditional methods.
                  </p>
                  <p>
                    We offer one-time deep disinfection for special situations, regular scheduled disinfection for ongoing protection, emergency outbreak response when someone tests positive, and post-illness disinfection when multiple employees have been sick. Every service includes EPA-approved disinfectants that are proven effective against COVID-19, influenza, norovirus, and other common workplace pathogens. We provide disinfection certificates after every service so you can show your team and clients that you take their health seriously.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included in Office Disinfecting</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Electrostatic disinfection application", desc: "Advanced technology for complete surface coverage on all sides" },
                    { title: "EPA-approved disinfectants", desc: "Hospital-grade solutions effective against COVID-19, flu, and other viruses" },
                    { title: "High-touch surface sanitization", desc: "Door handles, light switches, elevator buttons, handrails" },
                    { title: "Desk and workstation disinfection", desc: "All surfaces, monitors, keyboards, mice, desk phones" },
                    { title: "Conference room deep disinfection", desc: "Tables, chairs, AV equipment, whiteboards, remote controls" },
                    { title: "Restroom sanitization", desc: "All surfaces including fixtures, stalls, sinks, dispensers" },
                    { title: "Break room and kitchen disinfection", desc: "Counters, tables, appliances, refrigerator handles, coffee makers" },
                    { title: "Door handle and railing treatment", desc: "Entry doors, interior doors, stairwell railings, all handles" },
                    { title: "Phone and keyboard disinfection", desc: "Electronics safely disinfected without damage" },
                    { title: "Elevator button sanitization", desc: "All elevator controls and interior surfaces" },
                    { title: "HVAC vent disinfection", desc: "Visible vent covers and registers treated" },
                    { title: "Disinfection certification provided", desc: "Documentation showing areas treated and products used" },
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
                <h3 className="text-2xl font-bold mb-4">Office Disinfection Pricing</h3>
                <div className="mb-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    Pricing depends on office size, frequency of service, and whether you need one-time or recurring disinfection. We provide custom quotes based on your specific needs.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-1">One-Time Deep Disinfection:</p>
                    <p className="text-lg">Starting at <span className="font-bold text-accent">$0.15-0.25/sq ft</span></p>
                    <p className="text-sm text-muted-foreground">Perfect for post-illness or special events</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold mb-1">Recurring Disinfection Service:</p>
                    <p className="text-lg">Custom monthly rates based on frequency</p>
                    <p className="text-sm text-muted-foreground">Weekly, bi-weekly, or monthly schedules available</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Our 4-Step Disinfection Process</h3>
                <div className="space-y-6">
                  {[
                    { 
                      num: 1, 
                      title: "Office Assessment & Planning", 
                      desc: "We walk through your office to identify all surfaces that need disinfection, note high-touch areas, understand your workspace layout, and discuss your specific concerns. We'll create a customized disinfection plan that covers every area where employees and visitors have contact." 
                    },
                    { 
                      num: 2, 
                      title: "Electrostatic Technology Setup", 
                      desc: "Our team arrives with professional electrostatic sprayers and EPA-approved hospital-grade disinfectants. We set up the equipment, mix solutions to manufacturer specifications, and prepare the workspace. The electrostatic charge ensures complete coverage on all surfaces - front, back, top, bottom, and sides." 
                    },
                    { 
                      num: 3, 
                      title: "Complete Surface Disinfection", 
                      desc: "We systematically disinfect every surface in your office - desks, chairs, phones, keyboards, door handles, conference tables, break room appliances, and all high-touch points. The charged particles wrap around objects for complete coverage. We follow proper contact time to ensure the disinfectant kills viruses and bacteria effectively." 
                    },
                    { 
                      num: 4, 
                      title: "Certification & Documentation", 
                      desc: "After completion, we provide a disinfection certificate documenting the date, areas treated, products used, and our contact information. This certificate can be posted in your office or provided to employees and clients as proof of professional disinfection. We also schedule your next service if you've chosen recurring disinfection." 
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
                <h3 className="text-2xl font-bold mb-6">Disinfection Services We Offer</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "One-Time Deep Disinfection", desc: "Complete office disinfection for special events or concerns" },
                    { title: "Regular Scheduled Disinfection", desc: "Weekly, bi-weekly, or monthly ongoing protection" },
                    { title: "Emergency Outbreak Response", desc: "Rapid response when COVID or illness outbreak occurs" },
                    { title: "Post-Illness Disinfection", desc: "Thorough disinfection after employee illness" },
                    { title: "Move-In Disinfection", desc: "New office space preparation before employees arrive" },
                    { title: "Event Disinfection", desc: "Before and after large meetings or company events" },
                  ].map((service, i) => (
                    <div key={i} className="p-5 border border-border rounded-lg hover:bg-card transition-colors">
                      <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.desc}</p>
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
                          What is electrostatic disinfection?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Electrostatic disinfection uses specialized sprayers that give disinfectant particles a positive electrical charge as they leave the nozzle. Since most surfaces have a negative or neutral charge, the positively charged particles are attracted to and wrap around all sides of objects - even areas you can't see. This provides 360-degree coverage that traditional spray-and-wipe methods can't match. It's faster, more thorough, and uses less chemical.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          How long does disinfection last?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Disinfection kills viruses and bacteria present at the time of treatment, but surfaces can become contaminated again as soon as people touch them. That's why we recommend regular disinfection schedules - weekly for high-traffic offices, monthly for lower-traffic spaces. The frequency depends on how many people use your space, whether you have visitors, and your team's comfort level with germ exposure.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Are your products safe for electronics?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, we use disinfectants that are safe for electronics when applied properly. The electrostatic application creates a fine mist that coats surfaces without soaking them. We're careful around keyboards, monitors, phones, and other electronics. The solution dries quickly and doesn't leave residue. We've disinfected thousands of offices without damaging equipment, but we always use appropriate techniques for sensitive items.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Can you provide disinfection certificates?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, we provide a disinfection certificate after every service. The certificate includes the date of service, areas treated, EPA registration numbers of products used, and our company contact information. You can post this certificate in your office, share it with employees, or provide it to clients or building management as proof of professional disinfection. It's included with every service at no extra charge.
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
            Get Your Free Office Disinfection Quote
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Tell us about your office and we'll provide a custom disinfection quote
          </p>
          <ContactForm serviceType="Office Disinfecting" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">EPA-Approved Products</div>
              <div className="text-sm text-muted-foreground">Hospital-Grade</div>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Electrostatic Technology</div>
              <div className="text-sm text-muted-foreground">360° Coverage</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Same-Day Service</div>
              <div className="text-sm text-muted-foreground">Emergency Response</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficeDisinfecting;