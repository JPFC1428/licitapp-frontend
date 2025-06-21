import React from 'react';
import { useParams, Link } from 'react-router-dom';
import procesos from '../data/procesosMock';
import { FaCalendarAlt, FaFileAlt, FaLock, FaClock, FaMapMarkerAlt, FaFileDownload, FaHammer, FaCheckCircle, FaTimesCircle, FaHandshake } from 'react-icons/fa';

export default function ProcesoDetalle() {
  const { id } = useParams();
  const proceso = procesos.find((p) => p.id === parseInt(id));

  if (!proceso) {
    return <div className="p-8 text-center text-red-600">Proceso no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 border">
        <h1 className="text-2xl font-bold text-gray-800">{proceso.entidad}</h1>
        <p className="text-xl font-semibold text-gray-700 mt-1">{proceso.valor} COP</p>
        <p className="text-gray-600 mb-4">{proceso.objeto}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-4">
          <p><FaClock className="inline mr-1 text-gray-500" /> Plazo: {proceso.plazo}</p>
          <p><FaHammer className="inline mr-1 text-gray-500" /> Tipo de contrato: {proceso.tipoContrato}</p>
          <p><FaMapMarkerAlt className="inline mr-1 text-gray-500" /> Lugar de Ejecución: {proceso.lugarEjecucion}</p>
          <p>
            <FaHandshake className="inline mr-1 text-gray-500" />
            Anticipo: {proceso.anticipo.aplica ? <span className="text-green-600 font-medium">✔ {proceso.anticipo.porcentaje}</span> : <span className="text-red-600 font-medium">✘ No</span>}
          </p>
        </div>

        <hr className="my-4" />

        <div>
          <h2 className="text-lg font-semibold flex items-center mb-2">
            <FaCalendarAlt className="mr-2 text-purple-600" />
            Cronograma del Proceso
          </h2>
          <ul className="text-sm text-gray-700 ml-1 mb-4">
            <li>Apertura: {proceso.cronograma.apertura} <a href="#" className="text-blue-600 hover:underline ml-2 text-sm"><FaFileDownload className="inline" /> Descargar cronograma</a></li>
            <li>Cierre: {proceso.cronograma.cierre}</li>
            <li>Evaluación: {proceso.cronograma.evaluacion}</li>
            <li>Adjudicación: {proceso.cronograma.adjudicacion}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold flex items-center mb-2">
            <FaFileAlt className="mr-2 text-yellow-600" />
            Documentos del Proceso
          </h2>
          <ul className="text-sm text-gray-700 ml-1 mb-4">
            {proceso.documentos.map((doc, i) => (
              <li key={i}><FaFileAlt className="inline mr-1 text-gray-600" /> {doc}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 mt-4 mb-6">
          <a href={proceso.links.usuario} target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Abrir en SECOP II</a>
          <a href={proceso.links.visitante} target="_blank" className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">Abrir como visitante</a>
        </div>

        <div className="border-t pt-4 mt-6 text-sm">
          <h3 className="text-orange-600 font-semibold mb-1 flex items-center">
            <FaLock className="mr-2" /> Sección Premium
          </h3>
          <ul className="list-disc pl-5 text-blue-600">
            <li><a href="#" className="hover:underline">Análisis y resumen de pliegos</a></li>
            <li><a href="#" className="hover:underline">Presentación de Ofertas</a></li>
          </ul>
        </div>

        <Link to="/" className="block text-blue-700 mt-6 text-sm hover:underline">← Volver al listado</Link>
      </div>
    </div>
  );
}
