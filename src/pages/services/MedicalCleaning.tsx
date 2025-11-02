import { ContactForm } from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Shield, Clock } from "lucide-react";

const MedicalCleaning = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Medical Facility Cleaning Services in Dallas
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              HIPAA-compliant cleaning for clinics, dental offices, and healthcare facilities. We use hospital-grade disinfectants and follow strict protocols so your patients and staff stay safe.
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
                  Why Medical Facilities Need Professional Cleaning
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Medical facilities can't mess around with cleanliness. One missed surface can lead to cross-contamination, infections, and serious health risks for patients with compromised immune systems. The CDC estimates that healthcare-associated infections affect 1 in 31 hospital patients on any given day. Your cleaning isn't just about making things look good - it's about preventing disease transmission and protecting vulnerable people.
                  </p>
                  <p>
                    That's where we come in. We're not your typical janitorial company that just pushes a mop around. Our medical facility cleaning follows strict healthcare protocols that most regular cleaners don't even know exist. We use EPA-registered medical-grade disinfectants, follow proper dwell times, and focus on high-touch surfaces that harbor the most bacteria. Every member of our team is trained in bloodborne pathogen handling and HIPAA privacy requirements.
                  </p>
                  <p>
                    We've cleaned everything from small dental offices to large multi-doctor clinics in the Dallas area. We know that exam rooms need different attention than waiting areas. Bathrooms in medical facilities require more frequent disinfection than office bathrooms. Reception desks, door handles, and sign-in tablets are germ magnets that need special care.
                  </p>
                  <p>
                    Our cleaning schedule works around your patient appointments. Most of our medical clients prefer after-hours cleaning so we're not in the way during the day. But we can also do day porter services if you have high traffic and need continuous maintenance. We bring all our own supplies and equipment - you don't need to stock anything or worry about us using the wrong products on your expensive medical equipment.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included in Our Medical Cleaning Service</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Medical-grade disinfection", desc: "EPA-approved products effective against MRSA, C-diff, and other healthcare pathogens" },
                    { title: "Exam room thorough cleaning", desc: "All surfaces, medical equipment exteriors, patient furniture" },
                    { title: "Waiting area maintenance", desc: "Chairs, tables, magazines, children's play areas" },
                    { title: "Restroom deep cleaning", desc: "Toilets, sinks, mirrors, floor sanitization, supply restocking" },
                    { title: "Bio-hazard waste handling", desc: "Proper disposal procedures with licensed carriers" },
                    { title: "HIPAA-compliant procedures", desc: "All staff trained on patient privacy and confidentiality" },
                    { title: "Floor care", desc: "Vacuuming, mopping with hospital-grade solutions, periodic buffing" },
                    { title: "High-touch point sanitization", desc: "Door handles, light switches, elevator buttons, handrails" },
                    { title: "Reception area cleaning", desc: "Desks, phones, computers, check-in tablets" },
                    { title: "Break room and staff areas", desc: "Kitchen cleaning, refrigerator sanitization" },
                    { title: "Medical equipment exterior cleaning", desc: "Safe cleaning of scales, blood pressure cuffs, exam lights" },
                    { title: "Trash and recycling removal", desc: "Regular waste disposal and can sanitization" },
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
                <h3 className="text-2xl font-bold mb-4">Transparent Pricing</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-mono text-accent font-bold">$0.20-0.30</span>
                  <span className="text-muted-foreground">per square foot</span>
                </div>
                <p className="text-muted-foreground mb-6">Daily service recommended for medical facilities</p>
                <div className="bg-background p-6 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Example Pricing:</p>
                  <p className="text-lg">3,000 sq ft medical office = <span className="font-bold text-accent">$1,200-1,800/month</span></p>
                  <p className="text-sm text-muted-foreground mt-2">Includes all supplies, equipment, and labor. No hidden fees.</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Our 4-Step Process</h3>
                <div className="space-y-6">
                  {[
                    { 
                      num: 1, 
                      title: "Initial Assessment", 
                      desc: "We visit your facility, review your specific needs, note any special equipment or areas that need extra attention. We'll ask about your patient schedule, traffic patterns, and any compliance requirements you need to meet." 
                    },
                    { 
                      num: 2, 
                      title: "Custom Cleaning Plan", 
                      desc: "Based on the assessment, we create a detailed cleaning checklist specific to your facility. This includes which products to use where, proper dwell times for disinfectants, and special procedures for sensitive areas." 
                    },
                    { 
                      num: 3, 
                      title: "Staff Training", 
                      desc: "Our team members assigned to your facility go through training on your specific requirements, including HIPAA compliance, your facility layout, and any special instructions you've provided." 
                    },
                    { 
                      num: 4, 
                      title: "Consistent Execution", 
                      desc: "We show up on schedule, follow the checklist every single time, and document our work. You get the same quality cleaning whether it's Monday or Friday, whether your regular cleaner is there or their backup." 
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
                <h3 className="text-2xl font-bold mb-6">Medical Industries We Serve</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Dental Offices", desc: "Operatory cleaning, sterilization area maintenance, waiting rooms, x-ray rooms" },
                    { title: "Family Medicine Clinics", desc: "Exam rooms, lab areas, patient restrooms, staff areas" },
                    { title: "Urgent Care Centers", desc: "High-traffic waiting areas, treatment rooms, triage stations" },
                    { title: "Physical Therapy Offices", desc: "Exercise areas, treatment rooms, equipment sanitization" },
                    { title: "Chiropractic Offices", desc: "Adjustment rooms, reception areas, therapy rooms" },
                    { title: "Veterinary Clinics", desc: "Exam rooms, surgical suites, kennels, reception areas" },
                    { title: "Medical Spas", desc: "Treatment rooms, waiting areas, restrooms, staff areas" },
                    { title: "Optometry Offices", desc: "Exam rooms, optical displays, waiting areas" },
                  ].map((industry, i) => (
                    <div key={i} className="p-5 border border-border rounded-lg hover:bg-card transition-colors">
                      <h4 className="font-semibold text-lg mb-2">{industry.title}</h4>
                      <p className="text-sm text-muted-foreground">{industry.desc}</p>
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
                          Do you use hospital-grade disinfectants?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, we use EPA-approved medical-grade disinfectants that meet healthcare facility requirements. Our products are effective against MRSA, C-diff, norovirus, and other common healthcare pathogens. We also follow proper dwell times - that means the disinfectant stays wet on the surface long enough to actually kill the germs, not just spread them around.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Are you HIPAA compliant?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Absolutely. All our staff signs HIPAA agreements and receives training on patient privacy. We know not to look at or discuss any patient information we might see. If we find any documents left out, we let your staff know immediately - we don't move or read them. Your patient data stays private.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          How often should medical offices be cleaned?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Most medical facilities benefit from daily cleaning, especially in high-traffic areas like waiting rooms and restrooms. Exam rooms should be cleaned daily at minimum, and some high-volume clinics need them cleaned between each patient. We can create a schedule that matches your patient volume and budget.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          What's the difference between medical and office cleaning?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Medical cleaning requires EPA-registered disinfectants, longer contact times, and specific procedures that regular office cleaning doesn't require. We also handle bio-hazard waste differently, pay more attention to cross-contamination, and our staff is trained in bloodborne pathogen safety. It's a completely different level of cleaning with higher standards.
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
            Get Your Free Medical Cleaning Quote
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Tell us about your medical facility and we'll provide a detailed quote within 2 hours
          </p>
          <ContactForm serviceType="Medical Facility Cleaning" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Licensed & Insured</div>
              <div className="text-sm text-muted-foreground">TX License #56172</div>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">HIPAA Compliant</div>
              <div className="text-sm text-muted-foreground">Privacy Guaranteed</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Flexible Scheduling</div>
              <div className="text-sm text-muted-foreground">24/7 Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalCleaning;