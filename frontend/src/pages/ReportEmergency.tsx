import { Header } from "@/components/Header";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"; // ✅ Import toast hook

export default function ReportEmergency() {
  const [checked, setChecked] = useState(false);
  const { toast } = useToast(); // ✅ Get toast function

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Report Emergency
        </h1>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
          onSubmit={(e) => {
            e.preventDefault(); // prevent page reload

            if (!checked) {
              toast({
                title: "reCAPTCHA required",
                description: "Please verify that you are not a robot.",
                variant: "destructive",
              });
              return;
            }

            toast({
              title: "Report Submitted",
              description:
                "Your emergency report has been submitted successfully!",
              variant: "default",
            });
          }}
        >
          {/* Incident Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Incident Type <span className="text-red-500">*</span>
            </label>
            <select required className="w-full border rounded-lg p-2">
              <option value="">-- Select Incident Type --</option>
              <option value="fire">Fires</option>
              <option value="crime">Crimes</option>
              <option value="natural">Natural</option>
              <option value="disaster">Disasters</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter location"
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              required
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Time <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              required
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="Enter mobile number"
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Media Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Upload Media <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept="image/*,video/*"
              className="w-full"
              required
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              placeholder="Describe the incident"
              className="w-full border rounded-lg p-2"
              rows={4}
            ></textarea>
          </div>

          {/* Dummy reCAPTCHA with animation */}
          <div
            className="md:col-span-2 flex items-center border rounded-lg p-3 space-x-3 bg-white shadow-sm cursor-pointer"
            onClick={() => setChecked(!checked)}
          >
            <div
              className={`w-6 h-6 border-2 rounded-sm flex items-center justify-center transition-colors
                            ${
                              checked
                                ? "bg-blue-600 border-blue-600"
                                : "border-gray-300 bg-white"
                            }`}
            >
              {checked && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <div className="flex flex-col select-none">
              <span className="text-sm font-medium">
                I'm not a robot <span className="text-red-500">*</span>
              </span>
              <span className="text-xs text-gray-500">reCAPTCHA demo</span>
            </div>
          </div>

          {/* Submit button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
            >
              Submit Report
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
