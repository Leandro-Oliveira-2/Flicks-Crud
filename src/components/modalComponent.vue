<template>
  <div>
    <b-button v-b-hover-modal.hover="'modal-id'">Hover Me</b-button>

    <b-modal id="modal-id" title="Modal Title">
      <p>Modal Content</p>
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
    }
  },
}
</script>

<style>
/* Your component's styles go here */
</style>

<!-- <template>
  <div>
    <b-button @mouseover="showModal = true" @mouseout="showModal = false"
      >Launch demo modal</b-button
    >

    <b-modal v-model="showModal" id="modal-1" title="BootstrapVue">
      <p class="my-4" style="color: black">Hello from modal!</p>
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
}
</script>

<style>
/* Your component's styles go here */
</style>
 -->
