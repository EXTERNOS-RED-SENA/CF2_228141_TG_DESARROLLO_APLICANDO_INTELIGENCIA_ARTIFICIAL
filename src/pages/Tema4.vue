<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 	Documentación del modelo de datos
    .row.justify-content-center.mb-4
      .col-lg-2.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/47.png' alt='') 
      .col-lg-4.my-lg-0.my-3.j1
          p.mb-0 Documentar el modelo de datos es un paso en el desarrollo y mantenimiento de bases de datos. Una documentación clara y detallada asegura que los desarrolladores, analistas y otros miembros del equipo comprendan la estructura y el propósito de la base de datos, facilitando futuras actualizaciones, optimizaciones y la resolución de problemas. Este tema explora cómo diseñar y presentar la documentación de manera efectiva, abarcando desde el diseño hasta las recomendaciones para su implementación.
      .col-lg-6.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/48.png' alt='') 

    Separador 
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1	Diseño de la base de datos
    p El diseño de la base de datos abarca la estructura general y cómo se organizan los datos para garantizar su eficacia y rendimiento.

    .row.justify-content-center  
      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/49.png' alt='')        
      .col-lg-8.my-lg-0.my-3 
        .row.justify-content-start.my-4
          .col-auto
            h5.py-2.px-3.bgt1.brad Esquema de la base de datos 

        p Describe la estructura global, incluyendo tablas, columnas, relaciones y restricciones. El esquema debe mostrar cómo las diferentes entidades están interconectadas. Por ejemplo, en un sistema de gestión de inventario, el esquema podría incluir tablas como “Productos”, “Proveedores”, y “Pedidos”, mostrando cómo estas tablas se relacionan mediante llaves foráneas.

    .row.justify-content-start.my-4
      .col-auto
        h5.py-2.px-3.bgt1.brad Diagrama entidad-relación (ERD)
    p.mb-5 Es una representación gráfica del esquema de la base de datos. Los diagramas ERD ayudan a visualizar las entidades, los atributos y las relaciones entre ellas. 

    .row.justify-content-center.mb-5  
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Ejemplo de un modelo entidad relación
        .bgfig.mb-2
          img.img-a.img-t(src='@/assets/curso/temas/50.png' alt='La Figura 2 se denomina «Ejemplo de un modelo entidad relación» y representa la estructura de una base de datos académica que maneja información sobre estudiantes, grupos, asignaturas, calificaciones, profesores, y las relaciones entre ellos.') 
        figcaption Fuente: OIT, 2024. 
      .col-lg-4
        .bg5.p-4.h-100.j1.brad
          p.mb-0 Este modelo entidad-relación (ER) representa la estructura lógica y organizativa de una base de datos académica diseñada para gestionar y almacenar eficientemente información relacionada con distintos elementos del entorno educativo. En particular, el modelo organiza datos sobre estudiantes, grupos a los que pertenecen, asignaturas que estudian, calificaciones que obtienen, y los profesores que imparten las materias. Cada entidad en el modelo está interconectada mediante relaciones específicas que garantizan la integridad y coherencia de los datos, permitiendo que el sistema pueda realizar consultas y operaciones de manera eficiente. 

    p A continuación, se explican los componentes clave del modelo: 
    .row.justify-content-center.mb-5  
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/51.png' alt='')        
      .col-lg-9.my-lg-0.my-3
        h5.mb-4 Entidades y sus atributos        
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="<i>Marks</i> (Calificaciones)")
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i mark id (integer):]] identificador único para cada registro de calificación.
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i student id (integer):]] referencia al estudiante que recibió la calificación, se conecta con la entidad Students.
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i subject id (integer):]] referencia a la asignatura evaluada, se conecta con la entidad #[em Subjects].
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i date (date/time):]] fecha en la que se registró la calificación.
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i mark (integer):]] la calificación obtenida por el estudiante en la asignatura específica. 
          div(titulo="<i>Students</i> (Estudiantes)")
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i student id (integer):]] identificador único del estudiante.
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i first name (varchar):]] primer nombre del estudiante.
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i last name (varchar):]] apellido del estudiante.
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i group id (integer):]] referencia al grupo al que pertenece el estudiante, se conecta con la entidad #[em Groups.]
          div(titulo="<i>Groups </i> (Grupos)")
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i group id (integer):]] identificador único del grupo.
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i name (varchar):]] nombre o designación del grupo (por ejemplo, Grupo A, Grupo B).
          div(titulo="<i>Subjects</i> (Asignaturas)")
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i group id (integer):]] identificador único del grupo.
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i name (varchar):]] nombre o designación del grupo (por ejemplo, Grupo A, Grupo B).
          div(titulo="<i>Teachers</i> (Profesores)")
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i teacher id (integer):]] identificador único del profesor.
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i first name (varchar):]] primer nombre del profesor.
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i last name (varchar):]] apellido del profesor.
          div(titulo="<i>Subject/teacher</i> (Asignatura/Profesor)")
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i subject id (integer):]] referencia a la asignatura impartida, se conecta con #[em Subjects].
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i teacher id (integer):]] referencia al profesor que enseña la asignatura, se conecta con #[em Teachers.]
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i group id (integer):]] referencia al grupo al que se le imparte la asignatura, se conecta con #[em Groups.]
    h5.mb-4 Relaciones
    .row.justify-content-center.mb-4   
      .col-lg-7.my-lg-0.my-3
        .bg3.p-3.brad.mb-4       
          .bgw.brad.p-3.j1.mb-3
            ul.mb-0.lista-ul.fa-ul
              li.mb-0 
                i.fas.fa-check-circle.color1
                span.mb-0 #[b Relación entre #[em Marks] y #[em Students]:] la entidad #[em Marks] tiene un atributo student id que se conecta con #[em student] id en #[em Students]. Esto significa que cada calificación está asociada a un estudiante específico. 
          .bgw.brad.p-3.j1.mb-3
            ul.mb-0.lista-ul.fa-ul
              li.mb-0 
                i.fas.fa-check-circle.color1
                span.mb-0 #[b Relación entre #[em Marks] y #[em Subjects]:] la entidad Marks se conecta con #[em Subjects] a través del subject id. Cada calificación pertenece a una asignatura específica. 
          .bgw.brad.p-3.j1.mb-3
            ul.mb-0.lista-ul.fa-ul
              li.mb-0 
                i.fas.fa-check-circle.color1
                span.mb-0 #[b Relación entre #[em Students] y #[em Groups]:] la entidad #[em Students] tiene un atributo #[em group] id que se conecta con #[em Groups], indicando el grupo al que pertenece el estudiante.
          .bgw.brad.p-3.j1.mb-3
            ul.mb-0.lista-ul.fa-ul
              li.mb-0 
                i.fas.fa-check-circle.color1
                span.mb-0 #[b Relación entre #[em Subject/teacher] y #[em Subjects], #[em Teachers] y #[em Groups]:] la entidad #[em Subject/teacher] actúa como una entidad de unión que relaciona asignaturas con profesores y grupos. Esto permite indicar qué profesor imparte qué asignatura a cuál grupo.
          .bgw.brad.p-3.j1
            ul.mb-0.lista-ul.fa-ul
              li.mb-0 
                i.fas.fa-check-circle.color1
                span.mb-0 #[b Relación entre #[em Teachers] y #[em Subject/teacher]:] la entidad #[em Teachers] se conecta con #[em Subject/teacher] a través del #[em teacher] id, especificando qué profesor enseña una asignatura específica a un grupo.                 

      .col-lg-5.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/53.png' alt='')  


    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/54.png' alt='')         
      .col-lg-8.my-lg-0.my-3
        h5 Descripción general
        p Este modelo permite gestionar un sistema académico donde se pueden:
        ul.mb-4.lista-ul.fa-ul
          li
            i.fas.fa-check-circle.color1
            span Registrar calificaciones de estudiantes para distintas asignaturas.
          li
            i.fas.fa-check-circle.color1
            span Asociar estudiantes a grupos específicos.
          li
            i.fas.fa-check-circle.color1
            span Asignar profesores a materias y especificar los grupos a los que enseñan.
          li
            i.fas.fa-check-circle.color1
            span Facilitar consultas sobre las calificaciones de estudiantes, asignaturas impartidas por profesores, y la distribución de estudiantes en grupos.           

        h5 Definición de elementos
        p Cada tabla y sus atributos deben documentarse detalladamente. Esto incluye la descripción del propósito de la tabla y de cada columna, así como los tipos de datos y las restricciones aplicadas. Por ejemplo, una tabla de “Usuarios” podría tener un campo “Correo electrónico” con una restricción de unicidad para asegurar que no se repitan las direcciones.

    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2	Elaboración del diccionario de datos                 
    p El diccionario de datos proporciona una referencia completa de los elementos de la base de datos y sus atributos.
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.bg11(titulo="Descripción de tablas y columnas")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/55.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Descripción de tablas y columnas 
            p Cada tabla debe tener una entrada en el diccionario que describa su función y la de cada columna. Por ejemplo, para una tabla “Clientes”, se incluiría información como: Nombre: “Almacena el nombre completo del cliente”; Correo electrónico: “Dirección de correo única para contactar al cliente”.
      .py-3.py-md-4.bg11(titulo="Tipos de datos y restricciones")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/56.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Tipos de datos y restricciones
            p Se especifican los tipos de datos (texto, numérico, fecha, etc.) y las restricciones aplicadas, como restricciones de unicidad, llaves primarias y llaves foráneas. Por ejemplo, un campo “Fecha de nacimiento” se documentaría con un tipo de dato “Fecha” y con una nota que indique que no se aceptan fechas futuras.
      .py-3.py-md-4.bg11(titulo="Indices y optimización")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/57.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Indices y optimización
            p Si se han creado índices para mejorar el rendimiento de las consultas, estos también deben incluirse en el diccionario. Por ejemplo, un índice sobre el campo “ID de producto” en una tabla “Productos” para optimizar las búsquedas.

    .row.justify-content-center 
      .col-lg-10
        .row.justify-content-center.bg13.text-white.p-4.brad
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/32.png' alt='')
          .col.pt-lg-0.pt-md-4.j1
            p.mb-0 #[b Ejemplo:] en un sistema de ventas, un diccionario de datos ayudaría a los desarrolladores a comprender que el campo “Precio” en la tabla “Productos” es de tipo decimal y está restringido a valores positivos, evitando posibles errores durante las actualizaciones de la base de datos.    

    Separador 
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3	Estructura del modelo de datos
    p La estructura del modelo de datos define cómo se organizan y relacionan las entidades dentro de la base de datos.
          
    .row.justify-content-center.text-center.mb-5    
      .col-lg-4.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/58.png' alt='')     
          h5 Relaciones entre entidades

          p.mb-0 Se explican las conexiones lógicas entre tablas, como relaciones uno a uno, uno a muchos y muchos a muchos. Se deben describir las llaves foráneas que gestionan estas relaciones. Por ejemplo, en un sistema de gestión de empleados, una tabla “Departamentos” estaría relacionada con “Empleados” mediante una llave foránea que conecta el “ID del departamento” en ambas tablas.
      .col-lg-4.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/59.png' alt='')     
          h5 Integridad referencial

          p.mb-0 Se especifica cómo se mantienen las relaciones consistentes. Por ejemplo, se documenta que, si se elimina un registro en la tabla “Clientes”, todos los registros relacionados en la tabla “Pedidos” deben actualizarse o eliminarse automáticamente según las reglas de la base de datos.
      .col-lg-4.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/60.png' alt='')     
          h5 Manejo de datos complejos

          p.mb-0 Si se gestionan datos complejos, como listas anidadas o estructuras JSON, se debe explicar cómo se almacenan y acceden. Por ejemplo, un campo que almacene detalles del pedido en formato JSON debe tener instrucciones claras para la consulta y actualización de estos datos. 

    Separador 
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4	Recomendaciones de implementación
    p Las recomendaciones aseguran que la base de datos funcione de manera eficiente y se mantenga segura y fácil de actualizar.

    .row.justify-content-center.mb-5      
      .col-lg-9.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Optimización de consultas")
            p Se sugieren prácticas para mejorar el rendimiento, como el uso adecuado de índices, la desnormalización en casos específicos, o la partición de tablas cuando se manejan grandes volúmenes de datos. Por ejemplo, en una base de datos de transacciones financieras, se podría recomendar la creación de índices en campos de búsqueda frecuente como “Fecha de transacción”.
          div(titulo="Gestión de seguridad")
            p Se incluyen pautas para proteger los datos, como el cifrado de datos sensibles, la gestión adecuada de permisos de usuario, y el uso de autenticación robusta. Por ejemplo, se recomienda que los campos como “Contraseña” se almacenen cifrados con algoritmos seguros como bcrypt.
          div(titulo="Mantenimiento y respaldo")
            p Se detallan estrategias para realizar copias de seguridad periódicas y planes de recuperación ante fallos. Por ejemplo, en un entorno crítico como un sistema de salud, se podría recomendar una estrategia de respaldo incremental diario y un respaldo completo semanal, con pruebas regulares de restauración.
          div(titulo="Actualizaciones y escalabilidad")
            p Se sugieren prácticas para facilitar actualizaciones futuras y garantizar que la base de datos pueda escalar con el crecimiento del sistema. Esto incluye el diseño modular y la previsión de posibles expansiones. Por ejemplo, si se espera que una base de datos crezca significativamente, se podría recomendar la implementación de particionamiento horizontal para distribuir datos en múltiples servidores.
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/61.png' alt='')  
    .row.justify-content-center 
      .col-lg-10
        .row.justify-content-center.bg13.text-white.p-4.brad
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/32.png' alt='')
          .col.pt-lg-0.pt-md-4.j1
            p.mb-0 #[b Ejemplo:] en un sistema de comercio electrónico que espera un aumento en el tráfico durante temporadas de venta, las recomendaciones podrían incluir el uso de un sistema de caché para mejorar la velocidad de las consultas y estrategias de balanceo de carga para gestionar múltiples solicitudes.           

</template>

<script>
export default {
  name: 'Tema4',
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
