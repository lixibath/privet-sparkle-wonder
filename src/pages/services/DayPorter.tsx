import { ContactForm } from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, Users } from "lucide-react";

const DayPorter = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Day Porter Services in Dallas
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              On-site cleaning staff during business hours for continuous maintenance. Immediate response to spills, constant restroom checks, and a consistently clean environment for employees and customers.
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
                  Why Day Porter Services Make a Difference
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Regular janitorial service cleans your building after everyone leaves. That's great for end-of-day cleaning, but what about the coffee spill in the lobby at 10 AM? The overflowing trash can at lunch? The restroom that runs out of paper towels at 2 PM? The conference room that needs reset between meetings? These things can't wait until the cleaning crew shows up at 6 PM - they need immediate attention during business hours.
                  </p>
                  <p>
                    That's what day porter service provides. A dedicated cleaning professional on-site during your business hours, constantly monitoring your facility, responding immediately to issues, and maintaining cleanliness throughout the day. They're not just cleaning - they're protecting your professional image in real-time. When clients visit, they see spotless restrooms, organized common areas, and a facility that's clearly well-maintained. When employees need something, there's someone there to handle it immediately.
                  </p>
                  <p>
                    Day porters become part of your team. They learn your building, understand your priorities, and build relationships with your staff. They know which conference rooms get used most, what time the lunch rush hits the break room, and which restrooms need more frequent attention. This familiarity means better service than a rotating night crew who's just following a checklist. Your day porter takes ownership of your facility's appearance and responds proactively to issues before they become problems.
                  </p>
                  <p>
                    We provide day porter services for high-traffic offices, retail stores, medical facilities, corporate campuses, hotels, and educational institutions across Dallas. Some clients need full 8-hour coverage, others just want 4 hours during peak times. We can provide one porter or multiple porters depending on your facility size and needs. All our day porters are background-checked, uniformed, and trained in customer service - because they're representing your business while interacting with your staff and visitors.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included in Day Porter Service</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Restroom checks and stocking", desc: "Hourly restroom inspections, supply restocking, cleanliness maintenance" },
                    { title: "Lobby and entrance maintenance", desc: "Constant monitoring of first impression areas, debris removal" },
                    { title: "Spill cleanup and response", desc: "Immediate response to coffee spills, tracked-in water, accidents" },
                    { title: "Trash and recycling removal", desc: "Multiple daily collections, can cleaning, liner replacement" },
                    { title: "Break room cleaning", desc: "Sink wiping, counter cleaning, appliance maintenance, table cleaning" },
                    { title: "Conference room setup/breakdown", desc: "Room reset between meetings, trash removal, table wiping" },
                    { title: "High-touch sanitization", desc: "Door handles, elevator buttons, handrails cleaned multiple times daily" },
                    { title: "Floor spot cleaning", desc: "Immediate cleanup of spills, tracked-in dirt, high-traffic areas" },
                    { title: "Glass and mirror maintenance", desc: "Entry doors, interior glass, restroom mirrors kept fingerprint-free" },
                    { title: "Reception area tidying", desc: "Waiting areas, magazines, furniture arrangement maintained" },
                    { title: "Supply restocking", desc: "Paper products, soap, sanitizer, coffee supplies monitored and refilled" },
                    { title: "Emergency cleaning response", desc: "Immediate handling of unexpected cleaning emergencies" },
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
                <h3 className="text-2xl font-bold mb-4">Day Porter Service Pricing</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-mono text-accent font-bold">$25-35</span>
                  <span className="text-muted-foreground">per hour</span>
                </div>
                <p className="text-muted-foreground mb-6">Hourly rates or full-time coverage available</p>
                <div className="bg-background p-6 rounded-lg space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-1">Part-Time Coverage (4 hours):</p>
                    <p className="text-lg"><span className="font-bold text-accent">$100-140/day</span></p>
                    <p className="text-sm text-muted-foreground">Perfect for peak hours coverage</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold mb-1">Full-Time Coverage (8 hours):</p>
                    <p className="text-lg"><span className="font-bold text-accent">$200-280/day</span></p>
                    <p className="text-sm text-muted-foreground">Complete business hours coverage</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Our 4-Step Process</h3>
                <div className="space-y-6">
                  {[
                    { 
                      num: 1, 
                      title: "Facility Assessment & Needs Analysis", 
                      desc: "We visit your facility to understand traffic patterns, identify high-priority areas, observe your daily operations, and determine optimal porter hours. We'll discuss your specific concerns - maybe restrooms need constant attention, or you have frequent meetings requiring room resets. This helps us customize the service to your actual needs." 
                    },
                    { 
                      num: 2, 
                      title: "Porter Assignment & Training", 
                      desc: "We assign a dedicated porter to your facility - someone who will become familiar with your building, your staff, and your preferences. They receive training on your specific facility requirements, emergency procedures, and customer service expectations. For larger facilities, we may assign multiple porters to cover different zones or shifts." 
                    },
                    { 
                      num: 3, 
                      title: "Scheduled Coverage & Monitoring", 
                      desc: "Your day porter arrives during agreed-upon hours, wearing a company uniform and carrying ID. They follow a routine of regular checks (restrooms every hour, trash every 2 hours, etc.) while remaining flexible to respond to immediate needs. They monitor supplies, identify maintenance issues, and communicate with your staff as needed." 
                    },
                    { 
                      num: 4, 
                      title: "Daily Reporting & Quality Control", 
                      desc: "Your porter logs their activities, notes any issues discovered, and reports completed tasks. We conduct regular quality checks to ensure standards are maintained. You have a direct line to your account manager for any adjustments or concerns. We're flexible - if you need more hours during busy seasons or less during slow periods, we adjust coverage." 
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
                <h3 className="text-2xl font-bold mb-6">Ideal For These Facilities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "High-Traffic Offices", desc: "Large corporate buildings with constant visitor and employee traffic" },
                    { title: "Retail Stores", desc: "Shopping centers, malls, standalone stores needing constant tidying" },
                    { title: "Medical Facilities", desc: "Clinics, hospitals, medical offices requiring continuous sanitization" },
                    { title: "Corporate Campuses", desc: "Multi-building facilities with cafeterias, gyms, common areas" },
                    { title: "Hotels", desc: "Lobby, common areas, meeting spaces needing constant attention" },
                    { title: "Educational Institutions", desc: "Schools, colleges, training centers with student traffic" },
                  ].map((facility, i) => (
                    <div key={i} className="p-5 border border-border rounded-lg hover:bg-card transition-colors">
                      <h4 className="font-semibold text-lg mb-2">{facility.title}</h4>
                      <p className="text-sm text-muted-foreground">{facility.desc}</p>
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
                          What's the difference between day porter and janitorial?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Janitorial service typically happens after hours when your building is empty - they do deep cleaning, floor care, and major tasks. Day porters work during business hours focusing on maintenance and immediate response - restroom checks, spill cleanup, trash removal, and keeping things tidy while people are there. Most facilities need both: janitorial for thorough nightly cleaning and day porters for daytime maintenance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          How many hours do you recommend?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      It depends on your facility size and traffic. Small offices (under 10,000 sq ft) might need 4 hours during peak times. Medium facilities (10,000-30,000 sq ft) typically need 6-8 hours. Large campuses might need full-time coverage or multiple porters. We'll assess your facility and recommend hours based on actual needs - no point paying for coverage you don't need.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Are day porters uniformed?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, all our day porters wear company uniforms and name badges so they're easily identifiable. They're trained in professional appearance and customer service because they're representing your business while interacting with employees and visitors. They know how to be helpful and courteous while staying out of the way during meetings and important activities.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Can they handle emergency cleaning?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, that's one of the main benefits of having a day porter on-site. Spills, accidents, overflowing toilets, tracked-in mud - they handle it immediately instead of waiting hours for someone to show up. They have cleaning supplies readily available and can respond within minutes. For serious emergencies beyond their scope, they notify management and coordinate with appropriate specialists.
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
            Get Your Free Day Porter Quote
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Tell us about your facility and we'll recommend the right coverage hours
          </p>
          <ContactForm serviceType="Day Porter Services" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Background Checked</div>
              <div className="text-sm text-muted-foreground">Bonded & Insured</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Dedicated Staff</div>
              <div className="text-sm text-muted-foreground">Uniformed Professionals</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Immediate Response</div>
              <div className="text-sm text-muted-foreground">Business Hours Coverage</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DayPorter;