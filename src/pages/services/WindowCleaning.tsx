import { ContactForm } from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, Sparkles } from "lucide-react";

const WindowCleaning = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Commercial Window Cleaning Services in Dallas
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Professional streak-free window cleaning for office buildings, retail storefronts, and commercial properties. Maximize natural light and maintain your professional image.
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
                  Why Clean Windows Matter for Your Business
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Dirty windows send a terrible message to customers and clients. Streaky glass covered in water spots, dust, and fingerprints makes your business look neglected - even if everything else is spotless. Meanwhile, clean windows maximize natural light, improve curb appeal, and create that professional first impression that makes people want to do business with you. For retail stores, clean windows literally showcase your products better and can directly impact sales.
                  </p>
                  <p>
                    But commercial window cleaning isn't as simple as spraying Windex and wiping with paper towels. Different glass types require different techniques. Tinted windows can be damaged by harsh chemicals. Hard water stains require special treatment. Second and third-story windows need proper safety equipment. Storefronts with large plate glass need commercial squeegees and extension poles for streak-free results. And post-construction cleaning requires removing concrete splatter, paint, and stickers without scratching the glass.
                  </p>
                  <p>
                    We specialize in commercial window cleaning and have the equipment, training, and insurance for any size job. We use professional-grade squeegees, water-fed poles for high windows, scaffolding and lifts when needed, and commercial glass cleaning solutions that don't leave residue or streaks. Our team knows how to clean efficiently without disrupting your business - we can work around operating hours, avoid blocking entrances, and complete the job quickly.
                  </p>
                  <p>
                    We clean windows for office buildings, retail stores, restaurants, medical facilities, and high-rise buildings across Dallas. Some clients need monthly service to maintain that crystal-clear appearance, others schedule quarterly or twice-yearly cleaning. The frequency depends on your location (busy streets get dirtier faster), weather exposure, and how important appearance is to your business. We'll help you create a schedule that keeps windows clean without wasting money on excessive cleaning.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included in Window Cleaning</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Interior window cleaning", desc: "Inside glass, frames, and sills cleaned streak-free" },
                    { title: "Exterior window cleaning", desc: "Outside glass cleaned, weather stains and dirt removed" },
                    { title: "Window frame and sill wiping", desc: "Frames, sills, and tracks cleaned of dust and debris" },
                    { title: "Screen removal and cleaning", desc: "Screens removed, washed, dried, and reinstalled" },
                    { title: "Hard water stain removal", desc: "Mineral deposit removal and glass restoration" },
                    { title: "High-rise window cleaning", desc: "Upper floors cleaned using lifts, scaffolding, or rope access" },
                    { title: "Storefront glass cleaning", desc: "Large plate glass windows cleaned for retail visibility" },
                    { title: "Skylight cleaning", desc: "Overhead glass cleaned for maximum natural light" },
                    { title: "Glass door cleaning", desc: "Entry doors, interior glass doors, fingerprint removal" },
                    { title: "Mirror cleaning", desc: "Bathroom mirrors, decorative mirrors, lobby mirrors" },
                    { title: "Window track vacuuming", desc: "Tracks and channels cleaned of dirt and debris" },
                    { title: "Post-construction window cleaning", desc: "Paint, concrete, sticker, and construction residue removal" },
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
                <h3 className="text-2xl font-bold mb-4">Window Cleaning Pricing</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-mono text-accent font-bold">$3-8</span>
                  <span className="text-muted-foreground">per window (interior & exterior)</span>
                </div>
                <p className="text-muted-foreground mb-6">Pricing based on window count, height, and accessibility</p>
                <div className="bg-background p-6 rounded-lg space-y-3">
                  <p className="text-sm font-semibold mb-2">Factors affecting pricing:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Total number of windows and size</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Building height and accessibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Window condition (hard water stains, paint, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Frequency (monthly service costs less per visit)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Our 4-Step Window Cleaning Process</h3>
                <div className="space-y-6">
                  {[
                    { 
                      num: 1, 
                      title: "Window Count & Assessment", 
                      desc: "We visit your property to count all windows, measure sizes, assess height and accessibility, and check for any special conditions like hard water stains or construction residue. We'll note which windows need interior cleaning, exterior cleaning, or both. This allows us to provide an accurate quote and plan the right equipment." 
                    },
                    { 
                      num: 2, 
                      title: "Scheduling & Safety Planning", 
                      desc: "We coordinate the cleaning around your business hours and building access. For high windows, we arrange for necessary equipment like lifts, scaffolding, or rope access systems. We ensure all safety protocols are followed and obtain any required permits for work on upper floors. We also plan traffic flow to avoid blocking entrances or disrupting customers." 
                    },
                    { 
                      num: 3, 
                      title: "Professional Cleaning Execution", 
                      desc: "Our team arrives with professional squeegees, water-fed poles, extension ladders, and commercial glass cleaning solutions. We clean windows systematically - typically starting with interiors, then moving to exteriors. We use proper techniques to avoid streaks, clean frames and sills, and ensure every window is crystal clear. We're careful around merchandise, furniture, and building features." 
                    },
                    { 
                      num: 4, 
                      title: "Quality Check & Touch-Ups", 
                      desc: "Before leaving, we inspect every window for streaks, spots, or missed areas. We do touch-ups as needed to ensure perfect results. We clean up any water drips, move furniture back to original positions, and remove all equipment. For recurring clients, we note any windows that are getting hard water buildup or other issues that might need attention next time." 
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
                <h3 className="text-2xl font-bold mb-6">Commercial Buildings We Serve</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Office Buildings", desc: "Multi-story buildings, corporate offices, business parks" },
                    { title: "Retail Storefronts", desc: "Shop windows, display glass, mall stores" },
                    { title: "High-Rise Buildings", desc: "Upper floor windows requiring lifts or rope access" },
                    { title: "Shopping Centers", desc: "Strip malls, retail centers, anchor stores" },
                    { title: "Medical Facilities", desc: "Hospitals, clinics, dental offices, medical buildings" },
                    { title: "Restaurants", desc: "Dining areas, storefront windows, patio glass" },
                    { title: "Banks", desc: "Branch windows, drive-through glass, lobby windows" },
                    { title: "Hotels", desc: "Lobby windows, common areas, exterior glass" },
                  ].map((building, i) => (
                    <div key={i} className="p-5 border border-border rounded-lg hover:bg-card transition-colors">
                      <h4 className="font-semibold text-lg mb-2">{building.title}</h4>
                      <p className="text-sm text-muted-foreground">{building.desc}</p>
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
                          How do you reach high windows?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      We have multiple methods depending on building height and access. For second and third stories, we use water-fed poles that can reach up to 60 feet. For taller buildings, we use boom lifts, scissor lifts, or scaffolding. For some high-rises, we employ rope access technicians who are certified in industrial rope access. We're fully insured for high-rise work and follow all OSHA safety requirements.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Do you clean inside and outside?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, we offer interior cleaning, exterior cleaning, or both. Most commercial clients get both sides cleaned for the best appearance and maximum natural light. Some choose exterior-only service to save money, especially for upper floors where the inside doesn't get as dirty. We can customize the service to fit your needs and budget - maybe doing both sides quarterly but exterior-only monthly.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          How often should commercial windows be cleaned?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      It depends on your business type and location. Retail stores with storefront displays often clean monthly for maximum product visibility. Office buildings typically clean quarterly or twice yearly. Restaurants might clean monthly due to grease and cooking residue. Buildings on busy streets get dirtier faster than those in quieter areas. We'll help you determine the right frequency based on your specific situation.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          What about hard water stains?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Hard water stains (mineral deposits from sprinklers or rain runoff) require special treatment beyond regular window cleaning. We use acidic cleaners and specialized scrubbing techniques to remove mineral buildup. Severe stains might need multiple treatments or professional glass restoration. The good news is once we remove them, regular cleaning prevents them from building up again. We can also recommend sprinkler adjustments to prevent future staining.
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
            Get Your Free Window Cleaning Quote
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Tell us about your windows and we'll provide a detailed quote
          </p>
          <ContactForm serviceType="Window Cleaning" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Licensed & Insured</div>
              <div className="text-sm text-muted-foreground">High-Rise Certified</div>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Streak-Free Guarantee</div>
              <div className="text-sm text-muted-foreground">Professional Results</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Flexible Scheduling</div>
              <div className="text-sm text-muted-foreground">Works Around Business Hours</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WindowCleaning;