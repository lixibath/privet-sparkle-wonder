import { ContactForm } from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, Sparkles } from "lucide-react";

const DeepCleaning = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Commercial Deep Cleaning Services in Dallas
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Thorough deep cleaning that goes beyond regular maintenance. Perfect for move-in/move-out, seasonal cleaning, neglected spaces, and annual deep clean projects.
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
                  Why Deep Cleaning Goes Beyond Regular Maintenance
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Regular cleaning maintains surfaces - floors get mopped, trash gets emptied, desks get wiped down. But regular cleaning doesn't address the areas that get ignored week after week: baseboards collecting dust, vents covered in grime, the space behind furniture where dust bunnies multiply, grout that's turned from white to grey, light fixtures covered in dead bugs and dust. Deep cleaning tackles all those neglected areas that regular maintenance misses.
                  </p>
                  <p>
                    Deep cleaning is intensive, detailed work that requires more time and specialized attention than routine cleaning. We move furniture to clean behind and underneath. We scrub tile grout with brushes instead of just mopping over it. We clean inside cabinets and appliances, not just their exteriors. We wash walls, clean ceiling fans, scrub window tracks, and extract deep dirt from carpets. It's the difference between surface-level maintenance and thorough restoration of cleanliness.
                  </p>
                  <p>
                    Most businesses need deep cleaning 1-2 times per year in addition to regular cleaning. It's perfect for seasonal cleaning (spring cleaning), preparing for inspections or important events, move-in before new tenants arrive, move-out to get deposits back, or recovering spaces that have been neglected. Deep cleaning also makes sense after illness outbreaks, before selling a property, or when regular cleaning just isn't cutting it anymore and everything feels grimy.
                  </p>
                  <p>
                    We provide deep cleaning services for offices, retail stores, restaurants, medical facilities, and commercial buildings across Dallas. We bring specialized equipment - carpet extractors for deep cleaning, steam cleaners for grout, brushes and scrapers for stubborn buildup, and cleaning solutions designed for intensive cleaning rather than just maintenance. Our crews know the techniques for each surface type and how to clean thoroughly without causing damage.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included in Deep Cleaning Service</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Baseboard and trim cleaning", desc: "All baseboards, door frames, window frames thoroughly wiped and scrubbed" },
                    { title: "Ceiling and light fixture dusting", desc: "Ceiling fans, light fixtures, crown molding, high corners cleaned" },
                    { title: "Behind and under furniture cleaning", desc: "Furniture moved to clean hidden areas, dust and debris removed" },
                    { title: "Carpet deep extraction", desc: "Hot water extraction removes deep dirt and stains from carpet fibers" },
                    { title: "Upholstery cleaning", desc: "Office chairs, waiting room furniture, fabric surfaces deep cleaned" },
                    { title: "Vent and register cleaning", desc: "HVAC vents and returns cleaned of dust accumulation" },
                    { title: "Cabinet interior cleaning", desc: "Inside cabinets, drawers, shelves wiped clean and organized" },
                    { title: "Appliance deep cleaning", desc: "Inside refrigerators, microwaves, ovens thoroughly cleaned" },
                    { title: "Window track and sill scrubbing", desc: "Tracks, sills, frames scrubbed of built-up dirt and debris" },
                    { title: "Tile and grout deep cleaning", desc: "Grout scrubbed with brushes, tile cleaned to original brightness" },
                    { title: "Wall washing", desc: "Walls spot cleaned or fully washed depending on condition" },
                    { title: "High and low dusting", desc: "Top of cabinets, behind doors, under desks - everywhere dust hides" },
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
                <h3 className="text-2xl font-bold mb-4">Deep Cleaning Pricing</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-mono text-accent font-bold">$0.25-0.50</span>
                  <span className="text-muted-foreground">per square foot</span>
                </div>
                <p className="text-muted-foreground mb-6">Based on square footage and current condition</p>
                <div className="bg-background p-6 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Example Pricing:</p>
                  <p className="text-lg">3,000 sq ft office = <span className="font-bold text-accent">$750-1,500</span></p>
                  <p className="text-sm text-muted-foreground mt-2">Price varies based on how neglected the space is and what specific tasks are needed. Heavily soiled spaces cost more than lightly used spaces.</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Our 4-Step Deep Cleaning Process</h3>
                <div className="space-y-6">
                  {[
                    { 
                      num: 1, 
                      title: "Detailed Assessment & Scope Definition", 
                      desc: "We walk through your space to assess current condition, identify problem areas, and understand what needs deep cleaning versus just maintenance cleaning. We discuss your specific concerns - maybe the break room needs serious attention while offices just need baseboards. This allows us to provide an accurate quote and focus on what actually matters to you." 
                    },
                    { 
                      num: 2, 
                      title: "Custom Deep Cleaning Plan", 
                      desc: "Based on the assessment, we create a detailed checklist of tasks specific to your space. Not every deep clean is the same - some need carpet extraction, others need grout scrubbing, some need both. We prioritize tasks by importance and budget, ensuring the most critical areas get attention first. We also schedule the work to minimize disruption to your operations." 
                    },
                    { 
                      num: 3, 
                      title: "Intensive Cleaning Execution", 
                      desc: "Our crew arrives with specialized equipment - carpet extractors, steam cleaners, scrub brushes, extension poles for high areas, and appropriate cleaning solutions for different surfaces. We systematically work through the checklist, moving furniture as needed, cleaning hidden areas, and spending time on stubborn problems. Deep cleaning takes longer than regular cleaning because we're being thorough, not just quick." 
                    },
                    { 
                      num: 4, 
                      title: "Quality Inspection & Documentation", 
                      desc: "After completion, we inspect the work to ensure everything on the checklist was completed properly. We take before and after photos of problem areas to show the improvement. We walk through with you to verify satisfaction and address any concerns immediately. For move-out situations, we provide documentation that can be submitted to landlords for deposit return." 
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
                <h3 className="text-2xl font-bold mb-6">When Deep Cleaning Makes Sense</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Move-In/Move-Out", desc: "Preparing new space before occupancy or cleaning for deposit return" },
                    { title: "Seasonal Cleaning", desc: "Spring or fall deep clean to refresh the entire space" },
                    { title: "Neglected Spaces", desc: "Areas that haven't been properly cleaned in months or years" },
                    { title: "Special Events", desc: "Before important visits, inspections, or grand openings" },
                    { title: "Post-Illness Deep Clean", desc: "After flu season or illness outbreak requiring thorough sanitization" },
                    { title: "Annual Maintenance", desc: "Regular yearly deep clean to prevent buildup and extend facility life" },
                  ].map((situation, i) => (
                    <div key={i} className="p-5 border border-border rounded-lg hover:bg-card transition-colors">
                      <h4 className="font-semibold text-lg mb-2">{situation.title}</h4>
                      <p className="text-sm text-muted-foreground">{situation.desc}</p>
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
                          What's the difference between deep and regular cleaning?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Regular cleaning maintains surfaces you use daily - floors, desks, restrooms, trash removal. Deep cleaning addresses all the areas regular cleaning doesn't touch: baseboards, behind furniture, inside cabinets, grout scrubbing, wall washing, high dusting, carpet extraction. Think of regular cleaning as maintenance and deep cleaning as restoration. Regular cleaning keeps things acceptable, deep cleaning makes things actually clean.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          How long does deep cleaning take?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Deep cleaning takes 2-3 times longer than regular cleaning because we're being thorough. A 3,000 sq ft office that takes 2 hours for regular cleaning might take 6-8 hours for deep cleaning. Heavily soiled or neglected spaces take even longer. We can bring larger crews to complete the work faster if you have time constraints. Most clients schedule deep cleaning on weekends when the building is empty.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Do you move furniture?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, we move moveable furniture to clean behind and underneath - desks, chairs, small filing cabinets, couches, etc. For very heavy items like large conference tables, server racks, or built-in furniture, we clean around them unless you arrange to have them moved separately. We always put furniture back in its original position and protect floors during moving. For complete furniture moving, let us know in advance so we can plan appropriate crew size.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          How often should deep cleaning be done?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Most commercial spaces benefit from deep cleaning 1-2 times per year in addition to regular cleaning. High-traffic facilities might need it quarterly. Low-traffic spaces might only need annual deep cleaning. The frequency depends on your regular cleaning schedule - if you have daily janitorial service, annual deep cleaning is usually sufficient. If you only clean weekly, you might need deep cleaning more often to prevent buildup.
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
            Get Your Free Deep Cleaning Quote
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Tell us about your space and we'll provide a detailed deep cleaning quote
          </p>
          <ContactForm serviceType="Deep Cleaning" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Licensed & Insured</div>
              <div className="text-sm text-muted-foreground">Professional Equipment</div>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Thorough Results</div>
              <div className="text-sm text-muted-foreground">Satisfaction Guaranteed</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Flexible Scheduling</div>
              <div className="text-sm text-muted-foreground">Weekend Service Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeepCleaning;