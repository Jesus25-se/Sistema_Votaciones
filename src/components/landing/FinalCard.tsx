import { motion } from "framer-motion";

export default function FinalCard() {
  return (
    <section className="bg-white py-16 px-6">
      {/* CONTENIDO PRINCIPAL ELIMINADO - SOLO QUEDA EL FOOTER */}

      {/* Pie de página de ParaElectores */}
      <motion.footer
        style={{
          backgroundColor: "#0b3b6f",
          color: "white",
          textAlign: "center",
          padding: "50px 20px",
          borderTop: "6px solid #ffd500",
          marginTop: "60px",
          fontFamily: "'Poppins', Arial, sans-serif",
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "left",
            gap: "30px",
          }}
        >
          {/* Columna 1: Oficina Central */}
          <div style={{ flex: 1, minWidth: "250px" }}>
            <h3
              style={{
                color: "#ffd500",
                marginBottom: "10px",
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              Oficina central
            </h3>
            <p style={{ margin: "6px 0", fontSize: "15px" }}>
              Jr. Washington 1894, Cercado de Lima
            </p>
            <p style={{ margin: "6px 0", fontSize: "15px" }}>
              Lunes a viernes de 8:30 a. m. a 5:00 p. m.
            </p>
          </div>

          {/* Columna 2: Contáctanos */}
          <div style={{ flex: 1, minWidth: "250px", textAlign: "center" }}>
            <h3
              style={{
                color: "#ffd500",
                marginBottom: "10px",
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              Contáctanos
            </h3>
            <p style={{ margin: "6px 0", fontSize: "15px" }}>
              informes@onpe.gob.pe
            </p>
            <p style={{ margin: "6px 0", fontSize: "15px" }}>(01) 4170630</p>
            <p style={{ margin: "6px 0", fontSize: "15px" }}>
              Whatsapp: 995 404 991
            </p>
          </div>

          {/* Columna 3: Síguenos */}
          <div
            style={{
              flex: 1,
              minWidth: "250px",
              textAlign: "right",
            }}
          >
            <h3
              style={{
                color: "#ffd500",
                marginBottom: "10px",
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              Síguenos
            </h3>
            <p style={{ fontSize: "20px", marginTop: "10px" }}>🌐 💬 📱</p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}