import { motion } from "framer-motion";

export default function FinalCard() {
  return (
    <section className="bg-white py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
      >
        {/* barras superiores */}
        <div className="flex h-2">
          <div className="flex-1 bg-gray-300" />
          <div className="flex-1 bg-[#0b3b6f]" />
        </div>

        {/* contenido principal - TODOS los textos en azul oscuro */}
        <div className="grid md:grid-cols-2 gap-8 p-10 md:p-14 text-[#0b3b6f]">
          {/* Columna izquierda */}
          <div>
            <p className="uppercase text-sm tracking-widest text-[#0b3b6f] mb-3 font-semibold">
              ACERCA DE
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Conoce más sobre el proceso electoral 2026
            </h3>
            <p className="leading-relaxed mb-6">
              Estar informados es fundamental para una democracia saludable.
              ¿Quieres conocer más sobre este importante proceso electoral?
            </p>
            <motion.a
              href="/conoce-mas"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-[#0b3b6f] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#0a2f57] transition"
            >
              Saber más
            </motion.a>
          </div>

          {/* Divisor vertical */}
          <div className="hidden md:flex justify-center">
            <div className="w-px bg-gray-300 h-full"></div>
          </div>

          {/* Columna derecha */}
          <div>
            <p className="uppercase text-sm tracking-widest text-[#0b3b6f] mb-3 font-semibold">
              LO QUE DEBES SABER
            </p>
            <h4 className="text-xl font-semibold mb-4">
              Algunos puntos importantes sobre estas elecciones 2026
            </h4>
            <p className="mb-3">
              Las Elecciones Generales se realizarán el{" "}
              <strong className="text-[#0b3b6f]">Domingo 12 de abril de 2026 de 7 a. m. a 5 p. m.</strong>
            </p>
            <p className="mb-3">
              Donde más de 27 millones de peruanos elegirán quienes tomarán los
              siguientes cargos:
            </p>
            <p className="font-semibold">
              Presidente, vicepresidentes, senadores, diputados y titulares del
              parlamento andino.
            </p>
          </div>
        </div>

      </motion.div>
    </section>
  );
}