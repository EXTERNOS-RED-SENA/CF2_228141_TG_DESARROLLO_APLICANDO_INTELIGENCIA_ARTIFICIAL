export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Caracterización de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de datos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Restricciones y clasificación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tipos de información',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modelado de la estructura de datos relacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Selección de bases de datos relacionales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Análisis de relaciones y cardinalidades',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diseño de tablas y elementos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Procesos de normalización',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Modelado de la estructura de datos no relacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de bases de datos no relacionales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estructuras de datos en JSON y XML',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Herramientas de modelado',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ventajas y desventajas',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Documentación del modelo de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Diseño de la base de datos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Elaboración del diccionario de datos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Estructura del modelo de datos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Recomendaciones de implementación',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228141_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Validación de requerimientos y modelado de bases de datos',
    Description:
      'El componente ofrece un enfoque integral para diseñar y gestionar datos de manera eficiente. Abarca la caracterización de la información, el modelado de estructuras relacionales y no relacionales, y la documentación detallada del modelo. Proporciona herramientas y técnicas para optimizar el almacenamiento, garantizar la integridad y facilitar la escalabilidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
}
