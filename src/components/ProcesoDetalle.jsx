
import React from 'react';

const ProcesoDetalle = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 font-sans">
      <div className="bg-blue-900 p-4 flex items-center">
        <img src="/logo-header.png" alt="Logo LICITAPP" className="h-8 mr-2" />
        <h1 className="text-white font-bold text-xl">LICITAPP</h1>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">ALCALDÍA MUNICIPAL DE NEIVA</h2>
        <p className="text-gray-800 font-semibold mt-1 text-lg">$1.100.000.000 COP</p>
        <p className="text-gray-700 text-sm">Suministro de equipos de cómputo para escuelas</p>

        <div className="flex items-center mt-3 space-x-6 text-sm text-gray-700">
          <div className="flex items-center space-x-1">
            <span>🕒</span><span>60 días</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>📄</span><span>Suministro</span>
          </div>
        </div>

        <div className="flex items-start mt-2 text-sm text-gray-700 space-x-2">
          <div className="flex items-center">
            <span>📍</span><span>Lugar de Ejecución: Neiva, Huila</span>
          </div>
        </div>
        <div className="flex items-center mt-1 text-sm text-gray-700 space-x-2">
          <div className="flex items-center">
            <span>💸</span><span>Anticipo: <span className="text-green-600 font-semibold">✅ Sí (20%)</span></span>
          </div>
        </div>

        <hr className="my-4" />

        <h3 className="text-sm font-bold text-gray-800 mb-2">📅 Cronograma del Proceso</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li className="flex justify-between items-center"><span>Apertura</span><a href="#" className="text-blue-600 hover:underline">Descargar cronograma</a></li>
          <li>Cierre: 30 agosto 2024</li>
          <li>Evaluación: 5 septiembre 2024</li>
          <li>Adjudicación: 15 septiembre 2024</li>
        </ul>

        <hr className="my-4" />

        <h3 className="text-sm font-bold text-gray-800 mb-2">📄 Documentos del Proceso</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li><a href="#" className="hover:underline">Pliego de Condiciones</a></li>
          <li><a href="#" className="hover:underline">Estudios Previos</a></li>
          <li><a href="#" className="hover:underline">Formato de Propuesta</a></li>
        </ul>

        <div className="flex justify-between mt-4 space-x-2">
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm">Abrir en SECOP II</button>
          <button className="border border-gray-400 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 text-sm">Abrir como visitante</button>
        </div>

        <hr className="my-4" />

        <h3 className="text-sm font-bold text-gray-800 mb-2">🌟 Funcionalidades Premium</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li><a href="#" className="hover:underline">Análisis y resumen de pliegos</a></li>
          <li><a href="#" className="hover:underline">Presentación de Ofertas</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ProcesoDetalle;
