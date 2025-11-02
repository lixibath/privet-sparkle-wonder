import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BankCleaning = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bank & Financial Institution Cleaning</h1>
            <p className="text-xl text-muted-foreground mb-6">Professional cleaning for banks, credit unions, and financial offices. Maintain a trustworthy image with spotless facilities.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild><a href="#quote">Get Free Quote</a></Button>
              <Button variant="outline" size="lg" asChild><a href="tel:9453989726">Call (945) 398-9726</a></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - 2 Column Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column - Content (2/3 width) */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Why Banks Need Professional Cleaning</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Your bank's appearance directly impacts customer trust. When someone walks into a dirty lobby with smudged glass, dusty counters, and grimy floors, they're not thinking "I want to trust these people with my money." First impressions matter in financial services more than almost any other industry. A spotless branch communicates professionalism, attention to detail, and reliability - exactly the qualities customers want in their bank.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  But bank cleaning isn't just about appearances. Financial institutions have unique security requirements, confidentiality concerns, and high customer traffic that demands specialized cleaning protocols. We've been cleaning banks and credit unions in Dallas for years, and we understand these challenges. Our team is background-checked, trained in banking security procedures, and knows how to work around your schedule without disrupting operations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Most of our banking clients prefer after-hours cleaning so customers never see us. We show up after close, do our work thoroughly, and lock up properly. Your branch opens the next morning looking perfect - like it was just built. We also understand that you can't have cleaners wandering around during business hours touching customer documents or accessing secure areas. We follow strict protocols to maintain confidentiality and security at all times.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">What's Included in Bank Cleaning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-foreground">Lobby & waiting area cleaning</strong>
                      <span className="text-muted-foreground"> - floors, furniture, magazines, brochure displays</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-foreground">Teller station sanitization</strong>
                      <span className="text-muted-foreground"> - counters, computer keyboards, pens, glass partitions</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-foreground">Glass and window cleaning</strong>
                      <span className="text-muted-foreground"> - streak-free interior and exterior entrance glass</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-foreground">ATM area maintenance</strong>
                      <span className="text-muted-foreground"> - exterior cleaning, trash removal, surrounding area</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-foreground">Executive office cleaning</strong>
                      <span className="text-muted-foreground"> - desks, conference rooms, private offices</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-foreground">Restroom deep cleaning</strong>
                      <span className="text-muted-foreground"> - toilets, sinks, mirrors, floors, supply restocking</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-foreground">Break room sanitization</strong>
                      <span className="text-muted-foreground"> - counters, appliances, tables, refrigerator cleaning</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-foreground">Floor care</strong>
                      <span className="text-muted-foreground"> - vacuuming, mopping, buffing, mat cleaning</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-foreground">Trash and recycling removal</strong>
                      <span className="text-muted-foreground"> - all waste containers emptied and sanitized</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-foreground">High-touch surface disinfection</strong>
                      <span className="text-muted-foreground"> - door handles, light switches, elevator buttons</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-foreground">Drive-through cleaning</strong>
                      <span className="text-muted-foreground"> - tube systems, surrounding glass, customer area</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 text-xl flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-foreground">Security protocol compliance</strong>
                      <span className="text-muted-foreground"> - proper lock-up procedures, alarm systems</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4">Bank Cleaning Pricing</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-mono text-accent font-bold">$0.15-0.25</span>
                  <span className="text-muted-foreground">per sq ft / month</span>
                </div>
                <p className="text-lg mb-4">3-5 times per week service recommended</p>
                <div className="bg-background p-6 rounded-lg">
                  <p className="text-sm font-semibold mb-2 text-muted-foreground">Example Pricing:</p>
                  <p className="text-lg">3,500 sq ft bank branch = <span className="font-bold text-accent">$1,050-1,750/month</span></p>
                  <p className="text-sm text-muted-foreground mt-2">Includes lobby, teller areas, offices, restrooms, and break room</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Our Bank Cleaning Process</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Security Assessment & Walk-Through</h4>
                      <p className="text-muted-foreground">
                        We meet with your branch manager to review security protocols, access procedures, alarm systems, and any restricted areas. We document all requirements and ensure our team understands your specific needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Background Checks & Training</h4>
                      <p className="text-muted-foreground">
                        All staff assigned to your location undergo comprehensive background checks. We train them on banking confidentiality, proper handling of documents, and your facility's security systems.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Scheduled After-Hours Service</h4>
                      <p className="text-muted-foreground">
                        We arrive after your branch closes, complete all cleaning tasks efficiently, and secure the building properly when leaving. You'll never have disruption during business hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Quality Inspections & Reporting</h4>
                      <p className="text-muted-foreground">
                        Our supervisors conduct regular quality checks. We provide service logs and are available for immediate response if you need extra attention before audits or special events.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Financial Institutions We Serve</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border border-border rounded-lg hover:border-accent/50 transition-colors">
                    <h4 className="font-semibold mb-2 text-lg">Retail Bank Branches</h4>
                    <p className="text-sm text-muted-foreground">
                      Full-service branches with lobbies, teller stations, ATMs, and customer areas
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:border-accent/50 transition-colors">
                    <h4 className="font-semibold mb-2 text-lg">Credit Unions</h4>
                    <p className="text-sm text-muted-foreground">
                      Member-focused facilities requiring personalized service and attention
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:border-accent/50 transition-colors">
                    <h4 className="font-semibold mb-2 text-lg">Financial Office Buildings</h4>
                    <p className="text-sm text-muted-foreground">
                      Corporate offices, loan processing centers, administrative headquarters
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:border-accent/50 transition-colors">
                    <h4 className="font-semibold mb-2 text-lg">Investment Firms</h4>
                    <p className="text-sm text-muted-foreground">
                      Wealth management offices, brokerage firms, financial advisory offices
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:border-accent/50 transition-colors">
                    <h4 className="font-semibold mb-2 text-lg">Mortgage Companies</h4>
                    <p className="text-sm text-muted-foreground">
                      Lending offices, title companies, real estate finance centers
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:border-accent/50 transition-colors">
                    <h4 className="font-semibold mb-2 text-lg">Insurance Offices</h4>
                    <p className="text-sm text-muted-foreground">
                      Insurance agencies, claims offices, underwriting facilities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - FAQ Sidebar (1/3 width) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Common Questions</h3>
                <Accordion type="single" collapsible className="space-y-4">
                  
                  <AccordionItem value="item-1" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Do you have security clearance for banking facilities?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      Yes, all our staff undergoes comprehensive background checks before being assigned to any banking client. We're fully bonded and insured, and we can provide proof of insurance and background check documentation. Our cleaners are trained on banking security protocols, including proper alarm system procedures, lock-up requirements, and restricted area protocols. We treat your facility's security as seriously as you do.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Can you clean during business hours?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      While we can provide day porter services if needed, most of our banking clients prefer after-hours cleaning. This ensures zero disruption to customers and staff, maintains a professional appearance during banking hours, and allows our team to work more efficiently without navigating around people. We typically arrive 30 minutes after close and complete all work before your morning opening. If you need restroom checks or lobby touch-ups during the day, we can add day porter hours to handle that.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-border rounded-lg px-4">
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
                    <AccordionContent className="text-muted-foreground pb-4">
                      Our staff is trained to never touch, move, or read any documents or customer information. If we encounter papers left out on desks, we clean around them and notify your manager so they can secure the documents. We never access computers, file cabinets, or any storage areas unless specifically authorized. All our cleaners sign confidentiality agreements and understand that violation of these policies is grounds for immediate termination. We take financial privacy extremely seriously.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          What's included in bank lobby cleaning?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      Lobby cleaning includes floor care (vacuuming carpets, mopping hard surfaces, buffing when needed), cleaning all glass surfaces and windows, wiping down all furniture and waiting area seating, organizing and cleaning magazine/brochure displays, emptying trash receptacles, dusting light fixtures and décor, and sanitizing all high-touch surfaces like door handles and counters. We make sure your lobby makes a perfect first impression every single morning when you unlock the doors.
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
          <h2 className="text-3xl font-bold text-center mb-4">Get a Free Quote for Bank Cleaning</h2>
          <p className="text-center text-muted-foreground mb-8">
            Tell us about your branch and we'll provide a detailed quote within 2 hours
          </p>
          <ContactForm serviceType="Bank Cleaning" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-accent text-lg font-semibold">Licensed & Insured</div>
              <div className="text-sm text-muted-foreground">Full Liability Coverage</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border"></div>
            <div>
              <div className="text-accent text-lg font-semibold">Background Checked</div>
              <div className="text-sm text-muted-foreground">All Staff Vetted</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border"></div>
            <div>
              <div className="text-accent text-lg font-semibold">Bonded Team</div>
              <div className="text-sm text-muted-foreground">Your Security Guaranteed</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border"></div>
            <div>
              <div className="text-accent text-lg font-semibold">15+ Years</div>
              <div className="text-sm text-muted-foreground">Serving Dallas</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankCleaning;