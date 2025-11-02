const Accessibility = () => {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-inter font-bold text-4xl text-foreground mb-8">Accessibility Statement</h1>
        <div className="space-y-6 text-muted-foreground">
          <p>Miranda GDAL Janitorial LLC is committed to ensuring digital accessibility for people with disabilities.</p>
          
          <section>
            <h2 className="font-inter font-bold text-2xl text-foreground mb-4">Our Commitment</h2>
            <p>We strive to meet WCAG 2.1 Level AA standards. Our website is designed to be accessible to screen readers, keyboard navigation, and other assistive technologies.</p>
          </section>

          <section>
            <h2 className="font-inter font-bold text-2xl text-foreground mb-4">Feedback</h2>
            <p>If you encounter accessibility barriers on our website, please contact us at contact@mirandajanitorial.com or (945) 398-9726. We'll work to resolve the issue promptly.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
