import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServiceArea = () => {
  const primaryCities = [
    { name: "Dallas", fee: "No fee", distance: "0-15 miles" },
    { name: "Richardson", fee: "No fee", distance: "0-15 miles" },
    { name: "Plano", fee: "No fee", distance: "0-15 miles" },
    { name: "Frisco", fee: "No fee", distance: "0-15 miles" },
    { name: "McKinney", fee: "No fee", distance: "0-15 miles" },
    { name: "Allen", fee: "No fee", distance: "0-15 miles" },
  ];

  const extendedCities = [
    { name: "Fort Worth", fee: "+$25-50", distance: "16-30 miles" },
    { name: "Arlington", fee: "+$25-50", distance: "16-30 miles" },
    { name: "Irving", fee: "+$25", distance: "16-25 miles" },
    { name: "Garland", fee: "+$25", distance: "16-25 miles" },
    { name: "Mesquite", fee: "+$25", distance: "16-25 miles" },
    { name: "Grand Prairie", fee: "+$35", distance: "20-30 miles" },
  ];

  const byRequestCities = [
    { name: "Denton", fee: "+$75-100", distance: "31-50 miles" },
    { name: "Waxahachie", fee: "+$75-100", distance: "31-50 miles" },
    { name: "Rockwall", fee: "+$75", distance: "31-40 miles" },
    { name: "Lewisville", fee: "+$50", distance: "25-35 miles" },
  ];

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="font-inter font-bold text-4xl md:text-5xl text-foreground mb-6">
            Service Area
          </h1>
          <p className="text-xl text-muted-foreground">
            We serve Dallas and the surrounding metro area. Travel fees help cover fuel and time for locations outside our primary service zone. Straight-up, no-nonsense pricing.
          </p>
        </div>

        {/* Primary Service Area */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="font-inter text-2xl md:text-3xl flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-primary"></span>
                Primary Service Area
              </CardTitle>
              <CardDescription className="text-base">
                No travel fees. We're local to these areas and service them daily.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">City</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Distance from Base</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Travel Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {primaryCities.map((city) => (
                      <tr key={city.name} className="border-b border-border/50">
                        <td className="py-3 px-4 text-foreground">{city.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{city.distance}</td>
                        <td className="py-3 px-4 font-mono text-accent font-semibold">{city.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Extended Service Area */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="font-inter text-2xl md:text-3xl flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-accent"></span>
                Extended Service Area
              </CardTitle>
              <CardDescription className="text-base">
                We service these areas regularly with a small travel fee to cover fuel and time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">City</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Distance from Base</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Travel Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {extendedCities.map((city) => (
                      <tr key={city.name} className="border-b border-border/50">
                        <td className="py-3 px-4 text-foreground">{city.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{city.distance}</td>
                        <td className="py-3 px-4 font-mono text-accent font-semibold">{city.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* By Request Service Area */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="font-inter text-2xl md:text-3xl flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-muted"></span>
                By Request Service Area
              </CardTitle>
              <CardDescription className="text-base">
                We can service these areas for regular contracts. Travel fees apply. Call us to discuss.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">City</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Distance from Base</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Travel Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {byRequestCities.map((city) => (
                      <tr key={city.name} className="border-b border-border/50">
                        <td className="py-3 px-4 text-foreground">{city.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{city.distance}</td>
                        <td className="py-3 px-4 font-mono text-accent font-semibold">{city.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Travel Fee Information */}
        <div className="bg-section-alt p-6 md:p-8 rounded-lg mb-12">
          <h2 className="font-inter font-bold text-xl text-foreground mb-4">
            How Travel Fees Work
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              <strong className="text-foreground">0-15 miles:</strong> No travel fee. This is our home base area.
            </p>
            <p>
              <strong className="text-foreground">16-30 miles:</strong> +$25-50 per visit. Covers fuel and travel time.
            </p>
            <p>
              <strong className="text-foreground">31-50 miles:</strong> +$50-75 per visit. For regular contracts only.
            </p>
            <p>
              <strong className="text-foreground">51+ miles:</strong> +$75-100 per visit. Call us to discuss. We can make it work for the right contract.
            </p>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Distance calculated from our base at 17878 Preston Rd, Dallas, TX 75252. Travel fees are per visit and added to your service invoice.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-inter font-bold text-2xl md:text-3xl text-foreground mb-4">
            Not Sure If We Service Your Area?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Give us a call or send us your address. We'll let you know if we can service your location and what the travel fee would be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <a href="tel:9453989726">
              <Button variant="outline" size="lg">Call (945) 398-9726</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
