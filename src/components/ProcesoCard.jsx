import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProcesoCard({ proceso }) {
  const navigate = useNavigate();

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
      <div className='bg-blue-600 text-white font-bold text-sm px-2 py-1 rounded-t'>
        🏛️ {proceso.entidad}
      </div>

      <div className='p-2 flex-grow'>
        <p className='text-md font-semibold'>💰 {proceso.valor}</p>
        <p className='text-sm'>{proceso.objeto}</p>
        <p className='text-sm mt-1'>📅 Cierre: {proceso.fechaCierre}</p>

        <div className='flex justify-end items-center mt-4'>
          <span className={`w-3 h-3 rounded-full mr-2 ${getEstadoColor(proceso.estado)}`}></span>
          <span className='text-sm text-gray-600 capitalize'>{proceso.estado}</span>
        </div>
      </div>

      <button
        className='mt-3 bg-red-500 text-white px-4 py-2 rounded'
        onClick={() => navigate(`/detalle/${proceso.id}`)}
      >
        Ver más
      </button>
    </div>
  );
}

