import React from "react";
import type { CategoriaId } from "./VoteNavbar";

interface Partido {
  nombre: string;
  logo: string;
  candidato?: {
    nombre: string;
    foto: string;
  };
}

interface VoteSectionProps {
  categoria: CategoriaId;
  partidos: Partido[];
  selected?: string | null;
  onSelect: (partido: string) => void;
  onVotar: () => void;
  submitting?: boolean;
  datosConfirmados: boolean; // NUEVO: para habilitar selección
}

export default function VoteSection({
  categoria,
  partidos,
  selected,
  onSelect,
  onVotar,
  submitting = false,
  datosConfirmados,
}: VoteSectionProps) {
  return (
    <div className="container">
      <h3 className="text-center mb-4 fw-bold text-primary text-uppercase">
        {categoria === "presidencial"
          ? "Presidencial"
          : categoria === "congreso"
          ? "Congreso"
          : "Parlamento Andino"}
      </h3>

      <div className="row justify-content-center">
        {partidos.map((p, idx) => {
          const isSelected = selected === p.nombre;

          return (
            <div
              className="col-md-4 col-sm-6 mb-4"
              key={`${p.nombre}-${idx}`}
              onClick={() => datosConfirmados && onSelect(p.nombre)} // solo si confirmado
              style={{ cursor: datosConfirmados ? "pointer" : "not-allowed" }}
            >
              <div
                className={`partido-card position-relative ${
                  isSelected && datosConfirmados ? "selected border-primary border-3" : ""
                }`}
                style={{
                  backgroundColor: isSelected && datosConfirmados ? "#eaf2ff" : "#f8f9fa",
                  borderRadius: "12px",
                  border: "1px solid #dee2e6",
                  padding: "1rem",
                  boxShadow: isSelected && datosConfirmados
                    ? "0 0 8px rgba(0, 123, 255, 0.4)"
                    : "0 2px 6px rgba(0,0,0,0.05)",
                  transition: "all 0.2s ease",
                }}
              >
                {/* ✔ Check superior derecho solo si confirmado */}
                {isSelected && datosConfirmados && (
                  <div
                    className="position-absolute"
                    style={{
                      top: "10px",
                      right: "10px",
                      backgroundColor: "#0d6efd",
                      borderRadius: "50%",
                      width: "26px",
                      height: "26px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                    }}
                  >
                    <i className="bi bi-check-lg text-white fs-6"></i>
                  </div>
                )}

                {/* Logo + nombre del partido */}
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={p.logo}
                    alt={p.nombre}
                    className="me-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                    }}
                  />
                  <h6 className="fw-bold text-uppercase mb-0 text-primary">
                    {p.nombre}
                  </h6>
                </div>

                {/* Mostrar candidato solo en Presidencial */}
                {categoria === "presidencial" && p.candidato && (
                  <div className="d-flex align-items-center mt-2">
                    <img
                      src={p.candidato.foto}
                      alt={p.candidato.nombre}
                      className="rounded-circle shadow-sm me-3"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                        border: "2px solid #dee2e6",
                      }}
                    />
                    <p
                      className="fw-semibold text-dark mb-0"
                      style={{ fontSize: "0.95rem" }}
                    >
                      {p.candidato.nombre}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Botón Votar */}
      <div className="text-center mt-3">
        <button
          className="btn btn-primary px-5"
          disabled={!selected || submitting || !datosConfirmados} // solo habilitado si confirmado
          onClick={onVotar}
        >
          {submitting ? "Registrando..." : "Votar"}
        </button>
      </div>
    </div>
  );
}
