<template>
  <div @mouseover="handleMouseOver" @mouseout="handleMouseOut">
    <b-button ref="modalTrigger">Launch demo modal</b-button>

    <b-modal
      v-model="showModal"
      id="modal-1"
      @mouseout="handleMouseOutModal"
      @mouseover="handleModalMouseOver"
    >
      <img src="../../public/Images/suits.png" alt="" />
      <b-button class="link-light" style="background-color: transparent !important; border: none">
        <font-awesome-icon class="icon-play" icon="circle-play" size="2xl" />
      </b-button>
      <b-button>
        <font-awesome-icon icon="heart" class="heart-icon" style="color: #141414" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-circle-fill"
          viewBox="0 0 16 16"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
      </b-button>
      <b-card-title class="card-title-movie"> titulo do filme</b-card-title>
      <b-card-text class="card-description-text"> Descrição do filme </b-card-text>
    </b-modal>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BButton, BModal } from 'bootstrap-vue'

export default {
  name: 'modalComponent',
  components: {
    BButton,
    BModal,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      showModal: false,
    }
  },
  methods: {
    handleMouseOver() {
      this.timer = setTimeout(() => {
        this.showModal = true
      }, 300)
    },
    handleMouseOut(event) {
      const buttonBounds = this.$refs.modalTrigger.$el.getBoundingClientRect()
      const mouseX = event.clientX
      const mouseY = event.clientY

      if (
        mouseX < buttonBounds.left ||
        mouseX > buttonBounds.right ||
        mouseY < buttonBounds.top ||
        mouseY > buttonBounds.bottom
      ) {
        clearTimeout(this.timer)
        this.showModal = false
      }
    },
    handleMouseOutModal(event) {
      const modalBounds = event.target.getBoundingClientRect()
      const mouseX = event.clientX
      const mouseY = event.clientY

      if (
        mouseX < modalBounds.left ||
        mouseX > modalBounds.right ||
        mouseY < modalBounds.top ||
        mouseY > modalBounds.bottom
      ) {
        this.showModal = false
      }
    },
    handleModalMouseOver() {
      clearTimeout(this.timer)
    },
    alterVariable() {
      setTimeout(() => {
        this.showModal = false
      }, 3000)
    },
  },
  mounted() {
    this.alterVariable()
  },
}
</script>

<style>
.modal-content {
  width: 337px;
  height: 388px;
  background-color: #202024;
  border-radius: 2%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
img {
  width: 335px;
  margin: 0px 0px 0px -15px;
  margin-top: -72px;
}
button.btn.link-light.btn-secondary {
  margin: 32px 0px 0px 0px;
}
i.fa-solid.fa-heart {
  margin: -98px -117px 0px 0px;
  z-index: 10;
  width: 83px !important;
  height: 0px;
}
h4.card-title.card-title-movie {
  margin-top: 22px;
}
svg.icon-play.svg-inline--fa.fa-circle-play.fa-2xl {
  top: 166px;
  left: 58px;
}
.bi.bi-circle-fill {
  top: 166px;
  left: 61px;
}
</style>
