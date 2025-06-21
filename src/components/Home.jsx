// src/components/Home.jsx

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProcesoCard from './ProcesoCard';
import procesos from '../data/procesosMock';

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Header />
      <main className='max-w-6xl mx-auto px-4 py-6'>
        <h1 className='text-2xl font-bold mb-4'>Buscar Licitaciones Públicas</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {procesos.map((p, i) => (
            <ProcesoCard key={i} proceso={p} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
