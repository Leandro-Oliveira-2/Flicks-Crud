<template>
  <div class="carousel-container position-relative">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 1px #000"
      fade
      indicators
      img-width="800"
      img-height="100px"
      controls="false"
      @sliding-start="updateActiveSlide"
    >
      <b-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :caption="title"
        :img-src="slide.imgSrc"
        :label-indicator="`Página ${index + 1}`"
      >
      </b-carousel-slide>
    </b-carousel>
    <div class="degrade-top">teste</div>
    <div class="degrade">teste</div>
    <div class="d-flex justify-content-between position-absolute w-100" style="z-index: 1">
      <div class="heart-svg-icon" @click="favoritar(slides[activeSlide])">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          fill="currentColor"
          class="bi bi-heart"
          viewBox="0 0 32 32"
        >
          <path
            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
          />
        </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        fill="currentColor"
        class="bi bi-info-circle ml-auto"
        viewBox="0 0 32 32"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path
          d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        />
      </svg>
    </div>
    <div class="lateral-degrade">teste</div>
    <div class="title-container" v-if="activeSlide === 2 && window.location.pathname === '/series'">
      <div class="title">
        <b-img
          src="https://occ-0-354-3851.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABU253PSQDGa2j0hWv3QM8bUkbakNhdnSCQKUOp3X9GNbzBIT_6TYeP-o-UetIskBJVXDCqDPGt7zg1l-FMukeqnPcnfN2Nw5bro-LF23UCtHwxWuzJ6UsVQhjCKyOyAa_Nuh3DBNolh3Ewe0kFn-YLdKjUJGtdsZ3L_VwCGLlLlNT6yumGzxPQ.webp?r=580"
          fluid-grow
          alt="Fluid-grow image"
        ></b-img>
      </div>
      <div class="title">
        <p class="text-justify">
          Nesta série documental, a cantora pop mais polêmica do Brasil fala sobre a vida amorosa,
          carreira, controvérsias e a criação de um novo álbum.
        </p>
      </div>
      <div class="btn container">
        <ButtonComponent
          :body-text="'Assistir'"
          :color="'btn-light'"
          :colorButton="'#000000'"
          @click="redirect(slide)"
          :buttonSize="150"
          :buttonHeight="60"
          :icon="'play'"
          :colorIcon="'#000000'"
        />
        <ButtonComponent
          :icon="'circle-info'"
          :iconColor="'#fffffff'"
          :body-text="'Mais informações'"
          @click="abrirSite()"
          :buttonHeight="60"
          :buttonSize="270"
          :dynamicBackground="'rgba(128, 128, 128, 0.6)'"
        />
      </div>
    </div>
    <div class="title-container-2">
      <div class="btn container">
        <ButtonComponent
          :body-text="'Assistir'"
          :color="'btn-light'"
          :colorButton="'#000000'"
          @click="redirect()"
          :buttonSize="150"
          :buttonHeight="60"
          :icon="'play'"
          :colorIcon="'#000000'"
        />
        <ButtonComponent
          :icon="'circle-info'"
          :iconColor="'#fffffff'"
          :body-text="'Mais informações'"
          @click="abrirSite()"
          :buttonHeight="60"
          :buttonSize="270"
          :dynamicBackground="'rgba(128, 128, 128, 0.6)'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue'
