import { ContactForm } from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, Heart } from "lucide-react";

const DaycareCleaning = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Daycare & Childcare Facility Cleaning Services in Dallas
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Child-safe cleaning for daycares, preschools, and childcare centers. We use non-toxic products and provide extra sanitization to keep kids healthy and parents confident.
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
                  Why Daycare Cleaning Requires Special Attention
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Little kids put everything in their mouths. They touch every surface. They share toys without thinking twice. They don't cover their sneezes or wash their hands properly. That's just how kids are - and it's why daycares and preschools need a completely different level of cleaning than regular offices or buildings.
                  </p>
                  <p>
                    One sick kid can infect an entire classroom in hours. Parents notice when their child keeps getting sick, and they'll pull them from your program faster than you can say "hand sanitizer." Professional daycare cleaning isn't just about making things look tidy - it's about breaking the cycle of illness transmission that costs parents work days and costs you enrollment.
                  </p>
                  <p>
                    We specialize in childcare facility cleaning and understand what daycares actually need. Standard cleaning products that work fine in offices can be dangerous around toddlers who touch everything and then suck their thumbs. We use EPA-approved, non-toxic disinfectants that kill germs without harming kids. Our team knows that play mats need different care than carpets, that toy bins need daily sanitization, and that diaper changing areas require medical-grade disinfection.
                  </p>
                  <p>
                    We've cleaned everything from small home daycares to large childcare centers with multiple classrooms. We know that nap time is sacred and cleaning can't happen while kids are sleeping on cots. We understand that mornings are chaotic and you need us out of the way before drop-off starts. Most of our daycare clients prefer late afternoon cleaning after the last kid leaves, or early morning before the first arrival. We work around your schedule, not the other way around.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included in Our Daycare Cleaning Service</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Play area sanitization", desc: "Toys, mats, play equipment thoroughly cleaned and disinfected daily" },
                    { title: "Nap room deep cleaning", desc: "Cots sanitized, blankets handled properly, floors cleaned" },
                    { title: "Child-safe, non-toxic products", desc: "EPA-approved solutions safe for kids and environmentally friendly" },
                    { title: "Diaper changing area disinfection", desc: "Medical-grade disinfection of changing tables and surrounding areas" },
                    { title: "Bathroom deep cleaning", desc: "Toilets, sinks, floors, child-height fixtures, potty training equipment" },
                    { title: "Kitchen and food prep sanitization", desc: "Counters, sinks, high chairs, feeding areas, refrigerators" },
                    { title: "High-touch surface disinfection", desc: "Door handles, light switches, cubbies, tables, chairs" },
                    { title: "Floor vacuuming and mopping", desc: "All floor surfaces cleaned with child-safe solutions" },
                    { title: "Trash and diaper disposal", desc: "Proper waste removal and can sanitization" },
                    { title: "Common area maintenance", desc: "Lobbies, hallways, reception areas, parent waiting rooms" },
                    { title: "Staff room cleaning", desc: "Break rooms, offices, adult restrooms" },
                    { title: "Entry and reception cleaning", desc: "First impression areas, sign-in stations, parent communication boards" },
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
                <h3 className="text-2xl font-bold mb-4">Transparent Daycare Cleaning Pricing</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-mono text-accent font-bold">$0.18-0.28</span>
                  <span className="text-muted-foreground">per square foot</span>
                </div>
                <p className="text-muted-foreground mb-6">Daily service with child-safe products recommended</p>
                <div className="bg-background p-6 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Example Pricing:</p>
                  <p className="text-lg">2,500 sq ft daycare = <span className="font-bold text-accent">$900-1,400/month</span></p>
                  <p className="text-sm text-muted-foreground mt-2">All child-safe supplies and equipment included. No hidden fees.</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Our 4-Step Process</h3>
                <div className="space-y-6">
                  {[
                    { 
                      num: 1, 
                      title: "Facility Assessment", 
                      desc: "We visit your daycare to understand your layout, identify high-touch areas, observe your daily schedule, and note any special requirements like allergy-safe zones or areas that need extra attention. We'll work with your director to create a cleaning plan that fits your facility's unique needs." 
                    },
                    { 
                      num: 2, 
                      title: "Custom Cleaning Schedule", 
                      desc: "Based on enrollment, age groups, and facility size, we create a detailed cleaning checklist. This includes which areas get cleaned during the day versus after hours, special protocols for different age groups, and frequency for deep cleaning tasks. Everything is documented so you know exactly what we're doing." 
                    },
                    { 
                      num: 3, 
                      title: "Background-Checked Team", 
                      desc: "Every single person on our cleaning team undergoes thorough background checks before setting foot in any childcare facility. We take child safety as seriously as you do. All staff wears company uniforms and ID badges, and we maintain a consistent team for your location so the same trusted faces show up every time." 
                    },
                    { 
                      num: 4, 
                      title: "Quality Monitoring", 
                      desc: "We conduct random quality checks to ensure our team is following the cleaning checklist and using proper techniques. If something's not meeting standards, we address it immediately with retraining or additional resources. You can also request adjustments anytime - we're flexible and responsive to your feedback." 
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
                <h3 className="text-2xl font-bold mb-6">Childcare Facilities We Serve</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Daycares", desc: "Infant through preschool age childcare facilities" },
                    { title: "Preschools", desc: "Educational programs for 3-5 year olds" },
                    { title: "After-school programs", desc: "Elementary age care and enrichment programs" },
                    { title: "Childcare centers", desc: "Large multi-classroom facilities" },
                    { title: "Head Start programs", desc: "Federally funded early childhood education" },
                    { title: "Montessori schools", desc: "Specialized educational environments" },
                    { title: "Home daycares", desc: "Residential childcare facilities" },
                    { title: "Church childcare", desc: "Religious organization childcare programs" },
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
                          Are your cleaning products safe for children?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, absolutely. We only use EPA-approved, non-toxic cleaning solutions that are specifically designed for use around children. These products are effective against germs and bacteria but don't contain harsh chemicals that could harm kids. We also avoid any products with strong fumes or fragrances that could trigger allergies or asthma in sensitive children.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Do you clean toys and play equipment?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, daily toy sanitization is part of our standard daycare cleaning service. We wipe down all hard surface toys with child-safe disinfectant. Soft toys and stuffed animals can be rotated for washing, or we can help you implement a toy rotation system where toys are sanitized between uses. Play mats, climbing equipment, and other large play items get thorough daily cleaning as well.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          How often should daycares be cleaned?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      We strongly recommend daily cleaning for all childcare facilities. High-traffic areas like bathrooms, eating areas, and play zones should be cleaned every single day due to the high risk of germ transmission among young children. Many states also have licensing requirements that mandate daily cleaning and sanitization. We can work with you to ensure you're meeting all health department standards.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-xl flex-shrink-0">
                          +
                        </div>
                        <span className="text-left">
                          Can you work around nap times?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Absolutely. We understand that nap time is sacred in a daycare and we won't disrupt sleeping children. Most of our daycare clients prefer after-hours cleaning once all the kids have gone home. We can also do early morning cleaning before children arrive, or work during outdoor play time if weather permits. We're completely flexible and will work around your schedule.
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
            Get Your Free Daycare Cleaning Quote
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Tell us about your childcare facility and we'll provide a detailed quote within 2 hours
          </p>
          <ContactForm serviceType="Daycare Cleaning" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Licensed & Insured</div>
              <div className="text-sm text-muted-foreground">Background Checked</div>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Child-Safe Products</div>
              <div className="text-sm text-muted-foreground">Non-Toxic & EPA Approved</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">After-Hours Cleaning</div>
              <div className="text-sm text-muted-foreground">Flexible Scheduling</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DaycareCleaning;