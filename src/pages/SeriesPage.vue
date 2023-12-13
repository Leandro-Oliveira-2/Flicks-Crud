<template>
  <div class="seriesPage">
    <carousel-component :slides="slides" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <categories-component :movies="movies" />
    <!-- text -->
    <movies-section :movies="movies" class="mt-5" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <movies-section :movies="movies" class="mt-5" />
    <!--     <b-card-text>Titulo</b-card-text> -->
    <movies-section :movies="movies" class="mt-5" />

    <nav-bar />
  </div>
</template>

<script>
import MoviesSection from '@/components/MoviesSection.vue'
import CarouseComponent from '@/components/CarouseComponent.vue'
import CategoriasComponentVue from '@/components/CategoriasComponent.vue'
import NavBar from '@/components/NavBarComponent.vue'
export default {
  name: 'SeriesPage',
  components: {
    'categories-component': CategoriasComponentVue,
    'movies-section': MoviesSection,
    'carousel-component': CarouseComponent,
    'nav-bar': NavBar,
  },
  data() {
    return {
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
        { id: 7, banner: 'https://i.postimg.cc/FHfw4rSw/round-6-jpg.webp' },
        {
          id: 8,
          banner: 'https://t.ctcdn.com.br/tVW4FExOvyqJxDqrLxPKJAbAwVc=/640x360/smart/i348994.jpeg',
        },
        {
          id: 9,
          banner:
            'https://4329028l.ha.azioncdn.net/img/2021/01/blog/97961/blog-deus-nao-esta-morto-easy-resize-com.jpg',
        },
        {
          id: 10,
          banner:
            'https://4329028l.ha.azioncdn.net/img/2021/01/blog/97960/blog-deus-nao-esta-morto-1-easy-resize-com.jpg',
        },
        {
          id: 11,
          banner:
            'https://bibliotecadopregador.com.br/wp-content/uploads/2022/04/filme-evangelico-Eu-so-posso-imaginar.jpg',
        },
        {
          id: 12,
          banner:
            'https://4329028l.ha.azioncdn.net/img/2021/01/blog/97960/blog-deus-nao-esta-morto-1-easy-resize-com.jpg',
        },
      ],
      slides: [
        {
          caption: 'First Slide',
          imgSrc:
            'https://s2.glbimg.com/2C0hMRuCY_7NfDPjby4_Bjmq8Nc=/e.glbimg.com/og/ed/f/original/2018/03/22/avengers-infinity-war-official-poster-2018-4o.jpg',
        },
        {
          caption: 'Second Slide',
          imgSrc: 'https://i.postimg.cc/FHfw4rSw/round-6-jpg.webp',
        },
        {
          caption: 'Third Slide',
          imgSrc:
            'https://4329028l.ha.azioncdn.net/img/2021/01/blog/97961/blog-deus-nao-esta-morto-easy-resize-com.jpg',
        },
      ],
    }
  },
}
</script>
<style>
.carousel-component {
  z-index: 0;
}
</style>
