// components/admin/DataUpload.tsx
import { useState, useRef } from "react";

type DatasetType = "votantes" | "partidos" | "resultados";

interface UploadedFile {
  name: string;
  type: DatasetType;
  size: number;
  uploadDate: Date;
  records: number;
  status: "success" | "error" | "processing";
}

interface DataUploadProps {
  onDataUploaded?: () => void;
}

export default function DataUpload({ onDataUploaded }: DataUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadHistory, setUploadHistory] = useState<UploadedFile[]>([]);
  const [activeDrag, setActiveDrag] = useState<DatasetType | null>(null);
  
  const fileInputRefs = {
    votantes: useRef<HTMLInputElement>(null),
    partidos: useRef<HTMLInputElement>(null),
    resultados: useRef<HTMLInputElement>(null),
  };

  const handleFileUpload = async (file: File, type: DatasetType) => {
    if (!file) return;

    setUploading(true);

    const newUpload: UploadedFile = {
      name: file.name,
      type,
      size: file.size,
      uploadDate: new Date(),
      records: Math.floor(Math.random() * 1000) + 100,
      status: "processing",
    };

    setUploadHistory((prev) => [newUpload, ...prev.slice(0, 9)]); // Mantener solo los 10 más recientes

    // Simular procesamiento
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const success = Math.random() > 0.2;
    newUpload.status = success ? "success" : "error";

    // Notificar que hay nuevos datos disponibles
    if (success && onDataUploaded) {
      onDataUploaded();
    }

    setUploadHistory((prev) =>
      prev.map((item) =>
        item.uploadDate === newUpload.uploadDate ? { ...newUpload } : item
      )
    );

    setUploading(false);

    if (fileInputRefs[type].current) {
      fileInputRefs[type].current!.value = "";
    }
  };

  const getDatasetConfig = (type: DatasetType) => {
    const configs = {
      votantes: {
        title: "Registro de Votantes",
        description: "Archivo CSV con datos de electores: DNI, nombres, apellidos y distrito electoral",
        accept: ".csv",
        icon: "👥",
      },
      partidos: {
        title: "Partidos Políticos",
        description: "Archivo JSON con información de partidos políticos, coaliciones y candidatos",
        accept: ".json",
        icon: "🏛️",
      },
      resultados: {
        title: "Resultados Electorales",
        description: "Archivo CSV o JSON con resultados históricos de procesos electorales",
        accept: ".csv,.json",
        icon: "📊",
      },
    };
    return configs[type];
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const UploadCard = ({ type }: { type: DatasetType }) => {
    const config = getDatasetConfig(type);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(true);
      setActiveDrag(type);
    };

    const handleDragLeave = () => {
      setIsDragging(false);
      setActiveDrag(null);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      setActiveDrag(null);
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleFileUpload(files[0], type);
      }
    };

    return (
      <div className="col-md-6 col-lg-4 mb-4">
        <div
          className={`card h-100 border-1 ${
            isDragging 
              ? "border-primary bg-primary-light shadow" 
              : "border-gray-300 shadow-sm"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{
            transition: "all 0.2s ease-in-out",
            backgroundColor: isDragging ? "#f0f7ff" : "#ffffff",
          }}
        >
          <div className="card-body d-flex flex-column p-4">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                <span className="fs-4">{config.icon}</span>
              </div>
              <h5 className="card-title fw-semibold text-dark mb-0">
                {config.title}
              </h5>
            </div>
            
            <p className="card-text text-muted small flex-grow-1 mb-4">
              {config.description}
            </p>

            <input
              type="file"
              ref={fileInputRefs[type]}
              accept={config.accept}
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  handleFileUpload(e.target.files[0], type);
                }
              }}
              className="d-none"
              id={`file-${type}`}
            />

            <button
              className="btn btn-primary w-100 mb-3 py-2 fw-semibold"
              onClick={() => fileInputRefs[type].current?.click()}
              disabled={uploading}
            >
              {uploading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" />
                  Procesando...
                </>
              ) : (
                "Seleccionar Archivo"
              )}
            </button>

            <div className="text-center">
              <small className="text-muted">o arrastrar archivo aquí</small>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getStatusIcon = (status: UploadedFile["status"]) => {
    switch (status) {
      case "success":
        return <i className="bi bi-check-circle-fill text-success me-2" />;
      case "error":
        return <i className="bi bi-x-circle-fill text-danger me-2" />;
      case "processing":
        return <span className="spinner-border spinner-border-sm text-warning me-2" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: UploadedFile["status"]) => {
    switch (status) {
      case "success":
        return "Completado";
      case "error":
        return "Error";
      case "processing":
        return "Procesando";
      default:
        return "";
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        padding: "2rem 1.5rem",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Header */}
      <div className="row mb-5">
        <div className="col">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h1 className="h2 fw-bold text-dark mb-2">Carga de Datos Electorales</h1>
              <p className="text-muted mb-0">
                Gestión de datasets para el sistema de administración electoral
              </p>
            </div>
            <div className="text-end">
              <div className="bg-white rounded-3 p-3 shadow-sm">
                <div className="text-primary fw-bold fs-4">
                  {uploadHistory.filter((f) => f.status === "success").length}
                </div>
                <div className="text-muted small">Cargas exitosas</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Cards */}
      <div className="row mb-5">
        <div className="col-12">
          <h3 className="h5 fw-semibold text-dark mb-4">Tipos de Dataset</h3>
          <div className="row">
            {(["votantes", "partidos", "resultados"] as DatasetType[]).map((type) => (
              <UploadCard key={type} type={type} />
            ))}
          </div>
        </div>
      </div>

      {/* Upload History */}
      <div className="row">
        <div className="col-12">
          <div className="card border-1 border-gray-300 shadow-sm">
            <div className="card-header bg-white border-bottom-1 border-gray-300 py-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-semibold text-dark mb-0">
                  <i className="bi bi-clock-history text-primary me-2" />
                  Historial de Cargas
                </h5>
                <span className="badge bg-primary bg-opacity-10 text-primary fs-6">
                  {uploadHistory.length} registros
                </span>
              </div>
            </div>
            <div className="card-body p-0">
              {uploadHistory.length === 0 ? (
                <div className="text-center text-muted py-5">
                  <i className="bi bi-inbox fs-1 d-block mb-3 opacity-50" />
                  <p className="mb-1">No hay archivos cargados</p>
                  <small>Los archivos procesados aparecerán en este historial</small>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th className="border-0 ps-4 fw-semibold text-dark">Archivo</th>
                        <th className="border-0 fw-semibold text-dark">Tipo</th>
                        <th className="border-0 fw-semibold text-dark">Tamaño</th>
                        <th className="border-0 fw-semibold text-dark">Registros</th>
                        <th className="border-0 fw-semibold text-dark">Fecha</th>
                        <th className="border-0 fw-semibold text-dark">Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {uploadHistory.map((file, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-light"}>
                          <td className="ps-4">
                            <div className="d-flex align-items-center">
                              <i className="bi bi-file-earmark-text text-muted me-3" />
                              <div>
                                <div className="fw-semibold text-dark">{file.name}</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-secondary bg-opacity-10 text-secondary text-uppercase">
                              {file.type}
                            </span>
                          </td>
                          <td className="text-muted">{formatFileSize(file.size)}</td>
                          <td className="fw-semibold">{file.records.toLocaleString()}</td>
                          <td className="text-muted">
                            {file.uploadDate.toLocaleDateString('es-ES', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              {getStatusIcon(file.status)}
                              <span className={`fw-semibold ${
                                file.status === "success" ? "text-success" :
                                file.status === "error" ? "text-danger" :
                                "text-warning"
                              }`}>
                                {getStatusText(file.status)}
                              </span>
                            </div>
                          </td>
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
    </div>
  );
}