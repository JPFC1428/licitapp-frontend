// src/components/ProcesoCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUniversity, FaMoneyBillWave, FaCalendarAlt } from 'react-icons/fa';

const estadoColores = {
  convocatoria: 'green',
  evaluación: 'gold',
  cerrado: 'red',
  borrador: 'gray'
};

const ProcesoCard = ({ proceso }) => {
  const { id, entidad, valor, objeto, fechaCierre, estado } = proceso;

  return (
    <div className="card proceso-card">
      <div className="card-header">
        <FaUniversity /> <strong>{entidad}</strong>
      </div>
      <div className="card-body">
        <p><FaMoneyBillWave /> <strong>{valor}</strong></p>
        <p>{objeto}</p>
        <p><FaCalendarAlt /> <strong>Cierre:</strong> {fechaCierre}</p>
        <p>
          <span className={`estado-indicador`} style={{ color: estadoColores[estado] }}>
            ● {estado.charAt(0).toUpperCase() + estado.slice(1)}
          </span>
        </p>
        <Link to={`/detalle/${id}`} className="btn btn-vermas">Ver más</Link>
      </div>
    </div>
  );
};

export default ProcesoCard;
