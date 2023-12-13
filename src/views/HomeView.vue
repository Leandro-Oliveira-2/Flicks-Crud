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
export default {
  name: 'HomeView',
  components: {
    'movies-section': MoviesSection,
    'carousel-component': CarouseComponent,
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
img.img-fluid {
  position: relative;
  width: 100%;
  object-fit: cover;
  margin: 0; /* Adicione esta linha */
  padding: 0; /* Adicione esta linha */
}
.carousel-component {
  z-index: 0;
}
</style>
