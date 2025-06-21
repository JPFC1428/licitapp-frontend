import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProcesoCard from './components/ProcesoCard';
import ProcesoDetalle from './pages/ProcesoDetalle'; // nuevo componente
import procesos from './data/procesosMock';

function Home() {
  return (
    <main className='max-w-6xl mx-auto px-4 py-6'>
      <h1 className='text-2xl font-bold mb-4'>Buscar Licitaciones Públicas</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {procesos.map((p, i) => <ProcesoCard key={i} proceso={p} />)}
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-gray-100 flex flex-col'>
        <Header />
        <div className='flex-grow'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalle/:id" element={<ProcesoDetalle />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
