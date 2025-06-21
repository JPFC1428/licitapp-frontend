import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import procesos from '../data/procesosMock';
import Header from './Header';
import Footer from './Footer';

export default function ProcesoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const proceso = procesos.find(p => p.id === parseInt(id));

  if (!proceso) return <div className="p-6">Proceso no encontrado.</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-grow max-w-3xl mx-auto bg-white mt-6 p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-1 text-gray-800"> 🏛️{proceso.entidad}</h2>
        <p className="text-lg font-semibold text-gray-700 mb-2">💰{proceso.valor} COP</p>
        <p className="text-sm text-gray-600 mb-4">{proceso.objeto}</p>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
          <p>⏱️ Plazo: {proceso.plazo}</p>
          <p>📄 Tipo de contrato: {proceso.tipoContrato}</p>
          <p>📍 Lugar de Ejecución: {proceso.lugarEjecucion}</p>
          <p>💸 Anticipo: {proceso.anticipo.aplica ? `✅ Sí (${proceso.anticipo.porcentaje})` : '❌ No'}</p>
        </div>

        <h3 className="font-bold text-md border-b mb-2">📅 Cronograma del Proceso</h3>
        <ul className="text-sm text-gray-700 mb-4">
          <li>Apertura: {proceso.cronograma.apertura} <a href="#" className="text-blue-600 underline ml-2">📥 Descargar cronograma</a></li>
          <li>Cierre: {proceso.cronograma.cierre}</li>
          <li>Evaluación: {proceso.cronograma.evaluacion}</li>
          <li>Adjudicación: {proceso.cronograma.adjudicacion}</li>
        </ul>

        <h3 className="font-bold text-md border-b mb-2">📂 Documentos del Proceso</h3>
        <ul className="text-sm text-gray-700 mb-6">
          {proceso.documentos.map((doc, idx) => (
            <li key={idx}>📄 {doc}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4 mb-6">
          <a href={proceso.links.usuario} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded">Abrir en SECOP II</a>
          <a href={proceso.links.visitante} target="_blank" rel="noopener noreferrer" className="border border-gray-500 px-4 py-2 rounded text-gray-700">Abrir como visitante</a>
        </div>

        <div className="border-t pt-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">🔐 Sección Premium</h4>
          <ul className="text-sm text-blue-600 underline space-y-1">
            <li><a href="#">Análisis y resumen de pliegos</a></li>
            <li><a href="#">Presentación de Ofertas</a></li>
          </ul>
        </div>

        <button onClick={() => navigate('/')} className="mt-6 text-sm text-blue-600 underline">
          ← Volver al listado
        </button>
      </main>

      <Footer />
    </div>
  );
}
