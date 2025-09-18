import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/lib/axios";


function Login() {
  const [identifier, setIdentifier] = useState(""); // username or email
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await api.post("/login", {
      email: identifier,
      password,
    });

    console.log("✅ Login success:", res.data);

    setError("");
    setSuccess("Login successful!");

    // Safely get the user object
    const user = res.data.user || res.data.data || res.data; // fallback options

    // Store in localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", user.username || "");
    localStorage.setItem("user", JSON.stringify(user));

    // Trigger header update
    window.dispatchEvent(new Event("storage"));

    setTimeout(() => navigate("/"), 1000);
  } catch (err: any) {
    console.error("❌ Login error:", err);
    setSuccess("");
    setError(err.response?.data?.message || "Invalid email or password");
  }
};



  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
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

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
