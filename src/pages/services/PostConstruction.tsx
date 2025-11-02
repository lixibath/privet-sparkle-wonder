import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

const PostConstruction = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4"><div className="max-w-3xl"><h1 className="text-4xl md:text-5xl font-bold mb-4">Post Construction Cleaning</h1><p className="text-xl text-muted-foreground mb-6">Detailed cleaning after construction, renovation, or remodeling projects.</p><div className="flex flex-wrap gap-4"><Button size="lg" asChild><a href="#quote">Get Free Quote</a></Button></div></div></div>
      </section>
      <section className="py-16"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto space-y-8"><div className="bg-card p-8 rounded-lg border border-border"><h3 className="text-2xl font-bold mb-4">Post Construction Cleaning</h3><p className="text-lg">Remove dust, debris, and construction materials</p></div></div></div></section>
      <section id="quote" className="py-16 bg-card"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl font-bold text-center mb-4">Get Your Free Quote</h2><ContactForm serviceType="Post Construction Cleaning" /></div></section>
    </div>
  );
};

export default PostConstruction;