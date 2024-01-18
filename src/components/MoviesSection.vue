<template>
  <div class="movie-container" :class="{ hovered: isHovered }">
    <b-card-title>{{ sectionTitle }}</b-card-title>
    <Carousel
      :per-page="perPage"
      :paginationEnabled="false"
      :navigationEnabled="false"
      v-model="currentPage"
      class="carousel"
    >
      <Slide v-for="movie in movies" :key="movie.id">
        <!--   <div :v-if="isLoading" class="spinner-border text-primary" role="status">
          <span class="visually-hidden"></span>
        </div> -->
        <div class="card-container">
          <div class="card" style="border: none">
            <img
              class="card-img-top mobile"
              @mouseover="isHovered = true"
              @mouseleave="isHovered = false"
              :src="movie.banner"
              alt="Movie Banner"
            />

            <div class="card-body">
              <b-button
                class="link-light"
                @click="redirect(movie.movieId)"
                style="background-color: transparent !important; border: none"
              >
                <font-awesome-icon class="icon-play" icon="circle-play" size="2xl" />
              </b-button>
              <b-button @click="addFavorite(movie.movieId, movie.title)">
                <font-awesome-icon icon="heart" class="heart-icon" style="color: #141414" />
                <i
                  v-if="movie.favorit == true"
                  class="fa-solid fa-heart fa-lg"
                  style="color: #b20710"
                ></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </b-button>
              <b-card-title class="card-title-movie">{{ movie.title }}</b-card-title>
              <b-card-text class="card-description-text">
                {{
                  movie.description.length > 210
                    ? movie.description.substring(0, 160) + '...'
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
import store from '@/utils/store'
import { addMovieToFavorites } from '@/services/fireBaseConfig'

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
    sectionTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      perPage: 6,
      currentPage: 0,
      hasScrolled: false,
      isHovered: false,
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
        // Use a mutation para armazenar a URL na store
        if (url.length > 30) {
          alert('URl diferente')
        }
        store.commit('setSelectedMovieUrl', url)

        // Navegue para a rota 'cineScreen'
        this.$router.push({
          name: 'cineScreen',
        })
      } else {
        console.log('URL não fornecida para este slide.')
      }
    },
    async addFavorite(moveId, title) {
      try {
        const user = JSON.parse(localStorage.getItem('user')) // Substitua pelo seu userId
        const userId = user.uid
        const moviesFavorites = user.favoriteMovies
        await addMovieToFavorites(userId, moveId, title)
        if (moviesFavorites.id === moveId) {
          console.log('Filme já adicionado aos favoritos')
        } else {
          user.favoriteMovies.push({ id: moveId, title })
          localStorage.setItem('user', JSON.stringify(user))
        }
      } catch (error) {
        console.error('Erro ao adicionar filme aos favoritos:', error)
      }
    },
  },
}
</script>

<style>
.card-container,
.card {
  cursor: pointer;
}

i.fa-solid.fa-heart {
  margin: -98px -117px 0px 0px;
  z-index: 10;
  width: 83px !important;
  height: 0px;
}

.heart-icon {
  top: -30px;
  z-index: 10;
  left: 70px;
}
.bi.bi-circle-fill {
  top: -30px;
  left: 61px;
}

.movie-container.hovered {
  z-index: 100;
  margin-block-end: -100px;
  position: relative; /* Adicione esta linha */
}
.card-title-movie {
  font-size: 1.2rem;
  white-space: break-spaces;
  color: #ffffff;
  margin-top: -15px;
}
.card-description-text {
  text-align: justify;
  font-size: 0.6rem;
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
  top: -30px;
  margin-left: -40px;
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
  top: -45vh;
  z-index: 10;
}

.movie-container {
  position: relative;
  overflow: hidden; /* Adicionado para evitar que o card ampliado ultrapasse os limites do contêiner */
}
.card-container:hover .card {
  background-color: #202024;
  position: absolute;
  transform: scale(1.3);
  transition: transform 0.2s ease-in-out;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 2%;
}

.card-container .card:hover {
  background-color: #202024;
  position: relative;
  top: -150px;
  transform: scale(1.3);
  transition: transform 0.2s ease-in-out;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 2%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
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
  margin: 180px 0 70px;
}

.card-container:hover .card .card-body {
  position: relative;
  display: block;
}

.card-container:hover .card > div:nth-child(1) {
  padding: 80px !important;
  position: relative;
  display: block;
}

.card-img-top {
  object-fit: cover; /* Adicionado para evitar que a imagem suba */
}

.card:hover .card-body {
  width: 300px;
  height: 150px;
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
.carousel-button {
  position: absolute;
  top: 15%;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.368);
  height: 85%;
  width: 50px;
  margin: 0 -10px 0;
  opacity: 1;
  top: 5vh;
  height: 85%;
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

.VueCarousel-slide:first-child:hover {
  padding-left: 3rem;
}

.card-img-top {
  position: relative;
  vertical-align: top;
  padding: 0 0 0.2;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.75rem;
}
.mt-5 {
  top: 0px;
  margin-left: 2rem;
}

@media (max-width: 600px) {
  .movie-container.mt-5 {
    top: -6px;
  }
  .heart-icon {
    top: -19px;
    z-index: 10;
    left: 58px;
    width: 15px;
    height: 15px;
  }
  svg.heart-icon.svg-inline--fa.fa-heart {
    margin: -1px -8px 0;
  }
  .bi.bi-circle-fill {
    top: -21px;
    left: 50px;
    width: 25px;
    height: 25px;
  }
  svg:not(:root).svg-inline--fa,
  svg:not(:host).svg-inline--fa {
    overflow: visible;
    box-sizing: content-box;
    width: 25px;
  }
  .VueCarousel-slide:first-child:hover {
    padding-left: 0;
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

  .card:hover .card-body {
    width: 197px;
    font-size: 1rem;
    left: -10px;
    /* height: 211px; */
    transform: none !important;
  }
  p.card-text.card-description-text {
    font-size: 0.5rem;
  }
  h4.card-title {
    margin-left: 2%;
    font-size: 0.9rem;
  }

  .card-container:hover .card .card-img-top {
    transition: transform 0.3s ease-in-out;
    margin: 97px 0 45px;
    width: 100%;
  }
  .icon-play {
    height: 25px;
    width: 25px;
    top: -20px;
    margin-left: -22px;
  }
  .movie-container:hover .carousel-button {
    opacity: 1;
    display: none;
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
