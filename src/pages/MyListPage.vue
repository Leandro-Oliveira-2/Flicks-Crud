<template>
  <div class="home">
    <carousel-component :slides="slides" @slide-clicked="redirectToCineScreen" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <categories-component :movies="movies" />

    <movies-section :movies="favoritMovie" :sectionTitle="dynamicTitle" class="mt-5" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <movies-section :movies="nowPlaying" :sectionTitle="dynamicTitle2" class="mt-5" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <movies-section :movies="topPopular" :sectionTitle="dynamicTitle3" class="mt-5" />

    <movies-section :movies="movies" :sectionTitle="dynamicTitle" class="mt-5" />
    <FooterComponent />
  </div>
</template>

<script>
import MoviesSection from '@/components/MoviesSection.vue'
import CarouseComponent from '@/components/CarouseComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import request from '../utils/request'
import CategoriasComponentVue from '@/components/CategoriasComponent.vue'
import { getFavoriteMovies } from '@/services/fireBaseConfig'
export default {
  name: 'MyListPage',
  components: {
    'movies-section': MoviesSection,
    'carousel-component': CarouseComponent,
    FooterComponent: FooterComponent,
    'categories-component': CategoriasComponentVue,
  },
  data() {
    return {
      reload: window.localStorage.getItem('reload'),
      featuredMovies: [],
      movies: [],
      dynamicTitle: 'Lista de Favoritos',
      dynamicTitle2: 'Sugestões',
      dynamicTitle3: 'Lançados Recentemente',
      topPopular: [],
      nowPlaying: [],
      favoritMovie: [],
      slides: [
        {
          caption: 'First Slide',
          imgSrc:
            'https://i0.wp.com/viciados.net/wp-content/uploads/2021/11/Spider-Man_No_Way_Home_Sem_Volta_Para_Casa_Homem_Aranha_3.webp',
          movieId: '634649',
        },
        {
          caption: 'Second Slide',
          imgSrc:
            'https://assetsio.reedpopcdn.com/2000x1125.webp?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
          url: 'https://embedder.net/e/502356',
        },
        {
          caption: 'Third Slide',
          imgSrc:
            'https://img.olhardigital.com.br/wp-content/uploads/2023/07/Destaque-Poster-de-Oppenheimer.jpg',
          url: 'https://embedder.net/e/155',
        },
      ],
    }
  },
  methods: {
    async verifyUser() {
      if (window.localStorage.getItem('user') == null) {
        this.$router.push('/loginPage')
      }
    },
    async getFavoritMovie() {
      const userUid = JSON.parse(window.localStorage.getItem('user'))
      const getFavoritMovie = await getFavoriteMovies(userUid.uid)
      console.log('^^^^^^Filmes Favotiros', getFavoritMovie)
      try {
        if (Array.isArray(getFavoritMovie)) {
          for (let i = 0; i < getFavoritMovie.length; i++) {
            const item = getFavoritMovie[i]
            await new Promise((resolve) => {
              request('GET', `${item.id}`, (response) => {
                this.favoritMovie.push({
                  id: i + 1,
                  banner: `https://image.tmdb.org/t/p/w1280${response.data.backdrop_path}`,
                  movieId: response.data.id,
                  description: response.data.overview,
                  title: response.data.original_title,
                  favorit: true,
                })
                console.log('Favoritos', this.favoritMovie)
                resolve()
              })
            })
          }
        } else {
          console.log('favoriteMovies não é um array')
        }
      } catch (error) {
        console.log(error)
      }
    },
    compararPorId(objetoA, objetoB) {
      return objetoA.id === objetoB.id
    },
    async topPlay() {
      try {
        const getFavoritMovie = JSON.parse(window.localStorage.getItem('user'))

        await request('GET', 'upcoming', (response) => {
          let i = 0
          response.data.results.map((item) => {
            i++
            this.topPopular.push({
              id: i,
              banner: `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`,
              movieId: item.id,
              description: item.overview,
              title: item.original_title,
            })
          })
          console.log(this.moviesEquals(getFavoritMovie.favoriteMovies, this.topPopular))

          console.log('Pós filtro')
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getPopular() {
      try {
        await request('GET', 'top_rated?language=pt-BR&page=1', (response) => {
          console.log(response.data.results)
          let i = 0
          response.data.results.map((item) => {
            item.i++
            this.movies.push({
              id: i,
              banner: `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`,
              movieId: item.id,
              description: item.overview,
              title: item.original_title,
            })
          })
          console.log(response.data.data.list.id)
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getNowPlaying() {
      try {
        await request('GET', 'now_playing', (response) => {
          console.log(response.data.results)

          this.nowPlaying = []

          response.data.results.forEach((item, index) => {
            this.nowPlaying.push({
              id: index + 1,
              banner: `https://image.tmdb.org/t/p/w1280${item.backdrop_path || ''}`,
              movieId: item.id,
              description: item.overview,
              title: item.original_title,
            })
          })
        }).catch((error) => {
          console.error('Erro na solicitação now_playing:', error)
        })
      } catch (error) {
        console.log(error)
      }
    },
    reloadStorage() {
      if (this.reload == 'true') {
        window.localStorage.setItem('reload', 'false')
        window.location.reload()
      }
    },
  },
  mounted() {
    this.getPopular()
    this.getFavoritMovie()
    this.getNowPlaying()
    this.topPlay()
  },
}
</script>
<style>
img.img-fluid {
  position: relative;
  width: 100%;
  object-fit: contain; /* Altere 'cover' para 'contain' */
  margin: 0;
  padding: 0;
}
.carousel-component {
  z-index: 0;
}
</style>
