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
          caption: 'Second Slide',
          imgSrc: 'https://i.postimg.cc/FHfw4rSw/round-6-jpg.webp',
        },
        {
          caption: 'Third Slide',
          imgSrc:
            'https://occ-0-354-3851.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW93ISQjYU-22HN6z20IbLqvrEW66EOeeIOTtihaGUG_BCtJSu5_zGZWMlxfjVogcWwOXANj232qXlbfRfgXWLRClpFJrwSAxOTM.webp?r=d4f',
        },
        {
          caption: 'First Slide',
          imgSrc:
            'https://occ-0-354-3851.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUmwiDmbFXV1OoNorKsBGIboikSCCFEe10JWzy3ueANf4028_0Rrz-xr-aMjFYkiH44YZL7aN0SLhjDg2AsjUiug1L19hHKjj8M-.webp?r=be5',
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
