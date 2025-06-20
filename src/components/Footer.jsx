import React from 'react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 text-gray-600 text-sm">
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={logo} alt="Logo LICITAPP" className="h-10 w-auto" />
        <p>© 2025 LICITAPP — Soporte • Legal • Compañía</p>
      </div>
    </footer>
  );
}
