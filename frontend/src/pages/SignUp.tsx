import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/lib/axios"; // importing axios instance
import { districts } from "@/Data/Districts";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Citizen");
  const [district, setDistrict] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("🔄 Signup Request Triggered");
    console.log("➡️ Sending data:", { username, email, password, role, district });

    if (password.length < 8) {
      console.warn("⚠️ Password validation failed");
      setError("Password must be at least 8 characters long");
      setSuccess("");
      return;
    }

    const userData = { username, email, password, role, district };

    try {
      const res = await api.post("/register", userData);
      console.log("✅ Signup Success:", res.data);

      setError("");
      setSuccess("Account created successfully!");

      setTimeout(() => navigate("/login"), 1000);
    } catch (err: any) {
      console.error("❌ Signup Error:", err);
      console.log("🔍 Full Error Object:", JSON.stringify(err, null, 2));
      console.log("📡 Error Response Data:", err.response?.data);
      console.log("📡 Error Response Status:", err.response?.status);

      setError(err.response?.data?.message || "Signup failed, try again!");
      setSuccess("");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* District dropdown */}
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" disabled hidden>
              Select your district
            </option>
            {districts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          {/* Role dropdown */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" disabled hidden>
              Select your role
            </option>
            <option value="Citizen">Citizen</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Admin">Admin</option>
            <option value="Government Official">Government Official</option>
            <option value="Rescue Team">Rescue Team</option>
          </select>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already a user?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-500 hover:underline"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

