import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AdminLayout from "./components/layout/AdminLayout";
import Landing from "./pages/Landing";
import VoteForm from "./components/votacion/VoteForm";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import DataUpload from "./components/admin/DataUpload";
import MetricsDashboard from "./components/admin/MetricsDashboard";
import PredictiveAnalytics from "./components/admin/PredictiveAnalytics";
import "bootstrap-icons/font/bootstrap-icons.css";

import ParaElectores from "./pages/ParaElectores";
import VotoDigital from "./pages/VotoDigital";
import LoNuevo from "./pages/LoNuevo";
import AcercaDelProceso from "./pages/AcercaDelProceso";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Rutas públicas - SIN AdminLayout */}
        <Route path="/" element={<Landing />} />
        <Route path="/votar" element={<VoteForm />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/para-electores" element={<ParaElectores />} />
        <Route path="/voto-digital" element={<VotoDigital />} />
        <Route path="/lo-nuevo" element={<LoNuevo />} />
        <Route path="/proceso" element={<AcercaDelProceso />} />
        
        {/* Rutas administrativas CON AdminLayout */}
        <Route path="/" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="admin/dashboard" element={<MetricsDashboard />} />
          <Route path="admin/upload" element={<DataUpload />} />
          <Route path="admin/analytics" element={<PredictiveAnalytics />} />
          
        </Route>
      </Routes>
    </>
  );
}