import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  serviceType: string;
  rating: number;
  review: string;
  date: string;
}

const TestimonialCard = ({ name, company, serviceType, rating, review, date }: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "fill-accent text-accent" : "text-muted"}
            />
          ))}
        </div>
        <p className="text-foreground mb-4 leading-relaxed">{review}</p>
        <div className="flex items-center justify-between text-sm">
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-muted-foreground">{company}</p>
          </div>
          <div className="text-right">
            <span className="inline-block px-2 py-1 rounded text-xs bg-primary/10 text-primary">
              {serviceType}
            </span>
            <p className="text-muted-foreground mt-1 text-xs">{date}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
