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
    >
      <b-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :caption="title"
        :img-src="slide.imgSrc"
        :label-indicator="`Página ${index + 1}`"
      >
        <!--         <div class="title-fillme container">
          <b-img
            src="https://occ-0-354-3851.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQ6SZkab5muGE6Oip_LHaL5ISY9bm_7Ig5iIA41aNqKF0dVR_aBgqf8Wg7p0aO8GoOlXJI2uQLieRKafGvSyQDbMeQCx46cAchBDu7qKoVry.webp?r=c4e"
            fluid
            alt="Responsive image"
            class="image-demonSlayer"
          ></b-img>
          <div class="ptrack-content">
            Demônios massacraram sua família e amaldiçoaram sua irmã. Agora Tanjiro inicia sua
            jornada para encontrar a cura e se vingar.
          </div>
        </div> -->
      </b-carousel-slide>
    </b-carousel>
    <div class="degrade">teste</div>
    <div class="d-flex justify-content-between position-absolute w-100" style="z-index: 1">
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
  </div>
</template>

<script>
export default {
  name: 'carouselComponent',
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      title: '',
    }
  },
}
</script>
<style>
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
  top: 78%;
  left: 0;
  width: 100%;
  height: 237px;
  background: rgb(20, 20, 20);
  background: linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, rgba(20, 20, 20, 1) 81%);
  z-index: 10;
  color: rgba(240, 248, 255, 0);
}
.lateral-degrade {
  display: block;
  position: absolute;
  z-index: 1;
  top: 0%;
  left: 0;
  width: 50%;
  height: 950px;
  background: linear-gradient(77deg, rgba(0, 0, 0, 0.6), transparent 85%);
  color: rgba(240, 248, 255, 0);
}
.carousel-indicators {
  padding-left: 3%;
  margin-left: 10%;
  list-style: none;
}
svg.bi.bi-heart {
  display: none;
}
svg.bi.bi-info-circle.ml-auto {
  display: none;
}
@media (max-width: 600px) {
  .lateral-degrade {
    display: none;
  }
  .degrade {
    display: none;
  }
  .image-demonSlayer {
    margin-left: -50%; /* ajuste conforme necessário */
    margin-block-end: 5%; /* ajuste conforme necessário */
  }
  .VueCarousel.carousel {
    margin-block-end: -5px;
  }
  img.img-fluid.w-100.d-block {
    height: 350px;
    width: 100%;
    object-fit: cover;
  }
  svg.bi.bi-heart {
    display: block;
  }
  svg.bi.bi-info-circle {
    display: block;
  }
  svg.bi.bi-info-circle.ml-auto {
    display: block;
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
