import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Home, Shield, AlertCircle, MapPin, Phone } from "lucide-react";

const EarthquakeResponse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6 text-yellow-800">
          🏚️ Earthquake Response
        </h1>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          Earthquakes can strike suddenly, shaking buildings and infrastructure.
          Knowing how to prepare, protect yourself, and respond safely can save
          lives. Learn essential earthquake response practices below.
        </p>

        {/* Accordion Sections */}
        <Card className="shadow-lg border-yellow-200">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {/* Section 1 */}
              <AccordionItem
                value="item-1"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-yellow-700">
                  <Home className="h-5 w-5 text-yellow-600" />
                  Before an Earthquake
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <p>
                    🏠 <b>Secure Your Home:</b> Anchor heavy furniture,
                    appliances, and water heaters to prevent tipping.
                  </p>
                  <p>
                    📍 <b>Identify Safe Spots:</b> Under sturdy tables, against
                    interior walls, away from windows and mirrors.
                  </p>
                  <p>
                    🎒 <b>Emergency Kit:</b> Keep water, non-perishable food,
                    flashlight, batteries, first aid supplies, and important
                    documents ready.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 2 */}
              <AccordionItem
                value="item-2"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-yellow-700">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  During an Earthquake
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <p>
                    ⬇️ <b>Drop, Cover, and Hold On:</b> Protect yourself under
                    sturdy furniture or against an interior wall.
                  </p>
                  <p>
                    🪟 <b>Avoid Hazards:</b> Stay away from windows, glass,
                    heavy objects, and exterior walls.
                  </p>
                  <p>
                    🌳 <b>If Outside:</b> Move to open areas away from
                    buildings, trees, and power lines.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 3 */}
              <AccordionItem
                value="item-3"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-yellow-700">
                  <Shield className="h-5 w-5 text-green-600" />
                  After an Earthquake
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <p>
                    🩹 <b>Check Injuries:</b> Help yourself and others, provide
                    first aid if needed.
                  </p>
                  <p>
                    🌐 <b>Be Prepared for Aftershocks:</b> Expect smaller
                    tremors and stay cautious.
                  </p>
                  <p>
                    🔍 <b>Inspect Surroundings:</b> Look for hazards like gas
                    leaks, broken glass, or structural damage.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 4 */}
              <AccordionItem
                value="item-4"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-yellow-700">
                  <Phone className="h-5 w-5 text-blue-600" />
                  Emergency Communication & Shelter
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <ul className="list-disc ml-6 space-y-1">
                    <li>
                      Use text messages or social media to avoid overloading
                      phone lines.
                    </li>
                    <li>
                      Know the locations of emergency shelters and safe zones.
                    </li>
                    <li>
                      Have a family reunion point and emergency contacts list.
                    </li>
                    <li>Follow instructions from local authorities.</li>
                  </ul>
                  <p className="mt-2">
                    📌 <b>Tip:</b> Stay calm, prioritize life over property, and
                    only return indoors when safe.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Reminder */}
        <div className="mt-8 text-center bg-yellow-50 border border-yellow-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-bold text-yellow-700 mb-2">
            🚨 Key Reminder
          </h2>
          <p className="text-gray-700">
            Earthquake preparedness is critical. Practice safety drills, secure
            your home, and always have an emergency plan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarthquakeResponse;
