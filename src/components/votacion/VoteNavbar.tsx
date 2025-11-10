// components/votacion/VoteNavbar.tsx
import React from "react";

export type CategoriaId = "presidencial" | "congreso" | "parlamento";

interface VoteNavbarProps {
  current: CategoriaId;
  onSelect: (c: CategoriaId) => void;
}

export default function VoteNavbar({ current, onSelect }: VoteNavbarProps) {
  const categorias: { id: CategoriaId; label: string }[] = [
    { id: "presidencial", label: "Presidencial" },
    { id: "congreso", label: "Congreso" },
    { id: "parlamento", label: "Parlamento Andino" },
  ];

  return (
    <nav
      className="d-flex justify-content-center align-items-center py-3 mb-4 shadow-sm"
      style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid #e6eef5" }}
    >
      {categorias.map((cat) => {
        const active = cat.id === current;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`btn mx-2 px-4 fw-semibold ${
              active ? "btn-primary" : "btn-outline-secondary"
            }`}
            style={{ minWidth: 170 }}
            type="button"
          >
            {cat.label}
          </button>
        );
      })}
    </nav>
  );
}
