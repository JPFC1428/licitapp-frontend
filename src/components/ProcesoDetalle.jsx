import React from 'react';
import { useParams, Link } from 'react-router-dom';
import procesos from '../data/procesosMock';

export default function ProcesoDetalle() {
  const { id } = useParams();
  const proceso = procesos[parseInt(id)];

  if (!proceso) {
    return <div className="text-center mt-10 text-red-600">Proceso no encontrado</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800">{proceso.entidad}</h2>
        <p className="text-xl font-semibold text-gray-700 mt-1">{proceso.valor} COP</p>
        <p className="text-gray-600 mt-1">{proceso.objeto}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mt-4 text-gray-700">
          <p>⏱️ <strong>Plazo:</strong> {proceso.plazo}</p>
          <p>📄 <strong>Tipo de contrato:</strong> {proceso.tipoContrato}</p>
          <p>📍 <strong>Lugar de Ejecución:</strong> {proceso.lugarEjecucion}</p>
          <p>
            💵 <strong>Anticipo:</strong>{' '}
            {proceso.anticipo ? (
              <span className="text-green-600 font-semibold">✔ Sí ({proceso.porcentajeAnticipo}%)</span>
            ) : (
              <span className="text-red-600 font-semibold">✘ No</span>
            )}
          </p>
        </div>

        <hr className="my-5" />

        <div className="mb-4">
          <h3 className="font-bold text-gray-800 mb-2">📅 Cronograma del Proceso</h3>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>Apertura: {proceso.cronograma.apertura} <a href={proceso.cronograma.descarga} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-2">Descargar cronograma</a></li>
            <li>Cierre: {proceso.cronograma.cierre}</li>
            <li>Evaluación: {proceso.cronograma.evaluacion}</li>
            <li>Adjudicación: {proceso.cronograma.adjudicacion}</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-2">📂 Documentos del Proceso</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {proceso.documentos.map((doc, i) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <a
            href={proceso.secopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Abrir en SECOP II
          </a>
          <button className="border border-gray-500 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition">
            Abrir como visitante
          </button>
        </div>

        <div className="border-t pt-4 mt-6">
          <h3 className="text-sm font-semibold text-orange-600">🔒 Sección Premium</h3>
          <ul className="text-sm text-blue-600 mt-1 space-y-1 underline">
            <li><a href="#">Análisis y resumen de pliegos</a></li>
            <li><a href="#">Presentación de Ofertas</a></li>
          </ul>
        </div>

        <div className="mt-6">
          <Link to="/" className="text-blue-600 text-sm underline">← Volver al listado</Link>
        </div>
      </div>
    </div>
  );
}

