import { useState, useEffect } from "react";
import { getVotos } from "../../services/mockData";

interface ElectionMetrics {
  totalVotes: number;
  participationRate: number;
  votesPerHour: number;
  leadingParty: string;
  votesByCategory: {
    presidencial: number;
    congreso: number;
    parlamento: number;
  };
  recentActivity: {
    time: string;
    votes: number;
  }[];
}

export default function MetricsDashboard() {
  const [metrics, setMetrics] = useState<ElectionMetrics>({
    totalVotes: 0,
    participationRate: 0,
    votesPerHour: 0,
    leadingParty: "N/A",
    votesByCategory: {
      presidencial: 0,
      congreso: 0,
      parlamento: 0,
    },
    recentActivity: [],
  });

  const [timeRange, setTimeRange] = useState<"1h" | "24h" | "7d">("24h");

  useEffect(() => {
    const calculateMetrics = () => {
      const votos = getVotos();

      const byCategory = {
        presidencial: votos.filter((v) => v.categoria === "presidencial").length,
        congreso: votos.filter((v) => v.categoria === "congreso").length,
        parlamento: votos.filter((v) => v.categoria === "parlamento").length,
      };

      const partyCounts: Record<string, number> = {};
      votos.forEach((v) => {
        partyCounts[v.partido] = (partyCounts[v.partido] || 0) + 1;
      });

      const leadingParty =
        Object.entries(partyCounts).sort(([, a], [, b]) => b - a)[0]?.[0] || "N/A";

      const now = new Date();
      const recentActivity = Array.from({ length: 6 }, (_, i) => {
        const time = new Date(now.getTime() - i * 10 * 60 * 1000);
        return {
          time: time.toLocaleTimeString("es-PE", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          votes: Math.floor(Math.random() * 20) + 5,
        };
      }).reverse();

      setMetrics({
        totalVotes: votos.length,
        participationRate: Math.min((votos.length / 5000) * 100, 100),
        votesPerHour: Math.floor(votos.length / 24),
        leadingParty,
        votesByCategory: byCategory,
        recentActivity,
      });
    };

    calculateMetrics();
    const interval = setInterval(calculateMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  // ---- COMPONENTES ----
  const MetricCard = ({
    title,
    value,
    subtitle,
    icon,
    gradient,
    trend,
  }: {
    title: string;
    value: string | number;
    subtitle?: string;
    icon: string;
    gradient: string;
    trend?: { value: number; isPositive: boolean };
  }) => (
    <div
      className="card border-0 shadow-lg h-100 text-white"
      style={{
        background: gradient,
        borderRadius: "16px",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
      }}
    >
      <div className="card-body p-3">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div>
            <h6 className="fw-semibold text-white mb-1" style={{ fontSize: "0.85rem" }}>{title}</h6>
            <h2 className="fw-bold mb-0" style={{ fontSize: "1.8rem" }}>{value}</h2>
            {subtitle && <p className="text-white small mb-0" style={{ fontSize: "0.8rem" }}>{subtitle}</p>}
          </div>
          <div
            className="p-2 rounded-circle bg-white bg-opacity-25 d-flex align-items-center justify-content-center"
            style={{
              fontSize: "1.4rem",
              width: 45,
              height: 45,
              backdropFilter: "blur(4px)",
            }}
          >
            {icon}
          </div>
        </div>
        {trend && (
          <div className="d-flex align-items-center mt-2">
            <span
              className={`badge bg-${
                trend.isPositive ? "success" : "danger"
              } bg-opacity-25 text-${
                trend.isPositive ? "success" : "danger"
              } me-2`}
              style={{ fontSize: "0.75rem" }}
            >
              {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
            </span>
            <small className="text-white" style={{ fontSize: "0.75rem" }}>vs período anterior</small>
          </div>
        )}
      </div>
    </div>
  );

  const ProgressBar = ({
    label,
    value,
    max = 100,
    color = "primary",
  }: {
    label: string;
    value: number;
    max?: number;
    color?: string;
  }) => (
    <div className="mb-3">
      <div className="d-flex justify-content-between mb-1">
        <span className="fw-semibold text-dark" style={{ fontSize: "0.9rem" }}>{label}</span>
        <span className="text-muted" style={{ fontSize: "0.9rem" }}>{value}</span>
      </div>
      <div
        className="progress"
        style={{
          height: "10px",
          borderRadius: "15px",
          backgroundColor: "#e9ecef",
        }}
      >
        <div
          className={`progress-bar bg-${color}`}
          style={{
            width: `${(value / max) * 100}%`,
            transition: "width 0.6s ease",
            borderRadius: "15px",
          }}
        ></div>
      </div>
    </div>
  );

  // ---- DISEÑO PRINCIPAL ----
  return (
    <div
      className="container-fluid"
      style={{
        padding: "30px 20px",
        minHeight: "100vh",
        background:
          "linear-gradient(145deg, #f3f5f9 0%, #eef1f7 50%, #e8edf3 100%)",
      }}
    >
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h2 className="fw-bold text-primary mb-1" style={{ fontSize: "1.6rem" }}>
            📊 Dashboard de Métricas Electorales
          </h2>
          <p className="text-secondary mb-0" style={{ fontSize: "0.9rem" }}>
            Monitoreo en tiempo real del proceso electoral
          </p>
        </div>
        <div className="btn-group shadow-sm" style={{ fontSize: "0.9rem" }}>
          {(["1h", "24h", "7d"] as const).map((range) => (
            <button
              key={range}
              className={`btn ${
                timeRange === range
                  ? "btn-primary text-white"
                  : "btn-outline-primary bg-white"
              } fw-semibold`}
              onClick={() => setTimeRange(range)}
              style={{ 
                padding: "6px 12px",
                fontSize: "0.85rem"
              }}
            >
              {range.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* MÉTRICAS */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <MetricCard
            title="Total de Votos"
            value={metrics.totalVotes.toLocaleString()}
            subtitle="Votos emitidos"
            icon="🗳️"
            gradient="linear-gradient(135deg, #004aad 0%, #0066ff 100%)"
            trend={{ value: 12, isPositive: true }}
          />
        </div>
        <div className="col-md-3">
          <MetricCard
            title="Tasa de Participación"
            value={`${metrics.participationRate.toFixed(1)}%`}
            subtitle="Del padrón electoral"
            icon="👥"
            gradient="linear-gradient(135deg, #00b894 0%, #00916e 100%)"
            trend={{ value: 5, isPositive: true }}
          />
        </div>
        <div className="col-md-3">
          <MetricCard
            title="Votos por Hora"
            value={metrics.votesPerHour}
            subtitle="Promedio actual"
            icon="⏱️"
            gradient="linear-gradient(135deg, #fbc531 0%, #e1a500 100%)"
            trend={{ value: 8, isPositive: true }}
          />
        </div>
        <div className="col-md-3">
          <MetricCard
            title="Partido Líder"
            value={metrics.leadingParty.split(" ")[0]}
            subtitle={metrics.leadingParty}
            icon="🏆"
            gradient="linear-gradient(135deg, #00a8ff 0%, #0066cc 100%)"
          />
        </div>
      </div>

      {/* GRÁFICOS Y ACTIVIDAD */}
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100 rounded-3">
            <div className="card-header bg-white border-0 py-3">
              <h5 className="fw-bold mb-0 text-dark" style={{ fontSize: "1.1rem" }}>📈 Distribución por Categoría</h5>
            </div>
            <div className="card-body py-3">
              <ProgressBar
                label="Voto Presidencial"
                value={metrics.votesByCategory.presidencial}
                max={metrics.totalVotes}
                color="primary"
              />
              <ProgressBar
                label="Voto Congresal"
                value={metrics.votesByCategory.congreso}
                max={metrics.totalVotes}
                color="success"
              />
              <ProgressBar
                label="Parlamento Andino"
                value={metrics.votesByCategory.parlamento}
                max={metrics.totalVotes}
                color="warning"
              />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100 rounded-3">
            <div className="card-header bg-white border-0 py-3 d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0 text-dark" style={{ fontSize: "1.1rem" }}>📋 Actividad Reciente</h5>
              <span className="badge bg-primary bg-opacity-10 text-primary" style={{ fontSize: "0.75rem" }}>En tiempo real</span>
            </div>
            <div className="card-body py-3">
              {metrics.recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between align-items-center py-2 border-bottom"
                  style={{ fontSize: "0.9rem" }}
                >
                  <div>
                    <strong>{activity.time}</strong>
                    <small className="text-muted d-block" style={{ fontSize: "0.8rem" }}>
                      Nuevos votos registrados
                    </small>
                  </div>
                  <span className="badge bg-success bg-opacity-10 text-success" style={{ fontSize: "0.8rem" }}>
                    +{activity.votes} votos
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ALERTAS */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm rounded-3">
            <div className="card-header bg-white border-0 py-3">
              <h5 className="fw-bold mb-0 text-dark" style={{ fontSize: "1.1rem" }}>⚠️ Alertas del Sistema</h5>
            </div>
            <div className="card-body py-3">
              <div className="alert alert-warning d-flex align-items-center shadow-sm rounded-2 mb-0" style={{ fontSize: "0.9rem" }}>
                <span className="me-2 fs-5">🔔</span>
                <div>
                  <strong>Alerta de Participación</strong>
                  <p className="mb-0 text-secondary" style={{ fontSize: "0.85rem" }}>
                    La participación en zonas rurales está por debajo del 40%.
                    Considerar medidas de promoción.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}