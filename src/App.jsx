import { Routes, Route } from "react-router-dom";
import CreateAccount from "./Pages/CreateAccount";
import SignIn from "./Pages/Sign_in";
import FleetDashboard from "./DashBoard/FleetDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateAccount />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/dashboard" element={<FleetDashboard />} />
    </Routes>
  );
}