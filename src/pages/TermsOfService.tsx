const TermsOfService = () => {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-inter font-bold text-4xl text-foreground mb-8">Terms of Service</h1>
        <div className="space-y-6 text-muted-foreground">
          <p className="text-sm">Last Updated: November 2024</p>
          
          <section>
            <h2 className="font-inter font-bold text-2xl text-foreground mb-4">Service Agreement</h2>
            <p>By using Miranda GDAL Janitorial LLC services, you agree to these terms. We provide commercial cleaning services as described in your service agreement.</p>
          </section>

          <section>
            <h2 className="font-inter font-bold text-2xl text-foreground mb-4">Payment Terms</h2>
            <p>Payment is due within 15 days of invoice date. Late payments may incur fees. We accept checks, ACH, and credit cards.</p>
          </section>

          <section>
            <h2 className="font-inter font-bold text-2xl text-foreground mb-4">Cancellation Policy</h2>
            <p>Either party may cancel service with 30 days written notice. Early termination fees may apply for contracted services.</p>
          </section>

          <section>
            <h2 className="font-inter font-bold text-2xl text-foreground mb-4">Liability</h2>
            <p>We carry full insurance coverage. Our liability is limited to the terms outlined in your service contract.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
