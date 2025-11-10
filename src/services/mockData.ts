import type { Voto } from "../types";

// 🧩 Importar logos de partidos
import partidoA from "../assets/partidos/partidoA.png";
import partidoB from "../assets/partidos/partidoB.png";
import partidoC from "../assets/partidos/partidoC.png";
import partidoD from "../assets/partidos/partidoD.png";
import partidoE from "../assets/partidos/partidoE.png";
import partidoF from "../assets/partidos/partidoF.png";
import partidoG from "../assets/partidos/partidoG.png";
import partidoH from "../assets/partidos/partidoH.png";
import partidoI from "../assets/partidos/partidoI.png";
import partidoJ from "../assets/partidos/partidoJ.png";
import partidoK from "../assets/partidos/partidoK.png";
import partidoL from "../assets/partidos/partidoL.png";
import partidoM from "../assets/partidos/partidoM.png";
import partidoN from "../assets/partidos/partidoN.png";
import partidoO from "../assets/partidos/partidoO.png";

// 🧩 Importar fotos de candidatos (temporalmente genéricas)
import candidatoA from "../assets/candidatos/candidatoA.png";
import candidatoB from "../assets/candidatos/candidatoB.png";
import candidatoC from "../assets/candidatos/candidatoC.png";
import candidatoD from "../assets/candidatos/candidatoD.png";
import candidatoE from "../assets/candidatos/candidatoE.png";
import candidatoF from "../assets/candidatos/candidatoF.png";
import candidatoG from "../assets/candidatos/candidatoG.png";
import candidatoH from "../assets/candidatos/candidatoH.png";
import candidatoI from "../assets/candidatos/candidatoI.png";
import candidatoJ from "../assets/candidatos/candidatoJ.png";
import candidatoK from "../assets/candidatos/candidatoK.png";
import candidatoL from "../assets/candidatos/candidatoL.png";
import candidatoM from "../assets/candidatos/candidatoM.png";
import candidatoN from "../assets/candidatos/candidatoN.png";
import candidatoO from "../assets/candidatos/candidatoO.png";

// 👤 Usuarios simulados
const nombresSimulados: Record<string, { nombres: string; apellidos: string; departamento: string }> = {
  "12345678": { nombres: "Juan Carlos", apellidos: "Pérez Gómez", departamento: "Lima" },
  "87654321": { nombres: "María Fernanda", apellidos: "López Díaz", departamento: "Arequipa"},
  "11112222": { nombres: "Pedro José", apellidos: "Ramírez Torres", departamento: "Cuzco" },
};

