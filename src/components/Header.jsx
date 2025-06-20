import React from 'react';
export default function Header() {
  return (
    <header className='bg-blue-900 text-white py-4 px-6 flex justify-between items-center'>
      <h1 className='text-xl font-bold'>LICITAPP</h1>
      <nav className='space-x-4'>
        <a href='#'>Buscar Licitaciones</a>
        <a href='#'>Mis Alertas</a>
        <a href='#'>Acerca de</a>
        <button className='bg-green-500 text-white px-3 py-1 rounded'>Regístrate</button>
      </nav>
    </header>
  );
}