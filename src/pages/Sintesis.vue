<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .row.justify-content-center.mb-4   
      .col-lg-9.my-lg-0.my-3 
        p El siguiente diagrama ofrece una visión sintetizada de los principales conceptos y procedimientos desarrollados en el componente “Validación de requerimientos y modelado de bases de datos”. Está diseñado para facilitar al aprendiz la comprensión de la relación entre los diferentes elementos que componen este proceso integral de gestión de datos y requisitos.
        .row.justify-content-center.mb-4
          .col-lg-5.my-lg-0.my-3.j1
            img.img-a.img-t(src='@/assets/curso/temas/1.png' alt='') 
          .col-lg-7.my-lg-0.my-3.j1
            .bg1.p-4.h-100.j1
              p.mb-0 En el centro del diagrama se encuentra el concepto principal relacionado con la validación de requerimientos y modelado de bases de datos, del cual se derivan las siguientes áreas: identificación y caracterización de datos, modelado de la estructura relacional, modelado de la estructura no relacional, y documentación del modelo de datos. Cada una de estas áreas se detalla en subtemas que ilustran el enfoque y contenido del componente, desde la recolección y validación de información hasta el diseño y documentación técnica.
      .col-lg-3.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/2.png' alt='')  


    .row.justify-content-center.mb-4
      .col-lg-5.my-lg-0.my-3 
        img.img-a.img-t(src='@/assets/curso/temas/3.png' alt='')  

      .col-lg-7.my-lg-0.my-3
        .bgr1.p-3.brad.j1.h-100   
          p.mb-0 El área de identificación y caracterización de datos abarca la definición de tipos de datos, restricciones, y características, subrayando la importancia de entender y estructurar adecuadamente la información. El modelado de la estructura relacional se enfoca en diseñar tablas, establecer relaciones claras mediante llaves primarias y foráneas, y aplicar procesos de normalización para optimizar el almacenamiento. Por otro lado, el modelado de la estructura no relacional aborda bases de datos como las de documentos y grafos, explicando cómo manejar datos semiestructurados y elegir la mejor tecnología para casos específicos. Finalmente, la documentación del modelo de datos incluye la creación de diccionarios de datos, la descripción detallada de elementos, y recomendaciones para garantizar la transparencia y efectividad en la gestión de la base de datos. 

    .row.justify-content-center.mb-5
      .col-lg-9.my-lg-0.my-3.j1
        .row.justify-content-center.bg2.p-4
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/4.png' alt='')
          .col.pt-lg-0.pt-md-4.j1
            p.mb-0 Este diagrama sirve como una herramienta visual para navegar por los conceptos presentados en el componente, ayudando al aprendiz a entender rápidamente la secuencia y conexión de los procesos. Se invita a explorar el diagrama como un recurso complementario, ofreciendo una referencia rápida y un recordatorio estructurado de los elementos críticos en la validación y modelado de bases de datos.   
      .col-lg-3.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/5.png' alt='') 



    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img.img-a.img-t(src="@/assets/curso/temas/sintesis.svg", alt="La Figura 3 se denomina «Síntesis temática del componente», allí se mencionan los principales temas tratados sobre validación de requerimientos y modelado de bases de datos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
