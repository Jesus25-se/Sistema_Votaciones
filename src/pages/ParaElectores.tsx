import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";

export default function ParaElectores() {
  return (
    <div
      style={{
        fontFamily: "'Poppins', Arial, sans-serif",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Sección principal (fondo blanco) - Ocupa el espacio disponible */}
      <section
        style={{
          backgroundColor: "#ffffff",
          color: "#0b3b6f",
          padding: "80px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1, // Esto hace que ocupe el espacio disponible
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
              territorio nacional el aplicativo "Elige tu local de votación".
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

      {/* FOOTER - Siempre abajo */}
      <Footer />
    </div>
  );
}