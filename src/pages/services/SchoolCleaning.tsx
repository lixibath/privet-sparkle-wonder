import { ContactForm } from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock } from "lucide-react";

const SchoolCleaning = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              School & Educational Facility Cleaning in Dallas
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Clean classrooms, safe hallways, and sanitized cafeterias. We help Dallas schools maintain healthy learning environments where students and staff can focus on education, not germs.
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
                  Why Schools Need Professional Cleaning Services
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Schools get absolutely beat up during the day. Hundreds of kids touching everything, tracking in dirt, spilling food in the cafeteria, and leaving messes in bathrooms. By 3 PM, most schools look like a tornado hit them. That's not the custodial staff's fault - it's just reality when you've got that many people in one building.
                  </p>
                  <p>
                    Professional school cleaning isn't just about making things look nice. It's about health and safety. Schools are breeding grounds for viruses and bacteria. One sick kid can infect an entire classroom in days. Proper cleaning and disinfection can significantly reduce illness transmission and keep kids in school instead of home sick.
                  </p>
                  <p>
                    We specialize in after-hours school cleaning so everything's ready when teachers and students arrive in the morning. We clean classrooms, hallways, cafeterias, gyms, libraries - all of it. Our team knows how to work efficiently in large facilities, and we use commercial equipment that gets the job done faster than standard consumer-grade stuff.
                  </p>
                  <p>
                    We understand school budgets are tight. That's why we offer competitive pricing and work with you to prioritize what needs to be done daily versus weekly. High-traffic areas get daily attention, lower-traffic areas get less frequent cleaning. We maximize your cleaning budget without cutting corners on health and safety.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">School Cleaning Services Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Classroom floor care", desc: "Sweeping, mopping, vacuuming, desk and chair cleaning" },
                    { title: "Hallway maintenance", desc: "Floor mopping, trash removal, locker cleaning" },
                    { title: "Cafeteria deep cleaning", desc: "Tables, floors, food prep areas thoroughly sanitized" },
                    { title: "Restroom cleaning", desc: "Toilets, sinks, floors, supply restocking, odor control" },
                    { title: "Gym floor care", desc: "Dust mopping, wet mopping, periodic floor buffing" },
                    { title: "Common area cleaning", desc: "Lobbies, offices, teacher lounges, staff areas" },
                    { title: "Drinking fountain sanitization", desc: "Daily disinfection of all water fountains" },
                    { title: "High-touch surface disinfection", desc: "Door handles, light switches, handrails, desks" },
                    { title: "Window and glass cleaning", desc: "Interior windows, doors, display cases" },
                    { title: "Trash and recycling removal", desc: "All waste collected, bins cleaned, liners replaced" },
                    { title: "Library cleaning", desc: "Floors, tables, shelving dusted, reading areas" },
                    { title: "Administration offices", desc: "Office cleaning for administrative staff areas" },
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
                <h3 className="text-2xl font-bold mb-4">School Cleaning Pricing</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-mono text-accent font-bold">$0.08-0.12</span>
                  <span className="text-muted-foreground">per square foot</span>
                </div>
                <p className="text-muted-foreground mb-6">After-hours daily service for educational facilities</p>
                <div className="bg-background p-6 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Example Pricing:</p>
                  <p className="text-lg">20,000 sq ft school = <span className="font-bold text-accent">$3,200-4,800/month</span></p>
                  <p className="text-sm text-muted-foreground mt-2">Volume pricing available for school districts with multiple buildings</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Our School Cleaning Process</h3>
                <div className="space-y-6">
                  {[
                    { num: 1, title: "Facility Walk-Through", desc: "We visit your school to understand the layout, identify high-traffic areas, and note any special requirements. We'll work with your staff to create a cleaning schedule that fits your school's needs." },
                    { num: 2, title: "Custom Cleaning Plan", desc: "Based on student enrollment, facility size, and budget, we create a detailed cleaning checklist. This includes which areas get daily attention and which can be cleaned less frequently without compromising cleanliness." },
                    { num: 3, title: "Background-Checked Team", desc: "All our cleaning staff undergoes thorough background checks before setting foot in any school. We take child safety seriously and only hire people we'd trust around our own kids." },
                    { num: 4, title: "Quality Assurance Checks", desc: "We conduct random inspections to ensure our team is following the cleaning checklist every single night. If something's not up to standard, we address it immediately with additional training or staffing changes." },
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
                <h3 className="text-2xl font-bold mb-6">Educational Facilities We Clean</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Elementary Schools", desc: "Classrooms, playgrounds, cafeterias, libraries" },
                    { title: "Middle Schools", desc: "Lockers, gyms, science labs, common areas" },
                    { title: "High Schools", desc: "Large facilities, athletic areas, auditoriums" },
                    { title: "Private Schools", desc: "Specialized cleaning for private institutions" },
                    { title: "Preschools & Daycares", desc: "Extra attention to sanitization for young children" },
                    { title: "Charter Schools", desc: "Flexible cleaning schedules for charter facilities" },
                    { title: "College Buildings", desc: "Lecture halls, student centers, admin buildings" },
                    { title: "After-School Programs", desc: "Cleaning between program sessions" },
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
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Do all your staff have background checks?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, absolutely. Every single person on our team undergoes a thorough background check before they can work in any school. We understand the importance of child safety and only hire people with clean records. All staff also carries proper identification and wears company uniforms.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      What cleaning products do you use?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      We use EPA-approved disinfectants that are effective against viruses and bacteria but safe for use around children. If you prefer green/eco-friendly products, we can use those instead at no extra charge. All our products meet or exceed CDC guidelines for school cleaning.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Can you work around our school schedule?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, we typically clean after school hours when students and teachers have left for the day. We can also work around evening events, sports practices, or parent meetings. Just let us know your schedule and we'll coordinate around it. Flexibility is part of our service.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      What if there's a flu outbreak or COVID situation?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      We can immediately increase disinfection frequency and focus on high-touch surfaces throughout the day. We're experienced with outbreak response cleaning and can deploy additional staff and resources within 24 hours. Just call us and we'll adjust our cleaning protocol to match the situation.
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
            Get Your Free School Cleaning Quote
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Tell us about your school facility and we'll provide a custom quote
          </p>
          <ContactForm serviceType="School Cleaning" />
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Background Checked</div>
              <div className="text-sm text-muted-foreground">All Staff Vetted</div>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Child-Safe Products</div>
              <div className="text-sm text-muted-foreground">EPA Approved</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">After-Hours Cleaning</div>
              <div className="text-sm text-muted-foreground">Never Disrupts Classes</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolCleaning;