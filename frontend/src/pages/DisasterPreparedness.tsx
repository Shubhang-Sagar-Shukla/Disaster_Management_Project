import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { AlertTriangle, Users, Package, Shield } from "lucide-react";
import { Header } from "@/components/Header"; // ✅ Import Header

const DisasterPreparedness = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 lg:px-16">
      <Header /> {/* ✅ Header added */}
      <div className="max-w-4xl py-10 mx-auto">
        {/* Page Title */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-gray-800">
              🌍 Basics of Disaster Preparedness
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            Disasters can strike without warning. Being prepared means staying
            safe, reducing risks, and building resilience. Explore the
            collapsible sections below to learn essential steps.
          </CardContent>
        </Card>

        {/* Accordion Sections */}
        <Accordion type="single" collapsible className="space-y-4">
          {/* Section 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              1. Be Informed: Know Your Risk
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Identify Local Hazards:</strong> Know which disasters
                  are most likely in your area (earthquakes, floods, storms,
                  etc.).
                </li>
                <li>
                  <strong>Stay Tuned to Alerts:</strong> Sign up for government
                  alerts & weather forecasts.
                </li>
                <li>
                  <strong>Trust Reliable Sources:</strong> Follow agencies like
                  NDMA, Red Cross, and verified news channels.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Section 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              2. Make a Plan: Family Communication
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Meeting Places:</strong> One near your home & another
                  outside your neighborhood.
                </li>
                <li>
                  <strong>Contact Person:</strong> Pick an out-of-state
                  friend/relative everyone can call.
                </li>
                <li>
                  <strong>Emergency Cards:</strong> Carry important numbers &
                  copies of IDs.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Section 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold flex items-center gap-2">
              <Package className="w-5 h-5 text-green-600" />
              3. Build a Kit: The Essentials
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Water:</strong> At least 1 gallon per person per day
                  (3 days).
                </li>
                <li>
                  <strong>Food:</strong> Non-perishable items that need no
                  cooking.
                </li>
                <li>
                  <strong>First Aid:</strong> Bandages, antiseptics, medicines,
                  and pain relievers.
                </li>
                <li>
                  <strong>Tools:</strong> Flashlight, batteries, radio, whistle,
                  and multi-tool.
                </li>
                <li>
                  <strong>Personal Items:</strong> IDs, insurance papers, cash,
                  hygiene kits, blankets.
                </li>
                <li>
                  <strong>Special Needs:</strong> Items for babies, elders, or
                  pets.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Section 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-semibold flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-600" />
              4. Safe Actions: General Safety
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Practice Drills:</strong> Rehearse your family’s
                  emergency plan.
                </li>
                <li>
                  <strong>Secure Home:</strong> Anchor furniture & appliances to
                  avoid hazards.
                </li>
                <li>
                  <strong>Know Utilities:</strong> Learn how to shut off gas,
                  water, and electricity.
                </li>
                <li>
                  <strong>Stay Calm:</strong> Think clearly & follow your plan
                  during emergencies.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default DisasterPreparedness;
