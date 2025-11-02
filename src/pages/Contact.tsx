import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    squareFootage: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Quote Request Received",
      description: "We'll get back to you within 2 hours during business hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      squareFootage: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="font-inter font-bold text-4xl md:text-5xl text-foreground mb-6">
            Get a Free Quote
          </h1>
          <p className="text-xl text-muted-foreground">
            Tell us about your facility and we'll give you an honest quote. We respond within 2 hours during business hours (Mon-Fri 8 AM - 6 PM).
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(214) 555-0123"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="office">Office Cleaning</SelectItem>
                      <SelectItem value="medical">Medical Facility</SelectItem>
                      <SelectItem value="retail">Retail Store</SelectItem>
                      <SelectItem value="restaurant">Restaurant/Kitchen</SelectItem>
                      <SelectItem value="school">School/Educational</SelectItem>
                      <SelectItem value="gym">Gym/Fitness Center</SelectItem>
                      <SelectItem value="bank">Bank/Financial</SelectItem>
                      <SelectItem value="moveout">Move-In/Move-Out</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="squareFootage">Square Footage (approximate)</Label>
                <Input
                  id="squareFootage"
                  type="number"
                  value={formData.squareFootage}
                  onChange={(e) => setFormData({ ...formData, squareFootage: e.target.value })}
                  placeholder="5000"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Tell Us About Your Cleaning Needs *</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Let us know your cleaning frequency needs, any special requirements, your location, and when you'd like to start service."
                  rows={6}
                  className="mt-2"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Get Free Quote
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by Miranda Janitorial regarding your quote request.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-inter font-bold text-xl text-foreground mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Phone</p>
                  <a href="tel:9453989726" className="text-primary hover:underline text-lg">
                    (945) 398-9726
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Email</p>
                  <a href="mailto:contact@mirandajanitorial.com" className="text-primary hover:underline">
                    contact@mirandajanitorial.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Address</p>
                  <address className="text-foreground not-italic">
                    17878 PRESTON RD APT 378<br />
                    DALLAS, TX 75252
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-inter font-bold text-xl text-foreground mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-muted-foreground">8 AM - 6 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-muted-foreground">9 AM - 3 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Cleaning services available 24/7 by appointment
              </p>
            </div>

            <div className="bg-section-alt p-6 rounded-lg">
              <h3 className="font-inter font-bold text-lg text-foreground mb-3">
                Response Time
              </h3>
              <p className="text-muted-foreground">
                We respond to all quote requests within 2 hours during business hours. After-hours requests get a response first thing the next business day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
