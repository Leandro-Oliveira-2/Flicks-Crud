<template>
  <div class="categoria-conteiner">
    <b-card-title>Categoria</b-card-title>
    <Carousel
      :per-page="perPage"
      :paginationEnabled="false"
      :navigationEnabled="false"
      v-model="currentPage"
      class="carousel"
    >
      <Slide v-for="movie in movies" :key="movie.id">
        <div @click="redirect(movie.tela)">
          <b-avatar
            class="genero"
            rounded="sm"
            :src="movie.banner"
            style="width: 80px; height: 80px"
          ></b-avatar>
        </div>
        <b-card-title class="text-label-categorie" style="margin-left: 25%">{{
          movie.title
        }}</b-card-title>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'CategoriesComponent',
  components: {
    Carousel,
    Slide,
  },
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      perPage: 6,
      currentPage: 0,
      hasScrolled: false,
    }
  },
  methods: {
    redirect(categoryName) {
      // Aqui você redireciona para a rota com o nome da categoria
      this.$router.push({ name: categoryName })
    },
  },
}
</script>
<style>
.categoria-conteiner {
  display: none;
}
@media (max-width: 600px) {
  .categoria-conteiner {
    display: block;
    margin-top: -4rem;
    margin-block-end: 2rem;
  }
  .categoria-conteiner {
    margin-bottom: -1rem;
    margin-left: -0.5%;
  }
  span.b-avatar.genero.badge-secondary.rounded-sm {
    width: 60px;
  }
  span.b-avatar-img {
    border-radius: 5rem;
  }
  .VueCarousel-inner {
    gap: 0.6rem;
  }
  .VueCarousel-wrapper {
    margin-left: 2%;
  }
  h4.card-title {
    margin-left: 2%;
    font-size: 1rem;
  }
  .text-label-categorie {
    font-size: 0.5rem;
    margin: 7px 0 15px;
  }
}
</style>
