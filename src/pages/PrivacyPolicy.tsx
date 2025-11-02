const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-inter font-bold text-4xl text-foreground mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-muted-foreground">
          <p className="text-sm">Last Updated: November 2024</p>
          
          <section>
            <h2 className="font-inter font-bold text-2xl text-foreground mb-4">Information We Collect</h2>
            <p>When you request a quote or contact us, we collect your name, email, phone number, and business information. We use this solely to provide you with cleaning services and communicate about your account.</p>
          </section>

          <section>
            <h2 className="font-inter font-bold text-2xl text-foreground mb-4">How We Use Your Information</h2>
            <p>We use your information to provide cleaning services, send service updates, and respond to your inquiries. We don't sell your data to third parties.</p>
          </section>

          <section>
            <h2 className="font-inter font-bold text-2xl text-foreground mb-4">Data Security</h2>
            <p>We protect your information using industry-standard security measures. Your data is stored securely and only accessible to authorized personnel.</p>
          </section>

          <section>
            <h2 className="font-inter font-bold text-2xl text-foreground mb-4">Contact Us</h2>
            <p>Questions about privacy? Email us at contact@mirandajanitorial.com or call (945) 398-9726.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
