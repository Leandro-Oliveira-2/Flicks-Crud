<!-- UserProfile.vue -->

<template>
  <div class="profile container">
    <div class="conteudo-container">
      <h2 class="title">Perfil do Usuário</h2>
      <div><strong>Nome:</strong> {{ user.nome }}</div>
      <div><strong>Email:</strong> {{ user.email }}</div>
      <div><strong>Data de Nascimento:</strong> {{ user.dataNascimento }}</div>
      <div><strong>CPF:</strong> {{ user.cpf }}</div>
      <div>
        <strong>Filmes Favoritos:</strong>
        <ul v-if="user.favoriteMovies.length">
          <li v-for="movie in user.favoriteMovies" :key="movie.id">
            {{ movie.name }}
          </li>
        </ul>
        <p v-else>Nenhum filme favorito adicionado.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
    }
  },
  methods: {
    async verifyFavoriteList() {
      console.log('oi')
      const user = JSON.parse(localStorage.getItem('user'))

      if (user && Array.isArray(user.favoriteMovies)) {
        let uniqueTitles = new Set()

        user.favoriteMovies.forEach((item) => {
          // Converta o ID para string antes de adicionar ao Set
          const idString = String(item.id)

          if (uniqueTitles.has(idString)) {
            console.log(`Duplicated Title: ${item.id}`)
            uniqueTitles.delete(idString)
          } else {
            uniqueTitles.add(idString)
          }
        })

        this.favoriteMovies = Array.from(uniqueTitles)
      } else {
        console.log('User or favoriteMovies is not defined or not an array.')
      }
    },
  },
  mounted() {
    console.log('User data from localStorage:', localStorage.getItem('user'))
    this.verifyFavoriteList()
  },
}
</script>

<style scoped>
.title {
  padding-left: 2rem !important;
}
.profile.container {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.conteudo-container {
  width: 400px;
  height: 500px;
  background-color: #fefefe;
  color: black;
  border-radius: 5%;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
}
</style>
