import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

const contactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(255, "Email is too long"),
  phone: z.string()
    .regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 
           "Please enter a valid phone number (e.g., 214-555-0123)"),
  serviceType: z.string()
    .min(1, "Please select a service type"),
  squareFootage: z.string()
    .optional(),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long (max 1000 characters)")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    setSubmittedData(data);
    setShowThankYou(true);
    reset();
  };

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Your Free Quote</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Fill out the form below and we'll get back to you within 2 hours during business hours. Or just give us a call if you'd rather talk.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-6 md:p-8 rounded-lg border border-border">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name"
                    {...register("name")}
                    placeholder="John Smith"
                    className="mt-2"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="john@company.com"
                    className="mt-2"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone"
                    {...register("phone")}
                    placeholder="(214) 555-0123"
                    className="mt-2"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select onValueChange={(value) => setValue("serviceType", value)}>
                    <SelectTrigger id="serviceType" className="mt-2">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Office Cleaning">Office Cleaning</SelectItem>
                      <SelectItem value="Medical Facility Cleaning">Medical Facility Cleaning</SelectItem>
                      <SelectItem value="Retail Store Cleaning">Retail Store Cleaning</SelectItem>
                      <SelectItem value="Restaurant & Kitchen Cleaning">Restaurant & Kitchen Cleaning</SelectItem>
                      <SelectItem value="School & Educational Facility Cleaning">School & Educational Facility Cleaning</SelectItem>
                      <SelectItem value="Gym & Fitness Center Cleaning">Gym & Fitness Center Cleaning</SelectItem>
                      <SelectItem value="Bank & Financial Institution Cleaning">Bank & Financial Institution Cleaning</SelectItem>
                      <SelectItem value="Move-In/Move-Out Cleaning">Move-In/Move-Out Cleaning</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.serviceType && (
                    <p className="text-destructive text-sm mt-1">{errors.serviceType.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="squareFootage">Square Footage (Optional)</Label>
                  <Input 
                    id="squareFootage"
                    type="number"
                    {...register("squareFootage")}
                    placeholder="5000"
                    className="mt-2"
                  />
                  {errors.squareFootage && (
                    <p className="text-destructive text-sm mt-1">{errors.squareFootage.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Tell Us About Your Needs *</Label>
                  <Textarea 
                    id="message"
                    {...register("message")}
                    placeholder="Tell us about your facility, cleaning schedule needs, any special requirements..."
                    rows={5}
                    className="mt-2"
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Quote Request
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-xl mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:9453989726" className="text-muted-foreground hover:text-primary">
                        (945) 398-9726
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:contact@mirandajanitorial.com" className="text-muted-foreground hover:text-primary break-all">
                        contact@mirandajanitorial.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-muted-foreground">
                        17878 PRESTON RD APT 378<br />
                        DALLAS, TX 75252
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Business Hours</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-semibold">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    * Cleaning services available 24/7 by appointment
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
                <p className="font-semibold mb-2">Response Time</p>
                <p className="text-sm text-muted-foreground">
                  We respond to all quote requests within 2 hours during business hours. For after-hours requests, we'll get back to you first thing the next business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Dialog */}
      <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4">
              <CheckCircle className="w-16 h-16 text-accent" />
            </div>
            <DialogTitle className="text-center text-2xl">
              Thank You!
            </DialogTitle>
            <DialogDescription className="text-center text-base space-y-3 pt-2">
              <p>
                We received your quote request and will get back to you within 2 hours during business hours (Mon-Fri 8 AM - 6 PM).
              </p>
              {submittedData && (
                <p>
                  One of our team members will contact you at <span className="font-semibold text-foreground">{submittedData.phone}</span> or <span className="font-semibold text-foreground">{submittedData.email}</span> to discuss your {submittedData.serviceType} needs and provide a detailed quote.
                </p>
              )}
              <p className="text-sm">
                If you need immediate assistance, feel free to call us at (945) 398-9726.
              </p>
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowThankYou(false)} className="w-full mt-4">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
