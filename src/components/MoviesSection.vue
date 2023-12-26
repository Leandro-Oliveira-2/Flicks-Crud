<template>
  <div class="movie-container">
    <b-card-title>Séries</b-card-title>
    <Carousel
      :per-page="perPage"
      :paginationEnabled="false"
      :navigationEnabled="false"
      v-model="currentPage"
      class="carousel"
    >
      <Slide v-for="movie in movies" :key="movie.id">
        <div class="card-container">
          <div class="card" style="border: none">
            <img :src="movie.banner" class="card-img-top mobile" alt="..." />
            <div class="card-body">
              <b-button
                class="link-light"
                @click="redirect(movie.movieId)"
                style="background-color: transparent !important; border: none"
              >
                <font-awesome-icon class="icon-play" icon="circle-play" size="2xl" />
              </b-button>
              <b-card-text class="card-description-text">
                {{
                  movie.description.length > 280
                    ? movie.description.substring(0, 280) + '...'
                    : movie.description
                }}
              </b-card-text>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
    <button v-if="hasScrolled" @click="prev" class="carousel-button prev">
      <font-awesome-icon icon="fa-solid fa-chevron-left" size="2xl" style="color: #ffffff" />
    </button>
    <button @click="next" class="carousel-button next">
      <font-awesome-icon icon="fa-solid fa-chevron-right" size="2xl" style="color: #ffffff" />
    </button>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'movies-section',
  components: {
    Carousel,
    Slide,
    FontAwesomeIcon,
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
    next() {
      if (this.currentPage < Math.ceil(this.movies.length / this.perPage) - 1) {
        this.currentPage++
      } else {
        this.currentPage = 0 // Volta para o início quando chega ao final
      }
      this.hasScrolled = true
    },
    prev() {
      if (this.currentPage > 0) {
        this.currentPage--
      } else {
        this.currentPage = Math.ceil(this.movies.length / this.perPage) - 1 // Volta para o final quando chega ao início
      }
    },
    redirect(url) {
      if (url) {
        window.open(`https://embedder.net/e/${url}`)
      } else {
        console.log('URL não fornecida para este slide.')
      }
    },
  },
}
</script>

<style>
.card-description-text {
  text-align: justify;
  font-size: 0.62vw;
}
.icon-button {
  background-color: transparent;
}
.icon-button.custom-link:active {
  width: 500px;
  border: none;
}
.btn-secondary:not(:disabled):not(.disabled):active {
  border: none;
}
.custom-link {
  color: #ffffff; /* Define a cor do texto para branco */
  background-color: white;
  text-decoration: none; /* Remove sublinhado padrão */
}
button.btn.btn-secondary {
  white-space: nowrap;
  display: flex;
  width: 0;
  padding: var(--flix-sys-radius-base, 0px) 0px !important;
  justify-content: center;
  align-items: center;
  border: none;
}

.icon-play {
  height: 35px;
  width: 35px;
  top: -20px;
  margin-left: -33px;
}

.button-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}
.card {
  background-color: #f3141400;
}
.movie-container.mt-5 {
  top: -43vh;
  z-index: 10;
}
.movie-container {
  position: relative;
  overflow: hidden; /* Adicionado para evitar que o card ampliado ultrapasse os limites do contêiner */
}
.card-container:hover .card {
  background-color: #202024;
  position: relative;
  top: 20%;
  transform: scale(1.4);
  transition: transform 0.2s ease-in-out;
  z-index: 1;
  border-radius: 5%;
}

li#carousel-fade___BV_indicator_1_ {
  background-color: #ffffff00;
}
li#carousel-fade___BV_indicator_2_ {
  background-color: #ffffff00;
}
li#carousel-fade___BV_indicator_3_ {
  background-color: #ffffff00;
}

.card-container:hover .card .card-img-top {
  transition: transform 0.3s ease-in-out;
  margin: 75px 0 70px;
}

.card-container:hover .card .card-body {
  position: relative;
  display: block;
}

/* a.btn.btn-primary {
  background-color: #0c0000; 
  margin: -60% 25% 0;
} */

.card-img-top {
  object-fit: cover; /* Adicionado para evitar que a imagem suba */
}

.card:hover .card-body {
  width: 300px;
  height: 200px;
  transform: none !important;
}

.card-img-top.mobile {
  width: 100%;
  height: 200px; /* Ajuste conforme necessário */
}

.card-body {
  display: none;
  border: none;
}
.movie-container {
  position: relative;
}
.movie-container {
  z-index: 1;
}
.mt-5 {
  top: -440px;
}
.carousel-button {
  position: absolute;
  top: 30%;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.368);
  height: 82%;
  width: 50px;
  margin: 0 -10px 0;
}

.movie-container:hover .carousel-button {
  opacity: 1;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.VueCarousel-slide {
  box-sizing: border-box;
  display: inline-block;
  padding: 0 0.2vw;
  position: relative;
  vertical-align: top;
  white-space: normal;
}

.card-img-top {
  position: relative;
  vertical-align: top;
  padding: 0 0 0.2;
}
.mt-5 {
  top: 0px;
  margin-left: 2rem;
}

@media (max-width: 600px) {
  .movie-container.mt-5 {
    top: -6px;
  }
  .carousel-button {
    position: absolute;
    top: 12%;
    border: none;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s;
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.368);
    height: 90%;
    width: 50px;
    margin: 0 -10px 0;
  }
  .card-container:hover .card .card-body {
    position: relative;
    display: none;
  }
  .card-container:hover .card {
    transform: none; /* Desativa o efeito de zoom */
  }

  /* Aplicar estilos específicos para a classe 'mobile' em dispositivos móveis */
  .card-img-top.mobile {
    width: 150px;
    height: 200px; /* Ajuste conforme necessário */
  }

  .mt-5 {
    top: 0px;
    margin-left: 0.5%;
  }
}
</style>
