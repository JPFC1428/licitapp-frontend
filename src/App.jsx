import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProcesoCard from './components/ProcesoCard';
import ProcesoDetalle from './components/ProcesoDetalle';
import procesos from './data/procesosMock';

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-gray-100 flex flex-col'>
        <Header />

        <main className='max-w-6xl mx-auto px-4 py-6 flex-grow'>
          <Routes>
            {/* Página principal con todas las tarjetas */}
            <Route
              path='/'
              element={
                <>
                  <h1 className='text-2xl font-bold mb-4'>Buscar Licitaciones Públicas</h1>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {procesos.map((p, i) => (
                      <ProcesoCard key={i} proceso={p} />
                    ))}
                  </div>
                </>
              }
            />

            {/* Ruta para ver los detalles de un proceso */}
            <Route path='/detalle/:id' element={<ProcesoDetalle />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
