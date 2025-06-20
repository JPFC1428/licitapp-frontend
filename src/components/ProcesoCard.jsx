import React from 'react';
export default function ProcesoCard({ proceso }) {
    return (
    <div className='bg-white rounded-lg shadow p-4'>
      <div className='bg-blue-600 text-white font-bold text-sm px-2 py-1 rounded-t'>🏛️ {proceso.entidad}</div>
      <div className='p-2'>
        <p className='text-md font-semibold'>💰 {proceso.valor}</p>
        <p className='text-sm'>{proceso.objeto}</p>
        <p className='text-sm mt-1'>📅 Cierre: {proceso.fechaCierre}</p>
        <button className='mt-3 bg-red-500 text-white px-4 py-2 rounded'>Ver más</button>
      </div>
    </div>
  );
}
