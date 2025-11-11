import { motion } from "framer-motion";

export default function AcercaDelProceso() {
  const eventos = [
    {
      titulo: "Convocatoria a Elecciones Generales 2026",
      fecha: "26 de marzo de 2025",
      descripcion:
        "Inicio oficial del proceso electoral. Desde este día se habilitan los plazos para inscripción de alianzas y partidos políticos.",
    },
    {
      titulo: "Inscripción de Alianzas Electorales",
      fecha: "Hasta el 12 de abril de 2025",
      descripcion:
        "Las organizaciones políticas registran sus alianzas ante el Jurado Nacional de Elecciones (JNE).",
    },
    {
      titulo: "Presentación de Listas de Candidatos",
      fecha: "Hasta el 12 de junio de 2025",
      descripcion:
        "Los partidos presentan sus listas para Presidente, Congreso y Parlamento Andino ante los jurados electorales especiales.",
    },
    {
      titulo: "Publicación de Listas Admitidas",
      fecha: "Agosto de 2025",
      descripcion:
        "El JNE publica las listas admitidas e inicia el periodo de tachas y exclusiones según la normativa vigente.",
    },
    {
      titulo: "Inicio de la Campaña Electoral",
      fecha: "Septiembre de 2025",
      descripcion:
        "Comienza oficialmente la difusión de propuestas y planes de gobierno por medios autorizados.",
    },
    {
      titulo: "Debates Presidenciales",
      fecha: "Octubre - Noviembre de 2025",
      descripcion:
        "El JNE organiza debates televisados para informar al electorado sobre los candidatos y sus propuestas.",
    },
    {
      titulo: "Elecciones Generales",
      fecha: "Abril de 2026",
      descripcion:
        "La ciudadanía acude a votar para elegir al Presidente, Vicepresidentes y Congresistas de la República.",
    },
  ];

  return (
    <div className="container py-5">
      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-5"
      >
        <h1 className="fw-bold text-primary mb-3">
          Acerca del Proceso Electoral 2026
        </h1>
        <div className="mx-auto bg-primary rounded-pill" style={{ width: "100px", height: "4px" }}></div>
        <p className="text-secondary mt-3 mx-auto" style={{ maxWidth: "600px" }}>
          Etapas principales del proceso electoral peruano para las Elecciones
          Generales 2026, garantizadas por la ONPE, el JNE y el RENIEC.
        </p>
      </motion.div>

      {/* Lista de eventos */}
      <div className="row justify-content-center g-4">
        {eventos.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 4px 14px rgba(13, 110, 253, 0.25)",
              backgroundColor: "#f8f9fa",
            }}
            className="col-md-6 col-lg-4"
          >
            <div className="card border-primary h-100 text-center shadow-sm p-3 transition-all">
              <div className="card-body">
                <h5 className="card-title fw-semibold text-primary mb-2">
                  {item.titulo}
                </h5>
                <p className="text-muted small mb-2">
                  <i className="bi bi-calendar-event me-2"></i>
                  {item.fecha}
                </p>
                <p className="card-text text-secondary small">
                  {item.descripcion}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Línea inferior decorativa */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="mx-auto mt-5 bg-primary rounded-pill"
        style={{ width: "80%", height: "4px", transformOrigin: "left" }}
      />
    </div>
  );
}
