<template>
  <div class="home">
    <carousel-component :slides="slides" @slide-clicked="redirectToCineScreen" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <categories-component :movies="movies" />

    <movies-section :movies="movies" :sectionTitle="dynamicTitle" class="mt-5" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <movies-section :movies="nowPlaying" :sectionTitle="dynamicTitle2" class="mt-5" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <movies-section :movies="topPopular" :sectionTitle="dynamicTitle3" class="mt-5" />
    <FooterComponent />
  </div>
</template>

<script>
import MoviesSection from '@/components/MoviesSection.vue'
import CarouseComponent from '@/components/CarouseComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import request from '../utils/request'
import CategoriasComponentVue from '@/components/CategoriasComponent.vue'
export default {
  name: 'PumpingPage',
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
      dynamicTitle: 'Top Filmes',
      dynamicTitle2: 'Populares',
      dynamicTitle3: 'Lançados Recentemente',
      topPopular: [],
      nowPlaying: [],
      slides: [
        {
          caption: 'First Slide',
          imgSrc: 'https://iili.io/J5e0OuV.jpg',
          movieId: 'https://superflixapi.top/filme/tt6495056',
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
        await request('GET', '634649/recommendations', (response) => {
          console.log(response.data.results)
          let i = 0
          response.data.results.map((item, index) => {
            if ((index !== 5) & (index !== 6)) {
              i++

              this.movies.push({
                id: i,
                banner: `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`,
                movieId: item.id,
                description: item.overview,
                title: item.original_title,
              })
            }
          })
          console.log('Lista a ser alterada!')
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
