import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const location = useLocation();

  const hideNavbarRoutes = [
    "/admin",
    "/dashboard",
    "/admin/dashboard",
    "/admin/upload",
    "/admin/analytics",
    "/admin/cleaning"
  ];
  if (hideNavbarRoutes.includes(location.pathname)) return null;

  const links = [
    { to: "/", text: "Inicio" },
    { to: "/para-electores", text: "Voto Presencial" },
    { to: "/cronologia", text: "Cronología" },
    { to: "/lo-nuevo", text: "Lo que debes saber" },
  ];

  return (
    <nav
      className="text-center py-4"
      style={{
        backgroundColor: "#0b3b6f",
        borderBottom: "3px solid #0d6efd",
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
      }}
    >
      {/* Logo ONPE */}
      <div className="mb-3">
        <img
          src="https://eg2026.onpe.gob.pe/assets/img/logo-onpe.svg"
          alt="Logo ONPE"
          style={{
            height: "80px",
            width: "auto",
            border: "3px solid #fff",
            borderRadius: "12px",
            padding: "6px",
            backgroundColor: "#fff",
          }}
        />
      </div>

      {/* Título */}
      <h4 className="fw-bold text-white mb-4">
        Sistema Nacional de Votaciones
      </h4>

      {/* Links */}
      <div className="d-flex justify-content-center flex-wrap gap-4">
        {links.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`fw-semibold nav-link ${
                isActive ? "active" : ""
              }`}
              style={{
                color: isActive ? "#ffd500" : "#ffffff",
                fontSize: "17px",
                position: "relative",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#ffd500";
              }}
              onMouseOut={(e) => {
                if (!isActive) e.currentTarget.style.color = "#ffffff";
              }}
            >
              {link.text}
              {/* Línea inferior animada */}
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: -4,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#ffd500",
                  transform: isActive
                    ? "scaleX(1)"
                    : "scaleX(0)",
                  transformOrigin: "center",
                  transition: "transform 0.3s ease",
                }}
              ></span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}