import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Flame, ArrowRight, AlertTriangle, Phone } from "lucide-react";
import { Header } from "@/components/Header"; 

const FireSafety = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white  px-6">
      <Header />

      <div className="max-w-4xl py-10 mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6 text-black">
          🔥 Fire Safety & Training
        </h1>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          Fires can start suddenly and spread quickly. Knowing how to prevent,
          respond, and evacuate safely can save lives. Learn essential fire
          safety practices and emergency response techniques.
        </p>

        {/* Accordion Sections */}
        <Card className="shadow-lg border-red-200">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {/* Section 1 */}
              <AccordionItem
                value="item-1"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-orange-600">
                  <Flame className="h-5 w-5 text-orange-500" />
                  Fire Prevention
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <p>
                    🔥 <b>Keep Flammables Away:</b> Store flammable liquids and
                    materials away from heat sources and open flames.
                  </p>
                  <p>
                    🍳 <b>Kitchen Safety:</b> Never leave cooking unattended.
                    Keep a lid nearby to smother small flames.
                  </p>
                  <p>
                    ⚡ <b>Electrical Safety:</b> Avoid overloading sockets,
                    replace damaged cords, and unplug unused appliances.
                  </p>
                  <p>
                    🚭 <b>Smoking Precautions:</b> Always use proper ashtrays
                    and never smoke near flammable materials.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 2 */}
              <AccordionItem
                value="item-2"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-orange-600">
                  <ArrowRight className="h-5 w-5 text-orange-600" />
                  Evacuation & Escape Plans
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <p>
                    🏃 <b>Know Exit Routes:</b> Identify all exits in your home,
                    workplace, or building.
                  </p>
                  <p>
                    🗺️ <b>Plan Escape Routes:</b> Have at least two ways out of
                    every room. Practice evacuation drills regularly.
                  </p>
                  <p>
                    🔔 <b>Alarm Awareness:</b> Respond immediately to fire
                    alarms and warning signs.
                  </p>
                  <p>
                    👨‍👩‍👧‍👦 <b>Family & Colleague Safety:</b> Assign roles, and make
                    sure everyone knows where to meet outside safely.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 3 */}
              <AccordionItem
                value="item-3"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-orange-600">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  Fire Safety Equipment
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <p>
                    🧯 <b>Fire Extinguishers:</b> Learn how to operate
                    extinguishers and ensure they are placed in accessible
                    locations.
                  </p>
                  <p>
                    🚨 <b>Smoke Detectors:</b> Install in key areas and test
                    regularly. Replace batteries at least once a year.
                  </p>
                  <p>
                    🛠️ <b>Sprinkler Systems:</b> Ensure fire sprinklers are
                    functional and not blocked by furniture or decorations.
                  </p>
                  <p>
                    🪑 <b>Fire Blankets:</b> Keep fire blankets in kitchens and
                    areas with potential fire hazards.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 4 */}
              <AccordionItem
                value="item-4"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-orange-600">
                  <Phone className="h-5 w-5 text-blue-600" />
                  Emergency Contacts & Procedures
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Know local fire department and emergency numbers.</li>
                    <li>
                      Call for professional help immediately when a fire occurs.
                    </li>
                    <li>
                      Have neighbors or colleagues aware of your safety plan.
                    </li>
                    <li>Keep a list of emergency shelters or safe zones.</li>
                  </ul>
                  <p className="mt-2">
                    📌 <b>Tip:</b> Stay calm, follow your pre-planned escape
                    route, and never go back inside until authorities declare it
                    safe.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Reminder */}
        <div className="mt-8 text-center bg-red-50 border border-orange-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-bold text-orange-600 mb-2">
            🚨 Key Reminder
          </h2>
          <p className="text-gray-700">
            Fire safety is essential for everyone. Always stay vigilant and
            prioritize prevention and safe evacuation over property.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FireSafety;
