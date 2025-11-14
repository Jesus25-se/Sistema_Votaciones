import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero-section py-5" style={{ background: "#f4f8fc" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Recuadro de texto */}
          <div className="col-lg-7 mb-4 mb-lg-0">
            <div 
              className="text-white p-4 p-md-5 rounded-3 shadow"
              style={{
                backgroundColor: "#0576c8",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <h1 className="display-4 fw-bold mb-3">
                Elecciones <br /> Generales 2026
              </h1>
              <p className="lead mb-4" style={{ opacity: 0.95 }}>
                Todo lo que debes saber sobre las elecciones a realizarse el{" "}
                <strong>12 de abril de 2026</strong>. Infórmate, participa y vota
                con responsabilidad.
              </p>

              <div className="d-flex flex-wrap gap-3">
                {/* Botón Comenzar a votar */}
                <Link
                  to="/votar"
                  className="btn btn-lg fw-bold d-flex align-items-center gap-2"
                  style={{
                    backgroundColor: "#0b3b6f",
                    color: "#fff",
                    border: "2px solid white",
                    borderRadius: "10px",
                    padding: "14px 30px",
                    textDecoration: "none",
                    transition: "all 0.3s ease"
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
                  <i className="bi bi-ballot-fill"></i>
                  Comenzar a votar
                </Link>

                {/* Botón Acceder como administrador */}
                <Link
                  to="/admin"
                  className="btn btn-lg fw-bold d-flex align-items-center gap-2"
                  style={{
                    backgroundColor: "white",
                    color: "#0b3b6f",
                    border: "2px solid #0b3b6f",
                    borderRadius: "10px",
                    padding: "14px 30px",
                    textDecoration: "none",
                    transition: "all 0.3s ease"
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
                  <i className="bi bi-gear-fill"></i>
                  Acceder como administrador
                </Link>
              </div>
            </div>
          </div>

          {/* Recuadro de imagen (Presidenta ONPE) */}
          <div className="col-lg-5">
            <div 
              className="bg-light rounded-3 shadow-sm p-3 d-flex align-items-center justify-content-center"
              style={{
                height: "400px",
                border: "1px solid #c3d9f5"
              }}
            >
              <img
                src="https://eg2026.onpe.gob.pe/assets/img/banner-hero-onpe.png"
                alt="Presidenta ONPE"
                className="img-fluid rounded-2"
                style={{
                  maxHeight: "100%",
                  width: "auto",
                  transition: "transform 0.3s ease"
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}