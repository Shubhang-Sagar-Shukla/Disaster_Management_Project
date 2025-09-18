import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { DisasterCard } from "@/components/DisasterCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Waves,
  Mountain,
  Zap,
  Flame,
  Shield,
  Wind,
  BookOpen,
  AlertTriangle,
  Users,
  Phone,
  MapPin,
  Wifi,
} from "lucide-react";
import heroImage from "@/assets/hero-disaster-management.jpg";

const Index = () => {
  const navigate = useNavigate();

  const disasters = [
    {
      icon: Waves,
      title: "Flood",
      description:
        "Learn about flood preparedness, evacuation routes, and emergency response.",
      severity: "high" as const,
    },
    {
      icon: Waves,
      title: "Tsunami",
      description:
        "Critical information for coastal areas and tsunami warning systems.",
      severity: "high" as const,
    },
    {
      icon: Mountain,
      title: "Earthquake",
      description:
        "Earthquake safety protocols, structural safety, and emergency kits.",
      severity: "high" as const,
    },
    {
      icon: Flame,
      title: "Fire",
      description:
        "Fire prevention, evacuation procedures, and firefighting basics.",
      severity: "medium" as const,
    },
    {
      icon: Shield,
      title: "Terrorist Attack",
      description:
        "Security protocols, threat awareness, and emergency response.",
      severity: "high" as const,
    },
    {
      icon: Wind,
      title: "Hurricane",
      description: "Hurricane tracking, preparation, and shelter information.",
      severity: "medium" as const,
    },
  ];

  const quickActions = [
    {
      icon: BookOpen,
      title: "Learning Module",
      description: "Educational content and training materials",
      variant: "info" as const,
      onAccess: () => navigate("/learning-modules"),
    },
    {
      icon: AlertTriangle,
      title: "Region Alerts",
      description: "Map-based alerts and notifications",
      variant: "warning" as const,
      onAccess: () =>navigate("/region-alerts")
    },
    {
      icon: Users,
      title: "Virtual Drills",
      description: "Practice emergency procedures safely",
      variant: "safety" as const,
      onAccess: () => console.log("Virtual Drills clicked"),
    },
    {
      icon: Phone,
      title: "Emergency Contacts",
      description: "Hospitals, rescue teams, and resources",
      variant: "emergency" as const,
      onAccess: () => console.log("Emergency Contacts clicked"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Disaster Management Command Center"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Stay Safe, Stay Prepared
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Your comprehensive disaster management and emergency response system
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="emergency">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Report Emergency
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => navigate("/local-alerts")} // ✅ Only here
            >
              <MapPin className="mr-2 h-5 w-5" />
              Check Local Alerts
            </Button>
          </div>
        </div>
      </section>

      {/* Low Network Banner */}
      <div className="bg-info/10 border-l-4 border-l-info p-4">
        <div className="container mx-auto flex items-center gap-3">
          <Wifi className="h-5 w-5 text-info" />
          <div className="flex-1">
            <p className="text-sm font-medium text-info-foreground">
              Low Network Mode Available
            </p>
            <p className="text-xs text-muted-foreground">
              AI-powered disaster identification works even with poor
              connectivity
            </p>
          </div>
          <Button variant="info" size="sm">
            Enable
          </Button>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div
                    className={`inline-flex p-4 rounded-full mb-4 ${
                      action.variant === "emergency"
                        ? "bg-emergency/10 text-emergency"
                        : action.variant === "warning"
                        ? "bg-warning/10 text-warning"
                        : action.variant === "safety"
                        ? "bg-safety/10 text-safety"
                        : "bg-info/10 text-info"
                    }`}
                  >
                    <action.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{action.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {action.description}
                  </p>
                  <Button
                    variant={action.variant}
                    size="sm"
                    className="w-full"
                    onClick={action.onAccess}
                  >
                    Access
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Disaster Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Disaster Types & Preparedness
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {disasters.map((disaster, index) => (
              <DisasterCard
                key={index}
                icon={disaster.icon}
                title={disaster.title}
                description={disaster.description}
                severity={disaster.severity}
                onLearnMore={() =>
                  console.log(`Learning about ${disaster.title}`)
                }
                onEmergency={() =>
                  console.log(`Emergency help for ${disaster.title}`)
                }
              />
            ))}
          </div>
        </section>

        {/* Other Help Section */}
        <section className="text-center">
          <Card className="bg-muted/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Other Emergency Situations
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't see your emergency type listed? Our AI system can identify
                various disaster types and connect you with the appropriate
                rescue teams and resources.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button variant="outline" size="lg">
                  <Zap className="mr-2 h-5 w-5" />
                  AI Disaster Analysis
                </Button>
                <Button variant="emergency" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  General Emergency Help
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;
