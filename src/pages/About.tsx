import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-inter font-bold text-4xl md:text-5xl text-foreground mb-6">
            About Miranda Janitorial
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
              <p>
                Look, running a business in Dallas is tough enough without worrying about whether your cleaning crew will show up. We started Miranda Janitorial because we got tired of seeing companies get burned by unreliable cleaners who promise the moon and deliver half-finished work.
              </p>
              
              <p>
                Here's what we do different: We hire people who actually care about their work. We train them properly. We pay them fairly. And when we say we'll be there at 6 PM on Tuesday, you can bet we'll be there at 6 PM on Tuesday.
              </p>

              <p>
                No fancy corporate talk. No "leveraging synergies" or "innovative solutions." Just straight-up professional cleaning done right, every single time.
              </p>
            </div>

            <div className="bg-section-alt p-8 rounded-lg mb-12">
              <h2 className="font-inter font-bold text-2xl text-foreground mb-6">
                Our Approach
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">Hiring Right</h3>
                  <p className="text-muted-foreground">
                    We don't hire just anyone. We look for people who take pride in their work and understand that cleaning isn't just pushing a mop around. Our team members are trained, background-checked, and actually care about doing a good job.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">Training Properly</h3>
                  <p className="text-muted-foreground">
                    Every team member gets proper training on cleaning techniques, safety protocols, and customer service. We don't throw people into buildings and hope for the best. They know what they're doing before they ever walk into your facility.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">Showing Up</h3>
                  <p className="text-muted-foreground">
                    This shouldn't be revolutionary, but apparently it is in this industry. When we schedule a cleaning, we show up. On time. Every time. If there's ever an issue, we call ahead and make it right.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">Being Transparent</h3>
                  <p className="text-muted-foreground">
                    Our pricing is clear. Our contracts are straightforward. No hidden fees, no surprise charges. You'll know exactly what you're paying for and what you're getting.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-inter font-bold text-2xl text-foreground mb-6">
                What We Use
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We use eco-friendly cleaning products that actually work. None of this watered-down green-washing stuff that makes you feel good but doesn't clean worth a damn. Our products are EPA-approved, safe for people and the environment, and they get the job done.
                </p>

                <p>
                  Our equipment is professional-grade and well-maintained. Commercial vacuums with HEPA filters, floor scrubbers that actually scrub, microfiber cloths that don't just push dirt around. We invest in good equipment because it makes the job faster and better.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-inter font-bold text-2xl text-foreground mb-6">
                Who We Serve
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We work with all types of Dallas businesses. Small offices that need cleaning twice a week. Medical facilities that need daily sanitization. Restaurants that need deep kitchen cleaning. Gyms that need twice-daily service. Schools that need after-hours cleaning.
                </p>

                <p>
                  What they all have in common: They need reliable cleaning from people who know what they're doing and actually show up. That's what we provide.
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border mb-12">
              <h2 className="font-inter font-bold text-2xl text-foreground mb-4">
                Licensed & Insured
              </h2>
              <p className="text-muted-foreground mb-4">
                Miranda GDAL Janitorial LLC is fully licensed and insured in the state of Texas. We carry general liability insurance and workers' compensation coverage. If anything ever goes wrong (it won't, but if it does), you're covered.
              </p>
              <p className="text-sm text-muted-foreground">
                Business License: 56172 - Janitorial Services<br />
                Location: 17878 Preston Rd Apt 378, Dallas, TX 75252
              </p>
            </div>

            <div className="text-center bg-section-alt p-8 rounded-lg">
              <h2 className="font-inter font-bold text-2xl text-foreground mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're not going to waste your time with a high-pressure sales pitch. Tell us what you need cleaned, and we'll give you a straight answer on price and schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
                <a href="tel:9453989726">
                  <Button variant="outline" size="lg">Call (945) 398-9726</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
