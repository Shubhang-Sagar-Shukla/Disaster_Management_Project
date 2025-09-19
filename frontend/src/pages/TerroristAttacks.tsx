import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldAlert, Users, AlertTriangle, Phone } from "lucide-react";
import { Header } from "@/components/Header"; 

const TerroristAttacks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-6">
      <Header/>
      <div className="max-w-4xl py-10 mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          🛡️ Terrorist Attacks Awareness & Response
        </h1>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          Staying informed and prepared can save lives. Learn how to recognize
          threats, respond safely, and support authorities during emergencies.
        </p>

        {/* Accordion Sections */}
        <Card className="shadow-lg border-gray-200">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {/* Section 1 */}
              <AccordionItem
                value="item-1"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-gray-800">
                  <ShieldAlert className="h-5 w-5 text-red-500" />
                  Recognizing Threats
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <p>
                    ⚠️ <b>Suspicious Activity:</b> Unattended bags, unusual
                    behavior, or unfamiliar vehicles should be reported.
                  </p>
                  <p>
                    👁️ <b>Stay Observant:</b> Be aware of your surroundings and
                    emergency exits in crowded areas.
                  </p>
                  <p>
                    📝 <b>Trust Your Instincts:</b> If something feels off,
                    alert authorities immediately.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 2 */}
              <AccordionItem
                value="item-2"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-gray-800">
                  <Users className="h-5 w-5 text-orange-600" />
                  Evacuation & Shelter
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <p>
                    🏃 <b>Follow Instructions:</b> Evacuate only when directed
                    by authorities.
                  </p>
                  <p>
                    🗺️ <b>Safe Zones:</b> Identify shelters, secure rooms, or
                    designated assembly points.
                  </p>
                  <p>
                    👨‍👩‍👧‍👦 <b>Stay Together:</b> Keep your family, friends, or
                    colleagues together and account for everyone.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 3 */}
              <AccordionItem
                value="item-3"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-gray-800">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  Safety Measures During an Attack
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <p>
                    🔕 <b>Stay Silent:</b> Keep phones on silent and avoid
                    drawing attention.
                  </p>
                  <p>
                    🛡️ <b>Hide & Barricade:</b> Lock doors, block entrances, and
                    stay out of sight.
                  </p>
                  <p>
                    🏃 <b>Escape:</b> Only move if safe paths are clearly
                    available; do not confront attackers.
                  </p>
                  <p>
                    📢 <b>Follow Authority:</b> Law enforcement instructions
                    should be your priority.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 4 */}
              <AccordionItem
                value="item-4"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-gray-800">
                  <Phone className="h-5 w-5 text-blue-600" />
                  Emergency Contacts & Reporting
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <ul className="list-disc ml-6 space-y-1">
                    <li>
                      Know local police and counter-terrorism emergency numbers.
                    </li>
                    <li>
                      Alert authorities immediately about suspicious activities.
                    </li>
                    <li>
                      Keep updated with public warnings and emergency
                      broadcasts.
                    </li>
                    <li>
                      Inform your family/friends about your safety status when
                      possible.
                    </li>
                  </ul>
                  <p className="mt-2">
                    📌 <b>Tip:</b> Stay calm, avoid rumors, and follow verified
                    sources for instructions.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Reminder */}
        <div className="mt-8 text-center bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            🚨 Key Reminder
          </h2>
          <p className="text-gray-800">
            Awareness, vigilance, and calm response are your best tools. Always
            cooperate with authorities and prioritize safety over belongings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerroristAttacks;
