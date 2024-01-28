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
              <b-button @click="addFavorite(movie.movieId, movie.title)" class="favoritButton">
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
.movie-container.mt-5 {
  z-index: 10;
  padding-left: 2.5rem;
  position: relative;
  top: -58vh;
}

.card-body {
  display: none;
}
.card-body:hover .carousel-button.prev {
  visibility: hidden;
}
.card-container:hover .card > div:nth-child(1) {
  padding: 80px !important;
  position: relative;
  display: block;
}
.card:hover .card-body {
  display: block;
  cursor: pointer;
  width: 350px;
  height: 190px;
  border-radius: 2%;
  background-color: #202024;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.card:hover .card-img-top.mobile {
  cursor: pointer;
}
.VueCarousel-slide {
  box-sizing: border-box;
  display: inline-block;
  padding: 0 0.2vw;
  position: relative;
  vertical-align: top;
  white-space: normal;
}

.card:hover {
  z-index: 1;
  border-radius: 2%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.card-title-movie {
  font-size: 1.2rem;
  white-space: break-spaces;
  color: #ffffff;
  margin-top: -27px;
}
.card-description-text {
  text-align: justify;
  font-size: 0.7rem;
}
/* Icones  */
i.fa-solid.fa-heart {
  margin: -96px 199px 0px 0px;
  z-index: 10;
  width: 83px !important;
  height: 0px;
}

.icon-play {
  margin: 45px 0px 0px -50px;
}
.heart-icon {
  top: -30px;
  z-index: 10;
  left: 70px;
}
.heart-icon {
  top: 239px;
  z-index: 10;
  left: 4.1rem;
  width: 30px;
  height: 16px;
}

.bi.bi-circle-fill {
  top: 238px;
  left: 56px;
  width: 50px;
  height: 32px;
}
/* li */
li#carousel-fade___BV_indicator_1_ {
  background-color: #ffffff00;
  display: none;
}
li#carousel-fade___BV_indicator_2_ {
  background-color: #ffffff00;
  display: none;
}
li#carousel-fade___BV_indicator_3_ {
  background-color: #c92f2f;
  display: none;
}
/* BOTÕES */
button.carousel-button.prev {
  margin-left: 95%;
}
button.btn.link-light.btn-secondary {
  margin-top: 10%;
}
.favoritButton:active {
  border: none;
}
.btn-secondary:focus,
.btn-secondary.focus {
  color: #fff;
  border: none;
  box-shadow: 0 0 0 0.2rem rgb(130 138 145 / 0%) !important;
}
.favoritButton {
  width: 30px; /* ajuste o tamanho conforme necessário */
  height: 30px; /* ajuste o tamanho conforme necessário */
  background-color: transparent !important;
  border: none;
  padding: 0; /* remova qualquer padding adicional */
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
  background-color: rgba(0, 0, 0, 0);
  height: 85%;
  width: 50px;
  margin: 0 -10px 0;
  opacity: 1;
  top: 5vh;
  height: 85%;
}

@media (max-width: 600px) {
  .movie-container.mt-5 {
    padding-left: 3%;
    top: auto;
  }
  .categoria-conteiner {
    margin-bottom: -3rem;
    margin-left: 3.5%;
  }
  button.carousel-button.prev {
    margin-left: 89%;
  }
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 128px !important;
    min-height: 186px;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }
  .card:hover button.carousel-button.next {
    display: none;
  }

  .card-container:hover .card > div:nth-child(1) {
    padding: 80px !important;
    position: relative;
    display: block;
  }
  .card:hover .card-body {
    width: 200px;
    height: 207px;
  }

  .card:hover .card-body {
    width: 200px;
  }

  .carousel-button {
    margin-left: 5px; /* Ajuste a margem esquerda para que os botões não fiquem muito próximos à borda */
  }

  .card-body {
    display: none; /* Certifique-se de que o corpo do cartão seja visível */
  }

  .card-img-top.mobile {
    max-width: 258px;
    height: 188px;
    object-fit: cover;
  }

  .card:hover .card-img-top.mobile {
    cursor: default; /* Remova o cursor ao passar sobre a imagem */
  }

  .card-description-text {
    font-size: 10px;
  }

  h4.card-title {
    margin-left: 2%;
    font-size: 17px;
  }
  .bi.bi-circle-fill {
    top: 219px;
    left: 54px;
    width: 50px;
    height: 32px;
  }
  .heart-icon {
    top: 220px;
    left: 64px;
  }
  i.fa-solid.fa-heart {
    margin: -87px 205px 0px 0px;
    z-index: 10;
    width: 83px !important;
    height: 0px;
  }
  .heart-icon-mobile {
    top: auto; /* Remova a posição superior */
  }
  .icon-play {
    margin: 21px 0px 0px -22px;
  }
}
</style>
