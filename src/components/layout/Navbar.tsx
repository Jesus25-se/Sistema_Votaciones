import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Ocultar en las rutas del panel y login
  const hideNavbarRoutes = ["/admin", "/dashboard",  "/admin/dashboard", "/admin/upload", "/admin/analytics"];
  if (hideNavbarRoutes.includes(location.pathname)) return null;

  // Función de estilo compartida para los enlaces
  const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = "#ffd500";
    e.currentTarget.style.color = "#0b3b6f";
  };
  
  const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = "#fff";
    e.currentTarget.style.color = "#0b3b6f";
  };

  return (
    <nav
      style={{
        background: "#0b3b6f",
        color: "#fff",
        padding: "20px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        borderBottom: "3px solid #0d6efd",
      }}
    >
      {/* Logo ONPE arriba */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src="https://eg2026.onpe.gob.pe/assets/img/logo-onpe.svg"
          alt="Logo ONPE"
          style={{
            height: "80px",
            width: "auto",
            border: "3px solid #fff",
            borderRadius: "10px",
            padding: "6px",
            backgroundColor: "#fff",
          }}
        />
      </div>

      {/* Título del sistema */}
      <div style={{ marginBottom: "20px" }}>
        <Link
          to="/"
          className="fw-bold fs-4 text-light"
          style={{ 
            textDecoration: "none",
            letterSpacing: "0.5px",
            color: "#ffffff"
          }}
        >
          Sistema Nacional de Votaciones
        </Link>
      </div>

      {/* Links de navegación */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {[
          { to: "/", text: "Inicio" },
          { to: "/votar", text: "Votación" },
          { to: "/para-electores", text: "Para electores" },
          { to: "/proceso", text: "Acerca del proceso" },
          { to: "/lo-nuevo", text: "Lo nuevo" },
          { to: "/voto-digital", text: "Voto Digital" },
          { to: "/admin", text: "Administrador" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              color: "#0b3b6f",
              background: "#fff",
              border: "2px solid #fff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "18px",
              padding: "8px 14px",
              borderRadius: "6px",
              transition: "all 0.3s ease",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}