import React from 'react';
import { useParams, Link } from 'react-router-dom';
import procesos from '../data/procesosMock';
import { FaCalendarAlt, FaFileAlt, FaFileContract, FaLock, FaMapMarkerAlt, FaSync, FaMoneyBillWave, FaTools, FaFileDownload } from 'react-icons/fa';

export default function ProcesoDetalle() {
  const { id } = useParams();
  const proceso = procesos.find((p) => p.id === parseInt(id));

  if (!proceso) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-xl font-semibold text-red-600">Proceso no encontrado</h1>
        <Link to="/" className="text-blue-600 underline">Volver al listado</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800">{proceso.entidad}</h1>
        <p className="text-xl text-gray-700 font-semibold mt-1">{proceso.valor} COP</p>
        <p className="text-gray-600 mt-1">{proceso.objeto}</p>

        <div className="flex flex-wrap text-sm mt-4 gap-x-4 gap-y-2">
          <p><FaTools className="inline mr-1 text-gray-500" /> Plazo: {proceso.plazo}</p>
          <p><FaFileContract className="inline mr-1 text-gray-500" /> Tipo de contrato: {proceso.tipoContrato}</p>
          <p><FaMapMarkerAlt className="inline mr-1 text-gray-500" /> Lugar de Ejecución: {proceso.lugarEjecucion}</p>
          <p><FaMoneyBillWave className="inline mr-1 text-gray-500" /> Anticipo: {proceso.anticipo.aplica ? `✅ ${proceso.anticipo.porcentaje}` : '❌ No'}</p>
        </div>

        <hr className="my-4" />

        <h2 className="font-semibold text-lg mb-2"><FaCalendarAlt className="inline mr-1 text-indigo-600" /> Cronograma del Proceso</h2>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>Apertura: {proceso.cronograma.apertura} <a href="#" className="text-blue-600 text-sm ml-2">📥 Descargar cronograma</a></li>
          <li>Cierre: {proceso.cronograma.cierre}</li>
          <li>Evaluación: {proceso.cronograma.evaluacion}</li>
          <li>Adjudicación: {proceso.cronograma.adjudicacion}</li>
        </ul>

        <h2 className="font-semibold text-lg mt-4 mb-2"><FaFileAlt className="inline mr-1 text-yellow-600" /> Documentos del Proceso</h2>
        <ul className="text-sm text-gray-700 space-y-1 pl-1">
          {proceso.documentos.map((doc, i) => (
            <li key={i}>📄 {doc}</li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-4">
          <a
            href={proceso.links.usuario}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Abrir en SECOP II
          </a>
          <button
            className="border border-gray-500 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition"
            onClick={() => window.open(proceso.links.visitante, '_blank')}
          >
            Abrir como visitante
          </button>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-300">
          <h3 className="font-bold text-md mb-2 text-yellow-700">
            <FaLock className="inline mr-1" /> Sección Premium
          </h3>
          <ul className="list-disc list-inside text-blue-600 text-sm">
            <li><a href="#">Análisis y resumen de pliegos</a></li>
            <li><a href="#">Presentación de Ofertas</a></li>
          </ul>
        </div>

        <div className="mt-6">
          <Link to="/" className="text-blue-600 underline text-sm">← Volver al listado</Link>
        </div>
      </div>
    </div>
  );
}
