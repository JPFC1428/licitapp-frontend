import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // o como se llame tu vista principal
import ProcesoDetalle from './components/ProcesoDetalle';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalle/:id" element={<ProcesoDetalle />} />
    </Routes>
  );
}

export default App;
