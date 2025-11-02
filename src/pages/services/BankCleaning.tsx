import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

const BankCleaning = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bank & Financial Institution Cleaning</h1>
            <p className="text-xl text-muted-foreground mb-6">Professional cleaning for banks, credit unions, and financial offices. Maintain a trustworthy image with spotless facilities.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild><a href="#quote">Get Free Quote</a></Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto space-y-8"><div className="bg-card p-8 rounded-lg border border-border"><h3 className="text-2xl font-bold mb-4">Bank Cleaning Pricing</h3><div className="flex items-baseline gap-3 mb-4"><span className="text-4xl font-mono text-accent font-bold">$0.15-0.25</span><span className="text-muted-foreground">per sq ft</span></div><p className="text-lg">3,500 sq ft bank = <span className="font-bold text-accent">$1,050-1,750/month</span></p></div></div></div></section>
      <section id="quote" className="py-16 bg-card"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl font-bold text-center mb-4">Get Your Free Quote</h2><ContactForm serviceType="Bank Cleaning" /></div></section>
    </div>
  );
};

export default BankCleaning;