import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  pricing: string;
  features?: string[];
}

const ServiceCard = ({ title, description, pricing, features }: ServiceCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
      <CardHeader>
        <CardTitle className="font-inter text-xl">{title}</CardTitle>
        <CardDescription className="font-mono text-accent font-semibold text-base mt-2">
          {pricing}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
