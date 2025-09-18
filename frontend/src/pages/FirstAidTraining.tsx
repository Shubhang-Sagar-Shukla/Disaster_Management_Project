import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HeartPulse,
  Bandage,
  FireExtinguisher,
  BriefcaseMedical,
} from "lucide-react";

const FirstAidTraining = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6 text-red-600">
          🏥 First Aid Training
        </h1>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          Immediate care saves lives. Learn the essential steps to respond
          during medical emergencies before professional help arrives.
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
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-red-600">
                  <Bandage className="h-5 w-5 text-red-500" />
                  Basic Wound Care
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <p>
                    🩸 <b>Stop the bleeding:</b> Apply firm pressure with a
                    clean cloth or bandage.
                  </p>
                  <p>
                    💧 <b>Clean the wound:</b> Rinse with clean water to remove
                    dirt/debris.
                  </p>
                  <p>
                    🛡️ <b>Cover:</b> Use sterile bandages to prevent infection.
                  </p>
                  <p>
                    🚫 <b>Do not:</b> Use cotton directly on deep wounds or
                    apply random home remedies.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 2 */}
              <AccordionItem
                value="item-2"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-red-600">
                  <HeartPulse className="h-5 w-5 text-red-500" />
                  CPR & Recovery Position
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <p>
                    ❤️ <b>CPR:</b> Push hard and fast in the center of the chest
                    (~100–120 compressions/minute). If trained, alternate 30
                    compressions with 2 rescue breaths.
                  </p>
                  <p>
                    🛌 <b>Recovery Position:</b> If breathing but unconscious,
                    turn the person on their side with head tilted back to keep
                    airway clear.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 3 */}
              <AccordionItem
                value="item-3"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-red-600">
                  <FireExtinguisher className="h-5 w-5 text-red-500" />
                  Common Emergencies
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <p>
                    🔥 <b>Burns:</b> Cool under running water 10–15 min. Do not
                    apply ice/butter. Cover with clean cloth.
                  </p>
                  <p>
                    🦴 <b>Fractures & Sprains:</b> Immobilize injured limb.
                    Apply cold pack to reduce swelling.
                  </p>
                  <p>
                    😮‍💨 <b>Choking:</b> Encourage coughing. If severe, perform
                    Heimlich maneuver (abdominal thrusts).
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 4 */}
              <AccordionItem
                value="item-4"
                className="border rounded-lg shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 px-4 py-2 text-red-600">
                  <BriefcaseMedical className="h-5 w-5 text-red-500" />
                  Your First Aid Kit
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 space-y-2">
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Adhesive bandages & sterile gauze</li>
                    <li>Antiseptic wipes/solution</li>
                    <li>Thermometer & scissors</li>
                    <li>Pain relievers (Paracetamol/Ibuprofen)</li>
                    <li>Gloves & face mask</li>
                    <li>Emergency contact list</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Reminder */}
        <div className="mt-8 text-center bg-red-50 border border-red-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-bold text-red-600 mb-2">
            🚨 Key Reminder
          </h2>
          <p className="text-gray-700">
            First aid is not a replacement for professional care. Always call
            emergency services immediately after giving first aid.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstAidTraining;
