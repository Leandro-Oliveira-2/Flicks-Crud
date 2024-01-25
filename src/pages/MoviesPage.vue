<template>
  <div class="seriesPage">
    <carousel-component :slides="slides" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <categories-component :movies="movies" />
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
export default {
  name: 'HomeView',
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
            'https://img.olhardigital.com.br/wp-content/uploads/2023/07/Destaque-Poster-de-Oppenheimer.jpg',
          url: 'https://embedder.net/e/155',
        },
      ],
    }
  },
  methods: {
    async topPlay() {
      try {
        await request('GET', 'upcoming', (response) => {
          console.log(response.data.results)
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
          console.log(response.data.data.list.id)
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
            i++
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
          let i = 0
          response.data.results.map((item) => {
            i++
            this.nowPlaying.push({
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
    reloadStorage() {
      if (this.reload == 'true') {
        window.localStorage.setItem('reload', 'false')
        window.location.reload()
      }
    },
  },
  mounted() {
    this.getPopular()
    this.getNowPlaying()
    this.topPlay()
  },
}
</script>
<style scoped>
.carousel-component {
  z-index: 0;
}
</style>
