import React from 'react';
import { useParams, Link } from 'react-router-dom';
import procesos from '../data/procesosMock';
import { FaClock, FaFileAlt, FaFolderOpen, FaMapMarkerAlt, FaCalendarAlt, FaDownload, FaCheckCircle, FaTimesCircle, FaBuilding } from 'react-icons/fa';

export default function ProcesoDetalle() {
  const { id } = useParams();
  const proceso = procesos.find(p => p.id === parseInt(id));

  if (!proceso) return <div className='p-8 text-center text-red-600'>Proceso no encontrado</div>;

  return (
    <div className='min-h-screen bg-gray-100'>
      <main className='max-w-3xl mx-auto px-4 py-8 bg-white shadow rounded'>
        <h1 className='text-2xl font-bold text-gray-900'>{proceso.entidad}</h1>
        <p className='text-xl font-semibold text-gray-800'>{proceso.valor} COP</p>
        <p className='text-gray-600 mb-4'>{proceso.objeto}</p>

        <div className='flex flex-wrap gap-4 text-sm text-gray-700 mb-4'>
          <div className='flex items-center gap-2'><FaClock /> Plazo: {proceso.plazo}</div>
          <div className='flex items-center gap-2'><FaFileAlt /> Tipo de contrato: {proceso.tipoContrato}</div>
          <div className='flex items-center gap-2'><FaMapMarkerAlt /> Lugar de Ejecución: {proceso.lugarEjecucion}</div>
          <div className='flex items-center gap-2'>
            {proceso.anticipo?.aplica ? (
              <>
                <FaCheckCircle className='text-green-600' /> Anticipo: Sí ({proceso.anticipo.porcentaje})
              </>
            ) : (
              <>
                <FaTimesCircle className='text-red-600' /> Anticipo: No
              </>
            )}
          </div>
        </div>

        <hr className='my-4' />

        <div className='mb-6'>
          <h2 className='text-lg font-semibold flex items-center gap-2 text-blue-900'><FaCalendarAlt /> Cronograma del Proceso</h2>
          <p>Apertura: {proceso.cronograma.apertura} <a href='#' className='text-blue-600 ml-2 text-sm'><FaDownload className='inline' /> Descargar cronograma</a></p>
          <p>Cierre: {proceso.cronograma.cierre}</p>
          <p>Evaluación: {proceso.cronograma.evaluacion}</p>
          <p>Adjudicación: {proceso.cronograma.adjudicacion}</p>
        </div>

        <div className='mb-6'>
          <h2 className='text-lg font-semibold flex items-center gap-2 text-yellow-800'><FaFolderOpen /> Documentos del Proceso</h2>
          <ul className='ml-4 list-disc'>
            {proceso.documentos.map((doc, i) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>
        </div>

        <div className='flex gap-4 mb-6'>
          <a href={proceso.links.usuario} className='bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition'>Abrir en SECOP II</a>
          <a href={proceso.links.visitante} className='border border-gray-400 px-4 py-2 rounded shadow hover:bg-gray-100 transition'>Abrir como visitante</a>
        </div>

        <div className='mt-6 border-t pt-4'>
          <h2 className='text-md font-semibold text-orange-600 mb-2'>🔒 Sección Premium</h2>
          <ul className='list-disc ml-6 text-blue-700 text-sm'>
            <li><a href='#'>Análisis y resumen de pliegos</a></li>
            <li><a href='#'>Presentación de Ofertas</a></li>
          </ul>
        </div>

        <div className='mt-6'>
          <Link to="/" className='text-blue-600 text-sm'>&larr; Volver al listado</Link>
        </div>
      </main>
    </div>
  );
}

