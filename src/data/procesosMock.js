const procesos = [
  {
    id: 1,
    entidad: 'ALCALDÍA MUNICIPAL DE SANTA ROSA',
    valor: '$970.000.000',
    objeto: 'Materiales de construcción',
    fechaCierre: '10 agosto 2024',
    estado: 'convocatoria',
    plazo: '45 días',
    tipoContrato: 'Obra',
    lugarEjecucion: 'Santa Rosa, Cauca',
    anticipo: { aplica: true, porcentaje: '20%' },
    cronograma: {
      apertura: '01 agosto 2024',
      cierre: '10 agosto 2024',
      evaluacion: '15 agosto 2024',
      adjudicacion: '20 agosto 2024',
    },
    documentos: [
      'Pliego de Condiciones',
      'Estudios Previos',
      'Formato de Propuesta'
    ],
    links: {
      usuario: 'https://www.secop.gov.co/usuario-proceso1',
      visitante: 'https://www.secop.gov.co/visitante-proceso1'
    }
  },
  {
    id: 2,
    entidad: 'MINISTERIO DE EDUCACIÓN',
    valor: '$1.200.000.000',
    objeto: 'Servicios de limpieza',
    fechaCierre: '15 agosto 2024',
    estado: 'evaluación',
    plazo: '60 días',
    tipoContrato: 'Suministro',
    lugarEjecucion: 'Bogotá, Cundinamarca',
    anticipo: { aplica: false },
    cronograma: {
      apertura: '05 agosto 2024',
      cierre: '15 agosto 2024',
      evaluacion: '25 agosto 2024',
      adjudicacion: '30 agosto 2024',
    },
    documentos: [
      'Pliego de Condiciones',
      'Estudios Previos'
    ],
    links: {
      usuario: 'https://www.secop.gov.co/usuario-proceso2',
      visitante: 'https://www.secop.gov.co/visitante-proceso2'
    }
  },
  {
    id: 3,
    entidad: 'GOBERNACIÓN DE ANTIOQUIA',
    valor: '$800.000.000',
    objeto: 'Proyectos viales',
    fechaCierre: '21 agosto 2024',
    estado: 'cerrado',
    plazo: '90 días',
    tipoContrato: 'Consultoría',
    lugarEjecucion: 'Medellín, Antioquia',
    anticipo: { aplica: true, porcentaje: '10%' },
    cronograma: {
      apertura: '10 agosto 2024',
      cierre: '21 agosto 2024',
      evaluacion: '28 agosto 2024',
      adjudicacion: '05 septiembre 2024',
    },
    documentos: [
      'Pliego de Condiciones'
    ],
    links: {
      usuario: 'https://www.secop.gov.co/usuario-proceso3',
      visitante: 'https://www.secop.gov.co/visitante-proceso3'
    }
  },
  {
    id: 4,
    entidad: 'ALCALDÍA MUNICIPAL DE NEIVA',
    valor: '$1.100.000.000',
    objeto: 'Suministro de equipos de cómputo para escuelas',
    fechaCierre: '30 agosto 2024',
    estado: 'borrador',
    plazo: '60 días',
    tipoContrato: 'Suministro',
    lugarEjecucion: 'Neiva, Huila',
    anticipo: { aplica: true, porcentaje: '20%' },
    cronograma: {
      apertura: '20 agosto 2024',
      cierre: '30 agosto 2024',
      evaluacion: '05 septiembre 2024',
      adjudicacion: '15 septiembre 2024',
    },
    documentos: [
      'Pliego de Condiciones',
      'Estudios Previos',
      'Formato de Propuesta'
    ],
    links: {
      usuario: 'https://www.secop.gov.co/usuario-proceso4',
      visitante: 'https://www.secop.gov.co/visitante-proceso4'
    }
  }
];

export default procesos;
