import { ContactForm } from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock } from "lucide-react";

const OfficeCleaning = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Office Cleaning Services in Dallas
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Keep your workplace clean, productive, and impressive. From small startups to large corporate offices, we make sure your team has a spotless environment to work in.
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Why Office Cleaning Matters More Than You Think
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Your office should be a place your team wants to work, not a place they're embarrassed to bring clients. Dusty desks, dirty bathrooms, and trash cans overflowing by Wednesday afternoon? That's not just gross - it's costing you productivity and hurting your professional image.
                  </p>
                  <p>
                    Studies show that employees working in clean offices take fewer sick days and report higher job satisfaction. Makes sense, right? Nobody wants to eat lunch in a dirty break room or use a bathroom that hasn't been properly cleaned. And when clients visit, they're judging your business based on what they see. A messy office tells them you don't pay attention to details.
                  </p>
                  <p>
                    We clean Dallas offices the right way - thorough, consistent, and without drama. You won't even know we were there except everything will be clean when your team arrives in the morning. We work after hours so we're not in your way, and we bring all our own equipment and supplies. You don't need to think about it or manage it.
                  </p>
                  <p>
                    Whether you need cleaning three times a week or daily service, we'll create a schedule that fits your office traffic and budget. High-traffic areas get more attention. Low-traffic areas get what they need. Nothing more, nothing less. No upselling, no pressure - just clean offices at fair prices.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included in Office Cleaning</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Vacuum and mop all floors", desc: "Yes, under the desks too - we move chairs and get everywhere" },
                    { title: "Empty all trash and recycling", desc: "Bins emptied, liners replaced, cans wiped down" },
                    { title: "Bathroom deep cleaning", desc: "Toilets, sinks, mirrors, floors - medical-grade disinfection" },
                    { title: "Desk and surface wiping", desc: "Tables, countertops, workstations thoroughly cleaned" },
                    { title: "Break room and kitchen", desc: "Counters, sinks, microwaves, refrigerators cleaned" },
                    { title: "Dust all surfaces", desc: "Shelves, window sills, baseboards, furniture" },
                    { title: "Window and glass cleaning", desc: "Interior windows, glass doors, mirrors streak-free" },
                    { title: "High-touch sanitization", desc: "Door handles, light switches, railings disinfected" },
                    { title: "Conference room cleaning", desc: "Tables, chairs, whiteboards, electronics dusted" },
                    { title: "Reception area maintenance", desc: "Front desk, waiting area, entry floors spotless" },
                    { title: "Carpet vacuuming", desc: "All carpeted areas, including under desks" },
                    { title: "Floor mopping", desc: "Hard floors cleaned with proper solutions" },
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
                <h3 className="text-2xl font-bold mb-4">Transparent Office Cleaning Pricing</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-mono text-accent font-bold">$0.12-0.18</span>
                  <span className="text-muted-foreground">per square foot</span>
                </div>
                <p className="text-muted-foreground mb-6">3x weekly service recommended for standard offices</p>
                <div className="bg-background p-6 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Example Pricing:</p>
                  <p className="text-lg">5,000 sq ft office = <span className="font-bold text-accent">$750-1,100/month</span></p>
                  <p className="text-sm text-muted-foreground mt-2">All supplies, equipment, and labor included. No surprises.</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">How We Clean Your Office</h3>
                <div className="space-y-6">
                  {[
                    { num: 1, title: "Free Walk-Through", desc: "We visit your office to see exactly what you need. We'll note high-traffic areas, special requirements, and create a custom checklist for your space. This takes about 15 minutes and there's zero pressure." },
                    { num: 2, title: "Custom Cleaning Schedule", desc: "Based on your office size and traffic, we recommend a cleaning frequency. Most offices do 3x weekly, but we can do daily, weekly, or custom schedules. You tell us what fits your budget." },
                    { num: 3, title: "Dedicated Team Assignment", desc: "You get the same cleaning team every time. They learn your office layout, your preferences, and what areas need extra attention. Consistency is key to good cleaning." },
                    { num: 4, title: "Quality Monitoring", desc: "We do random quality checks to make sure our team is following the checklist. If something's not right, we fix it immediately. No excuses, no delays." },
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
                <h3 className="text-2xl font-bold mb-6">Office Types We Clean</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Corporate Offices", desc: "Multi-floor buildings, cubicle layouts, executive suites" },
                    { title: "Small Business Offices", desc: "Startups, small teams, co-working spaces" },
                    { title: "Law Firms", desc: "Reception areas, conference rooms, attorney offices" },
                    { title: "Accounting Firms", desc: "During tax season and year-round maintenance" },
                    { title: "Real Estate Offices", desc: "Open layouts, meeting rooms, client areas" },
                    { title: "Tech Companies", desc: "Modern offices, break rooms, collaboration spaces" },
                    { title: "Non-Profit Organizations", desc: "Budget-friendly cleaning for mission-driven teams" },
                    { title: "Call Centers", desc: "High-density workstations, break areas" },
                  ].map((type, i) => (
                    <div key={i} className="p-5 border border-border rounded-lg hover:bg-card transition-colors">
                      <h4 className="font-semibold text-lg mb-2">{type.title}</h4>
                      <p className="text-sm text-muted-foreground">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

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
                          Do you clean after business hours?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, most of our office clients prefer after-hours cleaning so we're not in the way during work hours. We typically clean between 6 PM and 6 AM. You give us keys or alarm codes, and we lock up when we're done. All our staff is background-checked and bonded.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          What if we need extra cleaning for special events?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Just let us know. We can add extra cleaning days for client meetings, company events, or any time you need your office to look extra sharp. We usually just need 24-48 hours notice, and there's no minimum commitment for add-on services.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Do you provide cleaning supplies?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, all supplies and equipment are included in our pricing. We bring vacuums, mops, cleaning solutions, trash liners - everything. You don't need to buy or stock anything. If you prefer specific products (like eco-friendly cleaners), just let us know and we'll use those instead.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-border rounded-lg px-6 py-2">
<AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          How do you handle confidential documents?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Our staff is trained to never look at, move, or touch any documents on desks or in offices. If something is in our way, we clean around it. All our team members sign confidentiality agreements and are background-checked. Your business information stays private.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Get Your Free Office Cleaning Quote
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Tell us about your office and we'll send you a detailed quote today
          </p>
          <ContactForm serviceType="Office Cleaning" />
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Licensed & Insured</div>
              <div className="text-sm text-muted-foreground">Fully Bonded</div>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Background Checked</div>
              <div className="text-sm text-muted-foreground">Trusted Staff</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">After-Hours Service</div>
              <div className="text-sm text-muted-foreground">Never In Your Way</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficeCleaning;