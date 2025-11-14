// components/admin/DataCleaning.tsx
import { useState, useEffect } from "react";

interface DataIssue {
  id: string;
  type: "duplicate" | "incomplete" | "invalid" | "inconsistent";
  severity: "low" | "medium" | "high" | "critical";
  description: string;
  affectedRecords: number;
  dataset: "votantes" | "partidos" | "resultados";
}

interface CleaningStats {
  totalIssues: number;
  dataQualityScore: number;
  lastCleaning: Date | null;
}

export default function DataCleaning() {
  const [issues, setIssues] = useState<DataIssue[]>([]);
  const [stats, setStats] = useState<CleaningStats>({
    totalIssues: 0,
    dataQualityScore: 0,
    lastCleaning: null,
  });
  const [isScanning, setIsScanning] = useState(false);

  // Simular escaneo de datos
  const handleScanData = async () => {
    setIsScanning(true);
    
    // Simular proceso de escaneo
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockIssues: DataIssue[] = [
      {
        id: "1",
        type: "duplicate",
        severity: "high",
        description: "Registros duplicados de votantes",
        affectedRecords: 45,
        dataset: "votantes"
      },
      {
        id: "2",
        type: "incomplete",
        severity: "medium",
        description: "Campos de dirección incompletos",
        affectedRecords: 128,
        dataset: "votantes"
      },
      {
        id: "3",
        type: "invalid",
        severity: "critical",
        description: "DNI con formato incorrecto",
        affectedRecords: 23,
        dataset: "votantes"
      }
    ];

    setIssues(mockIssues);
    setStats({
      totalIssues: mockIssues.length,
      dataQualityScore: 85.2,
      lastCleaning: new Date()
    });
    
    setIsScanning(false);
  };

  const handleCleanData = async () => {
    setIsScanning(true);
    
    // Simular limpieza
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIssues([]);
    setStats(prev => ({
      ...prev,
      totalIssues: 0,
      dataQualityScore: 98.7,
      lastCleaning: new Date()
    }));
    
    setIsScanning(false);
  };

  const getSeverityColor = (severity: DataIssue["severity"]) => {
    const colors = {
      critical: "danger",
      high: "warning",
      medium: "info",
      low: "secondary"
    };
    return colors[severity];
  };

  const getTypeIcon = (type: DataIssue["type"]) => {
    const icons = {
      duplicate: "📋",
      incomplete: "📝",
      invalid: "❌",
      inconsistent: "🔀"
    };
    return icons[type];
  };

  const StatsCard = ({ title, value, subtitle, color }: { title: string; value: string | number; subtitle: string; color: string }) => (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body text-center p-4">
        <div className={`bg-${color} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`} 
             style={{ width: '80px', height: '80px' }}>
          <h3 className={`fw-bold text-${color} mb-0`}>{value}</h3>
        </div>
        <h5 className="fw-semibold text-dark mb-1">{title}</h5>
        <small className="text-muted">{subtitle}</small>
      </div>
    </div>
  );

  return (
    <div className="container-fluid" style={{ padding: "2rem 1.5rem", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      
      {/* Header */}
      <div className="row mb-4">
        <div className="col">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h1 className="h2 fw-bold text-dark mb-2">Limpieza de Datos Electorales</h1>
              <p className="text-muted mb-0">
                Escaneo y corrección automática de problemas en los datasets
              </p>
            </div>
            <div className="text-end">
              <div className="bg-white rounded-3 p-3 shadow-sm">
                <div className="text-primary fw-bold fs-4">{stats.dataQualityScore}%</div>
                <div className="text-muted small">Calidad de datos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas Simplificadas */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <StatsCard 
            title="Problemas Detectados" 
            value={stats.totalIssues} 
            subtitle="Issues activos" 
            color="warning" 
          />
        </div>
        <div className="col-md-4 mb-3">
          <StatsCard 
            title="Calidad de Datos" 
            value={`${stats.dataQualityScore}%`} 
            subtitle="Score general" 
            color="success" 
          />
        </div>
        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center p-4 d-flex flex-column justify-content-center">
              <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" 
                   style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-clock-history fs-2 text-dark"></i>
              </div>
              <h5 className="fw-semibold text-dark mb-1">Última Revisión</h5>
              <small className="text-muted">
                {stats.lastCleaning 
                  ? stats.lastCleaning.toLocaleDateString('es-ES')
                  : 'No escaneado'
                }
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Acciones Principales */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center p-5">
              <div className="row justify-content-center">
                <div className="col-md-4 mb-3">
                  <button
                    className="btn btn-primary btn-lg w-100 py-3"
                    onClick={handleScanData}
                    disabled={isScanning}
                  >
                    {isScanning ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Escaneando...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-search me-2" />
                        Escanear Datos
                      </>
                    )}
                  </button>
                  <small className="text-muted mt-2 d-block">
                    Busca problemas en los datasets cargados
                  </small>
                </div>
                <div className="col-md-4 mb-3">
                  <button
                    className="btn btn-success btn-lg w-100 py-3"
                    onClick={handleCleanData}
                    disabled={isScanning || issues.length === 0}
                  >
                    {isScanning ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Limpiando...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-broom me-2" />
                        Limpiar Todo
                      </>
                    )}
                  </button>
                  <small className="text-muted mt-2 d-block">
                    Corrige automáticamente todos los problemas
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Problemas Detectados */}
      <div className="row">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 py-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-semibold text-dark mb-0">
                  <i className="bi bi-exclamation-triangle text-warning me-2" />
                  Problemas Detectados
                </h5>
                {issues.length > 0 && (
                  <span className="badge bg-warning bg-opacity-10 text-warning">
                    {issues.length} problemas
                  </span>
                )}
              </div>
            </div>
            <div className="card-body p-0">
              {issues.length === 0 ? (
                <div className="text-center text-muted py-5">
                  <i className="bi bi-check-circle fs-1 d-block mb-3 opacity-50" />
                  <p className="mb-1">No hay problemas detectados</p>
                  <small>Haz clic en "Escanear Datos" para buscar problemas</small>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th className="border-0 ps-4 fw-semibold text-dark">Problema</th>
                        <th className="border-0 fw-semibold text-dark">Dataset</th>
                        <th className="border-0 fw-semibold text-dark">Severidad</th>
                        <th className="border-0 fw-semibold text-dark">Registros</th>
                      </tr>
                    </thead>
                    <tbody>
                      {issues.map((issue) => (
                        <tr key={issue.id}>
                          <td className="ps-4">
                            <div className="d-flex align-items-center">
                              <span className="me-3 fs-5">{getTypeIcon(issue.type)}</span>
                              <div>
                                <div className="fw-semibold text-dark text-capitalize">
                                  {issue.type}
                                </div>
                                <small className="text-muted">{issue.description}</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-secondary bg-opacity-10 text-secondary text-capitalize">
                              {issue.dataset}
                            </span>
                          </td>
                          <td>
                            <span className={`badge bg-${getSeverityColor(issue.severity)} bg-opacity-10 text-${getSeverityColor(issue.severity)} text-capitalize`}>
                              {issue.severity}
                            </span>
                          </td>
                          <td className="fw-semibold">{issue.affectedRecords.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Información del Sistema */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 py-3">
              <h5 className="fw-semibold text-dark mb-0">
                <i className="bi bi-info-circle text-primary me-2" />
                Información del Sistema
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="fw-semibold mb-3">Problemas que detectamos:</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check text-success me-2" />
                      <strong>Duplicados:</strong> Registros repetidos
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-success me-2" />
                      <strong>Incompletos:</strong> Campos vacíos o faltantes
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-success me-2" />
                      <strong>Inválidos:</strong> Formatos incorrectos
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 className="fw-semibold mb-3">Próximamente:</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-clock text-warning me-2" />
                      <strong>Integración con RENIEC</strong> para validación en tiempo real
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-clock text-warning me-2" />
                      <strong>Limpieza programada</strong> automática
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-clock text-warning me-2" />
                      <strong>Reportes detallados</strong> de calidad de datos
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}