import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import type { Voto } from "../../types";
import type { CategoriaId } from "./VoteNavbar";

import VoteNavbar from "./VoteNavbar";
import VoteSection from "./VoteSection";

import {
  getUsuarioPorDni,
  saveVoto,
  partidosSimulados,
} from "../../services/mockData";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function VoteForm() {
  const navigate = useNavigate();
  const [dni, setDni] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [categoriaActual, setCategoriaActual] =
    useState<CategoriaId>("presidencial");

  const [selecciones, setSelecciones] = useState<Record<CategoriaId, string | null>>({
    presidencial: null,
    congreso: null,
    parlamento: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [datosConfirmados, setDatosConfirmados] = useState(false);

  const partidosPorCategoria = useMemo(() => {
    const categorias: CategoriaId[] = ["presidencial", "congreso", "parlamento"];
    const obj = {} as Record< CategoriaId, { nombre: string; logo: string; candidato: { nombre: string; foto: string } }[]>;
    categorias.forEach((cat) => {
      obj[cat] = partidosSimulados.map((p) => ({
        nombre: p.nombre,
        logo: p.logo,
        candidato: p.candidatos[cat],
      }));
    });
    return obj;
  }, []);

  const handleBuscar = () => {
    setDatosConfirmados(false);
    if (!dni.trim()) {
      setNombres(""); setApellidos(""); setDepartamento("");
      toast.error("Ingrese un DNI válido");
      return;
    }
    const usuario = getUsuarioPorDni(dni.trim());
    if (usuario) {
      setNombres(usuario.nombres);
      setApellidos(usuario.apellidos);
      setDepartamento(usuario.departamento);
      toast.info("Datos cargados, por favor confirme");
    } else {
      setNombres(""); setApellidos(""); setDepartamento("");
      toast.error("DNI no encontrado en el registro");
    }
  };

  const handleConfirmarDatos = () => {
    if (!nombres || !apellidos) {
      toast.error("No hay datos para confirmar.");
      return;
    }
    setDatosConfirmados(true);
    toast.success("Datos confirmados. Ahora puede votar.");
  };

  const handleSelectPartido = (nombre: string) => {
    setSelecciones((s) => ({ ...s, [categoriaActual]: nombre }));
  };

  const handleConfirmVoto = async () => {
    if (!dni || !nombres) {
      toast.error("Busque su DNI antes de emitir un voto.");
      return;
    }
    const partidoSeleccionado = selecciones[categoriaActual];
    if (!partidoSeleccionado) {
      toast.error("Seleccione un partido antes de votar.");
      return;
    }

    const partidoInfo = partidosPorCategoria[categoriaActual].find(
      (p) => p.nombre === partidoSeleccionado
    );

    setSubmitting(true);
    const voto: Voto = {
      dni: dni.trim(),
      nombres,
      apellidos,
      categoria: categoriaActual,
      partido: partidoSeleccionado,
      candidato: partidoInfo?.candidato?.nombre || "Sin candidato",
    };
    const exito = saveVoto(voto);
    setSubmitting(false);

    if (exito) {
      const orden: CategoriaId[] = ["presidencial", "congreso", "parlamento"];
      const idx = orden.indexOf(categoriaActual);
      if (idx < orden.length - 1) {
        toast.success(`Voto en ${categoriaActual} registrado correctamente.`);
        setCategoriaActual(orden[idx + 1]);
      } else {
        toast.success("Has completado las 3 votaciones. ¡Gracias por participar!");
        setTimeout(() => navigate("/"), 1800);
      }
    } else {
      toast.error("Ya ha emitido su voto en esta categoría o hubo un error.");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 980 }}>
      <h2 className="text-center fw-bold mb-4 text-primary">
        Boleta de Votación Electrónica
      </h2>

      <div className="card p-4 border-0 shadow-sm mb-4">
        <div className="row mb-3">
          <div className="col-md-8">
            <label className="form-label fw-semibold">DNI</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su DNI"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
            />
          </div>
          <div className="col-md-4 d-flex align-items-end">
            <button className="btn btn-primary w-100 fw-semibold" onClick={handleBuscar}>
              Buscar
            </button>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label fw-semibold">Nombres</label>
            <input className="form-control" value={nombres} readOnly />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-semibold">Apellidos</label>
            <input className="form-control" value={apellidos} readOnly />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-semibold">Departamento</label>
            <input className="form-control" value={departamento} readOnly />
          </div>
        </div>

        {nombres && apellidos && !datosConfirmados && (
          <div className="text-center mb-3">
            <button className="btn btn-success px-4 fw-semibold" onClick={handleConfirmarDatos}>
              Confirmar mis datos
            </button>
          </div>
        )}

        <p className="text-muted small mb-0">
          Siga el proceso por categorías: seleccione una categoría, elija un partido y confirme su voto.
        </p>
      </div>

      <VoteNavbar current={categoriaActual} onSelect={setCategoriaActual} />

      <div className="card p-3 border-0 shadow-sm mb-4">
        <VoteSection
          categoria={categoriaActual}
          partidos={partidosPorCategoria[categoriaActual]}
          selected={selecciones[categoriaActual] ?? null}
          onSelect={handleSelectPartido}
          onVotar={handleConfirmVoto}
          submitting={submitting}
          datosConfirmados={datosConfirmados}
        />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}
