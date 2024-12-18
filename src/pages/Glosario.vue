<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
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
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
