// src/components/ProcesoDetalle.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import procesos from '../data/procesosMock';
import { FaClock, FaMapMarkerAlt, FaFileDownload, FaFileAlt, FaLock } from 'react-icons/fa';

const ProcesoDetalle = () => {
  const { id } = useParams();
  const proceso = procesos.find(p => p.id === parseInt(id));

  if (!proceso) return <div>Proceso no encontrado</div>;

  const {
    entidad, valor, objeto, plazo, tipoContrato,
    lugarEjecucion, anticipo, cronograma, documentos, links
  } = proceso;

  return (
    <div className="container">
      <div className="card detalle">
        <h2>{entidad}</h2>
        <h3>{valor} COP</h3>
        <p>{objeto}</p>

        <div className="info-line">
          <FaClock /> <strong>Plazo:</strong> {plazo}
          &nbsp;&nbsp; <FaFileAlt /> <strong>Tipo de contrato:</strong> {tipoContrato}
          &nbsp;&nbsp; <FaMapMarkerAlt /> <strong>Lugar de Ejecución:</strong> {lugarEjecucion}
          &nbsp;&nbsp; <strong>Anticipo:</strong>{' '}
          {anticipo.aplica ? (
            <span className="text-success">✅ Sí ({anticipo.porcentaje})</span>
          ) : (
            <span className="text-danger">❌ No</span>
          )}
        </div>

        <hr />
        <h4>📅 Cronograma del Proceso</h4>
        <ul>
          <li><strong>Apertura:</strong> {cronograma.apertura} &nbsp;
            <a href="#" download><FaFileDownload /> Descargar cronograma</a></li>
          <li><strong>Cierre:</strong> {cronograma.cierre}</li>
          <li><strong>Evaluación:</strong> {cronograma.evaluacion}</li>
          <li><strong>Adjudicación:</strong> {cronograma.adjudicacion}</li>
        </ul>

        <h4>📁 Documentos del Proceso</h4>
        <ul>
          {documentos.map((doc, index) => (
            <li key={index}><FaFileAlt /> {doc}</li>
          ))}
        </ul>

        <div className="acciones">
          <a href={links.usuario} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Abrir en SECOP II
          </a>
          <a href={links.visitante} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Abrir como visitante
          </a>
        </div>

        <hr />
        <div className="premium">
          <h4><FaLock /> Sección Premium</h4>
          <ul>
            <li><a href="#">Análisis y resumen de pliegos</a></li>
            <li><a href="#">Presentación de Ofertas</a></li>
          </ul>
        </div>

        <div className="volver">
          <Link to="/">← Volver al listado</Link>
        </div>
      </div>
    </div>
  );
};

export default ProcesoDetalle;
