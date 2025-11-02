import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const QuickCalculator = () => {
  const [serviceType, setServiceType] = useState<string>("");
  const [squareFt, setSquareFt] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("");
  const [estimate, setEstimate] = useState<number>(0);

  const calculateEstimate = (rate: string, sqft: string, freq: string) => {
    if (!rate || !sqft || !freq) return;
    const rateNum = parseFloat(rate);
    const sqftNum = parseFloat(sqft);
    const freqNum = parseInt(freq);
    const total = rateNum * sqftNum * freqNum;
    setEstimate(total);
  };

  const handleServiceChange = (value: string) => {
    setServiceType(value);
    calculateEstimate(value, squareFt, frequency);
  };

  const handleSquareFtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSquareFt(e.target.value);
    calculateEstimate(serviceType, e.target.value, frequency);
  };

  const handleFrequencyChange = (value: string) => {
    setFrequency(value);
    calculateEstimate(serviceType, squareFt, value);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="service-type" className="text-base">Select Service Type</Label>
        <Select onValueChange={handleServiceChange}>
          <SelectTrigger id="service-type" className="mt-2">
            <SelectValue placeholder="Choose service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0.15">Office Cleaning ($0.15/sq ft avg)</SelectItem>
            <SelectItem value="0.25">Medical Facility ($0.25/sq ft avg)</SelectItem>
            <SelectItem value="0.12">Retail Store ($0.12/sq ft avg)</SelectItem>
            <SelectItem value="0.32">Restaurant & Kitchen ($0.32/sq ft avg)</SelectItem>
            <SelectItem value="0.10">School & Educational ($0.10/sq ft avg)</SelectItem>
            <SelectItem value="0.18">Gym & Fitness Center ($0.18/sq ft avg)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="square-ft" className="text-base">Square Footage</Label>
        <Input 
          id="square-ft"
          type="number" 
          placeholder="5000"
          value={squareFt}
          onChange={handleSquareFtChange}
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="frequency" className="text-base">Cleaning Frequency</Label>
        <Select onValueChange={handleFrequencyChange}>
          <SelectTrigger id="frequency" className="mt-2">
            <SelectValue placeholder="How often?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="22">Daily (22 visits/month)</SelectItem>
            <SelectItem value="12">3x per week (12 visits/month)</SelectItem>
            <SelectItem value="4">Weekly (4 visits/month)</SelectItem>
            <SelectItem value="2">Bi-weekly (2 visits/month)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {estimate > 0 && (
        <div className="bg-primary/10 p-6 rounded-lg border border-primary mt-6">
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-2">Estimated Monthly Cost</div>
            <div className="text-4xl font-bold text-primary font-mono">
              ${estimate.toFixed(0)}
            </div>
            {frequency && (
              <div className="text-sm text-muted-foreground mt-2">
                (${(estimate / parseInt(frequency)).toFixed(0)} per visit)
              </div>
            )}
          </div>
        </div>
      )}

      <Button className="w-full" size="lg" asChild>
        <Link to="/contact">Get Exact Quote</Link>
      </Button>
    </div>
  );
};

export default QuickCalculator;
