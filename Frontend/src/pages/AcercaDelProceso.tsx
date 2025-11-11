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
    <div className="min-h-screen bg-white py-10 px-4 flex flex-col items-center">
      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-8"
      >
        <h1 className="text-2xl font-bold text-[#0b3b6f] mb-2">
          Acerca del Proceso Electoral 2026
        </h1>
        <div className="h-1 w-20 bg-[#0b3b6f] mx-auto rounded-full mb-3"></div>
        <p className="text-gray-700 max-w-md mx-auto text-xs leading-relaxed">
          Etapas principales del proceso electoral peruano para las Elecciones
          Generales 2026, garantizadas por la ONPE, el JNE y el RENIEC.
        </p>
      </motion.div>

      {/* Lista de eventos */}
      <div className="flex flex-col items-center gap-3 w-full max-w-2xl">
        {eventos.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 4px 12px rgba(11, 59, 111, 0.25)",
              backgroundColor: "#f2f7ff",
            }}
            className="bg-white border border-[#0b3b6f] rounded-lg p-4 shadow-sm text-center transition-all duration-300 w-full"
          >
            <h2 className="text-base font-semibold text-[#0b3b6f] mb-1">
              {item.titulo}
            </h2>
            <p className="text-xs text-blue-700 font-medium mb-1">
              📅 {item.fecha}
            </p>
            <p className="text-gray-600 text-xs leading-relaxed">
              {item.descripcion}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Línea decorativa inferior */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full max-w-2xl h-0.5 bg-[#0b3b6f] mt-10 rounded-full origin-left"
      />
    </div>
  );
}