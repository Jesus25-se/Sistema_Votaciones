import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BarChart, CloudUpload, Cpu, LogOut, Vote, Database } from "lucide-react";

export default function AdminSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleVotaciones = () => {
    if (location.pathname === "/dashboard") {
      document.getElementById("votaciones")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/dashboard", { state: { scrollTo: "votaciones" } });
    }
  };

  React.useEffect(() => {
    if (location.pathname === "/dashboard" && location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 150);
      navigate("/dashboard", { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <aside
      className="d-flex flex-column justify-content-between vh-100 text-light shadow"
      style={{
        width: "270px",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#1e2738",
        zIndex: 1000,
      }}
    >
      {/* ---------- HEADER ---------- */}
      <div>
        <div
          className="text-center py-4 border-bottom"
          style={{ borderColor: "#2f3b52" }}
        >
          <h4 className="fw-bold mb-1" style={{ color: "#ffffff" }}>
            Sistema Electoral
          </h4>
          <span
            className="badge"
            style={{ backgroundColor: "#007bff", color: "#fff" }}
          >
            Panel Administrativo
          </span>
        </div>

        {/* ---------- MENÚ PRINCIPAL ---------- */}
        <ul className="nav flex-column px-3 mt-4">

          {/* Panel de Control */}
          <li className="nav-item mb-2">
            <Link
              to="/admin/dashboard"
              className={`nav-link d-flex align-items-center fw-semibold px-3 py-2 rounded ${
                isActive("/admin/dashboard")
                  ? "active-link"
                  : "text-light opacity-75"
              }`}
              style={{
                backgroundColor: isActive("/admin/dashboard")
                  ? "rgba(0,123,255,0.15)"
                  : "transparent",
                border: isActive("/admin/dashboard")
                  ? "1px solid rgba(0,123,255,0.3)"
                  : "1px solid transparent",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0,123,255,0.1)";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                if (!isActive("/admin/dashboard")) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                }
              }}
            >
              <BarChart size={18} className="me-3" />
              Panel de Control
            </Link>
          </li>

          {/* Cargar Datos */}
          <li className="nav-item mb-2">
            <Link
              to="/admin/upload"
              className={`nav-link d-flex align-items-center fw-semibold px-3 py-2 rounded ${
                isActive("/admin/upload")
                  ? "active-link"
                  : "text-light opacity-75"
              }`}
              style={{
                backgroundColor: isActive("/admin/upload")
                  ? "rgba(40,167,69,0.15)"
                  : "transparent",
                border: isActive("/admin/upload")
                  ? "1px solid rgba(40,167,69,0.3)"
                  : "1px solid transparent",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(40,167,69,0.1)";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                if (!isActive("/admin/upload")) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                }
              }}
            >
              <CloudUpload size={18} className="me-3" />
              Cargar Datos
            </Link>
          </li>

          {/* Limpieza de Datos - NUEVO */}
          <li className="nav-item mb-2">
            <Link
              to="/admin/cleaning"
              className={`nav-link d-flex align-items-center fw-semibold px-3 py-2 rounded ${
                isActive("/admin/cleaning")
                  ? "active-link"
                  : "text-light opacity-75"
              }`}
              style={{
                backgroundColor: isActive("/admin/cleaning")
                  ? "rgba(108,117,125,0.15)"
                  : "transparent",
                border: isActive("/admin/cleaning")
                  ? "1px solid rgba(108,117,125,0.3)"
                  : "1px solid transparent",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(108,117,125,0.1)";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                if (!isActive("/admin/cleaning")) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                }
              }}
            >
              <Database size={18} className="me-3" />
              Limpieza de Datos
            </Link>
          </li>

          {/* Análisis Predictivo */}
          <li className="nav-item mb-2">
            <Link
              to="/admin/analytics"
              className={`nav-link d-flex align-items-center fw-semibold px-3 py-2 rounded ${
                isActive("/admin/analytics")
                  ? "active-link"
                  : "text-light opacity-75"
              }`}
              style={{
                backgroundColor: isActive("/admin/analytics")
                  ? "rgba(255,193,7,0.15)"
                  : "transparent",
                border: isActive("/admin/analytics")
                  ? "1px solid rgba(255,193,7,0.3)"
                  : "1px solid transparent",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,193,7,0.1)";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                if (!isActive("/admin/analytics")) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                }
              }}
            >
              <Cpu size={18} className="me-3" />
              Análisis Predictivo
            </Link>
          </li>
        </ul>

        {/* ---------- SECCIÓN DE VOTACIONES ---------- */}
        <div
          className="mt-4 pt-3 border-top px-3"
          style={{ borderColor: "#2f3b52" }}
        >
          <h6 className="text-center text-white fw-bold mb-3 ">
            Resultados
          </h6>
          <button
            onClick={handleVotaciones}
            className="btn btn-sm w-100 d-flex align-items-center justify-content-start fw-semibold px-3 py-2"
            style={{
              backgroundColor: "rgba(0,123,255,0.15)",
              border: "1px solid rgba(0,123,255,0.3)",
              color: "#fff",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,123,255,0.3)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,123,255,0.15)";
            }}
          >
            <Vote size={16} className="me-2" />
            Votaciones
          </button>
        </div>
      </div>

      {/* ---------- FOOTER ---------- */}
      <div
        className="text-center border-top py-3"
        style={{ borderColor: "#2f3b52" }}
      >
        <div className="text-secondary small mb-2">
          <div>Sistema Seguro v2.1.0</div>
          <div>© 2024 Electoral System</div>
        </div>
        <Link
          to="/admin"
          className="btn btn-outline-light w-100 fw-semibold d-flex align-items-center justify-content-center gap-2"
          style={{
            borderColor: "rgba(255,255,255,0.3)",
            color: "#ffffff",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <LogOut size={16} />
          Cerrar Sesión
        </Link>
      </div>
    </aside>
  );
}