import { useState, useEffect } from "react";

import { districts } from "@/Data/Districts";


function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState<string>("");
  const [role, setRole] = useState("");
  const [district, setDistrict] = useState("");

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedUser) {
      setUsername(storedUser.username || "");
      setEmail(storedUser.email || "");
      setProfilePic(storedUser.profilePic || "");
      setRole(storedUser.role || "");
      setDistrict(storedUser.district || "");
    }
  }, []);

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = () => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...storedUser,
        username,
        email,
        profilePic,
        role,
        district,
      })
    );
    alert("Profile updated!");
  };

  return (
    <div className="flex justify-center bg-blue-100 min-h-screen p-8">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-black text-center">
          My Profile
        </h2>

        <div className="flex flex-col gap-6">
          {/* Profile picture section */}
          <div className="flex items-center gap-4">
            <div className="relative w-24 h-24 rounded-full overflow-hidden bg-blue-200 flex items-center justify-center text-2xl font-bold text-white">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                username.charAt(0).toUpperCase()
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                title="Change profile picture"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">{username}</p>
              <p className="text-gray-600">{email}</p>
              <p className="text-gray-600">Role: {role || "Not selected"}</p>
              <p className="text-gray-600">
                District: {district || "Not selected"}
              </p>
            </div>
          </div>

          {/* Editable fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">District</label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            </div>
          </div>

          {/* Update button */}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition"
            onClick={handleUpdate}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
