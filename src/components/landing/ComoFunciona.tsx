import React from 'react';

// 1. Definición de datos para los pasos
const steps = [
  {
    titulo: "Identificación del votante",
    descripcion: "El usuario se autentica con su número de DNI antes de emitir su voto.",
    imagen: 'https://previews.123rf.com/images/stalkerstudent/stalkerstudent1501/stalkerstudent150100215/35071643-identification-card-icon-flat-design-style-eps.jpg', 
  },
  {
    titulo: "Selección del candidato",
    descripcion: "El votante elige su preferencia entre las opciones disponibles en pantalla.",
    imagen: 'https://img.freepik.com/vector-premium/iconos-candidatos_1134231-4705.jpg', 
  },
  {
    titulo: "Confirmación del voto",
    descripcion: "Antes de registrar el voto, el sistema solicita la confirmación del usuario.",
    imagen: 'https://img.freepik.com/vector-premium/icono-linea-confirmacion-voto-marca-comprobacion-voto-aprobacion-verificacion-elecciones-confirmacion-participacion-encuestas-democracia-boleta-voto-votante-voto-seguro-proceso-votacion-dia-elecciones_727385-14430.jpg', 
  },
  {
    titulo: "Almacenamiento seguro",
    descripcion: "Cada voto se guarda de forma cifrada y auditada para asegurar la integridad del proceso.",
    imagen: 'https://previews.123rf.com/images/wad/wad1605/wad160500208/57387306-secure-file-storage-icon-flat-design-long-shadow.jpg', 
  },
];

const ComoFunciona: React.FC = () => {
  return (
    <section 
        id="como-votar" 
        className="py-5 bg-como-funciona" // La imagen se aplica aquí
    >
      {/* 🚨 DIV WRAPPER PRINCIPAL: Ahora contendrá todo el texto y las tarjetas */}
      <div className="como-funciona-content"> 
        <div className="container text-center"> {/* Centrar el texto */}
          {/* 🚨 TÍTULO MOVIDO AQUÍ */}
          <h2 className="section-title text-center text-dark">Proceso Detallado: ¿Cómo Votar?</h2>
          <p className="fs-5 mb-5 text-dark fw-medium">Sigue los pasos para emitir tu voto electrónico de forma segura.</p> {/* Descripción */}
          
          <h2 className="section-title text-center mt-5 text-dark">¿Cómo funciona el sistema?</h2> {/* Mantenemos el título existente */}
          
          <div className="row mt-5">
            {steps.map((step, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 text-center p-3 shadow-sm process-step-card">
                  <div className="card-body">
                    <span className="step-number">{index + 1}.</span>
                    <h3 className="card-title fw-bold mt-2">{step.titulo}</h3>
                    <p className="card-text text-muted">{step.descripcion}</p>
                    
                    <img 
                      src={step.imagen} 
                      alt={step.titulo} 
                      className="img-fluid mt-4 process-image" 
                    />
                  </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;