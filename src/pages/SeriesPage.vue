<template>
  <div class="seriesPage">
    <carousel-component :slides="slides" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <categories-component :movies="categoriasMovies" />
    <!-- text -->
    <movies-section :movies="movies" :sectionTitle="dynamicTitle" class="mt-5" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <movies-section :movies="nowPlaying" :sectionTitle="dynamicTitle2" class="mt-5" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <movies-section :movies="topPopular" :sectionTitle="dynamicTitle3" class="mt-5" />
    <FooterComponent />
    <nav-bar />
  </div>
</template>

<script>
import MoviesSection from '@/components/MoviesSection.vue'
import CarouseComponent from '@/components/CarouseComponent.vue'
import request from '../utils/request'
import FooterComponent from '@/components/FooterComponent.vue'
import CategoriasComponentVue from '@/components/CategoriasComponent.vue'
import NavBar from '@/components/NavBarComponent.vue'
import { getFavoriteMovies } from '../services/fireBaseConfig'
export default {
  name: 'SeriesPage',
  components: {
    'categories-component': CategoriasComponentVue,
    'movies-section': MoviesSection,
    'carousel-component': CarouseComponent,
    FooterComponent: FooterComponent,
    'nav-bar': NavBar,
  },
  data() {
    return {
      reload: window.localStorage.getItem('reload'),
      featuredMovies: [],
      movies: [],
      dynamicTitle: 'Top Filmes',
      dynamicTitle2: 'Populares',
      dynamicTitle3: 'Lançados Recentemente',
      favoritMovie: [],
      topPopular: [],
      nowPlaying: [],
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
            'https://occ-0-5514-3851.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQnffHFDiWLP1apeR8hWLXZvEiZaA86y6aMOE_Zsp-pWkeyiqB1Ad-hR-N9XAwgJuOO0B4rn3G5L2LBGA-S4ejYjvUQwf6Y0TOuq.webp?r=005',
          url: 'https://embedder.net/e/155',
        },
      ],
      categoriasMovies: [
        {
          id: 1,
          title: 'Ação',
          tela: 'SeriesPage',
          banner: 'https://tm.ibxk.com.br/2021/12/02/02070127889006.jpg?ims=1200x675',
        },
        {
          id: 2,
          title: 'Aventura',
          tela: 'MyListPage',
          banner: 'https://s.aficionados.com.br/imagens/indiana-jones-0.jpg',
        },
        {
          id: 3,
          title: 'Comédia',
          tela: 'PumpingPage',
          banner:
            'https://s2-techtudo.glbimg.com/DIt9dHn8OaTksXuZ_P6I3z6cKbA=/0x0:1200x688/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/M/t/hUSS1ETauxF4Du1tZYoA/as-branquelas.jpg',
        },
        {
          id: 4,
          title: 'Drama',
          tela: 'HomeView',
          banner: 'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/05/tudobemnao.jpg',
        },
        {
          id: 5,
          title: 'Ficção Científica',
          tela: 'SeriesPage',
          banner:
            'https://edocbrasil.com.br/wp-content/uploads/2023/04/ficcao-cientifica-e-fantasia-jpg.webp',
        },
      ],
    }
  },
  methods: {
    async getFavoritMovie() {
      const userUid = JSON.parse(window.localStorage.getItem('user'))
      const getFavoritMovie = await getFavoriteMovies(userUid.uid)
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
        })
        this.topPopular = this.topPopular.map((item) => {
          if (this.favoritMovie.find((item2) => item2.movieId === item.movieId)) {
            return {
              ...item,
              favorit: true,
            }
          } else {
            return {
              ...item,
              favorit: false,
            }
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getPopular() {
      try {
        await request('GET', 'top_rated?language=pt-BR&page=1', (response) => {
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
        })
        this.movies = this.movies.map((item) => {
          if (this.favoritMovie.find((item2) => item2.movieId === item.movieId)) {
            return {
              ...item,
              favorit: true,
            }
          } else {
            return {
              ...item,
              favorit: false,
            }
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getNowPlaying() {
      try {
        await request('GET', 'now_playing', (response) => {
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
        this.nowPlaying = this.nowPlaying.map((item) => {
          if (this.favoritMovie.find((item2) => item2.movieId === item.movieId)) {
            return {
              ...item,
              favorit: true,
            }
          } else {
            return {
              ...item,
              favorit: false,
            }
          }
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
  async mounted() {
    await this.getFavoritMovie()
    await this.getPopular()
    await this.getNowPlaying()
    await this.topPlay()
  },
}
</script>
<style>
.carousel-component {
  z-index: 0;
}
</style>
