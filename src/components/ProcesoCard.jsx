import React from 'react';
import { FaUniversity, FaMoneyBillWave, FaCalendarAlt, FaCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ProcesoCard({ proceso }) {
  const getEstadoColor = (estado) => {
    switch (estado.toLowerCase()) {
      case 'convocatoria':
        return 'bg-green-500';
      case 'evaluación':
      case 'evaluacion':
        return 'bg-yellow-400';
      case 'cerrado':
        return 'bg-red-500';
      case 'borrador':
        return 'bg-white border border-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className='bg-white rounded-lg shadow p-4 flex flex-col justify-between'>
      <div className='text-blue-700 font-bold text-sm mb-2 flex items-center gap-2'>
        <FaUniversity /> {proceso.entidad}
      </div>

      <div className='flex-grow'>
        <p className='text-md font-semibold flex items-center gap-2 text-gray-800'>
          <FaMoneyBillWave /> {proceso.valor}
        </p>
        <p className='text-sm text-gray-600'>{proceso.objeto}</p>
        <p className='text-sm text-gray-600 flex items-center gap-2 mt-1'><FaCalendarAlt /> Cierre: {proceso.fechaCierre}</p>

        <div className='flex justify-end items-center mt-4'>
          <span className={`w-3 h-3 rounded-full mr-2 ${getEstadoColor(proceso.estado)}`}></span>
          <span className='text-sm text-gray-600 capitalize'>{proceso.estado}</span>
        </div>
      </div>

      <Link to={`/detalle/${proceso.id}`} className='mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center'>
        Ver más
      </Link>
    </div>
  );
}
