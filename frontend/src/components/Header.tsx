import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, AlertTriangle, Phone, LogOut, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/axios";
import customLogo from "@/assets/recovery.png";

export const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownAnimating, setDropdownAnimating] = useState(false);
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    try {
      await api.post("/logout", {}, { withCredentials: true });
      localStorage.clear();
      setIsLoggedIn(false);
      setUsername("");
      setProfilePic("");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    setUsername(localStorage.getItem("username") || "");
    try {
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
      setProfilePic(storedUser.profilePic || "");
    } catch {}
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        if (showDropdown) {
          setDropdownAnimating(true);
          setTimeout(() => {
            setShowDropdown(false);
            setDropdownAnimating(false);
          }, 250);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);

  // Emergency: 112
  const handleEmergencyClick = () => {
    if (window.innerWidth <= 768) {
      window.location.href = "tel:112";
    } else {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000); // hide after 5 seconds
    }
  };

  return (
    <>
      <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <img
                src={customLogo}
                alt="SafeGuard Logo"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">SafeGuard</h1>
              <p className="text-sm text-muted-foreground">
                Disaster Management System
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {!isLoggedIn ? (
              <Button
                variant="default"
                size="sm"
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
                    className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold cursor-pointer"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    {username.charAt(0).toUpperCase()}
                  </div>
                )}
                {(showDropdown || dropdownAnimating) && (
                  <div
                    className={`absolute right-0 mt-2 w-40 bg-white shadow-lg rounded ${
                      dropdownAnimating
                        ? "animate-dropdown-fade-out"
                        : "animate-dropdown-fade-in"
                    }`}
                  >
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => navigate("/profile")}
                    >
                      View Profile
                    </button>
                    <button
                      className="w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-gray-100 text-red-600"
                      onClick={handleLogout}
                    >
                      <LogOut className="w-4 h-4" /> Log Out
                    </button>
                  </div>
                )}
              </div>
            )}

            <Button
              variant="warning"
              size="sm"
              className="hidden md:flex"
              onClick={() => navigate("/region-alerts")}
            >
              <AlertTriangle className="h-4 w-4 mr-2" /> Active Alerts
            </Button>

            <Button
              variant="emergency"
              size="sm"
              onClick={handleEmergencyClick}
            >
              <Phone className="h-4 w-4 mr-2" /> Emergency: 112
            </Button>
          </div>
        </div>
      </header>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 bg-red-600 text-white p-4 rounded-lg shadow-xl flex items-start gap-3 max-w-sm w-full animate-fade-in">
          <Phone className="w-5 h-5 mt-1" />
          <div className="flex-1">
            <p className="font-semibold">Emergency Call</p>
            <p className="text-sm">
              Please dial 112 immediately for emergencies.
            </p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-white hover:text-gray-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
};
