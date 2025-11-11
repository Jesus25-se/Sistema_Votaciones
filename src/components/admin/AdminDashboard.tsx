import { useEffect, useState } from "react";
import { getVotos, simularVotos } from "../../services/mockData";
import type { Voto } from "../../types";
import { Bar, Doughnut } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
  ArcElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title, ArcElement);

export default function AdminDashboard() {
  const [votos, setVotos] = useState<Voto[]>([]);
  // Estado tipado con el tipo literal proveniente de Voto
  const [activeCategory, setActiveCategory] = useState<Voto["categoria"]>("presidencial");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      simularVotos();
      setVotos([...getVotos()]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // contarPorCategoria ya estaba bien tipado; nos aseguramos que use Voto["categoria"]
  const contarPorCategoria = (categoria: Voto["categoria"]) => {
    const filtrados = votos.filter((v) => v.categoria === categoria);
    const conteo: Record<string, number> = {};
    filtrados.forEach((v) => {
      conteo[v.partido] = (conteo[v.partido] || 0) + 1;
    });
    return conteo;
  };


  // definimos el array de categorias con el tipo correcto
  const categorias: Voto["categoria"][] = ["presidencial", "congreso", "parlamento"];

  // ajustar la firma para que acepte Voto["categoria"]
  const getVotosPorCategoria = (categoria: Voto["categoria"]) =>
    votos.filter((v) => v.categoria === categoria).length;

  const colorPalette = {
    primary: ["#0d6efd", "#6610f2", "#6f42c1", "#d63384", "#dc3545", "#fd7e14", "#ffc107", "#198754", "#20c997", "#0dcaf0"],
    pastel: ["#4dabf7", "#9775fa", "#da77f2", "#ff8787", "#ffa94d", "#ffd43b", "#69db7c", "#38d9a9", "#3bc9db", "#748ffc"],
  };

  // getCategoryData: parámetro tipado también
  const getCategoryData = (categoria: Voto["categoria"]) => {
    const datosContados = contarPorCategoria(categoria);
    const total = Object.values(datosContados).reduce((sum, count) => sum + count, 0);

    return {
      barData: {
        labels: Object.keys(datosContados),
        datasets: [
          {
            label: `Votos ${categoria}`,
            data: Object.values(datosContados),
            backgroundColor: colorPalette.primary.slice(0, Object.keys(datosContados).length),
            borderColor: "#ffffff",
            borderWidth: 2,
            borderRadius: 8,
          },
        ],
      },
      doughnutData: {
        labels: Object.keys(datosContados),
        datasets: [
          {
            data: Object.values(datosContados),
            backgroundColor: colorPalette.pastel.slice(0, Object.keys(datosContados).length),
            borderColor: "#ffffff",
            borderWidth: 3,
            hoverOffset: 15,
          },
        ],
      },
      total,
    };
  };

  return (
    <main
      className="container-fluid px-4 py-4"
      style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}
    >
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
        <div>
          <h2 className="fw-bold text-primary mb-1">Resultados en Tiempo Real</h2>
          <p className="text-muted small mb-0">
            Monitoreo en vivo del proceso electoral
          </p>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="bg-white rounded-3 shadow-sm px-4 py-2 d-flex align-items-center gap-3">
            <div className="bg-success rounded-circle" style={{ width: 10, height: 10 }}></div>
            <span className="text-success fw-semibold small">En Vivo</span>
            <span className="text-muted small">
              Actualizado:{" "}
              <span className="fw-semibold">{new Date().toLocaleTimeString()}</span>
            </span>
          </div>

          {/* SIN BOTONES - SOLO EL INDICADOR "EN VIVO" */}
        </div>
      </div>

      {/* BOTONES DE CATEGORÍA */}
      <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setActiveCategory(categoria)}
            className={`btn fw-semibold px-4 py-2 rounded-pill ${
              activeCategory === categoria ? "btn-primary text-white" : "btn-outline-primary"
            }`}
          >
            <i className="fas fa-vote-yea me-2"></i>
            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          </button>
        ))}
      </div>

      {/* GRÁFICOS DE LA CATEGORÍA SELECCIONADA */}
      <div className="row g-4 align-items-stretch mb-4">
        <div className="col-lg-8 col-12">
          <div className="card border-0 shadow-lg rounded-3 h-100">
            <div className="card-header bg-white border-0 py-3">
              <h5 className="card-title mb-0 text-primary text-capitalize fw-bold">
                {activeCategory} - Distribución de votos
              </h5>
            </div>
            <div className="card-body">
              <div style={{ height: "400px" }}>
                <Bar 
                  data={getCategoryData(activeCategory).barData} 
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: true, position: "bottom" },
                    },
                    scales: { y: { beginAtZero: true } },
                  }} 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-12">
          <div className="card border-0 shadow-lg rounded-3 h-100">
            <div className="card-header bg-white border-0 py-3">
              <h5 className="card-title mb-0 text-primary fw-bold">Resumen</h5>
            </div>
            <div className="card-body text-center">
              <div style={{ height: "250px" }} className="mb-3">
                <Doughnut
                  data={getCategoryData(activeCategory).doughnutData}
                  options={{
                    responsive: true,
                    plugins: { legend: { position: "bottom" } },
                    cutout: "65%",
                  }}
                />
              </div>
              <h3 className="text-primary fw-bold mb-0">
                {getCategoryData(activeCategory).total}
              </h3>
              <p className="text-muted small">Total de votos</p>
            </div>
          </div>
        </div>
      </div>

      {/* TARJETAS DE RESUMEN (CATEGORÍAS) */}
      <div className="row g-4 mb-4 text-center">
        {categorias.map((categoria) => {
          const total = getVotosPorCategoria(categoria);
          return (
            <div className="col-md-4 col-sm-6" key={categoria}>
              <div
                className={`card border-0 shadow-sm rounded-3 p-4 h-100 ${
                  activeCategory === categoria ? "border-primary border-2" : ""
                }`}
                onClick={() => setActiveCategory(categoria)}
                style={{ cursor: "pointer", transition: "0.3s" }}
              >
                <div
                  className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fas fa-chart-pie text-primary fs-4"></i>
                </div>
                <h6 className="text-capitalize">{categoria}</h6>
                <h3 className="text-primary fw-bold mb-0">{total}</h3>
                <p className="text-muted small">votos registrados</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}