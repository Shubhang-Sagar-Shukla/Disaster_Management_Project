import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CloudRain, Umbrella, AlertTriangle, Phone } from "lucide-react";
import { Header } from "@/components/Header"; 

const Floods = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white  px-6">
      <Header />

      <div className="max-w-4xl py-10 mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
          🌊 Floods & Safety Training
        </h1>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          Floods can happen suddenly and cause serious damage. Knowing how to
          stay safe, evacuate, and protect your property can save lives. Learn
          essential flood safety practices and emergency response steps.
        </p>

        {/* Accordion Sections */}
        <Card className="shadow-lg border-blue-200">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {/* Section 1 */}
              <AccordionItem
                value="item-1"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-blue-600">
                  <CloudRain className="h-5 w-5 text-blue-500" />
                  Flood Preparedness
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <p>
                    📝 <b>Know Your Risk:</b> Identify if your area is prone to
                    floods.
                  </p>
                  <p>
                    🏠 <b>Home Safety:</b> Elevate electrical appliances, keep
                    important documents safe.
                  </p>
                  <p>
                    🚗 <b>Vehicle Precautions:</b> Avoid parking in low-lying
                    areas.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 2 */}
              <AccordionItem
                value="item-2"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-blue-600">
                  <Umbrella className="h-5 w-5 text-blue-500" />
                  Evacuation & Safety
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <p>
                    🏃 <b>Have an Evacuation Plan:</b> Identify safe routes and
                    shelters.
                  </p>
                  <p>
                    🧰 <b>Emergency Kit:</b> Pack essentials including water,
                    food, flashlight, and first aid.
                  </p>
                  <p>
                    🚨 <b>Follow Alerts:</b> Stay tuned to official flood
                    warnings and instructions.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 3 */}
              <AccordionItem
                value="item-3"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-blue-600">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  Flood Safety Measures
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <p>
                    🚫 <b>Avoid Water:</b> Do not walk, swim, or drive through
                    floodwater.
                  </p>
                  <p>
                    ⚡ <b>Electrical Safety:</b> Turn off electricity if water
                    enters your home.
                  </p>
                  <p>
                    🛡️ <b>Protect Belongings:</b> Move valuables to higher
                    floors.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 4 */}
              <AccordionItem
                value="item-4"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-blue-600">
                  <Phone className="h-5 w-5 text-blue-600" />
                  Emergency Contacts
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Local disaster management helpline.</li>
                    <li>Police and fire department numbers.</li>
                    <li>Nearest hospitals and shelters.</li>
                  </ul>
                  <p className="mt-2">
                    📌 <b>Tip:</b> Stay calm, follow evacuation plans, and keep
                    updated on flood conditions.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Reminder */}
        <div className="mt-8 text-center bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-bold text-blue-600 mb-2">
            🚨 Key Reminder
          </h2>
          <p className="text-gray-700">
            Floods are dangerous and unpredictable. Prioritize safety over
            property, and always follow official instructions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Floods;
