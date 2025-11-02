import { ContactForm } from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock } from "lucide-react";

const ChurchCleaning = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Church & House of Worship Cleaning Services
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Keep your sanctuary clean and welcoming for your congregation. From Sunday services to Wednesday nights, we make sure your church is spotless and ready for worship.
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
                  Why Churches Need Professional Cleaning
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Your church is more than just a building - it's a place where people gather to worship, fellowship, and find community. When families walk through those doors on Sunday morning, they should feel welcomed into a clean, well-maintained space that reflects the care and reverence your congregation has for their place of worship.
                  </p>
                  <p>
                    Churches get heavy use and often have limited budgets for maintenance. Between Sunday services, Wednesday night programs, community events, and special celebrations, your facility probably sees hundreds of people every week. Keeping up with cleaning on top of ministry responsibilities can be overwhelming for staff and volunteers.
                  </p>
                  <p>
                    We specialize in church cleaning and understand the unique needs of houses of worship. We're respectful of sacred spaces, careful with religious items and furnishings, and we work around your event schedule. Whether you need weekly cleaning or just preparation before major holidays like Easter and Christmas, we're here to help.
                  </p>
                  <p>
                    We also understand church budgets are tight. Many of our church clients operate on donations and can't afford commercial cleaning prices designed for corporate offices. That's why we offer special pricing for churches and non-profit religious organizations. Quality cleaning shouldn't eat up your ministry budget.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Church Cleaning Services We Provide</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Sanctuary cleaning", desc: "Pews, floors, altar area, pulpit, communion tables" },
                    { title: "Restroom deep cleaning", desc: "Toilets, sinks, floors, mirrors, supply restocking" },
                    { title: "Fellowship hall maintenance", desc: "Tables, chairs, kitchen, serving areas" },
                    { title: "Children's areas", desc: "Nursery, Sunday school rooms, play areas sanitized" },
                    { title: "Entry and lobby cleaning", desc: "Welcoming areas, information desks, greeters' stations" },
                    { title: "Window and glass cleaning", desc: "Interior windows, doors, display cases" },
                    { title: "Floor care", desc: "Vacuuming carpets, mopping hard floors, periodic buffing" },
                    { title: "Administrative offices", desc: "Pastor's office, staff areas, meeting rooms" },
                    { title: "Kitchen cleaning", desc: "If your church has a kitchen for events and meals" },
                    { title: "Gym or multi-purpose rooms", desc: "Large gathering spaces, sports courts" },
                    { title: "Trash and recycling", desc: "All waste collected, bins cleaned, liners replaced" },
                    { title: "High-touch sanitization", desc: "Door handles, handrails, light switches" },
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
                <h3 className="text-2xl font-bold mb-4">Church-Friendly Pricing</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-mono text-accent font-bold">$0.10-0.15</span>
                  <span className="text-muted-foreground">per square foot</span>
                </div>
                <p className="text-muted-foreground mb-6">Weekly cleaning recommended, flexible scheduling available</p>
                <div className="bg-background p-6 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Example Pricing:</p>
                  <p className="text-lg">8,000 sq ft church = <span className="font-bold text-accent">$800-1,200/month</span></p>
                  <p className="text-sm text-muted-foreground mt-2">Special non-profit pricing available for religious organizations</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">How We Clean Houses of Worship</h3>
                <div className="space-y-6">
                  {[
                    { num: 1, title: "Respectful Assessment", desc: "We visit your church to understand your facility, learn about sacred spaces that require special care, and discuss your cleaning needs and schedule preferences. We respect that this is a holy place, not just another building." },
                    { num: 2, title: "Flexible Scheduling", desc: "We work around your service times, events, and programs. Most churches prefer cleaning after Wednesday night service or early Saturday morning before weekend events. We'll find a time that works for your ministry schedule." },
                    { num: 3, title: "Trusted Team Members", desc: "All our staff undergoes background checks and training on how to work respectfully in houses of worship. We understand the importance of treating religious items, furnishings, and spaces with appropriate care and reverence." },
                    { num: 4, title: "Consistent Quality", desc: "You'll have the same cleaning team every week so they learn your church layout, your preferences, and build a relationship with your staff. Consistency leads to better cleaning and better communication." },
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
                <h3 className="text-2xl font-bold mb-6">Houses of Worship We Serve</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Christian Churches", desc: "Baptist, Methodist, Catholic, Non-denominational" },
                    { title: "Small Congregations", desc: "100-200 member churches with limited budgets" },
                    { title: "Large Megachurches", desc: "Multi-building campuses with high weekly traffic" },
                    { title: "Synagogues", desc: "Jewish houses of worship and community centers" },
                    { title: "Mosques", desc: "Islamic centers and prayer spaces" },
                    { title: "Temple Facilities", desc: "Buddhist and Hindu temples" },
                    { title: "Community Centers", desc: "Church-affiliated community buildings" },
                    { title: "Religious Schools", desc: "Faith-based educational facilities" },
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
                      Do you offer discounts for churches?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, we offer special non-profit pricing for churches and religious organizations. We understand ministry budgets are tight and we want to help you maintain a clean facility without breaking the bank. Contact us for church-specific pricing that fits your budget.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Can you clean around our event schedule?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Absolutely. We know churches have services, Bible studies, community events, weddings, and funerals. We'll work with your calendar to clean when it's convenient for your ministry. Many churches prefer Saturday mornings or Monday mornings when the building is empty.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Are you respectful of religious items?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      Yes, we train all our staff to work respectfully in houses of worship. We won't move or touch religious items, sacred objects, or anything on the altar without explicit permission. If something needs to be moved for cleaning, we'll ask your staff first.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border border-border rounded-lg px-6 py-2">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      What about extra cleaning for holidays?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2">
                      We can add extra deep cleaning before major holidays like Easter, Christmas, Passover, or Ramadan when you're expecting higher attendance. Just let us know a week or two in advance and we'll make sure your facility looks its absolute best for your congregation.
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
            Get Your Free Church Cleaning Quote
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Tell us about your house of worship and we'll provide a custom quote
          </p>
          <ContactForm serviceType="Church Cleaning" />
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Respectful Service</div>
              <div className="text-sm text-muted-foreground">Sacred Space Care</div>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Non-Profit Pricing</div>
              <div className="text-sm text-muted-foreground">Budget Friendly</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-accent mb-2" />
              <div className="text-lg font-semibold">Flexible Scheduling</div>
              <div className="text-sm text-muted-foreground">Works Around Events</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChurchCleaning;