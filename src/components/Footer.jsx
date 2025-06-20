import React from 'react';
import logo from '../assets/logo-footer.png'; // Puedes usar un logo diferente para el footer si lo deseas

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 py-6 text-sm">
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={logo} alt="Logo LICITAPP" className="h-14 w-auto opacity-90" />
        <p>© 2025 LICITAPP — <a href="#" className="hover:underline">Soporte</a> • <a href="#" className="hover:underline">Legal</a> • <a href="#" className="hover:underline">Compañía</a></p>
      </div>
    </footer>
  );
}
