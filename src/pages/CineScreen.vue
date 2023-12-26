<template>
  <div class="cine-screen">
    <iframe :src="url" width="100%" height="730px" frameborder="0" allowfullscreen></iframe>
    <div class="return">
      <ButtonComponent
        :body-text="'Voltar'"
        :buttonSize="150"
        :color="'white'"
        :icon="'arrow-left-long'"
        @click="redirect"
      />
    </div>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue'
import store from '@/utils/store'

export default {
  name: 'CineScreen',
  components: {
    ButtonComponent,
  },
  methods: {
    redirect() {
      this.$router.push('/movies')
    },
    handleSlideClick(index) {
      const movieId = this.slides[index].movieId
      this.$emit('slide-clicked', movieId)
    },
  },
  computed: {
    url() {
      // Obtenha a URL do filme da store
      return `https://embedder.net/e/${store.state.selectedMovieUrl}`
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
.return {
  margin-top: -116px;
}
@media (max-width: 600px) {
  iframe {
    height: 750px;
  }
  .return[data-v-48ddf6e6] {
    margin-top: 20px;
  }
}
</style>
