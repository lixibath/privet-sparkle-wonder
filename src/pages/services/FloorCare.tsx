import { ContactForm } from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, Sparkles } from "lucide-react";

const FloorCare = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Commercial Floor Care Services in Dallas
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Professional stripping, waxing, buffing, and polishing for all commercial floor types. Restore shine, extend floor life, and maintain a professional appearance.
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
                  Why Professional Floor Care Makes a Difference
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Your floors are the first thing people notice when they walk into your building. Dull, scuffed floors with worn finish make even expensive spaces look cheap and neglected. Meanwhile, floors that shine communicate professionalism, quality, and attention to detail. Commercial floor care isn't just about appearance - it's about protecting your investment and extending the lifespan of flooring that costs thousands of dollars to replace.
                  </p>
                  <p>
                    Different floor types need completely different care. VCT floors need regular stripping and waxing to maintain that glossy finish. Tile and grout accumulate dirt in porous surfaces that regular mopping can't reach. Hardwood floors require special polishing techniques to avoid water damage. Concrete needs sealing to prevent staining and dusting. Trying to use the wrong technique or products on the wrong floor type can actually cause permanent damage.
                  </p>
                  <p>
                    We specialize in commercial floor care and have the equipment and expertise for every floor type. We use commercial-grade floor scrubbers, high-speed burnishers, extraction machines for deep carpet cleaning, and specialized sealers and finishes designed for high-traffic commercial environments. Our team knows how to prep floors properly, apply products at the right temperature and humidity, and achieve results that last months instead of weeks.
                  </p>
                  <p>
                    We work with businesses across Dallas - from small retail shops to massive office buildings with tens of thousands of square feet of flooring. Most of our floor care clients schedule services on weekends or after hours to avoid disrupting business operations. Stripping and waxing requires floors to cure for several hours before foot traffic, so timing is critical. We coordinate everything around your schedule and make sure floors are ready when you open for business.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included in Floor Care Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "VCT stripping and waxing", desc: "Complete old finish removal, deep cleaning, fresh wax application" },
                    { title: "Tile and grout cleaning", desc: "Deep extraction cleaning, grout brightening, sealing" },
                    { title: "Hardwood floor polishing", desc: "Professional buffing, scratch removal, protective coating" },
                    { title: "Concrete sealing and polishing", desc: "Stain protection, dust-proofing, high-gloss finish" },
                    { title: "Carpet deep cleaning and extraction", desc: "Hot water extraction, stain treatment, fast drying" },
                    { title: "Marble and stone restoration", desc: "Honing, polishing, sealing for natural stone surfaces" },
                    { title: "Floor buffing and burnishing", desc: "High-speed polishing for glossy finish between waxing" },
                    { title: "Scratch and scuff removal", desc: "Surface repair, blending, refinishing damaged areas" },
                    { title: "Grout color sealing", desc: "Permanent grout color change and stain protection" },
                    { title: "Anti-slip treatments", desc: "Safety coatings for wet areas without sacrificing appearance" },
                    { title: "Floor damage repair", desc: "Tile replacement, VCT patching, minor surface repairs" },
                    { title: "Maintenance schedule creation", desc: "Custom plan for ongoing care based on traffic and budget" },
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
                <h3 className="text-2xl font-bold mb-4">Floor Care Service Pricing</h3>
                <div className="mb-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    Floor care pricing varies by service type, floor condition, and square footage. Below are typical price ranges for common services.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-1">VCT Stripping & Waxing:</p>
                    <p className="text-lg"><span className="font-bold text-accent">$0.40-0.80/sq ft</span></p>
                    <p className="text-sm text-muted-foreground">Includes strip, deep clean, seal, multiple wax coats</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold mb-1">Floor Buffing/Burnishing:</p>
                    <p className="text-lg"><span className="font-bold text-accent">$0.15-0.25/sq ft</span></p>
                    <p className="text-sm text-muted-foreground">High-speed buffing to restore shine</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold mb-1">Tile & Grout Deep Cleaning:</p>
                    <p className="text-lg"><span className="font-bold text-accent">$0.50-1.00/sq ft</span></p>
                    <p className="text-sm text-muted-foreground">Extraction cleaning and grout sealing</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Our 4-Step Floor Care Process</h3>
                <div className="space-y-6">
                  {[
                    { 
                      num: 1, 
                      title: "Floor Assessment & Testing", 
                      desc: "We inspect your floors to identify the floor type, assess current condition, measure square footage, and test existing finishes. We'll look for damage, wear patterns, and any areas that need special attention. We also discuss your budget, timeline, and desired results to recommend the best service approach." 
                    },
                    { 
                      num: 2, 
                      title: "Scheduling & Preparation", 
                      desc: "We coordinate the service around your business hours - typically weekends or after closing. We'll provide clear timelines for how long floors need to cure before foot traffic. On service day, we move furniture and equipment as needed, protect baseboards and walls, and prep the work area properly." 
                    },
                    { 
                      num: 3, 
                      title: "Professional Floor Treatment", 
                      desc: "Using commercial-grade equipment and products, we execute the floor care service - whether that's stripping and waxing, buffing, deep cleaning, or restoration. We follow manufacturer specifications for products, maintain proper room temperature and humidity, and apply multiple coats as needed for optimal results." 
                    },
                    { 
                      num: 4, 
                      title: "Quality Inspection & Maintenance Plan", 
                      desc: "After the service, we inspect the floors to ensure consistent finish, proper coverage, and professional appearance. We provide care instructions for maintaining the finish and create a recommended maintenance schedule. We also document before and after photos for your records and to track floor condition over time." 
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
                <h3 className="text-2xl font-bold mb-6">Floor Types We Service</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "VCT (Vinyl Composition Tile)", desc: "Strip, wax, buff, burnish for high-gloss finish" },
                    { title: "Ceramic & Porcelain Tile", desc: "Deep cleaning, grout cleaning, sealing, restoration" },
                    { title: "Hardwood Floors", desc: "Buffing, polishing, protective coatings, scratch repair" },
                    { title: "Concrete Floors", desc: "Sealing, polishing, stain removal, protective coatings" },
                    { title: "Carpet", desc: "Deep extraction cleaning, stain removal, deodorizing" },
                    { title: "Marble & Natural Stone", desc: "Honing, polishing, sealing, restoration services" },
                    { title: "Luxury Vinyl Plank (LVP)", desc: "Specialized cleaning and protective treatments" },
                    { title: "Epoxy Floors", desc: "Industrial floor cleaning and maintenance" },
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
                          How often should floors be stripped and waxed?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      It depends on traffic levels. High-traffic areas like retail stores and busy offices typically need stripping and waxing 2-4 times per year. Medium-traffic areas can go 6-12 months between services. Low-traffic areas might only need it annually. Between strip and wax services, regular buffing (every 1-3 months) helps maintain the shine and extends the life of the finish.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          What's the difference between buffing and polishing?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Buffing (or burnishing) uses a high-speed machine to heat and smooth the existing wax finish, creating a high-gloss shine. It's maintenance that extends the life of your floor finish. Polishing typically refers to work on hard surfaces like marble or concrete where we're actually changing the surface itself through grinding and honing. Both create shine, but through different methods on different floor types.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Do you work on weekends to avoid disruption?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, we offer weekend and after-hours floor care specifically to avoid disrupting your business. Stripping and waxing requires several hours for the finish to cure before foot traffic, so many clients schedule Friday evening through Sunday morning. We start Friday after you close, work through the night if needed, and have everything ready by Monday morning. Buffing services are faster and can often be done overnight.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Can you restore damaged or dull floors?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      In most cases, yes. Dull VCT can be stripped and rewaxed to look like new. Stained grout can be cleaned and color-sealed. Scratched hardwood can be buffed and refinished. Cloudy marble can be honed and polished. We'll assess your floors and let you know honestly what's possible. Sometimes damage is too severe for restoration and replacement is the better option, but we can usually improve floors significantly.
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
            Get Your Free Floor Care Quote
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Tell us about your floors and we'll provide a detailed quote for the services you need
          </p>
          <ContactForm serviceType="Floor Care" />
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
              <div className="text-lg font-semibold">Guaranteed Results</div>
              <div className="text-sm text-muted-foreground">Premium Finishes</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Weekend Service</div>
              <div className="text-sm text-muted-foreground">Zero Disruption</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FloorCare;