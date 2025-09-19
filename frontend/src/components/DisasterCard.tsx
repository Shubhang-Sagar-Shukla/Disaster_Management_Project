import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface DisasterCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
  onLearnMore: () => void;
}

export const DisasterCard = ({
  icon: Icon,
  title,
  description,
  severity,
  onLearnMore,
}: DisasterCardProps) => {
  const getSeverityColor = (level: string) => {
    switch (level) {
      case "high":
        return "border-l-emergency bg-emergency/5";
      case "medium":
        return "border-l-warning bg-warning/5";
      case "low":
        return "border-l-info bg-info/5";
      default:
        return "border-l-muted";
    }
  };

  // Handle Emergency button internally
  const handleEmergencyClick = () => {
    if (window.innerWidth <= 768) {
      window.location.href = "tel:112"; // Mobile dialer
    } else {
      alert("Please dial 112 for emergencies."); // Desktop toast (replace with your toast logic if needed)
    }
  };

  return (
    <Card
      className={`h-full transition-all duration-200 hover:shadow-lg border-l-4 ${getSeverityColor(
        severity
      )}`}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div
            className={`p-3 rounded-lg ${
              severity === "high"
                ? "bg-emergency/10 text-emergency"
                : severity === "medium"
                ? "bg-warning/10 text-warning"
                : "bg-info/10 text-info"
            }`}
          >
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="font-semibold text-lg text-foreground">{title}</h3>
              <p className="text-muted-foreground text-sm mt-1">
                {description}
              </p>
            </div>
            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onLearnMore}
                className="flex-1"
              >
                Learn More
              </Button>
              <Button
                variant="emergency"
                size="sm"
                onClick={handleEmergencyClick}
                className="flex-1"
              >
                Emergency Help
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
