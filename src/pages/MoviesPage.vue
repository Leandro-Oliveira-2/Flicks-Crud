<template>
  <div class="home">
    <carousel-component :slides="slides" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <movies-section :movies="movies" class="mt-5" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <movies-section :movies="movies" class="mt-5" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <movies-section :movies="movies" class="mt-5" />
  </div>
</template>

<script>
import MoviesSection from '@/components/MoviesSection.vue'
import CarouseComponent from '@/components/CarouseComponent.vue'
import request from '../utils/request'
export default {
  name: 'HomeView',
  components: {
    'movies-section': MoviesSection,
    'carousel-component': CarouseComponent,
  },
  data() {
    return {
      reload: window.localStorage.getItem('reload'),
      featuredMovies: [
        // Add your featured movies here
      ],
      movies: [
        { id: 1, banner: 'https://i.postimg.cc/FHfw4rSw/round-6-jpg.webp' },
        {
          id: 2,
          banner: 'https://t.ctcdn.com.br/tVW4FExOvyqJxDqrLxPKJAbAwVc=/640x360/smart/i348994.jpeg',
        },
        {
          id: 3,
          banner:
            'https://4329028l.ha.azioncdn.net/img/2021/01/blog/97961/blog-deus-nao-esta-morto-easy-resize-com.jpg',
        },
        {
          id: 4,
          banner:
            'https://4329028l.ha.azioncdn.net/img/2021/01/blog/97960/blog-deus-nao-esta-morto-1-easy-resize-com.jpg',
        },
        {
          id: 5,
          banner:
            'https://bibliotecadopregador.com.br/wp-content/uploads/2022/04/filme-evangelico-Eu-so-posso-imaginar.jpg',
        },
        {
          id: 6,
          banner:
            'https://4329028l.ha.azioncdn.net/img/2021/01/blog/97960/blog-deus-nao-esta-morto-1-easy-resize-com.jpg',
        },
        { id: 1, banner: 'https://i.postimg.cc/FHfw4rSw/round-6-jpg.webp' },
        {
          id: 2,
          banner: 'https://t.ctcdn.com.br/tVW4FExOvyqJxDqrLxPKJAbAwVc=/640x360/smart/i348994.jpeg',
        },
        {
          id: 3,
          banner:
            'https://4329028l.ha.azioncdn.net/img/2021/01/blog/97961/blog-deus-nao-esta-morto-easy-resize-com.jpg',
        },
        {
          id: 4,
          banner:
            'https://4329028l.ha.azioncdn.net/img/2021/01/blog/97960/blog-deus-nao-esta-morto-1-easy-resize-com.jpg',
        },
        {
          id: 5,
          banner:
            'https://bibliotecadopregador.com.br/wp-content/uploads/2022/04/filme-evangelico-Eu-so-posso-imaginar.jpg',
        },
        {
          id: 6,
          banner:
            'https://4329028l.ha.azioncdn.net/img/2021/01/blog/97960/blog-deus-nao-esta-morto-1-easy-resize-com.jpg',
        },
      ],
      slides: [
        {
          caption: 'First Slide',
          imgSrc:
            'https://lh3.googleusercontent.com/-aGmK5ReqUnw/Ybt9mUR0NcI/AAAAAAAAN4k/eMCuN6c81pgC63uQOWe31woGFb7jmxA0ACNcBGAsYHQ/s16000/homem-aranha%2Bsem%2Bvolta%2Bpra%2Bcasa.png',
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
            'https://ifilosofandohome.files.wordpress.com/2020/11/batman-cavaleiro-das-trevas.jpg',
          url: 'https://embedder.net/e/155',
        },
      ],
    }
  },
  methods: {
    async fetchData() {
      console.log('----------------entrei------------------')
      try {
        // Primeira requisição para obter os gêneros
        const genresResponse = await request.get('https://api.themoviedb.org/3/genre/movie/list', {
          params: {
            language: 'en',
          },
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzMwM2VkNzZjNzE4NGVhNDI0NGFjMjI2MTgzMWMzZSIsInN1YiI6IjY1ODRjMWUzNzVmMWFkMTY4OTZkYzk1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ioUiTj6EKTNpxrF-AqhWAuNzoQaqg5yPjgjJrtIZ1to',
          },
        })

        const genresData = genresResponse.data.genres
        console.log('Genres Data:', genresData)

        // Segunda requisição para obter a lista de filmes com base nos gêneros
        const moviesResponse = await request.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            language: 'en',
            sort_by: 'popularity.desc',
            with_genres: genresData.map((genre) => genre.id).join(','), // Concatena os IDs dos gêneros
          },
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzMwM2VkNzZjNzE4NGVhNDI0NGFjMjI2MTgzMWMzZSIsInN1YiI6IjY1ODRjMWUzNzVmMWFkMTY4OTZkYzk1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ioUiTj6EKTNpxrF-AqhWAuNzoQaqg5yPjgjJrtIZ1to',
          },
        })

        const moviesData = moviesResponse.data.results
        console.log('Movies Data:', moviesData)

        // Mapeie os resultados para o formato desejado
        const movies = moviesData.map((movie) => ({
          id: movie.id,
          banner: `https://caminho-para-as-posters/${movie.poster_path}`,
          // Adicione outros campos conforme necessário
        }))

        // Atribua a lista de filmes à propriedade do componente
        this.movies = movies
      } catch (error) {
        console.error('Erro ao obter dados:', error)
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
    this.fetchData()
    this.reloadStorage()
    this.teste()
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
