<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
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
        referencia:
          'Hewasinghage, M., Nadal, S., Abelló, A., & Zimányi, E. (2023). Automated database design for document stores with multicriteria optimization. Knowledge and Information Systems, 65(7), 3045–3078.',
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
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
