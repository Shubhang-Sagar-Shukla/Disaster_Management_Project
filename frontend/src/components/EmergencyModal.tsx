import { useEffect, useRef } from "react";
import { Phone, MapPin, Users, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmergencyModalProps {
  onClose: () => void;
}

const EmergencyModal = ({ onClose }: EmergencyModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Esc or outside click
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node))
        onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md text-center animate-scale-in"
      >
        <h2 className="text-2xl font-bold mb-4">Emergency: 112</h2>
        <p className="text-sm text-gray-600 mb-6">
          Quick actions to get help immediately.
        </p>

        <div className="flex flex-col gap-3 mb-6">
          <Button
            variant="emergency"
            size="lg"
            className="flex items-center justify-center gap-2"
            onClick={() => (window.location.href = "tel:112")}
          >
            <Phone /> Call 112
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex items-center justify-center gap-2"
          >
            <MapPin /> Locate Nearby Services
          </Button>
          <Button
            variant="info"
            size="lg"
            className="flex items-center justify-center gap-2"
          >
            <Users /> Notify Family
          </Button>
          <Button
            variant="warning"
            size="lg"
            className="flex items-center justify-center gap-2"
          >
            <LifeBuoy /> First Aid Guide
          </Button>
        </div>

        <Button variant="outline" size="sm" className="mt-2" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default EmergencyModal;
