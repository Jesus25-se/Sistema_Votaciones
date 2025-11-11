import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer text-center py-4" style={{ backgroundColor: "#0d3b66", color: "#ffffff" }}>
      <p className="mb-2 fw-semibold">
        © 2025 Sistema Nacional de Votaciones
      </p>
      <p className="small mb-2">
        Desarrollado con fines educativos — Todos los derechos reservados.
      </p>
      <p className="mb-2 fw-semibold">
        SÍGUENOS EN NUESTRAS REDES SOCIALES:
      </p>
      {/* Redes sociales */}
      <div className="d-flex justify-content-center gap-3 mt-2">
        <a href="https://www.facebook.com/ONPEoficial?locale=es_LA" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff" }}>
          <Facebook size={20} />
        </a>
        <a href="https://x.com/ONPE_oficial" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff" }}>
          <Twitter size={20} />
        </a>
        <a href="https://www.instagram.com/onpe_oficial/" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff" }}>
          <Instagram size={20} />
        </a>
        <a href="https://www.linkedin.com/company/onpeoficial/?originalSubdomain=pe" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff" }}>
          <Linkedin size={20} />
        </a>
      </div>
    </footer>
  );
}
