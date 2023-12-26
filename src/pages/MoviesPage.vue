<template>
  <div class="home">
    <carousel-component :slides="slides" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <movies-section :movies="movies" class="mt-5" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <movies-section :movies="nowPlaying" class="mt-5" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <movies-section :movies="topPopular" class="mt-5" />
    <FooterComponent />
  </div>
</template>

<script>
import MoviesSection from '@/components/MoviesSection.vue'
import CarouseComponent from '@/components/CarouseComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import request from '../utils/request'
export default {
  name: 'HomeView',
  components: {
    'movies-section': MoviesSection,
    'carousel-component': CarouseComponent,
    FooterComponent: FooterComponent,
  },
  data() {
    return {
      reload: window.localStorage.getItem('reload'),
      featuredMovies: [
        // Add your featured movies here
      ],
      movies: [],
      topPopular: [],
      nowPlaying: [],
      slides: [
        {
          caption: 'First Slide',
          imgSrc:
            'https://i0.wp.com/viciados.net/wp-content/uploads/2021/11/Spider-Man_No_Way_Home_Sem_Volta_Para_Casa_Homem_Aranha_3.webp',
          url: 'https://embedder.net/e/634649',
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
    }
  },
  methods: {
    async fetchData() {
      console.log('----------------entrei------------------')
      try {
        const tmdbApiOptions = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/movie/now_playing',
          params: {
            language: 'en-US',
            page: 1,
          },
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzMwM2VkNzZjNzE4NGVhNDI0NGFjMjI2MTgzMWMzZSIsInN1YiI6IjY1ODRjMWUzNzVmMWFkMTY4OTZkYzk1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ioUiTj6EKTNpxrF-AqhWAuNzoQaqg5yPjgjJrtIZ1to',
            accept: 'application/json',
          },
        }

        await request(
          tmdbApiOptions.method,
          tmdbApiOptions.url,
          tmdbApiOptions.params,
          tmdbApiOptions.headers,
          (response) => {
            console.log('entrei')
            let i = 0
            response.data.data.list.map((item) => {
              i++
              this.movies.push({
                id: i,
                banner: item.primaryImage.imageUrl,
                movieId: item.id,
                description: item.overview,
              })
            })
            console.log(response.data.data.list.id)
          },
        )
      } catch (error) {
        console.log(error)
      }
      console.log('----------------sai------------------')
    },
    async topPlay() {
      console.log('----------------entrei------------------')
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
            })
          })
          console.log(response.data.data.list.id)
        })
      } catch (error) {
        console.log(error)
      }
      console.log('----------------sai------------------')
    },
    async getPopular() {
      console.log('----------------entrei------------------')
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
            })
          })
          console.log(response.data.data.list.id)
        })
      } catch (error) {
        console.log(error)
      }
      console.log('----------------sai------------------')
    },
    async getNowPlaying() {
      console.log('----------------entrei 2222------------------')
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
            })
          })
          console.log(response.data.data.list.id)
        })
      } catch (error) {
        console.log(error)
      }
      console.log('----------------sai------------------')
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