import store from '@/utils/store'
export default {
  name: 'carouselComponent',
  components: {
    ButtonComponent,
  },
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      title: '',
      activeSlide: 0,
      urlVideo: '',
    }
  },
  methods: {
    updateActiveSlide(newSlide) {
      this.activeSlide = newSlide
    },
    abrirSite() {
      window.open('https://www.adorocinema.com/')
    },
    async favoritar(videoId) {
      // Extrai o ID do filme da URL
      let id

      if ('url' in videoId) {
        // Extrai o ID do objeto com a propriedade "url"
        id = videoId.url.split('/').pop()
      } else if ('movieId' in videoId) {
        // Extrai o ID do objeto com a propriedade "movieId"
        id = videoId.movieId.split('tt').pop()
      }
      console.log(videoId, id)
    },
    redirect(id) {
      store.commit('setSelectedMovieUrl', id)
      if (this.activeSlide === 0) {
        store.commit('setSelectedMovieUrl', 634649)
      } else if (this.activeSlide === 1) {
        store.commit('setSelectedMovieUrl', 502356)
      } else if (this.activeSlide === 2) {
        store.commit('setSelectedMovieUrl', 872585)
      }
      if (location.href === 'http://localhost:8080/pumpingPage') {
        if (this.activeSlide === 0) {
          store.commit('setSelectedMovieUrl', 'https://superflixapi.top/filme/tt6495056')
        } else if (this.activeSlide === 1) {
          store.commit('setSelectedMovieUrl', 502356)
        } else if (this.activeSlide === 2) {
          store.commit('setSelectedMovieUrl', 872585)
        }
      }
      // Navegue para a rota 'cineScreen'
      this.$router.push({
        name: 'cineScreen',
      })
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@600&family=Inter:wght@300;400&display=swap');

img.img-fluid {
  min-width: 600px;
}
.text-justify {
  font-size: 1.2rem;
  font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
  color: #fff;
  font-weight: 300;
  line-height: 1.5;
}
.title {
  margin-left: 2rem;
}
.title-container {
  position: absolute;
  width: 500px;
  display: flex;
  text-align: justify;
  top: 40%;
  left: 16rem;
  transform: translate(-50%, -50%);
  z-index: 10;
  flex-direction: column;
  align-items: flex-start;
}
.title-container-2 {
  position: absolute;
  width: 500px;
  display: flex;
  text-align: justify;
  top: 58%;
  left: 16rem;
  transform: translate(-50%, -50%);
  z-index: 10;
  flex-direction: column;
  align-items: flex-start;
}
.btn.container > * {
  margin-right: 5px; /* Ajuste este valor conforme necessário */
}
.button {
  z-index: 20; /* Ajuste este valor conforme necessário */
}
.carousel-container {
  background-position: 50%;
  background-size: cover;
  bottom: 0;
  filter: alpha(opacity=100);
  left: 0;
  opacity: 1;
  position: relative;
  right: 0;
  top: -5rem;
  transition: opacity 0.4s cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
  width: 100%;
}
.degrade {
  display: block;
  position: absolute;
  top: 75%;
  left: 0;
  width: 100%;
  height: 237px;
  background: rgb(136, 28, 28);
  background: linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, rgba(20, 20, 20, 1) 81%);
  z-index: 10;
  color: rgba(240, 248, 255, 0);
}
.degrade-top {
  display: block;
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 136px;
  background: rgb(20, 20, 20);
  background: linear-gradient(0deg, rgba(20, 20, 20, 0) 0%, rgba(20, 20, 20, 1) 99%);
  z-index: 10;
  color: rgba(240, 248, 255, 0);
}
.lateral-degrade {
  display: block;
  position: absolute;
  z-index: 1;
  margin-top: -62rem;
  left: 0;
  width: 622px;
  height: 995px;
  background: linear-gradient(77deg, rgba(0, 0, 0, 0.6), transparent 85%);
  color: rgba(240, 248, 255, 0);
}
.carousel-indicators {
  padding-left: 3%;
  margin-left: 10%;
  list-style: none;
}
.d-flex.justify-content-between.position-absolute.w-100 {
  margin-left: 3%; /* Adicione essa regra para alinhar os ícones corretamente */
}
.heart-svg-icon {
  left: -50px;
}
svg.bi.bi-info-circle.ml-auto {
  margin-left: auto; /* Substitua ml-auto por margin-left: auto para alinhar o ícone à direita */
}
@media (max-width: 600px) {
  .title-container {
    display: none;
  }
  .title-container-2 {
    display: none;
  }
  .lateral-degrade {
    display: none;
  }
  .degrade {
    display: none;
  }
  .VueCarousel.carousel {
    margin-block-end: -5px;
  }
  img.img-fluid.w-100.d-block {
    -o-object-position: left;
    object-position: left;
    width: 100%;
    margin: 40px -36px 18px;
    height: 311px;
    -o-object-fit: cover;
    object-fit: scale-down;
  }
  svg.bi.bi-heart {
    display: flex;
    left: 10px;
  }
  svg.bi.bi-info-circle {
    display: flex;
    left: 362px;
  }
  svg.bi.bi-info-circle.ml-auto {
    display: block;
    left: 328px;
  }
  svg.font-icon-search.svg-inline--fa.fa-magnifying-glass.fa-xl {
    margin-left: -39px;
  }
  svg.lupa.svg-inline--fa.fa-magnifying-glass.fa-xl {
    margin-left: 18px;
  }
  .d-flex.justify-content-between.position-absolute.w-100 {
    margin-top: -10%;
    margin-left: 3%;
  }
  li#carousel-fade___BV_indicator_1_ {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
  li#carousel-fade___BV_indicator_2_ {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
  li#carousel-fade___BV_indicator_3_ {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
}
</style>
