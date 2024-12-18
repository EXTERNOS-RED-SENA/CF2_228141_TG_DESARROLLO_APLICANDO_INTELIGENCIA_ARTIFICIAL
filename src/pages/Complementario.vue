<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
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
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
