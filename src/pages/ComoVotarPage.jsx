import React from 'react';
import ComoFunciona from '../components/landing/ComoFunciona'; 
import Footer from '../components/layout/Footer';

export default function ComoVotarPage() {
  return (
    <>
      {/* 🚨 ELIMINAR EL SECTION EXTERNO! 🚨 */}
      {/* La imagen de fondo y los títulos ya están definidos dentro de ComoFunciona.tsx */}
      
      <ComoFunciona />
      
      <Footer />
    </>
  );
}