import { ContactForm } from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const GymCleaning = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gym & Fitness Center Cleaning Services</h1>
            <p className="text-xl text-muted-foreground mb-6">Professional cleaning for gyms, fitness centers, and athletic facilities. Keep your equipment sanitized and your members healthy.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild><a href="#quote">Get Free Quote</a></Button>
              <Button variant="outline" size="lg" asChild><a href="tel:9453989726">Call (945) 398-9726</a></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Gym Cleaning is Critical</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>Gyms are breeding grounds for bacteria and viruses. Sweat, skin contact, shared equipment - it's the perfect environment for germs to spread. Members notice when equipment is sticky or locker rooms smell bad. One Instagram post about a dirty gym can cost you dozens of memberships.</p>
                  <p>We specialize in fitness facility cleaning and understand gym-specific needs. Equipment needs sanitized multiple times daily. Locker rooms need constant attention. Floors get covered in sweat and need proper mopping with disinfectant, not just water.</p>
                  <p>Most gyms need twice-daily cleaning - once mid-day and once at closing. We can provide both or just closing service depending on your traffic and budget. We bring commercial-grade equipment and EPA-approved disinfectants that actually kill germs without damaging your machines.</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4">Gym Cleaning Pricing</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-mono text-accent font-bold">$0.15-0.22</span>
                  <span className="text-muted-foreground">per square foot</span>
                </div>
                <p className="text-muted-foreground mb-6">Twice daily service recommended</p>
                <div className="bg-background p-6 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Example:</p>
                  <p className="text-lg">6,000 sq ft gym = <span className="font-bold text-accent">$1,800-2,640/month</span></p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {["Equipment sanitization - all machines and weights", "Locker room deep cleaning", "Shower and sauna sanitization", "Floor mopping and disinfection", "Mirror and glass cleaning", "Trash removal and odor control", "Towel bin sanitization", "Cardio area cleaning", "Weight room maintenance", "Reception desk cleaning", "Water fountain sanitization", "High-touch surface disinfection"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                      <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div><p className="text-sm">{item}</p></div>
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
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">Do you clean equipment between peak hours?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">Yes, we can do mid-day cleaning during slower hours to wipe down all equipment, clean locker rooms, and restock supplies. This keeps your gym fresh during peak evening hours.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">What about shower and sauna areas?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">We deep clean and disinfect all shower stalls, sauna benches, and steam rooms. We use products specifically designed for high-humidity areas that prevent mold and mildew buildup.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">Can you handle odor control?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">Absolutely. Gym odors come from bacteria, not just sweat. Our disinfection process kills odor-causing bacteria at the source. We also use professional-grade deodorizers in locker rooms and trash areas.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Get Your Free Gym Cleaning Quote</h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">Tell us about your fitness facility</p>
          <ContactForm serviceType="Gym Cleaning" />
        </div>
      </section>
    </div>
  );
};

export default GymCleaning;