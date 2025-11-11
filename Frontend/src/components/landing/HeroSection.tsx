import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero-section py-5" style={{ background: "#f4f8fc" }}>
      <div
        className="container d-flex align-items-center justify-content-between flex-wrap"
        style={{ gap: 24 }}
      >
        {/* Recuadro de texto */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#0576c8",
            color: "#fff",
            padding: "56px 48px",
            borderRadius: 12,
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            minWidth: 320,
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              lineHeight: 1.05,
              fontWeight: 900,
              marginBottom: 16,
            }}
          >
            Elecciones <br /> Generales 2026
          </h1>
          <p style={{ fontSize: "18px", opacity: 0.95, maxWidth: 600 }}>
            Todo lo que debes saber sobre las elecciones a realizarse el{" "}
            <strong>12 de abril de 2026</strong>. Infórmate, participa y vota
            con responsabilidad.
          </p>

          <div style={{ marginTop: 36, display: "flex", gap: 20, flexWrap: "wrap" }}>
            {/* Botón Comenzar a votar */}
            <Link
              to="/votar"
              style={{
                backgroundColor: "#0b3b6f",
                color: "#fff",
                padding: "14px 40px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: "18px",
                border: "2px solid white",
                transition: "all 0.3s ease",
                textDecoration: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#0b3b6f";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#0b3b6f";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              🗳️ Comenzar a votar
            </Link>

            {/* Botón Acceder como administrador */}
            <Link
              to="/admin"
              style={{
                backgroundColor: "white",
                color: "#0b3b6f",
                padding: "14px 40px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: "18px",
                border: "2px solid #0b3b6f",
                transition: "all 0.3s ease",
                textDecoration: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#0b3b6f";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#0b3b6f";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ⚙️ Acceder como administrador
            </Link>
          </div>
        </div>

        {/* Recuadro de imagen (Presidenta ONPE) */}
        <div style={{ width: 520, flexShrink: 0 }}>
          <div
            style={{
              background: "#e6f0fb",
              height: 345,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #c3d9f5",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <img
              src="https://eg2026.onpe.gob.pe/assets/img/banner-hero-onpe.png"
              alt="Presidenta ONPE"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                width: "auto",
                height: "auto",
                borderRadius: "8px",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
