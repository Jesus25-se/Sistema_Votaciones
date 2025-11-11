import { motion } from "framer-motion";

export default function ParaElectores() {
  return (
    <div
      style={{
        fontFamily: "'Poppins', Arial, sans-serif",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Sección principal (fondo blanco) */}
      <section
        style={{
          backgroundColor: "#ffffff",
          color: "#0b3b6f",
          padding: "80px 0 140px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "40px",
            maxWidth: "1200px",
            width: "90%",
          }}
        >
          {/* Texto animado */}
          <motion.div
            style={{ flex: 1, minWidth: "320px" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "800",
                marginBottom: "20px",
                color: "#0b3b6f",
              }}
            >
              ETLV a nivel nacional
            </h1>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.6,
                marginBottom: "20px",
              }}
            >
              La ONPE pondrá a disposición de todos los peruanos residentes en
              territorio nacional el aplicativo “Elige tu local de votación”.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.6,
                marginBottom: "20px",
              }}
            >
              Así, se podrán seleccionar hasta 3 opciones de local de votación,
              que la ONPE tomará en consideración al momento de designar el local
              de votación de cada persona.
            </p>
            <motion.p
              style={{
                fontSize: "17px",
                fontWeight: "700",
                marginTop: "25px",
                color: "#ffd500",
                fontFamily: "'Poppins', sans-serif",
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Próximamente elige tu local de votación aquí
            </motion.p>
          </motion.div>

          {/* Imagen animada */}
          <motion.div
            style={{
              flex: 1,
              minWidth: "320px",
              display: "flex",
              justifyContent: "center",
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="https://eg2026.onpe.gob.pe/assets/img/Elige-local-16set.png"
              alt="Elige tu local de votación"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "14px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                transition: "transform 0.3s ease",
              }}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Información de contacto (fondo azul, en 3 columnas) */}
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
    </div>
  );
}
