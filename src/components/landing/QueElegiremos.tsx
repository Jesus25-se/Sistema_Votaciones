export default function QueElegiremos() {
  const items = [
    {
      title: "Presidente",
      img: "https://eg2026.onpe.gob.pe/assets/img/Presidenta.png",
    },
    {
      title: "Vicepresidentes",
      img: "https://eg2026.onpe.gob.pe/assets/img/Vice-precidentes.png",
    },
    {
      title: "Congreso",
      img: "https://eg2026.onpe.gob.pe/assets/img/Senadores.png",
    },
    {
      title: "Parlamento Andino",
      img: "https://eg2026.onpe.gob.pe/assets/img/Parlamento-Andino.png",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div
        className="container text-center"
        style={{
          maxWidth: "1300px",
        }}
      >
        <h2
          style={{
            color: "#0b3b6f",
            fontSize: 36,
            fontWeight: 800,
          }}
        >
          ¿Qué elegiremos en estas Elecciones Generales 2026?
        </h2>

        <p
          style={{
            maxWidth: 900,
            margin: "16px auto 40px",
            color: "#555",
            fontSize: 18,
          }}
        >
          Estas son las autoridades por las cuales votaremos en las próximas
          Elecciones Generales 2026.
        </p>

        {/* Contenedor de ítems */}
        <div
          className="d-flex justify-content-center align-items-start"
          style={{
            gap: 70, // 🔹 más separación entre cada uno
            marginTop: 45,
            flexWrap: "nowrap",
            overflowX: "auto",
            paddingBottom: 10,
          }}
        >
          {items.map((it) => (
            <div key={it.title} style={{ width: 230, textAlign: "center" }}>
              <div
                style={{
                  width: 180,
                  height: 180,
                  margin: "0 auto 20px",
                  borderRadius: "50%",
                  background: "#fff",
                  border: "6px solid #0b83d6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                  transition: "transform 0.3s ease, border-color 0.3s ease",
                }}
              >
                <img
                  src={it.img}
                  alt={it.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.parentElement!.style.borderColor = "#0d9aff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.parentElement!.style.borderColor = "#0b83d6";
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: 22,
                  color: "#0b3b6f",
                  fontWeight: 800,
                  marginTop: 6,
                }}
              >
                {it.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
