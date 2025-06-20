import React from 'react';
import logo from '../assets/logo-header.png'; // Asegúrate que esté en esta ruta

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo + Texto */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo LICITAPP" className="h-10 md:h-12 w-auto" />
          <span className="text-2xl font-bold tracking-wide">LICITAPP</span>
        </div>

        {/* Menú de navegación */}
        <nav className="flex items-center space-x-6">
          <a href="#" className="hover:underline">Buscar Licitaciones</a>
          <a href="#" className="hover:underline">Mis Alertas</a>
          <a href="#" className="hover:underline">Acerca de</a>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Regístrate
          </button>
        </nav>
      </div>
    </header>
  );
}
