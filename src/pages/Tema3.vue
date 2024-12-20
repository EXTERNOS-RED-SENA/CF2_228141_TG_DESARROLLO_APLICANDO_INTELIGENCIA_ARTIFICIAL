<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Modelado de la estructura de datos no relacional	

    .row.justify-content-center.mb-4
      .col-lg-3.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/33.png' alt='') 
      .col-lg-5.my-lg-0.my-3.j1
        .bg4.p-4.j1.h-100
          p.mb-0 El modelado de datos no relacional ha ganado importancia con el auge de las aplicaciones modernas que requieren alta flexibilidad y escalabilidad. A diferencia de las bases de datos relacionales, las no relacionales almacenan datos sin una estructura rígida de tablas, lo que las hace ideales para manejar información semiestructurada o no estructurada, como documentos, archivos JSON o datos en memoria. Este tema explora los diferentes tipos de bases de datos no relacionales, sus estructuras, y las herramientas que permiten modelar y gestionar eficientemente estos datos.
      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/34.png' alt='') 


    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1	Tipos de bases de datos no relacionales
    p Las bases de datos no relacionales (o NoSQL) se clasifican en varias categorías, cada una diseñada para casos de uso específicos.

    .row.justify-content-center  
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/37.png' alt='')        
      .col-lg-9.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Bases de datos de tipo clave-valor")
            p Estas bases almacenan datos como pares clave-valor, donde cada clave es única y se asocia con un valor. Son útiles para almacenar datos simples y rápidos de recuperar, como sesiones de usuario. Ejemplo: Redis y Amazon DynamoDB son bases de datos clave-valor que se utilizan ampliamente para cachés y sistemas de búsqueda rápida.
          div(titulo="Bases de datos de documentos")
            p Almacenan datos en documentos, típicamente en formato JSON, BSON o XML. Son muy útiles para aplicaciones que manejan datos semiestructurados y dinámicos. Ejemplo: MongoDB permite almacenar y consultar documentos JSON completos, lo que es ideal para aplicaciones web que requieren una estructura de datos flexible.
          div(titulo="Bases de datos de grafos")
            p Estas bases se usan para representar y consultar relaciones complejas entre entidades. Son adecuadas para aplicaciones como redes sociales, donde las conexiones entre personas deben gestionarse eficientemente. Ejemplo: Neo4j es una base de datos de grafos que se utiliza para analizar redes sociales o sistemas de recomendación.
          div(titulo="Bases de datos orientadas a columnas")
            p Almacenan datos en columnas en lugar de filas, lo que mejora el rendimiento de consultas analíticas. Son útiles en aplicaciones de análisis de grandes volúmenes de datos, como en la analítica de big data. Ejemplo: Apache Cassandra y HBase son bases de datos orientadas a columnas que se utilizan en sistemas que requieren escalabilidad masiva y velocidad en la escritura y lectura de datos.                         

    .row.justify-content-center 
      .col-lg-10
        .row.justify-content-center.bg13.text-white.p-4.brad
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/32.png' alt='')
          .col.pt-lg-0.pt-md-4.j1
            p.mb-0 #[b Ejemplo:] un sistema de comercio electrónico que necesita almacenar información diversa sobre productos, carritos de compra y usuarios podría utilizar una base de datos de documentos como MongoDB. Los documentos pueden tener estructuras diferentes para productos y carritos, sin necesidad de una estructura fija como en las bases de datos relacionales.    

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2	Estructuras de datos en JSON y XML
    p Los formatos JSON y XML se utilizan ampliamente en bases de datos no relacionales para almacenar y transportar datos.

    .row.justify-content-start.my-4
      .col-auto
        h5.py-2.px-3.bgt1.brad JSON (JavaScript #[em Object Notation])

    .row.justify-content-center.mb-4   
      .col-lg-8.my-lg-0.my-3
        p Es un formato ligero que representa datos como objetos clave-valor, lo que lo hace fácil de leer y escribir para humanos y máquinas. Se usa comúnmente en aplicaciones web y servicios RESTful. 

        p #[b Ejemplo:] Un documento JSON que describe un producto puede contener campos como:
        .row.justify-content-center.mb-5
          .col-lg-8  
            .p-4(style="background-color: #cfe1fa ")      
              code {
                br
                | "id":101, 
                br
                | "nombre":"Camiseta deportiva", 
                br
                | "precio":25.99,
                br
                | "tallas":["S","M", "L", "XL"], 
                br
                | "en_stock": true
                br
                | }
      
        //- img.img-a.img-t(src='@/assets/curso/temas/35.png' alt='')                          

      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/36.png' alt='')                          

    p Aquí, el formato JSON permite manejar listas y valores booleanos de manera sencilla.

    .row.justify-content-center.mb-4  
      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/38.png' alt='')       
      .col-lg-8.my-lg-0.my-3
        .row.justify-content-start.my-4
          .col-auto
            h5.py-2.px-3.bgt1.brad XML (#[em Extensible Markup Language])   
        p Es un formato más estructurado que utiliza etiquetas para definir elementos y se emplea en aplicaciones que requieren validación y estructura más rígida. 


        p #[b Ejemplo:] un archivo XML para un pedido podría verse así:
        .row.justify-content-center.mb-5
          .col-lg-8
            .p-4(style="background-color: #cfe1fa ") 
                pre
                  code 
                      br
                      |&lt;pedido&gt;
                      br
                      | &lt;id&gt;12345&lt;/id&gt;
                      br
                      | &lt;cliente&gt;Juan Pérez&lt;/cliente&gt;
                      br
                      | &lt;productos&gt;
                      br
                      |   &lt;producto&gt;
                      br
                      |     &lt;nombre&gt;Portátil&lt;/nombre&gt;
                      br
                      |     &lt;precio&gt;750.00&lt;/precio&gt;
                      br
                      |   &lt;/producto&gt;
                      br
                      | &lt;producto&gt;
                      br
                      |   &lt;nombre&gt;Ratón inalámbrico&lt;/nombre&gt;
                      br
                      |   &lt;precio&gt;25.50&lt;/precio&gt;
                      br
                      |&lt;/producto&gt;
                      br
                      |&lt;/productos&gt;
                      br
                      |   &lt;/pedido&gt;

        //- img.img-a.img-t.mb-4(src='@/assets/curso/temas/39.png' alt='')                          
        p XML es útil en sistemas para la interoperabilidad entre distintas plataformas.

    .row.justify-content-center 
      .col-lg-10
        .row.justify-content-center.bg13.text-white.p-4.brad
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/32.png' alt='')
          .col.pt-lg-0.pt-md-4.j1
            p.mb-0 #[b Ejemplo:] en una aplicación móvil que consume datos de un servidor, los datos pueden recibirse en formato JSON porque es más ligero y se procesa rápidamente en los navegadores y aplicaciones móviles.

    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3	Herramientas de modelado
    p Existen varias herramientas que facilitan el diseño y la gestión de bases de datos no relacionales, cada una adaptada a un tipo específico de datos.
          
    .row.justify-content-center.text-center.mb-5    
      .col-lg-3.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/40.png' alt='')     
          h5 MongoDB Compass

          p.mb-0 Una herramienta gráfica para explorar y analizar datos almacenados en MongoDB. Permite visualizar documentos, ejecutar consultas y optimizar índices.
      .col-lg-3.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/42.png' alt='')     
          h5 Neo4j Browser

          p.mb-0 Utilizada para modelar y consultar datos en una base de datos de grafos. Ofrece una interfaz interactiva donde se pueden ejecutar consultas y visualizar relaciones complejas entre nodos.
      .col-lg-3.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/43.png' alt='')     
          h5 Apache Cassandra

          p.mb-0 Utiliza nodos distribuidos y es excelente para manejar grandes cantidades de datos en tiempo real. Herramientas como DataStax Studio permiten modelar y analizar datos orientados a columnas.  
      .col-lg-3.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/44.png' alt='')     
          h5 RedisInsight

          p.mb-0 Un panel de control para visualizar y analizar datos en Redis. Ayuda a optimizar el rendimiento y gestionar datos clave-valor de manera eficiente.  

    .row.justify-content-center 
      .col-lg-10
        .row.justify-content-center.bg13.text-white.p-4.brad
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/32.png' alt='')
          .col.pt-lg-0.pt-md-4.j1
            p.mb-0 #[b Ejemplo:] en una empresa que maneja millones de transacciones financieras diarias, Apache Cassandra podría ser la herramienta preferida debido a su capacidad de escalar horizontalmente y manejar datos en múltiples servidores.  

    Separador 
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4	Ventajas y desventajas
    p El uso de bases de datos no relacionales tiene pros y contras que deben evaluarse antes de la implementación.
          
    .row.justify-content-center.mb-4  
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/45.png' alt='')                        

      .col-lg-7.my-lg-0.my-3
        .bg1.p-4.h-100.j1.brad
          h5 Ventajas
          ul.lista-ul.fa-ul
            li 
              i.fas.fa-check-circle.color1
              span #[b Flexibilidad:] las bases de datos no relacionales pueden manejar datos semiestructurados, lo que permite cambios rápidos en el esquema sin afectar la base de datos completa. Por ejemplo, agregar un nuevo campo a un documento en MongoDB es sencillo.   
            li 
              i.fas.fa-check-circle.color1
              span #[b Escalabilidad horizontal:] son diseñadas para distribuir datos en varios servidores, lo que las hace ideales para aplicaciones que requieren alta disponibilidad y grandes volúmenes de datos. Ejemplo: Facebook usa bases de datos de grafos para manejar conexiones entre usuarios a escala masiva.  
            li 
              i.fas.fa-check-circle.color1
              span #[b Alto rendimiento:] las operaciones de lectura y escritura suelen ser muy rápidas, especialmente en bases de datos clave-valor como Redis.                   

    .row.justify-content-center.mb-5
      .col-lg-7.my-lg-0.my-3
        .bg5.p-4.h-100.j1.brad
          h5 Desventajas
          ul.lista-ul.fa-ul
            li 
              i.fas.fa-check-circle.color1
              span #[b Falta de soporte para transacciones complejas:] a diferencia de las bases de datos relacionales, las no relacionales a menudo carecen de soporte para transacciones ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad), lo que puede ser un problema en aplicaciones financieras.
            li 
              i.fas.fa-check-circle.color1
              span #[b Consistencia eventual:] en sistemas distribuidos, algunas bases de datos NoSQL garantizan la consistencia eventual en lugar de la consistencia inmediata, lo que puede ser problemático para aplicaciones que requieren datos siempre precisos. 
            li 
              i.fas.fa-check-circle.color1
              span #[b Curva de aprendizaje:] aprender y optimizar bases de datos no relacionales puede ser complicado, especialmente para aquellos acostumbrados a los sistemas relacionales.                             
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/46.png' alt='')                        

    p #[b Ejemplo:] en una aplicación de redes sociales, la base de datos de grafos como Neo4j es ideal para gestionar las conexiones entre usuarios y las recomendaciones de amigos. Sin embargo, para manejar transacciones financieras, se preferiría un sistema que garantice la consistencia inmediata, como un DBMS relacional. 

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2. 
          span Bases de datos relacionales vs bases de datos no relacionales
        .tabla-a.color-acento-botones
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Aspecto
                th Bases de Datos Relacionales
                th Bases de Datos No Relacionales

            tbody
              tr
                td Modelo de datos         
                td Utilizan un modelo basado en tablas, donde los datos se organizan en filas y columnas.        
                td Utilizan modelos de datos flexibles como documentos, gráficos, clave-valor o columnas.
              tr
                td Esquema         
                td Tienen un esquema predefinido y rígido, donde se deben definir las tablas y las relaciones antes de agregar datos.        
                td Tienen un esquema flexible o sin esquema, permitiendo agregar datos sin estructuras fijas.  
              tr
                td Lenguaje de consulta         
                td Utilizan SQL (Structured Query Language) para definir y manipular datos.         
                td Utilizan diferentes lenguajes de consulta según el tipo, como JSON, CQL, o Gremlin.  
              tr
                td Escalabilidad         
                td Escalabilidad vertical: aumentan su rendimiento añadiendo más potencia al servidor.        
                td Escalabilidad horizontal: pueden manejar grandes volúmenes de datos distribuyéndolos en múltiples servidores.  
              tr
                td Transacciones         
                td Soportan transacciones ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad) para garantizar la integridad de los datos.        
                td Soportan transacciones BASE (Básicamente Disponible, Estado Suave, Eventual Consistencia), priorizando la disponibilidad y la flexibilidad.  
              tr
                td Ejemplos          
                td MySQL, PostgreSQL, Oracle, Microsoft SQL Server          
                td MongoDB, Cassandra, Redis, Neo4j, Couchbase
              tr
                td Uso principal         
                td Adecuadas para aplicaciones con relaciones complejas entre datos y que requieren consistencia estricta.         
                td Ideales para aplicaciones que necesitan manejar grandes volúmenes de datos, con requisitos de flexibilidad y alta disponibilidad.   
              tr
                td Integridad de los datos         
                td Alta integridad debido a la estructura rígida y las restricciones relacionales.         
                td Menor integridad por la flexibilidad, pero con mayor capacidad para manejar datos no estructurados.  
              tr
                td Relaciones entre datos          
                td Administran relaciones mediante claves primarias y foráneas, permitiendo un modelado relacional robusto.        
                td Pueden manejar relaciones, pero no de la manera tradicional; algunas usan referencias o estructuras embebidas.   
              tr
                td Rendimiento         
                td Rendimiento óptimo para operaciones transaccionales complejas y consultas estructuradas.         
                td Mejor rendimiento para consultas rápidas y manejo de datos masivos con alta disponibilidad.                                                                                            
</template>

<script>
export default {
  name: 'Tema3',
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
