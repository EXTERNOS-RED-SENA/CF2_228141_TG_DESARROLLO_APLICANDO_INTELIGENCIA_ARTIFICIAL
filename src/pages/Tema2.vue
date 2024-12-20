<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Modelado de la estructura de datos relacional

    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/20.png' alt='') 
      .col-lg-5.my-lg-0.my-3.j1
        .bg4.p-4.j1.h-100
          p.mb-0 El modelado de bases de datos relacionales es una práctica para organizar y estructurar datos de manera eficiente, garantizando que se puedan gestionar y consultar de forma óptima. Este proceso se basa en crear tablas con relaciones bien definidas, aplicando principios de normalización para reducir la redundancia y mantener la integridad de los datos. A lo largo de este tema, se explican en detalle los elementos para modelar datos relacionales, desde la selección del tipo de base de datos hasta los procesos técnicos de normalización.
      .col-lg-3.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/21.png' alt='') 

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1	Selección de bases de datos relacionales                    
    p Elegir la base de datos relacional adecuada es importante para un diseño eficiente y un rendimiento óptimo del sistema.   

    .row.justify-content-center.mb-4    
      .col-lg-7.my-lg-0.my-3
        .row.justify-content-start.my-4
          .col-auto
            h5.py-2.px-3.bgt1.brad Factores a considerar   
        p la selección debe basarse en varios criterios, como la cantidad de datos que se espera manejar, el tipo de transacciones que se realizarán, y los requisitos de seguridad y escalabilidad. Por ejemplo, si se necesita un alto rendimiento en la consulta de grandes volúmenes de datos, una base de datos como PostgreSQL puede ser adecuada por su soporte robusto a operaciones complejas y su capacidad de manejar grandes cargas de trabajo.
      .col-lg-5.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/22.png' alt='')            


    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/23.png' alt='')      
      .col-lg-8.my-lg-0.my-3
        h5 Ejemplos de uso 
        .bg4.p-3.brad.mb-4       
          .bgw.brad.p-3.j1.mb-3
            ul.mb-0.lista-ul.fa-ul
              li.mb-0 
                i.fas.fa-check-circle.color1
                span.mb-0 #[b MySQL:] comúnmente utilizado en aplicaciones web que requieren una base de datos ligera y rápida. Por ejemplo, un sistema de blogs donde los posts y los usuarios están relacionados en tablas.
          .bgw.brad.p-3.j1
            ul.mb-0.lista-ul.fa-ul
              li.mb-0 
                i.fas.fa-check-circle.color1
                span.mb-0 #[b SQL Server:] preferido en entornos empresariales que demandan alta disponibilidad y seguridad, como un sistema de gestión de nómina de empleados.      

    p Estos ejemplos destacan cómo la elección del DBMS debe alinearse con las necesidades específicas del proyecto, asegurando que la base de datos seleccionada pueda satisfacer los requisitos técnicos y operativos.
    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Análisis de relaciones y cardinalidades 
    p El análisis de las relaciones y las cardinalidades entre tablas es fundamental para diseñar un esquema de datos efectivo.
    .row.justify-content-start.my-4
      .col-auto
        h5.py-2.px-3.bgt1.brad Tipos de relaciones

    .row.justify-content-center.mb-4   
      .col-lg-7.my-lg-0.my-3
        h5 Ejemplos de uso 
        .bg5.p-3.brad.mb-4       
          .bgw.brad.p-3.j1.mb-3
            ul.mb-0.lista-ul.fa-ul
              li.mb-0 
                i.fas.fa-check-circle.color1
                span.mb-0 #[b Uno a uno (1:1):] una relación donde un registro en una tabla está vinculado a un único registro en otra tabla. 
          .bgw.brad.p-3.j1.mb-3
            ul.mb-0.lista-ul.fa-ul
              li.mb-0 
                i.fas.fa-check-circle.color1
                span.mb-0 #[b Uno a muchos (1):] una relación donde un registro en una tabla está vinculado a múltiples registros en otra.   

          .bgw.brad.p-3.j1
            ul.mb-0.lista-ul.fa-ul
              li.mb-0 
                i.fas.fa-check-circle.color1
                span.mb-0 #[b Muchos a muchos (M):] una relación donde múltiples registros en una tabla pueden estar relacionados con múltiples registros en otra.                  

      .col-lg-5.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/24.png' alt='')  


    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1. 
          span Ejemplo de tabla de entrada y salida
        .tabla-a.color-acento-botones.mb-5
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th 1. Relación Uno a Uno (1:1) 
                th 2. Relación Uno a Muchos (1:N)
                th 3. Relación Muchos a Muchos (N:M)

            tbody
              tr
                td
                  img.img-a.img-t(src='@/assets/curso/temas/25.svg' alt='La Tabla 1 se denomina «Tipos de relaciones» y presenta un ejemplo para cada relación:  uno a uno, uno a muchos, muchos a muchos, explicando las características de cada una.') 
                  br
                  br
                  ul.lista-ul.fa-ul
                    li 
                      i.fas.fa-check-circle.color1
                      span Cada registro en la tabla A se relaciona con un único registro en la tabla B
                    li 
                      i.fas.fa-check-circle.color1
                      span La relación es única en ambas direcciones
                    li 
                      i.fas.fa-check-circle.color1
                      span Se usa para datos únicos y exclusivos                   

                td
                  img.img-a.img-t(src='@/assets/curso/temas/26.svg' alt='La Tabla 1 se denomina «Tipos de relaciones» y presenta un ejemplo para cada relación:  uno a uno, uno a muchos, muchos a muchos, explicando las características de cada una.')
                  br
                  br 
                  ul.lista-ul.fa-ul
                    li 
                      i.fas.fa-check-circle.color1
                      span Un registro en la tabla A puede relacionarse con varios registros en la tabla B
                    li 
                      i.fas.fa-check-circle.color1
                      span Cada registro en la tabla B pertenece a un único registro en la tabla A
                    li 
                      i.fas.fa-check-circle.color1
                      span Es el tipo de relación más común                   

                td
                  img.img-a.img-t(src='@/assets/curso/temas/27.svg' alt='La Tabla 1 se denomina «Tipos de relaciones» y presenta un ejemplo para cada relación:  uno a uno, uno a muchos, muchos a muchos, explicando las características de cada una.')
                  br
                  br 
                  ul.lista-ul.fa-ul
                    li 
                      i.fas.fa-check-circle.color1
                      span Varios registros en la tabla A pueden relacionarse con varios registros en la tabla B
                    li 
                      i.fas.fa-check-circle.color1
                      span Requiere una tabla intermedia para establecer las relaciones
                    li 
                      i.fas.fa-check-circle.color1
                      span La tabla intermedia contiene las claves primarias de ambas tablas 

    .row.justify-content-center.bg12.p-4
      .col-lg-4.my-lg-0.my-3
        img.img-mov(src='@/assets/curso/temas/28.png' alt='')       
      .col-lg-8.my-lg-0.my-3
        .row.justify-content-start.mb-4
          .col-auto
            h5.py-2.px-3.bgt1.brad Cardinalidad   

        p Describe cuántas veces una entidad puede estar asociada con otra.

        p #[b Ejemplo práctico:] si en un sistema de ventas un cliente puede realizar varios pedidos, pero cada pedido pertenece a un solo cliente, la relación es de uno a muchos (1). Sin embargo, si un pedido puede tener múltiples productos y cada producto puede aparecer en varios pedidos, la relación es muchos a muchos (M), lo que requeriría una tabla intermedia como “Detalles de pedidos”.

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3	Diseño de tablas y elementos        
    p El diseño adecuado de tablas ayuda a organizar los datos y facilitar su uso en aplicaciones.
   

    .row.justify-content-center    
      .col-lg-9.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Elementos del diseño")
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Campos:] los campos son las columnas de una tabla que definen el tipo de datos que se almacenan. Por ejemplo, en una tabla de “Clientes”, los campos pueden incluir Nombre, Correo electrónico, Dirección, y Teléfono. Cada campo debe tener un tipo de dato específico para asegurar la consistencia y precisión.

              li 
                i.fas.fa-check-circle.color1
                span #[b Registros:] son las filas de la tabla que representan instancias específicas de datos. Por ejemplo, un registro en una tabla de “Productos” podría contener los datos de un producto específico, como ID del producto: 123, Nombre: Lápiz HB, y Precio: 0.50 USD.  
          div(titulo="Tipos de llaves")
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Llave primaria:] identifica de manera única cada registro en una tabla. Ejemplo: en una tabla de “Empleados”, la ID de empleado sería la llave primaria, garantizando que cada empleado tenga un identificador único.

              li 
                i.fas.fa-check-circle.color1
                span #[b Llave compuesta:] utiliza más de un campo para asegurar la unicidad. Ejemplo: en una tabla de “Reservas de hotel”, una combinación de ID de habitación y Fecha de reserva puede formar una llave compuesta para evitar duplicados.

              li 
                i.fas.fa-check-circle.color1
                span #[b Llave foránea:] establece relaciones entre tablas, conectando campos de una tabla con la llave primaria de otra. Ejemplo: en una tabla de “Facturas”, el ID de cliente actúa como una llave foránea que enlaza con la tabla de “Clientes”.

      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/19.png' alt='')            

    p Este diseño garantiza que las relaciones entre tablas se mantengan claras y estructuradas, facilitando consultas eficientes y minimizando errores de datos.

    Separador 
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4	Procesos de normalización
      
    p.mb-5 La normalización es un conjunto de reglas y técnicas que organiza los datos en tablas para reducir la redundancia y garantizar la integridad de los datos.            

    .row.justify-content-center.text-center.mb-5    
      .col-lg-4.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/29.png' alt='')     
          h5 Primera forma normal (1FN) 

          p.mb-0 Los datos deben ser atómicos y no contener listas ni conjuntos en un solo campo. Ejemplo: una tabla de “Contactos” no debe tener un campo que liste varios números de teléfono separados por comas. En lugar de eso, cada número debe estar en un registro separado.   
      .col-lg-4.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/30.png' alt='')     
          h5 Segunda forma normal (2FN)

          p.mb-0 Se aplica a tablas que ya cumplen con 1FN, asegurando que cada campo no clave dependa completamente de la llave primaria. Ejemplo: en una tabla de “Pedidos”, los detalles del cliente, como el nombre o la dirección, se trasladan a una tabla separada de “Clientes” para evitar duplicación.    
      .col-lg-4.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/31.png' alt='')     
          h5 Tercera forma normal (3FN)

          p.mb-0 Elimina las dependencias transitivas, asegurando que los datos estén organizados de forma óptima. Ejemplo: si una tabla de “Productos” incluye información sobre la categoría del producto y la descripción de la categoría, estos datos se mueven a una tabla de “Categorías” separada, con una relación entre ambas tablas. 

    .row.justify-content-center 
      .col-lg-10
        .row.justify-content-center.bg13.text-white.p-4.brad
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/32.png' alt='')
          .col.pt-lg-0.pt-md-4.j1
            p.mb-0 Ejemplo práctico: imagina un sistema de gestión escolar donde los datos de los estudiantes y sus calificaciones se almacenan en una tabla grande. Aplicar procesos de normalización implica dividir esta tabla en varias, como “Estudiantes”, “Cursos”, y “Calificaciones”, asegurando que cada tabla almacene solo la información relevante y esté bien relacionada con las demás.               

</template>

<script>
export default {
  name: 'Tema2',
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
