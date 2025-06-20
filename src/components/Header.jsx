import React from 'react';
import logo from '../assets/logo.png'; // Asegúrate de que la imagen esté en /src/assets/logo.png

export default function Header() {
  return (
    <header className="bg-blue-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo LICITAPP" className="h-10 w-auto" />
          <h1 className="text-xl font-bold tracking-wide">LICITAPP</h1>
        </div>

        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:underline">Buscar Licitaciones</a>
          <a href="#" className="hover:underline">Mis Alertas</a>
          <a href="#" className="hover:underline">Acerca de</a>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded">
            Regístrate
          </button>
        </nav>
      </div>
    </header>
  );
}
