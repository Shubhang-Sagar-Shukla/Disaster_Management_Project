import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header"; 

const dummyModules = [
  {
    id: 1,
    title: "Basics of Disaster Preparedness",
    description:
      "Learn the basics of disaster preparedness and safety measures.",
    link: "/modules/disaster-preparedness",
  },
  {
    id: 2,
    title: "First Aid Training",
    description: "Essential first aid techniques for emergencies.",
    link: "/modules/first-aid-training",
  },
  {
    id: 3,
    title: "Fire Safety",
    description: "Learn how to prevent and respond to fire emergencies.",
    link: "/modules/fire-safety",
  },
  {
    id: 4,
    title: "Earthquake Response",
    description: "Steps to stay safe during earthquakes.",
    link: "/modules/earthquake-response",
  },
  {
    id: 5,
    title: "Floods",
    description: "Training and preparedness tips for floods.",
    link: "/modules/floods",
  },
  {
    id: 6,
    title: "Terrorist Attacks",
    description: "Guidelines and drills for terrorist threats.",
    link: "/modules/terrorist-attacks",
  },
];

function LearningModules() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
       <main className="p-8">
      <h2 className="text-3xl font-bold text-black text-center mb-8">
        Learning Modules
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyModules.map((module) => (
          <div
            key={module.id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {module.title}
              </h3>
              <p className="text-gray-600">{module.description}</p>
            </div>
            <Button
              variant="default"
              size="sm"
              className="mt-4 bg-blue-600 text-white hover:bg-blue-500"
              onClick={() => navigate(module.link)}
            >
              Access Module
            </Button>
          </div>
        ))}
      </div>
      </main>
    </div>
  );
}

export default LearningModules;
