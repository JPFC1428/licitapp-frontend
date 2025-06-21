import React from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaMoneyBill, FaCalendarAlt } from 'react-icons/fa';
import { MdRadioButtonChecked } from 'react-icons/md';

const estadoColor = {
  convocatoria: 'green',
  evaluación: 'gold',
  cerrado: 'red',
  borrador: 'gray',
};

const ProcesoCard = ({ proceso }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '16px',
      marginBottom: '20px',
      width: '300px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        backgroundColor: '#1a50a2',
        padding: '8px',
        color: 'white',
        borderRadius: '8px 8px 0 0',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <FaBuilding /> {proceso.entidad}
      </div>
      <div style={{ padding: '10px' }}>
        <p><FaMoneyBill /> <strong>{proceso.valor}</strong></p>
        <p style={{ margin: 0 }}>{proceso.objeto}</p>
        <p><FaCalendarAlt /> Cierre: {proceso.fechaCierre}</p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <MdRadioButtonChecked style={{ color: estadoColor[proceso.estado] }} />
          {proceso.estado.charAt(0).toUpperCase() + proceso.estado.slice(1)}
        </p>
        <Link to={`/detalle/${proceso.id}`}>
          <button style={{
            marginTop: '10px',
            backgroundColor: '#1a50a2',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 12px',
            cursor: 'pointer',
            width: '100%'
          }}>
            Ver más
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProcesoCard;
