import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import LearningModules from "./pages/LearningModules";
import DisasterPreparedness from "./pages/DisasterPreparedness";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FirstAidTraining from "./pages/FirstAidTraining";
import FireSafety from "./pages/FireSafety";
import EarthquakeResponse from "./pages/EarthquakeResponse";
import Floods from "./pages/Floods";
import TerroristAttacks from "./pages/TerroristAttacks"; // NEW
import LocalAlerts from "./components/LocalAlerts";
import AlertsPage from "./pages/AlertsPage"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Site */}
          <Route path="/" element={<Index />} />
          {/* Sign Up page */}
          <Route path="/signup" element={<SignUp />} />
          {/* Login page */}
          <Route path="/login" element={<Login />} />
          {/* Profile page */}
          <Route path="/profile" element={<Profile />} />
          {/* Learning Modules page */}
          <Route path="/learning-modules" element={<LearningModules />} />
          {/* Disaster Preparedness Module page */}
          <Route
            path="/modules/disaster-preparedness"
            element={<DisasterPreparedness />}
          />
          {/* First Aid Training Module page */}
          <Route
            path="/modules/first-aid-training"
            element={<FirstAidTraining />}
          />
          {/* Fire Safety Module page */}
          <Route path="/modules/fire-safety" element={<FireSafety />} />
          {/* Earthquake Response Module page */}
          <Route
            path="/modules/earthquake-response"
            element={<EarthquakeResponse />}
          />
          {/* Floods Module page */}
          <Route path="/modules/floods" element={<Floods />} />
          {/* Terrorist Attacks Module page */}
          <Route
            path="/modules/terrorist-attacks"
            element={<TerroristAttacks />}
          />
          <Route path="/local-alerts" element={<LocalAlerts />} />
          <Route path="/region-alerts" element={<AlertsPage/> }/>

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
