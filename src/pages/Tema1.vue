<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Caracterización de la información
      
    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3
        img.img-mov(src='@/assets/curso/temas/10.png' alt='')       
      .col-lg-8.my-lg-0.my-3
        .bg4.brad.p-3.j1.h-100
          p.mb-0 La caracterización de la información es un paso fundamental en el diseño y modelado de bases de datos, ya que permite comprender cómo se deben organizar, procesar y almacenar los datos de manera eficiente y segura. Este proceso implica definir los conceptos de datos e información, identificar sus diferentes tipos y entender las características que determinan la calidad y utilidad de los datos. También se consideran las restricciones necesarias para mantener la integridad y seguridad de la base de datos. 

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1	Concepto de datos

    p Los datos son unidades mínimas que representan hechos o cifras sin contexto, y su comprensión es importante para estructurar bases de datos adecuadamente.

    .row.justify-content-center.text-center    
      .col-lg-4.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/11.png' alt='')     
          h5 Definición
          p.mb-0 Los datos pueden ser números (por ejemplo, 45), texto (como “Juan Pérez”), fechas (por ejemplo, 12/06/2023), o valores booleanos (verdadero o falso). Sin embargo, por sí solos, estos datos no proporcionan información útil hasta que se organizan y procesan.
      .col-lg-4.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/12.png' alt='')     
          h5 Ejemplo práctico
          p.mb-0 Consideremos el dato “500”. Sin un contexto, este número es solo una cifra, pero si se describe como “500 ventas realizadas en junio”, se convierte en información significativa, útil para tomar decisiones de negocio.
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/13.png' alt='')     

    .row.bg10.align-items-center
      .px-lg-5.px-4
        Separador 
        #t_1_2.titulo-segundo.color-acento-contenido
          h2 1.2	Características de datos 
        p La calidad de los datos depende de ciertas características que garantizan su utilidad y confiabilidad.
        .row.justify-content-center.mb-5  
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              span Características de los datos
            .bgfig.mb-2
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/temas/15.svg' alt='La Figura 1 se denomina «Características de los datos» y explica las características de precisión, consistencia, completitud y relevancia que deben tener los datos para garantizar su utilidad y confiabilidad.')
              img.img-a.img-t.d-block.d-lg-none(src='@/assets/curso/temas/16.svg' alt='La Figura 1 se denomina «Características de los datos» y explica las características de precisión, consistencia, completitud y relevancia que deben tener los datos para garantizar su utilidad y confiabilidad.')  
            figcaption Fuente: OIT, 2024.     

        Separador 
        #t_1_3.titulo-segundo.color-acento-contenido
          h2 1.3	Restricciones y clasificación                        
        p Las restricciones aseguran la integridad de los datos, mientras que la clasificación los organiza según criterios específicos.

        TabsC.color-acento-contenido.mb-5
          .py-3.py-md-4.bg11(titulo="Restricciones")
            .row.justify-content-center.py-4
              .col-lg-4.my-lg-0.my-3
                img.img-a.img-t(src='@/assets/curso/temas/17.png' alt='')  
              .col-lg-7.my-lg-0.my-3
                h5 Restricciones 
                p Estas son reglas que se aplican a los datos:
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Restricción de unicidad:] garantiza que un valor no se repita. Por ejemplo, los números de seguridad social de los empleados deben ser únicos para evitar duplicados.

                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Restricción de tipo de datos:] define el tipo de datos que una columna puede contener. Una columna “Fecha de nacimiento” solo debe aceptar datos de tipo fecha.

                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Restricción de valor:] limita los valores posibles. Por ejemplo, una columna “Estado del pedido” podría aceptar solo “Pendiente”, “Enviado” o “Entregado”.

          .py-3.py-md-4.bg11(titulo="Clasificación")
            .row.justify-content-center.py-4
              .col-lg-4.my-lg-0.my-3
                img.img-a.img-t(src='@/assets/curso/temas/18.png' alt='')  
              .col-lg-7.my-lg-0.my-3
                h5 Clasificación 
                p Se organiza según criterios como sensibilidad o naturaleza:
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Clasificación por sensibilidad:] los datos pueden ser públicos (como información general de contacto) o confidenciales (como datos financieros).

                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Clasificación por tipo de contenido:] pueden ser estáticos, como un archivo histórico, o dinámicos, como datos de transacciones en tiempo real.

    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4	Tipos de información                      
    p La información puede ser estructurada, no estructurada o semiestructurada, dependiendo de su organización y propósito.     

    .row.justify-content-center    
      .col-lg-8.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Información estructurada")
            p Esta se organiza en un formato predefinido, como tablas en una base de datos. Por ejemplo, una tabla de empleados podría tener columnas como ID, Nombre, Cargo, y Salario, lo que facilita su gestión y consulta mediante SQL.        
          div(titulo="Información no estructurada")
            p No sigue un patrón fijo y es difícil de organizar. Ejemplos incluyen correos electrónicos, documentos de texto o imágenes. Este tipo de información requiere técnicas avanzadas, como procesamiento de lenguaje natural (NLP), para su análisis.
          div(titulo="Información semiestructurada")
            p Tiene una estructura parcial o flexible, como archivos JSON o XML. Por ejemplo, un archivo JSON que almacena información de un cliente podría incluir campos como nombre, dirección, e historial de compras, pero la estructura puede variar entre registros.

      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/19.png' alt='')       

</template>

<script>
export default {
  name: 'Tema1',
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
