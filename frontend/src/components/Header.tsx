import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, AlertTriangle, Phone, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import  { api } from "@/lib/axios";
export const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownAnimating, setDropdownAnimating] = useState(false);
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);


  const handleLogout = async () => {
    try {
      await api.post("/logout", {}, { withCredentials: true });

      // Clear frontend localStorage
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
      localStorage.removeItem("user");

      // Update header state
      setIsLoggedIn(false);
      setUsername("");
      setProfilePic("");

      // Redirect
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };




  // Check login state on mount
 useEffect(() => {
  const loggedIn = localStorage.getItem("isLoggedIn") === "true";
  const storedUsername = localStorage.getItem("username") || "";

  // Safe parsing of user object
  let storedUser: { profilePic?: string } = {};
  try {
    const userString = localStorage.getItem("user");
    if (userString) {
      storedUser = JSON.parse(userString);
    }
  } catch (err) {
    console.error("Failed to parse user from localStorage", err);
  }

  setIsLoggedIn(loggedIn);
  setUsername(storedUsername);
  setProfilePic(storedUser.profilePic || "");
}, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (showDropdown) {
          setDropdownAnimating(true);
          setTimeout(() => {
            setShowDropdown(false);
            setDropdownAnimating(false);
          }, 250); // matches fade-out animation duration
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side: logo and site name */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">SafeGuard</h1>
              <p className="text-sm text-muted-foreground">
                Disaster Management System
              </p>
            </div>
          </div>

          {/* Right side: buttons including Sign Up / Profile */}
          <div className="flex items-center gap-3">
            {!isLoggedIn ? (
              <Button
                variant="default"
                size="sm"
                className="bg-blue-600 text-white hover:bg-blue-800 hover:opacity-90 shadow-md"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            ) : (
              <div className="relative" ref={dropdownRef}>
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    onClick={() => setShowDropdown(!showDropdown)}
                  />
                ) : (
                  <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold cursor-pointer"
                  >
                    {username.charAt(0).toUpperCase()}
                  </div>
                )}
                {(showDropdown || dropdownAnimating) && (
                  <div
                    className={`absolute right-0 mt-2 w-40 bg-white shadow-lg rounded origin-top-right ${
                      dropdownAnimating
                        ? "animate-dropdown-fade-out"
                        : "animate-dropdown-fade-in"
                    }`}
                  >
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                      onClick={() => navigate("/profile")}
                    >
                      View Profile
                    </button>
                    <button
                      className="w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-gray-100 text-red-600"
                      onClick={() => {
                        localStorage.clear();
                        setIsLoggedIn(false);
                        navigate("/");
                      }}
                    >
                      <LogOut className="w-4 h-4" onClick={handleLogout}  />
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            )}

            <Button variant="warning" size="sm" className="hidden md:flex">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Active Alerts
            </Button>
            <Button variant="emergency" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Emergency: 911
            </Button>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="mt-4 flex gap-6 text-sm">
          <a
            href="#dashboard"
            className="text-foreground hover:text-primary transition-colors"
          >
            Dashboard
          </a>
          <a
            href="#learning"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Learning
          </a>
          <a
            href="#alerts"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Alerts
          </a>
          <a
            href="#drills"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Virtual Drills
          </a>
          <a
            href="#contacts"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Emergency Contacts
          </a>
          <a
            href="#other"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Other Help
          </a>
        </nav>
      </div>
    </header>
  );
};
