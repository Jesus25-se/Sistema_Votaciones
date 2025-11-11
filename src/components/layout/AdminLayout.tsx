// components/layout/AdminLayout.tsx
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="d-flex">
      <AdminSidebar />
      
      {/* Contenido principal */}
      <main
        className="flex-grow-1"
        style={{
          marginLeft: "280px",
          minHeight: "100vh",
          backgroundColor: "#f4f6f8",
        }}
      >
        <Outlet /> {/* Renderiza los componentes hijos */}
      </main>
    </div>
  );
}