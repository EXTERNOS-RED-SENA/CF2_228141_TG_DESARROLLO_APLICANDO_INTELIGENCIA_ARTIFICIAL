<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .row.justify-content-center.mb-4
      .col-lg-3.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/6.png' alt='') 
      .col-lg-9.my-lg-0.my-3.j1
        .row.justify-content-center.mb-4           
          .col-lg-7.my-lg-0.my-3 
            .bg4.p-4.j1.h-100
              p.mb-0 La validación de requerimientos y el modelado de bases de datos han adquirido una relevancia crítica en el desarrollo de sistemas eficientes y escalables. A medida que las organizaciones manejan volúmenes crecientes de datos, los diseñadores y desarrolladores han tenido que perfeccionar sus métodos y herramientas para garantizar la precisión y optimización en la gestión de la información. En este marco, se presenta un componente integral que abarca desde la caracterización detallada de la información hasta el diseño y documentación de modelos relacionales y no relacionales.
          .col-lg-5.my-lg-0.my-3.j1
            img.img-a.img-t(src='@/assets/curso/temas/7.png' alt='') 
        p Uno de los aspectos preponderantes de este proceso es la caracterización precisa de los datos. Esto incluye la identificación de tipos, características y restricciones que definen la calidad de la información, asegurando que se cumplan los estándares de integridad y consistencia. La comprensión de estos elementos permite diseñar bases de datos que no solo sean robustas, sino también adaptables a las necesidades cambiantes de los proyectos.              

    .row.justify-content-center.mb-4
      .col-lg-7.my-lg-0.my-3
        .bgr2.p-3.brad.j1.mb-4
          p.mb-0 El siguiente enfoque fundamental es el modelado de la estructura de datos relacional, donde se detallan las técnicas para organizar tablas, definir relaciones y aplicar procesos de normalización. Este apartado prioriza la eficiencia y la minimización de redundancias, utilizando diagramas entidad-relación (ERD) y otros métodos visuales que facilitan la planificación y diseño de bases de datos bien estructuradas.   
        p En paralelo, el modelado de estructuras de datos no relacionales aborda la flexibilidad y escalabilidad requeridas por aplicaciones modernas. Aquí se exploran bases de datos como documentos y grafos, con ejemplos prácticos de cómo manejar datos semiestructurados en formatos como JSON y XML. Este enfoque asegura que las soluciones sean ágiles y capaces de manejar grandes volúmenes de información distribuida.           
      .col-lg-5.my-lg-0.my-3 
        img.img-a.img-t(src='@/assets/curso/temas/8.png' alt='')  

    .row.justify-content-center.mb-5
      .col-lg-auto.j1
        img.img-a.img-t(src='@/assets/curso/temas/9.png' alt='')
      .col.pt-lg-0.pt-md-4
        .bg3.p-4.brad.h-100.j1
          p.mb-0 Finalmente, el componente se enfoca en la documentación detallada del modelo de datos, proporcionando lineamientos claros para elaborar diccionarios de datos y diseñar esquemas bien definidos. La documentación no solo facilita el mantenimiento y las actualizaciones futuras, sino que también garantiza la colaboración efectiva entre equipos. Este recorrido por la validación y el modelado de datos te preparará para crear sistemas robustos y alineados con las mejores prácticas de la industria.


    p ¡Bienvenido a este viaje por el mundo de la gestión de datos, donde aprenderás a diseñar estructuras eficientes y a documentar modelos de manera clara y precisa!

    .row.justify-content-center.align-items-center        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/JI264QhP2uU?si=ufqixzkF7hjOqqrT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)           
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
