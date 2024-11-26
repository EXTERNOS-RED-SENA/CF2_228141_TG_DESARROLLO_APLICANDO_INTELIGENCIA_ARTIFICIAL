export default {
  global: {
    componenteFormativo:
      'Validación de requerimientos y modelado de bases de datos',
    descripcionCurso:
      'El componente ofrece un enfoque integral para diseñar y gestionar datos de manera eficiente. Abarca la caracterización de la información, el modelado de estructuras relacionales y no relacionales, y la documentación detallada del modelo. Proporciona herramientas y técnicas para optimizar el almacenamiento, garantizar la integridad y facilitar la escalabilidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: '1. Caracterización de la información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 26). Fundamentos para entender las bases de datos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=U8hJwMXfI1Q',
    },
    {
      tema: '1. Caracterización de la información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021a, mayo 23). Introducción bases de datos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=m-h80fyUIiA',
    },
    {
      tema: '2. Modelado de la estructura de datos relacional',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, marzo 27). Conceptos y estructuras de las bases de datos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vq14ny7O1WU',
    },
    {
      tema: '2. Modelado de la estructura de datos relacional',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022b, octubre 11). Conceptos y estructuras de las bases de datos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xUpr20u9dmc',
    },
    {
      tema:
        '2. Modelado de la estructura de datos relacional <br><br> 3. Modelado de la estructura de datos no relacional',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021b, diciembre 10). Bases de datos relacionales y no relacionales.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=r97Ko4ZvIDQ',
    },
    {
      tema: '3. Modelado de la estructura de datos no relacional',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022c, diciembre 24). Introducción, diseño y ejecución de pruebas BD.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=u83s6_Gj_q4',
    },
    {
      tema: '4. Documentación del modelo de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022a, septiembre 19). Implementación y Gestión de Bases de datos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EXutOmlBaQQ',
    },
  ],
  glosario: [
    {
      termino: 'Atributo',
      significado:
        'Característica o propiedad de una entidad. Por ejemplo, un "Cliente" puede tener atributos como Nombre y Dirección.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Conjunto organizado de datos almacenados y gestionados electrónicamente en un sistema, permitiendo acceso, manipulación y consulta eficiente.',
    },
    {
      termino: 'Base de datos no relacional',
      significado:
        'Sistema de gestión de bases de datos que almacena datos de forma no estructurada, como documentos, grafos o columnas, ideal para datos semiestructurados.',
    },
    {
      termino: 'Base de datos relacional',
      significado:
        'Sistema de gestión de bases de datos que organiza datos en tablas con relaciones bien definidas, basado en un modelo estructurado.',
    },
    {
      termino: 'Consistencia',
      significado:
        'Característica de los datos que asegura que la información sea coherente y uniforme en todas las tablas relacionadas de la base de datos.',
    },
    {
      termino: 'Diccionario de datos',
      significado:
        'Repositorio detallado que describe las tablas, columnas, tipos de datos, restricciones y otros elementos de una base de datos.',
    },
    {
      termino: 'Diagrama entidad-relación (ERD)',
      significado:
        'Gráfico que muestra las entidades, atributos y relaciones en un modelo de datos, ayudando a visualizar la estructura de la base de datos.',
    },
    {
      termino: 'Documentación',
      significado:
        'Proceso de registrar y describir la estructura y elementos de la base de datos, facilitando la comprensión y mantenimiento del sistema.',
    },
    {
      termino: 'Escalabilidad',
      significado:
        'Capacidad de un sistema de base de datos para manejar un aumento en la carga de trabajo, ya sea mediante la adición de recursos (escalabilidad vertical u horizontal).',
    },
    {
      termino: 'Esquema de la base de datos',
      significado:
        'Representación estructural de cómo se organizan y relacionan las tablas y entidades en una base de datos.',
    },
    {
      termino: 'Índice',
      significado:
        'Estructura que mejora la velocidad de las consultas en una base de datos, permitiendo búsquedas más rápidas mediante el ordenamiento de los datos en un campo.',
    },
    {
      termino: 'Integridad referencial',
      significado:
        'Conjunto de reglas que garantizan que las relaciones entre tablas sean consistentes, evitando datos huérfanos o inconsistentes.',
    },
    {
      termino: 'JSON',
      significado:
        'Formato ligero para el intercambio de datos que representa objetos como pares clave-valor, muy utilizado en aplicaciones web.',
    },
    {
      termino: 'Llave foránea',
      significado:
        'Campo en una tabla que establece una relación con la llave primaria de otra tabla, manteniendo la integridad referencial.',
    },
    {
      termino: 'Llave primaria',
      significado:
        'Campo único que identifica de manera exclusiva cada registro en una tabla, asegurando que no existan duplicados.',
    },
    {
      termino: 'Normalización',
      significado:
        'Proceso de organización de datos en tablas para reducir la redundancia y mejorar la integridad de los datos mediante la aplicación de reglas específicas.',
    },
    {
      termino: 'Primera forma normal (1FN)',
      significado:
        'Nivel básico de normalización que asegura que los datos sean atómicos y no contengan listas o conjuntos en un solo campo.',
    },
    {
      termino: 'Restricción',
      significado:
        'Regla aplicada a un campo en la base de datos para asegurar la validez y consistencia de los datos, como restricciones de unicidad o tipo de dato.',
    },
    {
      termino: 'XML',
      significado:
        'Lenguaje de marcado que define reglas para codificar documentos en un formato que tanto humanos como máquinas puedan leer.',
    },
  ],
  referencias: [
    {
      referencia:
        'Coronel, C., & Morris, P. (2011). Diseño de bases de datos: conceptos y modelos. McGraw-Hill',
    },
    {
      referencia:
        'Date, C. J. (2001). Introducción a los sistemas de bases de datos (7ª ed.). Addison-Wesley. ',
    },
    {
      referencia:
        'Efendy, Z. (2018). Normalization in database design. Jurnal CoreIT: Jurnal Hasil Penelitian Ilmu Komputer Dan Teknologi Informasi, 4(1), 34. ',
      link: 'https://doi.org/10.24014/coreit.v4i1.4382',
    },
    {
      referencia:
        'Kunii, T. L., & Kunii, H. S. (1977). DATABASE DESIGN. In Proceedings of the Hawaii International Conference on System Sciences (pp. 200–203).',
    },
    {
      referencia:
        'Elmasri, R., & Navathe, S. B. (2010). Sistemas de bases de datos. Pearson Educación.',
    },
    {
      referencia:
        'Fernandy, M., Darmawan, K. R., & Kristiyanto, D. Y. (2023). Comparison Analysis of Native Database Design with Object Oriented Design. Journal of Dinda : Data Science, Information Technology, and Data Analytics, 3(1), 6–10. ',
      link: 'https://doi.org/10.20895/dinda.v3i1.707',
    },
    {
      referencia: 'https://doi.org/10.20895/dinda.v3i1.707',
      link: 'https://doi.org/10.1007/s10115-023-01828-3.',
    },
    {
      referencia:
        'Letkowski, J. (2014). Doing database design with MySQL. Journal of Technology Research, 6(I), 1–15. Retrieved from ',
      link:
        'https://pdfs.semanticscholar.org/6dab/89a3e32c994cff67d0c0f40c69ef9446db2c.pdf%0A',
    },
    {
      referencia: 'Sadalage, P. J., & Fowler, M. (2013). NoSQL Distilled.',
    },
    {
      referencia:
        'Silberschatz, A., Korth, H. F., & Sudarshan, S. (2006). Fundamentos de bases de datos (5ª ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Teorey, T. J., Lightstone, S. S., & Nadeau, T. P. (2006). Diseño de bases de datos: Modelado y diseño lógico (4ª ed.). Morgan Kaufmann.',
    },
  ],
}
