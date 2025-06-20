import React from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">LICITAPP</h1>
          <img src={logo} alt="Logo LICITAPP" className="h-8 w-auto" />
        </div>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Buscar Licitaciones</a>
          <a href="#" className="hover:underline">Mis Alertas</a>
          <a href="#" className="hover:underline">Acerca de</a>
          <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
            Regístrate
          </button>
        </nav>
      </div>
    </header>
  );
}
