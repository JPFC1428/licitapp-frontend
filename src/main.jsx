import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ProcesoDetalle from './components/ProcesoDetalle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detalle/:id" element={<ProcesoDetalle />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
