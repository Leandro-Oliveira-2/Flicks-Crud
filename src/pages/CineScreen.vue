<template>
  <div class="cine-screen">
    <iframe :src="url" width="100%" height="730px" frameborder="0" allowfullscreen></iframe>
    <ButtonComponent
      :body-text="'Voltar'"
      :buttonSize="150"
      :color="'white'"
      :icon="'arrow-left-long'"
      @click="redirect"
    />
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
  name: 'CineScreen',
  components: {
    ButtonComponent,
  },
  data() {
    return {
      url: 'https://embedder.net/e/634649',
    }
  },
  methods: {
    redirect() {
      this.$router.push({
        name: 'movieScreen',
        params: {
          movies: this.$route.params.movies,
          currentPage: this.$route.params.currentPage,
        },
      })
    },
  },
}
</script>

<style scoped>
.cine-screen {
  /* Adicione estilos conforme necessário */
  padding: 20px;
  /* Adicione mais estilos conforme necessário */
}
</style>
