<template>
  <div id="app">
    <nav-bar v-if="isLogged" />
    <router-view />
  </div>
</template>
<script>
import AppLayout from './components/AppLayout.vue'

export default {
  name: 'App',
  data() {
    return {
      isLogged: false,
    }
  },
  components: {
    'nav-bar': AppLayout,
  },
  methods: {
    verify() {
      if (window.location.href.indexOf('loginPage') > -1) {
        this.isLogged = false
      } else {
        this.isLogged = true
      }
    },
  },
  mounted() {
    this.verify()
  },
}
</script>
