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
import { CheckCircle } from "lucide-react";

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

interface ContactFormProps {
  serviceType?: string;
}

export const ContactForm = ({ serviceType }: ContactFormProps) => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceType: serviceType || ""
    }
  });

  const onSubmit = (data: ContactFormData) => {
    setSubmittedData(data);
    setShowThankYou(true);
    reset({ serviceType: serviceType || "" });
  };

  return (
    <>
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
          <Select 
            onValueChange={(value) => setValue("serviceType", value)}
            defaultValue={serviceType}
          >
            <SelectTrigger id="serviceType" className="mt-2">
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Medical Facility Cleaning">Medical Facility Cleaning</SelectItem>
              <SelectItem value="Office Cleaning">Office Cleaning</SelectItem>
              <SelectItem value="School Cleaning">School Cleaning</SelectItem>
              <SelectItem value="Church Cleaning">Church Cleaning</SelectItem>
              <SelectItem value="Gym Cleaning">Gym Cleaning</SelectItem>
              <SelectItem value="Bank Cleaning">Bank Cleaning</SelectItem>
              <SelectItem value="Daycare Cleaning">Daycare Cleaning</SelectItem>
              <SelectItem value="Property Management Cleaning">Property Management Cleaning</SelectItem>
              <SelectItem value="Industrial Cleaning">Industrial Cleaning</SelectItem>
              <SelectItem value="Car Dealership Cleaning">Car Dealership Cleaning</SelectItem>
              <SelectItem value="Office Disinfecting">Office Disinfecting</SelectItem>
              <SelectItem value="Floor Care">Floor Care</SelectItem>
              <SelectItem value="Window Cleaning">Window Cleaning</SelectItem>
              <SelectItem value="Day Porter Services">Day Porter Services</SelectItem>
              <SelectItem value="Post Construction Cleaning">Post Construction Cleaning</SelectItem>
              <SelectItem value="Deep Cleaning">Deep Cleaning</SelectItem>
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
    </>
  );
};