// 🗳️ Partidos simulados (con candidatos + fotos por categoría)
export const partidosSimulados = [
  {
    nombre: "ALIANZA PARA EL PROGRESO",
    logo: partidoA,
    candidatos: {
      presidencial: { nombre: "César Acuña", foto: candidatoA },
      congreso: { nombre: "Lucía Ramos", foto: candidatoA },
      parlamento: { nombre: "Eduardo Chacón", foto: candidatoA },
    },
  },
  {
    nombre: "PERÚ LIBRE",
    logo: partidoB,
    candidatos: {
      presidencial: { nombre: "Pedro Castillo", foto: candidatoB },
      congreso: { nombre: "María Gutiérrez", foto: candidatoB },
      parlamento: { nombre: "Diego Vera", foto: candidatoB },
    },
  },
  {
    nombre: "FREPAP",
    logo: partidoC,
    candidatos: {
      presidencial: { nombre: "Ruth Luque", foto: candidatoC },
      congreso: { nombre: "Juan Ríos", foto: candidatoC },
      parlamento: { nombre: "Andrea León", foto: candidatoC },
    },
  },
  {
    nombre: "FUERZA POPULAR",
    logo: partidoD,
    candidatos: {
      presidencial: { nombre: "Keiko Fujimori", foto: candidatoD },
      congreso: { nombre: "Oscar Martínez", foto: candidatoD },
      parlamento: { nombre: "Rosa Villalobos", foto: candidatoD },
    },
  },
  {
    nombre: "APRA",
    logo: partidoE,
    candidatos: {
      presidencial: { nombre: "Alan García Jr.", foto: candidatoE },
      congreso: { nombre: "Luis Vargas", foto: candidatoE },
      parlamento: { nombre: "Carmen Arévalo", foto: candidatoE },
    },
  },
  {
    nombre: "ACCIÓN POPULAR",
    logo: partidoF,
    candidatos: {
      presidencial: { nombre: "Víctor Andrés García", foto: candidatoF },
      congreso: { nombre: "Fiorella Espinoza", foto: candidatoF },
      parlamento: { nombre: "Bruno Castillo", foto: candidatoF },
    },
  },
  {
    nombre: "SOMOS PERÚ",
    logo: partidoG,
    candidatos: {
      presidencial: { nombre: "Patricia Pérez", foto: candidatoG },
      congreso: { nombre: "Hugo Torres", foto: candidatoG },
      parlamento: { nombre: "Norma Cárdenas", foto: candidatoG },
    },
  },
  {
    nombre: "RENOVACIÓN POPULAR",
    logo: partidoH,
    candidatos: {
      presidencial: { nombre: "Rafael López Aliaga", foto: candidatoH },
      congreso: { nombre: "Martín Morales", foto: candidatoH },
      parlamento: { nombre: "Gina Fernández", foto: candidatoH },
    },
  },
  {
    nombre: "AVANZA PAÍS",
    logo: partidoI,
    candidatos: {
      presidencial: { nombre: "Hernando de Soto", foto: candidatoI },
      congreso: { nombre: "Cristina Campos", foto: candidatoI },
      parlamento: { nombre: "Raúl Paredes", foto: candidatoI },
    },
  },
  {
    nombre: "PERÚ POSIBLE",
    logo: partidoJ,
    candidatos: {
      presidencial: { nombre: "Alejandro Toledo Jr.", foto: candidatoJ },
      congreso: { nombre: "Carla Ramos", foto: candidatoJ },
      parlamento: { nombre: "Fernando León", foto: candidatoJ },
    },
  },
  {
    nombre: "PARTIDO MORADO",
    logo: partidoK,
    candidatos: {
      presidencial: { nombre: "Julio Guzmán", foto: candidatoK },
      congreso: { nombre: "Sofía Medina", foto: candidatoK },
      parlamento: { nombre: "Jorge Valdez", foto: candidatoK },
    },
  },
  {
    nombre: "JUNTOS PERÚ",
    logo: partidoL,
    candidatos: {
      presidencial: { nombre: "Raúl Huamán", foto: candidatoL },
      congreso: { nombre: "Milagros Díaz", foto: candidatoL },
      parlamento: { nombre: "Kevin Mendoza", foto: candidatoL },
    },
  },
  {
    nombre: "SOLIDARIDAD NACIONAL",
    logo: partidoM,
    candidatos: {
      presidencial: { nombre: "Luis Castañeda Jr.", foto: candidatoM },
      congreso: { nombre: "Verónica Núñez", foto: candidatoM },
      parlamento: { nombre: "Carlos Palacios", foto: candidatoM },
    },
  },
  {
    nombre: "PERUANOS POR EL KAMBIO",
    logo: partidoN,
    candidatos: {
      presidencial: { nombre: "Pedro Pablo Kuczynski", foto: candidatoN },
      congreso: { nombre: "Daniela Flores", foto: candidatoN },
      parlamento: { nombre: "Ernesto Paredes", foto: candidatoN },
    },
  },
  {
    nombre: "PERÚ PRIMERO",
    logo: partidoO,
    candidatos: {
      presidencial: { nombre: "Martin Vizcarra", foto: candidatoO },
      congreso: { nombre: "Jorge Meléndez", foto: candidatoO },
      parlamento: { nombre: "Carlos Illanes", foto: candidatoO },
    },
  },
];

// 🧠 Registro de votos temporal
let votos: Voto[] = [];

export function getUsuarioPorDni(dni: string) {
  return nombresSimulados[dni] || null;
}

export function saveVoto(voto: Voto) {
  const yaVoto = votos.some((v) => v.dni === voto.dni && v.categoria === voto.categoria);
  if (yaVoto) return false;
  votos.push(voto);
  return true;
}

// 🧪 Simulación para el dashboard
export function simularVotos() {
  return [
    { dni: "12345678", categoria: "presidencial", voto: "ALIANZA PARA EL PROGRESO" },
    { dni: "87654321", categoria: "congreso", voto: "FREPAP" },
    { dni: "11112222", categoria: "parlamento", voto: "PARTIDO MORADO" },
  ];
}

export function getVotos() {
  return votos;
}
