import { ContactForm } from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, HardHat } from "lucide-react";

const PostConstruction = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Post Construction Cleaning Services in Dallas
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Professional detailed cleaning after construction, renovation, or remodeling projects. Remove dust, debris, and construction residue to reveal your finished space.
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
                  Why Post-Construction Cleaning Requires Specialists
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Construction projects create an unbelievable amount of dust and debris. Drywall dust settles on every surface - floors, windows, light fixtures, HVAC vents, cabinets, everything. Sawdust fills corners. Paint splatters on windows. Concrete dust covers floors. Stickers and labels are stuck on glass and appliances. The space might look finished structurally, but it's completely unusable until someone does the massive cleanup job that transforms a construction site into a functional space.
                  </p>
                  <p>
                    Regular cleaning crews aren't equipped for post-construction cleanup. This isn't maintenance - it's heavy-duty cleaning that requires industrial vacuums, specialized products for removing construction residue, and techniques that won't damage new finishes. You can't just mop drywall dust - you'll create a paste that's harder to remove than the original dust. Paint overspray needs specific solvents. Concrete residue requires acidic cleaners. Windows need careful scraping without scratching new glass.
                  </p>
                  <p>
                    We specialize in post-construction cleaning and work with general contractors, property managers, and building owners across Dallas. We know the punch list requirements for final inspections. We understand staging - rough clean to remove heavy debris, final clean for detailed work, and touch-up for last-minute issues. We bring commercial equipment including HEPA vacuums that actually capture fine dust instead of just redistributing it through the air.
                  </p>
                  <p>
                    We work with tight deadlines because we know construction projects always run behind schedule and you need to meet your move-in date or grand opening. We can mobilize crews quickly, work evenings and weekends if needed, and coordinate with other trades still doing final touches. Our goal is simple: transform your construction site into a clean, ready-to-use space that passes inspection and impresses your first occupants or customers.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included in Post-Construction Cleaning</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Construction dust removal", desc: "Complete dust elimination from all surfaces using HEPA vacuums" },
                    { title: "Debris and material disposal", desc: "Removal of leftover materials, packaging, protective coverings" },
                    { title: "Window and glass cleaning", desc: "Paint, stickers, concrete splatter removed from all glass" },
                    { title: "Floor cleaning and polish", desc: "VCT waxing, tile cleaning, hardwood protection, carpet vacuuming" },
                    { title: "Paint overspray removal", desc: "Careful removal from glass, fixtures, floors without damage" },
                    { title: "Fixture and appliance cleaning", desc: "Light fixtures, outlets, switches, appliances cleaned inside and out" },
                    { title: "HVAC vent cleaning", desc: "Vent covers and registers cleaned of construction dust" },
                    { title: "Light fixture dusting", desc: "All lighting cleaned and bulbs checked for operation" },
                    { title: "Bathroom deep cleaning", desc: "Fixtures, tile, grout, mirrors thoroughly cleaned and sanitized" },
                    { title: "Cabinet and drawer cleaning", desc: "Interior and exterior of all cabinetry wiped clean" },
                    { title: "Sticker and label removal", desc: "All manufacturer stickers, tags, protective films removed" },
                    { title: "Final walk-through inspection", desc: "Detailed inspection to catch any missed areas before handoff" },
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
                <h3 className="text-2xl font-bold mb-4">Post-Construction Cleaning Pricing</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-mono text-accent font-bold">$0.10-0.30</span>
                  <span className="text-muted-foreground">per square foot</span>
                </div>
                <p className="text-muted-foreground mb-6">Based on project size, scope, and timeline requirements</p>
                <div className="bg-background p-6 rounded-lg space-y-3">
                  <p className="text-sm font-semibold mb-2">Pricing factors include:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Square footage and number of rooms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Type of construction (heavy vs. light renovation)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Amount of debris and dust present</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Timeline requirements (rush jobs cost more)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Our 4-Step Post-Construction Process</h3>
                <div className="space-y-6">
                  {[
                    { 
                      num: 1, 
                      title: "Pre-Clean Assessment & Planning", 
                      desc: "We visit the construction site to assess the scope of work, identify special cleaning challenges, and coordinate timing with your project manager. We determine if we need rough clean, final clean, or both. We discuss your deadline, inspection requirements, and any areas that need special attention. This allows us to provide an accurate quote and schedule the right crew size." 
                    },
                    { 
                      num: 2, 
                      title: "Rough Clean (if needed)", 
                      desc: "For heavy construction, we start with a rough clean to remove large debris, protective coverings, and heavy dust accumulation. This happens after major construction is complete but before final finishes. We use industrial vacuums and remove obvious construction waste. This makes the final clean much more effective and protects new finishes from being damaged by heavy cleaning." 
                    },
                    { 
                      num: 3, 
                      title: "Final Detailed Clean", 
                      desc: "The detailed clean happens after all construction is 100% complete. We systematically clean every surface - top to bottom, inside to outside. Windows are cleaned inside and out. Floors are vacuumed and mopped or polished. All fixtures are wiped clean. Stickers and labels are removed. Dust is eliminated from every corner, vent, and surface. This is the thorough cleaning that makes the space move-in ready." 
                    },
                    { 
                      num: 4, 
                      title: "Touch-Up & Final Inspection", 
                      desc: "After final clean, we do a detailed walk-through inspection with you or your project manager. We check every room, note any missed spots, and do immediate touch-ups. We verify windows are streak-free, floors are clean, and fixtures shine. Once you approve, we provide documentation of completed work. If you find anything within 24 hours, we return to address it at no charge." 
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
                <h3 className="text-2xl font-bold mb-6">Construction Projects We Clean</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "New Construction", desc: "Brand new buildings, ground-up construction projects" },
                    { title: "Renovations", desc: "Building upgrades, modernization, space conversions" },
                    { title: "Remodels", desc: "Kitchen remodels, bathroom remodels, interior updates" },
                    { title: "Tenant Improvements", desc: "Commercial space build-outs for new tenants" },
                    { title: "Office Build-Outs", desc: "Corporate office construction and renovations" },
                    { title: "Retail Fit-Outs", desc: "Store construction, restaurant build-outs" },
                  ].map((project, i) => (
                    <div key={i} className="p-5 border border-border rounded-lg hover:bg-card transition-colors">
                      <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">{project.desc}</p>
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
                          When should post-construction cleaning happen?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Post-construction cleaning should happen after all construction work is 100% complete - after painters finish, after flooring is installed, after fixtures are mounted. If we clean before construction is done, new work creates more dust and we have to re-clean. For large projects, we might do a rough clean partway through and final clean at the end. Timing is critical - schedule us as soon as you know your construction completion date.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Do you remove construction materials?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      We remove small debris, packaging, protective coverings, and general construction trash as part of our cleaning service. For large amounts of construction materials (lumber scraps, drywall pieces, etc.), those should be removed by the contractor before we clean. If you need help disposing of significant debris, we can arrange that as an additional service with appropriate dumpster rental and hauling.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          How long does post-construction cleaning take?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      It depends on project size and construction intensity. A small remodel might take 4-8 hours. A 5,000 sq ft office build-out might take 2-3 days with a crew. Heavy construction with lots of dust takes longer than light renovation. We provide time estimates during our assessment. We can also work with multiple crews or extended hours if you have a tight deadline - we've completed rush projects overnight to meet move-in dates.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Can you work with tight deadlines?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, we understand construction projects often run behind schedule and you need the space ready fast. We can mobilize crews quickly, work evenings and weekends, and bring in additional staff to meet deadlines. Rush service may cost extra depending on how tight the timeline is, but we'll work with you to get it done. Just give us as much notice as possible so we can schedule the right crew size.
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
            Get Your Free Post-Construction Cleaning Quote
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Tell us about your project and we'll provide a detailed quote
          </p>
          <ContactForm serviceType="Post Construction Cleaning" />
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
              <div className="text-lg font-semibold">Construction Specialists</div>
              <div className="text-sm text-muted-foreground">HEPA Equipment</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Fast Turnaround</div>
              <div className="text-sm text-muted-foreground">Weekend & Rush Service</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostConstruction;